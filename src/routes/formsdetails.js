import React from "react";

const Forms = () => {
  return (
    <div className="mt-[3.6rem]">
      <div className="min-h-screen bg-gray-100 flex items-center justify-center ">
        <div className="w-[92rem]">
          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="flex gap-10">
              <div className="text-white  w-[25rem] h-[33rem] bg-cover bg-hero-image2 flex flex-col justify-center items-center">
                <p className="font-medium text-lg ">Personal Details</p>
                <p>Please fill out all the fields.</p>
              </div>

              <div className="lg:col-span-2 w-full">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label for="full_name">Full Name</label>
                    <input
                      type="text"
                      name="full_name"
                      id="full_name"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value=""
                      required
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label for="email">Email Address</label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value=""
                      placeholder="email@.com"
                    />
                  </div>

                  <div className="md:col-span-3">
                    <label for="address">Address / Street</label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value=""
                      placeholder=""
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label for="city">City</label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value=""
                      placeholder=""
                    />
                  </div>
                  <div className="md:col-span-5  pb-10">
                    <label for="city">About</label>
                    <textarea
                      type="text"
                      name="city"
                      id="city"
                      className="h-[11rem] border mt-1 rounded px-4 w-full bg-gray-50"
                      value=""
                      placeholder=""
                    />
                  </div>

                  <div className="md:col-span-5">
                    <div className="text-center">
                      <input
                        type="Submit"
                        value="Submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;