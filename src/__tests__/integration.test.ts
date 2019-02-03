import { mount } from "enzyme";
import moxios from "moxios";
import React from "react";
import App from "../components/App";
import Root from "../components/Root";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    status: 200,
    // tslint:disable-next-line:object-literal-sort-keys
    response: [{ name: "Fetched #1" }, { name: "Fetched #2" }]
  });
});

afterEach(() => {
  moxios.uninstall();
});
it("should fetch a list of comments and display them", done => {
  // FIXME: const wrapper = mount(<Root><App/></Root>)
  const wrapper = mount(
    /> as App as Root
    </Root>
  );

  wrapper.find(".fetch-comments").simulate("click");
  moxios.wait(() => {
    wrapper.update();
    expect(wrapper.find("li").length).toEqual(2);
    done();
    wrapper.unmount();
  });
});
