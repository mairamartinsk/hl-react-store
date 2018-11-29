import React from "react";
import { shallow } from "enzyme";
import Product from "./Product";

describe("Product Component", () => {
  it("renders an image", () => {
    const wrapper = shallow(<Product />);
    const image = wrapper.find(".product-image");
    expect(image.length).not.toEqual(0);
  });
});
