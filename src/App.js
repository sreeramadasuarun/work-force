import React from "react";
import { Routes, Route } from "react-router-dom";
import NavLink from "./navbar/Navlinks";
import Login from "./routes/login/Login";
import Logout from "./routes/login/Logout";
import Home from "./routes/home";
import Profile from "./routes/profile";
import Signup from "./routes/signup";
import Forms from "./routes/formsdetails";

function App() {
  return (
    <>
      <NavLink />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/formsdetails" element={<Forms />} />
      </Routes>
    </>
  );
}

export default App;
