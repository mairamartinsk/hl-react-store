import React from "react";
import { shallow } from "enzyme";
import Gallery from "./Gallery";

describe("Gallery Component", () => {
  it("should render 3 mock products", () => {
    const wrapper = shallow(<Gallery />);
    const product = wrapper.find('Product');
    expect(product.length).toEqual(3);
  });
});
