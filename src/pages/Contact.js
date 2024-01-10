import React from "react";

export const Contact = () => {
  return (
    <main className="dark:bg-gray-800 dark:text-white">
      <div class="flex justify-center items-center bg-white dark:bg-gray-800 ">
        <div class="container ">
          <div class="p-8 my-4 md:px-12 lg:w-full lg:pl-20 lg:pr-40 mr-auto rounded-2xl">
            <div class="flex justify-center">
              <h1 class="font-bold uppercase text-4xl">
                Tell me what you've
                <span class="relative ml-2">
                  <span
                    class="block absolute -inset-0 skew-x-12 bg-yellow-500"
                    aria-hidden="true"
                  ></span>
                  <span class="relative text-black dark:text-white"> Got!</span>
                </span>
              </h1>
            </div>
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg border border-slate-600 border-xl"
                type="text"
                placeholder="First Name*"
                required
              />
              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg border border-slate-600"
                type="text"
                placeholder="Last Name*"
                required
              />
              <label class="block">
                <input
                  class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg border border-slate-600 peer"
                  type="email"
                  placeholder="Email*"
                  required
                />
                <p class="mt-2 invisible peer-invalid:visible text-red-600 text-xs">
                  Please provide a valid email address
                </p>
              </label>
              <label>
                <input
                  class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg border border-slate-600"
                  type="number"
                  placeholder="Phone Number"
                />
              </label>
            </div>
            <div class="my-4">
              <textarea
                placeholder="Message*"
                class="w-full h-48 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg border border-slate-600"
                required
              ></textarea>
            </div>
            <div class="my-2  flex justify-center">
              <button
                class="text-black uppercase text-m font-bold bg-yellow-500 p-4 rounded-lg
                     hover:bg-yellow-400 transition duration-300 hover:scale-105 dark:text-white"
              >
                Surprise Me!
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
