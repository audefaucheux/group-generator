import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import UsersList from "../UsersList";
import { usersStub } from "../../mocks/usersStub";

afterEach(cleanup);

describe("<UsersList />", () => {
  const mockSetUsers = jest.fn();
  const { getByText } = render(
    <UsersList id={0} users={usersStub} setUsers={mockSetUsers} />
  );

  test("renders list of users", () => {
    expect(getByText(usersStub[0])).toBeTruthy();
    expect(getByText(usersStub[1])).toBeTruthy();
    expect(getByText(usersStub[2])).toBeTruthy();
  });

  test("deletes user on click", () => {
    const mockSetUsers = jest.fn();
    const { queryByTestId } = render(
      <UsersList id={0} users={usersStub} setUsers={mockSetUsers} />
    );

    fireEvent.click(queryByTestId("delete-button-0"));
    expect(mockSetUsers).toHaveBeenCalledTimes(1);
  });
});
