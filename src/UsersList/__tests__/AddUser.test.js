import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AddUser from "../AddUser";
import { userStub } from "../../mocks/UsersStub";

describe("<AddUser />", () => {
  const mockSetGroups = jest.fn();
  // const mockOnSubmit = jest.fn();

  const { getByPlaceholderText } = render(
    <AddUser users={userStub} setUsers={mockSetGroups} />
  );
  const addUserInput = getByPlaceholderText("Add User");
  // const addUserButton = getByTestId("add-user-button");
  const event = { target: { value: "Sam" } };

  test("renders add user input", () => {
    expect(addUserInput).toBeTruthy();
  });

  test("handles input change", () => {
    fireEvent.change(addUserInput, event);
    expect(addUserInput.value).toBe("Sam");
  });

  // test("handles new user submission", () => {
  //   fireEvent.click(addUserButton);
  //   expect(mockOnSubmit).toHaveBeenCalled();
  // });
});