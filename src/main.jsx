import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Contact from "./pages/Contact";
import "./index.css"; // Keep global styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
