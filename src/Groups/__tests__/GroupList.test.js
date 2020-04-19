import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import GroupList from "../GroupList";
import { usersStub } from "../../mocks/UsersStub";

afterEach(() => {
  cleanup();
});

describe("<GroupList />", () => {
  test("renders a group size input field defaulted to 1", () => {
    const { getByLabelText } = render(<GroupList users={usersStub} />);
    expect(getByLabelText("Group Size:").value).toBe("1");
  });

  test("doesn't render a list of users groups", () => {
    const { queryByText } = render(<GroupList users={usersStub} />);
    expect(queryByText(usersStub[0])).toBeNull();
  });

  test("handle input change", () => {
    const event = { target: { value: "3" } };
    const { getByDisplayValue, getByTestId } = render(
      <GroupList users={usersStub} />
    );

    fireEvent.change(getByTestId("group-size-input"), event);
    expect(getByDisplayValue(event.target.value)).toBeTruthy();
  });

  test("handle submit and create groups of users if the required group size is smaller than the total users", () => {
    const event = { target: { value: "3" } };
    const { getByText, queryByText, getByTestId } = render(
      <GroupList users={usersStub} />
    );

    fireEvent.change(getByTestId("group-size-input"), event);
    fireEvent.submit(getByText("Submit"));
    expect(getByText("Group 1:")).toBeTruthy();
    expect(getByText("Group 2:")).toBeTruthy();
    expect(queryByText("Group 3:")).toBeNull();

    usersStub.map((user) => expect(getByText(user)).toBeTruthy());
  });

  test("handle submit and throw an alert if the required group size is smaller or equal the total users", () => {
    const event = { target: { value: "10" } };
    const { getByText, queryByText, getByTestId } = render(
      <GroupList users={usersStub} />
    );

    fireEvent.change(getByTestId("group-size-input"), event);
    fireEvent.submit(getByText("Submit"));

    expect(
      queryByText("Group Size must be smaller than the total users")
    ).toBeTruthy();
    expect(queryByText("Group 1:")).toBeNull();
    expect(queryByText(usersStub[0])).toBeNull();
  });
});
