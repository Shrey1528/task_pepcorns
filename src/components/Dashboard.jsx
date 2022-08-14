import React from "react";
import ReactPlayer from "react-player/youtube";
import { DashboardStyled } from "./css/DashboardStyled";
import { Icon } from "@iconify/react";

export const Dashboard = () => {
  return (
    <DashboardStyled>
      <div className="container">
        <div className="video-con">
          <ReactPlayer
            controls
            url="https://youtu.be/biGcDeB2PbQ"
            height={450}
            width={900}
            className="react-player"
          />
        </div>
        <div className="campaign">
          <div className="info">
            <div className="goal">
              <h1>₹ 0</h1>
              <p>0% of minimum goal raised</p>
              <hr />
            </div>
            <div className="investors">
              <h1>0</h1>
              <p>Total Investors</p>
              <hr />
            </div>
            <div className="left">
              <h1>0 Days</h1>
              <p>Left to Invest</p>
              <hr />
            </div>
            <button>
              <Icon icon="bxs:coin-stack" />
              Campaign Expired
            </button>
            <p className="text">₹ 1000 Minimum Investment</p>
          </div>
        </div>
      </div>
    </DashboardStyled>
  );
};
