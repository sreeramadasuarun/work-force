import React from "react";
import { NavLink } from "react-router-dom";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useUserAuth } from "../login/UserAuthContext";
// import "../login/login.style.css";

const Login = () => {
  // const [signIn, toggle] = useState(true);

  // //.........................................sign login
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  // const { logIn, googleSignIn, signUp } = useUserAuth();
  // const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError("");
  //   try {
  //     await logIn(email, password);
  //     navigate("/");
  //   } catch (err) {
  //     setError(err.message);
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
  // //signup

  // const handleSignupSubmit = async (e) => {
  //   e.preventDefault();
  //   setError("");
  //   try {
  //     await signUp(email, password);
  //     navigate("/");
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };

  return (
    <div class="h-screen md:flex">
      <div class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-r from-rose-400 to-red-500 i justify-around items-center hidden">
        <div className="text-left">
          <h1 class="text-white font-bold text-[1rem] font-sans">
            WHY CHOOSE US
          </h1>
          <p class="text-zinc-200 text-[2.7rem] 	 font-thin	 mt-3 w-[30rem]">
            We provide truly prominent solutions for your success
          </p>
        </div>
        <div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <div class="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 shadow-2xl px-7 rounded-none">
          <h3 class="mb-6 text-2xl font-medium text-center">
            Sign in to your Account
          </h3>
          <input
            type="text"
            name="email"
            class="block w-full px-4 py-3 mb-4  border-2 border-transparent border-gray-200 focus:ring focus:ring-blue-500 focus:outline-none rounded-none"
            placeholder="Email address"
          />
          <input
            type="password"
            name="password"
            class="block w-full px-4 py-3 mb-4  border-2 border-transparent border-gray-200 focus:ring focus:ring-blue-500 focus:outline-none rounded-none"
            placeholder="Password"
          />
          <div class="block">
            <button class="w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-none">
              LogIn
            </button>
          </div>
          <p class="w-full mt-4 text-sm text-center text-gray-500">
            Don't have an account?{" "}
            <NavLink to="/signup" class="text-blue-500 underline">
              Sign up here
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
