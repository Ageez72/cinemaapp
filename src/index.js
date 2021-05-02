import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reducer from "./reducer/reducer";
import {createStore} from "redux";
import {Provider} from "react-redux";
import "./index.css";
const store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
    <React.Fragment>
      <App />
    </React.Fragment>
  </Provider>,
  document.getElementById("root")
);
//StrictMode
