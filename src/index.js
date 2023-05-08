import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserAuthContextProvider } from "./routes/login/UserAuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserAuthContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserAuthContextProvider>
  </React.StrictMode>
);
