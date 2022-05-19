import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import App from "@/App";
import GlobalStyle from "@Util/reset";

const rootNode = document.querySelector("#root");

ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <CookiesProvider>
      <Router>
        <GlobalStyle />
        <App />
      </Router>
    </CookiesProvider>
  </React.StrictMode>
);
