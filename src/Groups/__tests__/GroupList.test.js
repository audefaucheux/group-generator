import React from "react";
import { render } from "@testing-library/react";
import GroupList from "../GroupList";
import { UsersStub } from "../../mocks/UsersStub";

describe("<GroupList />", () => {
  const { getByText } = render(<GroupList users={UsersStub} />);

  it("renders list of groups", () => {
    expect(getByText("Group Size:")).toBeTruthy();
  });
});