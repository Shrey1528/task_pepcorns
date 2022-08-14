import React from "react";
import traction from "../assets/traction.png";
import smarter from "../assets/smarter.png";
import rating from "../assets/ratings.png";
import selection from "../assets/selection.png";
import renting from "../assets/renting.png";
import market from "../assets/market.png";
import competitor from "../assets/competitor.png";
import feedback from "../assets/feedback.png";
import future from "../assets/future.png";
import coreteam from "../assets/coreteam.png";

import { PitchStyled } from "./css/PitchStyled";

export const Pitch = () => {
  const data = [
    {
      title: "Highlights",
      points: [
        "Running profitable pilot in Bengaluru.",
        "20k+ registered users, 4.2 app rating and 10k+ social media following ",
        "Company is projecting 100cr+ transaction volume in 5 years",
        "Founder with the marketing expertise of 17+ years in Reliance, Naaptol, Tv9 and Zee and more.",
        "GenZ CTO and co-founder.",
        "Expansion is easy and the untapped customer base is huge.",
        "Been in news articles, already making buzz.",
      ],
    },
    {
      title: "Traction",
      image: traction,
    },
    {
      title: "Smarter Way To Rent",
      image: smarter,
    },
    {
      title: "Customers Want Low Prices",
      text: "To get low prices 85% of the consumers check at least 2 data points (Source: BCG Consumer Trends). In various sectors information centred buying has been made more efficient by companies like MMT for Travel, Policy bazaar for Insurance, Myntra or Shopperstop for Lifestyle products. However for rental products, there is no one & to fill this need and make the process efficient we launched LetzRent, hoping to have a first-mover advantage and dominate the market in the coming future.",
      image: rating,
    },
    {
      title: "Single KYC",
      text: "Renting is a KYC dependent process, every time a customer books a service from a different service provider he/she will have to get a new KYC done. With Letzrent, the hassle of multiple KYC gets removed and with a single KYC, customers can rent from multiple brands.",
    },
    {
      title: "Vast Selection",
      text: "Being an aggregator Letzrent offers more options than category leaders.",
      image: selection,
    },
    {
      title: "Why Renting?",
      points: [
        "Demographic Twist: Commitment phobic millennials prefer an asset lite life with a bias toward renting rather than buying.",
        " Flexibility: Renting allows people to upgrade or change assets easily.",
        "Convenience: With the rental customers dispense with the headache of down payment, maintenance, insurance etc.",
      ],
      image: renting,
    },
    {
      title: "Vast Selection",
      text: "Being an aggregator Letzrent offers more options than category leaders.",
      image: market,
    },
    {
      title: "Competitors",
      text: "Being an aggregator Letzrent offers more options than category leaders.",
      image: competitor,
    },
    {
      title: "Feedback: People love us",
      image: feedback,
    },
    {
      title: "Future and growth",
      text: "Launch: P2P Self Drive Car Rental and Uber for Self Drive Car Rental",
      image: future,
    },
    {
      title: "Core Team",
      image: coreteam,
    },
  ];
  return (
    <PitchStyled>
      <div className="pitch-container">
        <div className="deck">
          <h3>DECK</h3>
          <button>DOWNLOAD PITCH DECK</button>
        </div>
        <hr />
        <div className="pitch">
          <p className="heading">10 Seconds Pitch</p>
          <p className="text">
            Online search, compare & booking platform for self-drive cars,
            charter flights, living space & more that rewards users
          </p>
        </div>
        <hr />
        <div className="deck-info">
          <p className="heading">Deck Info</p>
          <h1>LetzRent</h1>
        </div>
        <hr />
        {data.map((item) => {
          return (
            <div className="con">
              <h3>{item.title}</h3>
              <p>{item.text}</p>

              {item.points?.map((point) => {
                return (
                  <div className="lists">
                    <ul>
                      <li>{point}</li>
                    </ul>
                  </div>
                );
              })}
              <img src={item.image} alt="" />
              <hr />
            </div>
          );
        })}
        <div className="documents">
          <h3>Documents for Investors</h3>
          <ul>
            <li>
              <a
                href="https://drive.google.com/file/d/1clHQGD__nkbsA-cLz3A6_tABUuk5rl3w/view"
                target="blank"
              >
                Due Diligence Report
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1i02nUH-27EhiROtNlvXOfkPP7iTfwjpw/view"
                target="blank"
              >
                Certificate of Incorporation
              </a>
            </li>
          </ul>
        </div>
      </div>
    </PitchStyled>
  );
};
