import React from "react";
import { render } from "@testing-library/react";

import Group from "../Group";
import { groupStub } from "../../mocks/GroupStub";

describe("<Group />", () => {
  const { getByText } = render(<Group id="0" group={groupStub} />);

  it("renders users from the group", () => {
    expect(getByText(groupStub[0])).toBeTruthy();
    expect(getByText(groupStub[1])).toBeTruthy();
  });
});
