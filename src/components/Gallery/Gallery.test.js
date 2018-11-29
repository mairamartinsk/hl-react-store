import React from "react";
import { shallow } from "enzyme";
import Gallery from "./Gallery";

describe("Gallery Component", () => {
  it("should render Products", () => {
    const wrapper = shallow(<Gallery />);
    expect(wrapper.prop("children").length).not.toEqual(0);
  });
});
