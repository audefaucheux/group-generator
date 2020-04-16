import React from "react";
import { render, fireEvent, cleanup, waitFor } from "@testing-library/react";
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

  // test("handle input change", () => {
  //   const event = { target: { value: "3" } };
  //   const mockOnChange = jest.fn();
  //   const { getByText, getByTestId } = render(<GroupList users={usersStub} />);

  //   fireEvent.change(getByTestId("group-size-input"), event);

  //   expect(mockOnChange).toHaveBeenCalledTimes(1);
  //   expect(getByText(event.target.value)).toBeTruthy();
  // });
});
