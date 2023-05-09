import React, { useEffect } from "react";
import { useUserAuth } from "../routes/login/UserAuthContext";
import userpic from "../assets/images/userpic.avif";

const Profile = () => {
  const { user, show } = useUserAuth();

  // console.log(show);
  console.log(show.fullname);

  return (
    <main className=" mt-[3.5rem]  w-screen">
      <div className="  top-0 w-screen h-[21rem] bg-center bg-hero-image"></div>

      <section className=" bg-blueGray-200">
        <div className="flex flex-col justify-center items-center">
          <div className=" flex flex-col min-w-0 break-words bg-white mb-6 shadow-xl rounded-lg -mt-64">
            <div className="flex justify-center items-center gap-[5rem] mt-10">
              <img
                className="w-[12rem] rounded-2xl	 "
                src={userpic}
                alt="noimagefound"
              />
              <div className="text-left ">
                <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 ">
                  {user ? show.fullname : "login for details"}
                </h3>
                <div className="text-sm leading-normal text-blueGray-400 font-bold uppercase">
                  {user ? user.email : "login for details"}
                </div>
                <div className="text-2xl leading-normal text-blueGray-400 font-bold uppercase">
                  {user ? show.permanentAddress : "login for details"}
                </div>
                <br />
                {/* <div className="text-sm leading-normal text-blueGray-400 font-bold uppercase">
                  {user ? (
                    <div
                      onClick={() => navigate("/formsdetails")}
                      className="text-blue-500 cursor-pointer 	"
                    >
                      fill details
                    </div>
                  ) : (
                    "login for details"
                  )}
                </div> */}
              </div>
            </div>
            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 mb-3 mt-4">
                    About
                  </h3>
                  <p className="mb-10 text-lg leading-relaxed text-blueGray-700 ">
                    {user ? show.about : "login for details"}
                  </p>
                </div>
              </div>
              <div className="database  border-t border-blueGray-200 flex flex-col items-center justify-center">
                <div className="bg-white w-[42rem] max-w-4xl shadow-xl overflow-hidden sm:rounded-lg mt-10">
                  <div className="px-4 py-3  sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 ">
                      User Profile Details
                    </h3>
                  </div>
                  <div className="border-t border-gray-200">
                    <dl>
                      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Company
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {user ? show.companyName : "login for details"}
                        </dd>
                      </div>
                      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Skill in
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {user ? show.skill : "login for details"}
                        </dd>
                      </div>
                      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Email address
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {user ? user.email : "login for details"}
                        </dd>
                      </div>
                      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          company address
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {user ? show.companyAddress : "login for details"}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Profile;
