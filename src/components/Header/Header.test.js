import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe("Header Component", () => {
  it("contains a title", () => {
    const wrapper = shallow(<Header />);
    const title = (
      <h1 className="site-title">
        Black<span>Wood</span>Shop
      </h1>
    );
    expect(wrapper.contains(title)).toBe(true);
  });
});
