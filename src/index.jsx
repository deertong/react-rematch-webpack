import React from "react";
import { createRoot } from "react-dom/client";
import Main from "./router/mian.jsx";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { BrowserRouter } from "react-router-dom";
import store, { history } from "./store/createStore";
import "./style.less";

const App = () => (
  <BrowserRouter>
    <Main />
  </BrowserRouter>
);
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
