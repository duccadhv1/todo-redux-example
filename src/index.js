import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
const store = createStore(rootReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
