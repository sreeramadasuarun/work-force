import React from "react";

const Profile = () => {
  return (
    <main className="profile-page mt-[3.5rem]">
      <section className=" block h-500-px">
        <div className="  top-0 w-full h-[21rem] bg-center bg-hero-image"></div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style={{ transform: "translateZ(0px)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      <section className="relative bg-blueGray-200">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"></div>
              </div>

              <div className="flex justify-center items-center gap-[5rem] mt-10">
                <img
                  className="w-[20rem] rounded-2xl	 "
                  src="https://i.ibb.co/F7Py9ch/1a590398584985-60899fdd5580d.jpg"
                  alt="noimagefound"
                />
                <div className="text-left ">
                  <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 ">
                    Hello Arun
                  </h3>
                  <div className="text-sm leading-normal text-blueGray-400 font-bold uppercase">
                    Andhra Pradesh, India
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-1">
                    UI/UX Designer And Developer
                  </div>
                </div>
              </div>
              <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-9/12 px-4">
                    <h3 class="text-lg leading-6 font-medium text-gray-900 mb-3 mt-4">
                      About
                    </h3>
                    <p class="mb-10 text-lg leading-relaxed text-blueGray-700 ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Culpa natus asperiores eum magnam molestias ab
                      necessitatibus, laboriosam velit ipsum nisi?
                    </p>
                  </div>
                </div>
                <div className="database  border-t border-blueGray-200 flex flex-col items-center justify-center">
                  <div class="bg-white w-[42rem] max-w-4xl shadow-xl overflow-hidden sm:rounded-lg mt-10">
                    <div class="px-4 py-3  sm:px-6">
                      <h3 class="text-lg leading-6 font-medium text-gray-900 ">
                        User Profile Details
                      </h3>
                    </div>
                    <div class="border-t border-gray-200">
                      <dl>
                        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt class="text-sm font-medium text-gray-500">
                            Company
                          </dt>
                          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            Streams
                          </dd>
                        </div>
                        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt class="text-sm font-medium text-gray-500">
                            Skill in
                          </dt>
                          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            React JS
                          </dd>
                        </div>
                        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt class="text-sm font-medium text-gray-500">
                            Email address
                          </dt>
                          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            sreeramadasuarun@gmail.com
                          </dd>
                        </div>
                        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt class="text-sm font-medium text-gray-500">
                            company address
                          </dt>
                          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            Coimbatore, India
                          </dd>
                        </div>
                      </dl>
                    </div>
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
