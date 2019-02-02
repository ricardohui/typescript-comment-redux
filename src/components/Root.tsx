import * as React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";

interface IProps {
  children: React.ReactNode;
  initialState: { comments: string[] } | {};
}
export default (props: IProps) => {
  const { children, initialState } = props;
  const middleware = [thunk];
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(...middleware)
  );
  return <Provider store={store}>{children}</Provider>;
};
