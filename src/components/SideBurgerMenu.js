import React from "react";
import { NavLink } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import "./SideBurgerMenu.css";

export const SideBurgerMenu = () => {
  return (
    <Menu right id="sideburgermenu">
      <NavLink className="menu-item" to="/">
        Home
      </NavLink>
      <NavLink className="menu-item" to="about">
        About
      </NavLink>
      <NavLink className="menu-item" to="contact">
        Contact
      </NavLink>
    </Menu>
  );
};
