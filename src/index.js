import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducer from "./redux/reducer";
import "bootstrap/dist/css/bootstrap.min.css";
import { createLogger } from "redux-logger";

const logger = createLogger({
  collapsed: true,
  diff: true,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
