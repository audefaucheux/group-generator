import React from "react";
import { render } from "@testing-library/react";
import User from "../User";

const UserStub = "Sam";

describe("<User />", () => {
  test("render users", () => {
    const mockHandleClickDelete = jest.fn();
    const { getByText } = render(
      <User id="0" user={UserStub} handleClickDelete={mockHandleClickDelete} />
    );
    expect(getByText(UserStub)).toBeTruthy();
  });
});
