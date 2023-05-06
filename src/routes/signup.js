import React from "react";
import { NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <div class="h-screen md:flex">
      <div class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-r from-purple-500 to-purple-900 i justify-around items-center hidden">
        <div className="text-left">
          <h1 class="text-white font-bold text-[1rem] font-sans uppercase">
            Why Streams?
          </h1>
          <p class="text-zinc-200  text-[2.7rem] font-thin mt-3 w-[30rem]">
            Streams always equips talents with excellent knowledge.{" "}
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
            create a account
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
              Register
            </button>
          </div>
          <p class="w-full mt-4 text-sm text-center text-gray-500">
            Already have an account?{" "}
            <NavLink to="/Login" class="text-blue-500 underline">
              Sign In here
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
