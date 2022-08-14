import React from "react";
import { AboutStyled } from "./css/AboutStyled";

export const About = () => {
  return (
    <AboutStyled>
      <div className="about">
        <h1>About Us</h1>
        <p>
          Online search, compare & booking platform for self-drive cars, charter
          flights, living space & more that rewards users
        </p>
        <div className="list">
          <p className="first">GEN Z FOUNDER </p>
          <p>MOBILITY</p>
          <p>E-COMMERCE</p>
        </div>
      </div>
    </AboutStyled>
  );
};
