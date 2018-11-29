import React from "react";
import { shallow } from "enzyme";
import Product from "./Product";

describe("Product Component", () => {
  it("should render an LI tag", () => {
    const wrapper = shallow(<Product />);
    const LI = <li className="product">Product</li>;
    expect(wrapper.contains(LI)).toBe(true);
  });
});
