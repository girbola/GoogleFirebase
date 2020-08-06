import React from "react";
import { configure, shallow, assert } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Reporter from "./Reporter";

configure({ adapter: new Adapter() });
describe("Should print text", () => {
  it("Return reporter and what he said", () => {
    const wrapper = shallow(
      <Reporter name="Antero Mertaranta">Löikö mörkö sisään</Reporter>
    );
    expect(wrapper.find("div").text()).toEqual(
      "Antero Mertaranta: Löikö mörkö sisään"
    );
  });
  it("Return reporter and what he said", () => {
    const wrapper = shallow(
      <Reporter name="Abraham Lincoln">Whatever you are be a good one</Reporter>
    );
    expect(wrapper.find("div").text()).toEqual(
      "Abraham Lincoln: Whatever you are be a good one"
    );
  });
});
