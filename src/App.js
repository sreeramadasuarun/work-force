import React from "react";
import { Routes, Route } from "react-router-dom";
import NavLink from "./navbar/Navlinks";
import Login from "./routes/login/Login";
import Logout from "./routes/login/Logout";
import Home from "./home";
import { UserAuthContextProvider } from "./routes/login/UserAuthContext";

function App() {
  return (
    <UserAuthContextProvider>
      <NavLink />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Logout" element={<Logout />} />
      </Routes>
    </UserAuthContextProvider>
  );
}

export default App;
