import React from "react";
import { Routes, Route } from "react-router-dom";
import NavLink from "./navbar/Navlinks";
import Login from "./routes/login/Login";
import Logout from "./routes/login/Logout";
import Home from "./routes/home";
import { UserAuthContextProvider } from "./routes/login/UserAuthContext";
import Profile from "./routes/profile";
import Signup from "./routes/signup";

function App() {
  return (
    <UserAuthContextProvider>
      <NavLink />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </UserAuthContextProvider>
  );
}

export default App;
