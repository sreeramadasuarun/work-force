import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useUserAuth } from "../routes/login/UserAuthContext";

const Home = () => {
  // //.........................................sign login
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const { logIn } = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await logIn(email, password);

    setPassword(" ");
    setEmail(" ");
  };

  return (
    <div className=" ">
      <section className="h-screen w-screen bg-gray-100 flex justify-center	items-center	">
        <div>
          <div className="flex flex-col items-center w-[82rem] md:flex-row">
            <div className="w-full text-left space-y-5  md:w-3/5 md:pr-[5rem] leading-[1rem]	">
              <p className="font-medium text-blue-500 uppercase">
                STREAMS SOFTWARE SOLUTIONS
              </p>
              <h2 className="text-[4rem] text-2xl font-extrabold leading-[5rem] text-black ">
                We bring great ideas to{" "}
                <span className="text-orange-500">life!</span>
              </h2>
              <p className="text-xl text-gray-600 md:pr-16 text-[1rem] ">
                Redefining recruitment experience! Sharpening the skills of
                every professional with inspiring training programs!.
              </p>
            </div>

            <div className="w-full mt-16 md:mt-0 md:w-2/5">
              <div className="flex flex-col gap-4 z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 shadow-2xl px-7 rounded-none">
                <h3 className="mb-6 text-2xl font-medium text-center">
                  Sign in to your Account
                </h3>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full px-4 py-3 mb-4  border-2 border-transparent border-gray-200 focus:ring focus:ring-blue-500 focus:outline-none rounded-none"
                    placeholder="Email address"
                  />
                  <input
                    type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full px-4 py-3 mb-4  border-2 border-transparent border-gray-200 focus:ring focus:ring-blue-500 focus:outline-none rounded-none"
                    placeholder="Password"
                  />
                  <input
                    type="submit"
                    value="LogIn"
                    className="cursor-pointer	 block w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-none"
                  />
                </form>
                <p className="w-full mt-4 text-sm text-center text-gray-500">
                  Don't have an account?{" "}
                  <NavLink to="/signup" className="text-blue-500 underline">
                    Sign up here
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-screen w-screen bg-gray-100 flex justify-center	items-center	">
        <div>
          <div className="items-center lg:grid lg:grid-cols-2 w-[82rem] ">
            <div className="text-gray-500 sm:text-lg ">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">
                Work with tools you already use
              </h2>
              <p className="mb-8 font-light ">
                Deliver great service experiences fast - without the complexity
                of traditional ITSM solutions. Accelerate critical development
                work, eliminate toil, and deploy changes with ease.
              </p>

              <ul className="pt-8 space-y-5 border-t border-gray-200  ">
                <li className="flex space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-purple-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 ">
                    Continuous integration and deployment
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-purple-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 ">
                    Development workflow
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-purple-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 ">
                    Knowledge management
                  </span>
                </li>
              </ul>
            </div>
            <img
              className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
              src="https://www.pngall.com/wp-content/uploads/12/Illustration-PNG-Free-Image.png"
              alt="dashboard feature image"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
