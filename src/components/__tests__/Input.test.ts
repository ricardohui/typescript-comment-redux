import { mount, ReactWrapper } from "enzyme";
import * as React from "react";
import Input from "../Input";

let wrapper: ReactWrapper;

beforeEach(() => {
  // FIXME:  warpper = mount(<Input/>)
  wrapper = mount(<Input />);
});

afterEach(() => {
  wrapper.unmount();
});

it("has an input element", () => {
  expect(wrapper.find("input").length).toEqual(1);
});

it("has a value of 'text' when onChange", () => {
  wrapper.find("input").simulate("change", { taget: { value: "text" } });
  wrapper.update();
  expect(wrapper.find("input").prop("value")).toEqual("text");
});
