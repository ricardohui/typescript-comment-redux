import * as React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";

interface IParam {
  children: React.ReactNode;
  initialState?: {};
}
export default ({ children, initialState = {} }: IParam) => {
  const middleware = [thunk];
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(...middleware)
  );
  return <Provider store={store}>{children}</Provider>;
};
