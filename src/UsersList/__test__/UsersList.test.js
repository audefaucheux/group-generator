import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import UsersList from "../UsersList";

const UsersStub = ["Sam", "Raph", "Jamie"];

afterEach(cleanup);

test("renders list of users", () => {
  const mockSetUsers = jest.fn();
  const { getByText } = render(
    <UsersList
      id={0}
      users={UsersStub}
      setUsers={mockSetUsers}
    />
  );
  expect(getByText(UsersStub[0])).toBeTruthy();
  expect(getByText(UsersStub[1])).toBeTruthy();
  expect(getByText(UsersStub[2])).toBeTruthy();
});

// test("deletes user on click", () => {
//   const mockSetUsers = jest.fn();
//   const { getByText, queryByTestId } = render(
//     <UsersList
//       id={0}
//       users={UsersStub}
//       setUsers={mockSetUsers}
//     />
//   );

//   fireEvent.click(queryByTestId("delete-button-0"));
//   expect(getByText(UsersStub[0])).not.toBeTruthy();
// });
