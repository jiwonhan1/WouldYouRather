import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import middleware from "./middleware";
import reducer from "./reducers";

const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
