import React from "react";
import logo from "../assets/logo.png";
import user from "../assets/dealer_reg.svg";
import { NavbarStyled } from "./css/NavbarStyled";

export const Navbar = () => {
  return (
    <NavbarStyled>
      <div className="logo">
        <img src={logo} alt="logo" />
        <h1>Letzrent</h1>
      </div>
      <div className="user">
        <div className="btn-con">
          <button>Login Now</button>
          <button>Back to Website</button>
        </div>
        <img src={user} alt="user" />
      </div>
    </NavbarStyled>
  );
};
