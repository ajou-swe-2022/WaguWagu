import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "react-router-dom";
import { RecoilRoot } from "recoil";
import App from "@/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <Router>
        <App />
      </Router>
    </RecoilRoot>
  </React.StrictMode>
);
