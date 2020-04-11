import React from "react";
import { render } from "@testing-library/react";
import User from "../User";

const UserStub = "Sam";

test("renders user", () => {
  const mockHandleClickDelete = jest.fn();
  const { getByText } = render(
    <User id="0" user={UserStub} handleClickDelete={mockHandleClickDelete} />
  );
  expect(getByText(UserStub)).toBeTruthy();
});
