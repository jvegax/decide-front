import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./i18n";
import DecideProvider from "./context/DecideProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DecideProvider>
      <App />
    </DecideProvider>
  </React.StrictMode>
);
