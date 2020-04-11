import React from "react";
import { render } from "@testing-library/react";
import UsersList from "../UsersList";

const UsersStub = ["Sam", "Raph", "Jamie"];

test("renders list of users", () => {
  const { getByText } = render(<UsersList users={UsersStub} />);
  expect(getByText(UsersStub[0])).toBeTruthy();
  expect(getByText(UsersStub[1])).toBeTruthy();
  expect(getByText(UsersStub[2])).toBeTruthy();
});
