import React from "react";
import { render } from "@testing-library/react";
import User from "../User";

const UserStub = "Sam";

test("renders user", () => {
  const { getByText } = render(<User user={UserStub} />);
  expect(getByText(UserStub)).toBeTruthy();
});
