import React from "react";
import { NavLink } from "react-router-dom";
// import { useUserAuth } from "../routes/login/UserAuthContext";
// import { useNavigate } from "react-router-dom";

const Navlinks = () => {
  // const navigate = useNavigate();
  // const { googleSignIn } = useUserAuth();

  // const { user, logOut } = useUserAuth();

  // const data = useUserAuth();

  // console.log(data);
  // //logout
  // const handleSignOut = async () => {
  //   try {
  //     await logOut();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // //signin
  // const handleGoogleSignIn = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await googleSignIn();
  //     navigate("/Shopee");
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  return (
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
            <NavLink to="/" className="py-5 px-3">
              Home
            </NavLink>
            <NavLink to="/profile" className="py-5 px-3">
              Profile
            </NavLink>
            <NavLink to="/Login" className="py-5 px-3">
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
            >
              Signup
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navlinks;
