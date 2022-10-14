import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Dashboard/Header";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);