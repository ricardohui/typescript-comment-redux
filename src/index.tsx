import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import Root from "./Root";

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.getElementById("root") as HTMLElement
);
