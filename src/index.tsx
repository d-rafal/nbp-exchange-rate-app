import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";

import App from "./App";
import { CssBaseline } from "@mui/material";

import { BrowserRouter } from "react-router-dom";
import WelcomeDialog from "./components/welcome-dialog";

// import roboto fonts required by mui
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CssBaseline />
    <BrowserRouter>
      <App />
      <WelcomeDialog />
    </BrowserRouter>
  </React.StrictMode>
);
