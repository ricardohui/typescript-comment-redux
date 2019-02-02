import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import CommentList from "../CommentList";
import Root from "../Root";

let wrapper: ReactWrapper;
beforeEach(() => {
  const initialStore = {
    comments: ["Comment 1", "Comment 2"]
  };
  wrapper = mount(
    <Root initialState={initialStore}>
      <CommentList />
    </Root>
  );
});

it("should create one Li per comment", () => {
  expect(wrapper.find("li").length).toEqual(2);
});
it("should show the text for each comment", () => {
  expect(wrapper.render().text()).toContain("Comment 1");
  expect(wrapper.render().text()).toContain("Comment 2");
});
