import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import UserList from "../UserList";
import { usersStub } from "../../mocks/usersStub";

afterEach(cleanup);

describe("<UserList />", () => {
  test("renders list of users", () => {
    const mockSetUsers = jest.fn();
    const { getByText } = render(
      <UserList users={usersStub} setUsers={mockSetUsers} />
    );

    usersStub.map((user) => expect(getByText(user)).toBeTruthy());
  });

  // TO DO - add test to check if element was removed from the DOM
  test("deletes user on click", () => {
    const mockSetUsers = jest.fn();
    const { queryByTestId } = render(
      <UserList users={usersStub} setUsers={mockSetUsers} />
    );

    fireEvent.click(queryByTestId("delete-button-0"));
    expect(mockSetUsers).toHaveBeenCalledTimes(1);
  });

  // test.only("handles new user submission if it's not an empty string", () => {
  //   const event = { target: { value: "Ben" } };
  //   const mockSetUsers = jest.fn();
  //   const { getByText, getByPlaceholderText } = render(
  //     <UserList users={usersStub} setUsers={mockSetUsers} />
  //   );

  //   fireEvent.change(getByPlaceholderText("Add User"), event);
  //   fireEvent.submit(getByText("Submit"));
  //   expect(getByText(event.target.value)).toBeTruthy();
  // });

  // test("doesn't handle new user submission if it's an empty string", () => {
  //   const event = { target: { value: "" } };
  //   const mockSetUsers = jest.fn();
  //   const { getByText, getByPlaceholderText } = render(
  //     <AddUser users={usersStub} setUsers={mockSetUsers} />
  //   );
  //   const addUserInput = getByPlaceholderText("Add User");

  //   fireEvent.change(addUserInput, event);
  //   fireEvent.submit(getByText("Submit"));
  //   expect(getByText(event.target.value)).toBeNull();
  // });
});
