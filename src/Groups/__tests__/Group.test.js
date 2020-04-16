import React from "react";
import { render } from "@testing-library/react";

import Group from "../Group";
import { groupStub } from "../../mocks/GroupStub";

describe("<Group />", () => {
  const { getByText } = render(<Group id="0" group={groupStub} />);

  test("renders users from the group", () => {
    expect(getByText(groupStub[0])).toBeTruthy();
    console.log(getByText(groupStub[0]).getAttribute("key")); //.toHaveAttribute("key", 0);
    // expect(getByText(groupStub[0])).toHaveAttribute("key", '0');

    expect(getByText(groupStub[1])).toBeTruthy();
  });
});
