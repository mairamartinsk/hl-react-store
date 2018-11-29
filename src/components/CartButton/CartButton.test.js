import React from "react";
import { shallow } from "enzyme";
import CartButton from "./CartButton";

describe("CartButton Component", () => {
  it("contains a title", () => {
    const wrapper = shallow(<CartButton />);
    const button = <button>Cart Button</button>;
    expect(wrapper.contains(button)).toBe(true);
  });
});
