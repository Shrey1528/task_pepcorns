import React from "react";
import { FooterStyled } from "./css/FooterStyled";
import logo from "../assets/logo.png";
import { Icon } from "@iconify/react";

export const Footer = () => {
  return (
    <FooterStyled>
      <div className="main-con">
        <div className="company">
          <img src={logo} alt="" />
          <div className="details">
            <h1>Letzrent</h1>
            <div className="sub">
              <div className="location">
                <Icon icon="entypo:location-pin" color="red" />
                <p>Mumbai Maharashtra</p>
              </div>
              <div className="email">
                <Icon icon="entypo:email" />
                <p></p>
              </div>
              <div className="website">
                <Icon icon="ant-design:chrome-filled" />
                <p>https://letzrent.com</p>
              </div>
              <div className="pan">
                <Icon icon="bi:credit-card-2-front" />
                <p>PAN/TAN : AAJCR3294F</p>
              </div>
            </div>
          </div>
        </div>
        <div className="links">
          <Icon icon="bx:user-plus" color="#5e72e4" width={40} />
          <Icon icon="el:share-alt" color="#5e72e4" width={40} />
          <Icon icon="akar-icons:facebook-fill" color="#1769aa" width={40} />
          <Icon icon="akar-icons:instagram-fill" color="#f7563d" width={40} />
          <Icon icon="akar-icons:youtube-fill" color="red" width={40} />
        </div>
      </div>
    </FooterStyled>
  );
};
