import logo from "../assets/logo.jpg";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

export const Header = () => {
  const [darkMode, SetDarkMode] = useState(false);

  const activeClass =
    "text-red-500 font-bold dark:text-white mr-5 bg-transparent px-1";
  const inActiveClass =
    "text-gray-700 font-bold dark:text-white mr-5 bg-transparent px-1 hover:text-slate-600";

  return (
    <header>
      <nav className="bg-white dark:bg-gray-900">
        <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
          <Link to="/" className="flex items-center">
            <img src={logo} className="mr-3 h-10" alt="portfolio" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Welcome To My World
            </span>
          </Link>
          <div className="flex justify-end">
            <div className="flex flex-wrap px-8">
              <NavLink
                to="about"
                className={({ isActive }) =>
                  isActive ? activeClass : inActiveClass
                }
                end
              >
                About
              </NavLink>
              <NavLink
                to="contact"
                className={({ isActive }) =>
                  isActive ? activeClass : inActiveClass
                }
              >
                Contact
              </NavLink>
            </div>
            <div className="flex items-center relative">
              {darkMode ? (
                <span
                  onClick={() => SetDarkMode(!darkMode)}
                  className="dark:text-white cursor-pointer text-xl text-gray-700 mr-5"
                >
                  {<IoSunnyOutline />}
                </span>
              ) : (
                <span
                  onClick={() => SetDarkMode(!darkMode)}
                  className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5"
                >
                  {<IoMoonOutline />}
                </span>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

// <div>
// <div
//   id="hamburger"
//   className="fa fa-bars flex items-center text-xl"
//   // style="display:none;"
// ></div>
// <div
//   id="mobileNav"
//   className="fixed flex flex-col gap-8 pt-16 px-4 text-xl uppercase bg-teal-500 h-full inset-0 top-16 w-[70%] left-[-70%] ease-in-out duration-500 cursor-pointer"
// >
//   <span>About</span>
//   <span>Projects</span>
//   <span>Contact</span>
// </div>
// </div>
