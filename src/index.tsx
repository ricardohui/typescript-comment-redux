import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
// import * as reduxPromise from "redux-promise";
import thunk from "redux-thunk";
import App from "./App";
import reducers from "./reducers";
import registerServiceWorker from "./registerServiceWorker";

const middleware = [thunk];
const store = createStore(reducers, applyMiddleware(...middleware));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
