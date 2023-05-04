import React from "react";
import { NavLink } from "react-router-dom";
// import { useUserAuth } from "../routes/login/UserAuthContext";
// import { useNavigate } from "react-router-dom";

const Navlinks = () => {
  <nav className="bg-gray-100 shadow-md">
    <div className="w-full mx-auto px-16">
      <div className="flex justify-between">
        <div className="flex space-x-4">
          <div>
            <NavLink
              to="./"
              className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
            >
              <span className="font-bold">streamsss</span>
            </NavLink>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-1">
          <NavLink to="./" className="py-5 px-3">
            Profile
          </NavLink>
          <NavLink to="./" className="py-5 px-3">
            Login
          </NavLink>
          <NavLink
            to="./"
            className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
          >
            Signup
          </NavLink>
        </div>
      </div>
    </div>

    <div className="mobile-menu hidden md:hidden">
      <NavLink to="./" className="block py-2 px-4 text-sm hover:bg-gray-200">
        Features
      </NavLink>
      <NavLink to="./" className="block py-2 px-4 text-sm hover:bg-gray-200">
        Pricing
      </NavLink>
    </div>
  </nav>;
  return;
};
export default Navlinks;
