import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App";
import Root from "./components/Root";

ReactDOM.render(
  <Root initialState={{}}>
    <App />
  </Root>,
  document.getElementById("root") as HTMLElement
);
