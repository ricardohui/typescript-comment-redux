import { shallow } from "enzyme";
import * as React from "react";
import App from "../App";

it("can renders without crashing using enzyme", () => {
  const wrapper = shallow(<App />);

  expect(wrapper).toBeDefined();
});
