import React from "react";
import { shallow } from "enzyme";
import Modal from "./Modal";

describe("Modal Component", () => {
  it("contains a title", () => {
    const wrapper = shallow(<Modal />);
    const text = <p>Modal!!!</p>;
    expect(wrapper.contains(text)).toBe(true);
  });
});
