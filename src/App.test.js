import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import App from "./App";

describe("App Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("loads the Gallery component", () => {
    const wrapper = shallow(<App />);
    const gallery = wrapper.find("Gallery");
    expect(gallery.length).toEqual(1);
  });
});
