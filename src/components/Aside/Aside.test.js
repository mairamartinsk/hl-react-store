import React from "react";
import { shallow } from "enzyme";
import Aside from "./Aside";
import CartButton from "../CartButton/CartButton";

describe("Aside Component", () => {
  it("contains a p tag", () => {
    const wrapper = shallow(<Aside />);
    const cartButton = <CartButton />;
    expect(wrapper.contains(cartButton)).toBe(true);
  });
});
