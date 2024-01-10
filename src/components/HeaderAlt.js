import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { IoMdSunny } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";
import { SideBurgerMenu } from "./SideBurgerMenu";

import "./HeaderAlt.css";

export const HeaderAlt = () => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
      console.log("darkmodeOn");
    } else {
      document.documentElement.classList.remove("dark");
      console.log("darkmodeOff");
    }
  }, [darkMode]);

  return (
    <header>
      <SideBurgerMenu
        pageWrapId={"headerAlt"}
        outerContainerId={"outer-container"}
      />
      <nav id="headerAlt" className="w-screen bg-teal-500 dark:bg-gray-800">
        <div className="py-4 lg:px-8 px-4 m-auto h-16 text-white flex items-center justify-between dark:border-b-0">
          <div className="flex items-center">
            <img src={logo} alt="" className="h-14 mx-8" />
            <h1 className="lg:text-2xl text-xl uppercase cursor-pointer font-bold dark:text-white">
              Portfolio
            </h1>
          </div>

          <ul
            className="flex lg:gap-8 gap-6 uppercase tracking-wider cursor-pointer text-lg items-center"
            id="navItems"
          >
            <li>
              <NavLink to="/" className="group">
                Home
                <div className="w-0 group-hover:w-full h-0.5 bg-white ease-in-out duration-500"></div>
              </NavLink>
            </li>
            <li>
              <NavLink to="about" className="group">
                About
                <div className="w-0 group-hover:w-full h-0.5 bg-white ease-in-out duration-500"></div>
              </NavLink>
            </li>
            <li>
              <NavLink to="contact" className="group">
                Contact
                <div className="w-0 group-hover:w-full h-0.5 bg-white ease-in-out duration-500"></div>
              </NavLink>
            </li>
          </ul>
          <div className="flex items-center relative">
            {darkMode ? (
              <span
                onClick={() => setDarkMode(!darkMode)}
                className="dark:text-white cursor-pointer text-xl text-gray-700 mr-5"
              >
                <IoMdSunny />
              </span>
            ) : (
              <span
                onClick={() => setDarkMode(!darkMode)}
                className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi"
              >
                <IoMdMoon />
              </span>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

// <div
// id="hamburgerMenu"
// className="relative top-0.75rem right-0.5rem justify between  w-2rem h-2rem hidden "
// onClick={() => setSideMenu(!sideMenu)}
// >
// <div className="flex flex-col items-center justify-center w-8 h-10 border ">
//   <span className="bg-white h-1 block rounded w-full my-1"></span>
//   <span className="bg-white h-1 block rounded w-full "></span>
//   <span className="bg-white h-1 block rounded w-full my-1"></span>
// </div>
// </div>
