import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "@/App";
import GlobalStyle from "@Util/reset";

const rootNode = document.querySelector("#root");

ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <App />
    </Router>
  </React.StrictMode>
);
