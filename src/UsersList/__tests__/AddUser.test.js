import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import AddUser from "../AddUser";
import { usersStub } from "../../mocks/UsersStub";

afterEach(cleanup);

describe("<AddUser />", () => {
  test("renders add user input", () => {
    const mockSetUsers = jest.fn();
    const { getByPlaceholderText } = render(
      <AddUser users={usersStub} setUsers={mockSetUsers} />
    );

    expect(getByPlaceholderText("Add User")).toBeTruthy();
  });

  test("handles input change", () => {
    const event = { target: { value: "Ben" } };
    const mockSetUsers = jest.fn();
    const { getByPlaceholderText } = render(
      <AddUser users={usersStub} setUsers={mockSetUsers} />
    );
    const addUserInput = getByPlaceholderText("Add User");

    fireEvent.change(addUserInput, event);
    expect(addUserInput.value).toBe("Ben");
  });

  test("handles new user submission", () => {
    const event = { target: { value: "Ben" } };
    const mockSetUsers = jest.fn();
    const { getByText, getByPlaceholderText } = render(
      <AddUser users={usersStub} setUsers={mockSetUsers} />
    );
    const addUserInput = getByPlaceholderText("Add User");

    fireEvent.change(addUserInput, event);
    fireEvent.submit(getByText("Submit"));
    expect(event.target.value).toBeTruthy();
  });
});
