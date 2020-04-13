import React from "react";
import { render, cleanup } from "@testing-library/react";
import UsersList from "../UsersList";
import { usersStub } from "../../mocks/usersStub";

afterEach(cleanup);

describe("<UsersList />", () => {
  const mockSetUsers = jest.fn();
  const { getByText } = render(
    <UsersList id={0} users={usersStub} setUsers={mockSetUsers} />
  );

  it("renders list of users", () => {
    expect(getByText(usersStub[0])).toBeTruthy();
    expect(getByText(usersStub[1])).toBeTruthy();
    expect(getByText(usersStub[2])).toBeTruthy();
  });
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
