import React from "react";

const Home = () => {
  return (
    <>
      <section class="h-screen w-screen bg-gray-100 flex justify-center	items-center	">
        <div>
          <div class="flex flex-col items-center w-[72rem] md:flex-row">
            <div class="w-full text-left space-y-5 m-11 md:w-3/5 md:pr-16 leading-[1rem]	">
              <p class="font-medium text-blue-500 uppercase">
                STREAMS SOFTWARE SOLUTIONS
              </p>
              <h2 class="text-[4rem] text-2xl font-extrabold leading-[5rem] text-black ">
                We bring great ideas to{" "}
                <span className="text-orange-500">life!</span>
              </h2>
              <p class="text-xl text-gray-600 md:pr-16 text-[1rem] ">
                Redefining recruitment experience! Sharpening the skills of
                every professional with inspiring training programs!.
              </p>
            </div>

            <div class="w-full mt-16 md:mt-0 md:w-2/5">
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
                    Log Me In
                  </button>
                </div>
                <p class="w-full mt-4 text-sm text-center text-gray-500">
                  Don't have an account?{" "}
                  <a href="#_" class="text-blue-500 underline">
                    Sign up here
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
