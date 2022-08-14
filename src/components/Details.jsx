import React from "react";
import { DetailsStyled } from "./css/DetailsStyled";
import cofounder1 from "../assets/cofounder1.jpg";
import cofounder2 from "../assets/cofounder2.jpg";
import { Icon } from "@iconify/react";

export const Details = () => {
  const data = [
    {
      image: cofounder1,
      name: "Manish Pratik",
      position: "CoFounder",
      twitter: "https://twitter.com/manishpratik",
      linkedin: "https://www.linkedin.com/in/manishpratik/",
    },
    {
      image: cofounder2,
      name: "Gautam Menon",
      position: "CoFounder",
      linkedin: "https://www.linkedin.com/in/gautam-menon-040379208/",
    },
  ];
  const faqs = [
    {
      question: "What does your company do ?",
      answer:
        "LetzRent is an online search, compare & booking platform for self-drive car rental that rewards users for renting. We aggregate rental deals from multiple service providers and present them to users with prices, reviews & facts to make an informed decision. Currently running a pilot in Bangalore by aggregating Zoomcar, Avis, Mychoize & Wowcarz.",
    },
    {
      question: "Where do you want to be in 5 years ?",
      answer: "Uber for Self Drive Car Rental",
    },
    {
      question: "Why did you choose this idea, what's your biggest Obstacle?",
      answer:
        "Customers want low Prices: And to get low prices 85% of the consumers check at least 2 data points (Source: BCG Consumer Trends). In various sectors information-centred buying has been made more efficient by companies like MMT for Travel, Policy bazaar for Insurance, Myntra or Shopperstop for Lifestyle products. However, for rental products, there is no one & to fill this need and make the process efficient we launched Letzrent, hoping to have a first-mover advantage and dominate the market in t",
    },
  ];
  return (
    <DetailsStyled>
      <p className="text">
        <span>Meet our strong </span>and visionary team members
      </p>
      <div className="founders">
        {data.map((item) => {
          return (
            <div className="card">
              <img src={item.image} alt="" />
              <div className="details">
                <p className="name">{item.name}</p>
                <p className="pos">{item.position}</p>
              </div>
              <div className="links">
                <a href={item.twitter}>
                  <Icon
                    icon="ant-design:twitter-circle-filled"
                    color="#00acee"
                    width={50}
                  />
                </a>
                <a href={item.facebook}>
                  <Icon
                    icon="akar-icons:facebook-fill"
                    color="#4267b2"
                    width={45}
                  />
                </a>
                <a href={item.linkedin}>
                  <Icon
                    icon="akar-icons:linkedin-box-fill"
                    color="#0a66c2"
                    width={45}
                  />
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <div className="funds">
        <h2> How will we use funds :</h2>
        <div className="sub">
          <p>Sales & Marketing - 50% |</p>
          <p>Human Resource-30% | </p>
          <p>Technology -10% |</p>
          <p>OPEX-10%</p>
        </div>
      </div>
      <div className="target-con">
        <div className="text-con1">
          <div className="start-date">
            <p className="heading">Start Date</p>
            <div className="date-time">
              <p>2022-06-26</p>
              <p>16:38:05</p>
            </div>
            <div className="ends">
              <div className="sub">
                <Icon icon="akar-icons:arrow-up" color="#3dd292" />
                Ends In
              </div>
              0 Days
            </div>
          </div>
          <div className="icon-point">
            <Icon icon="icon-park-solid:point-out" color="white" />
          </div>
        </div>
        <div className="target-raised">
          <div className="text-con">
            <p className="heading">Target Raised</p>
            <p className="amount">5000000</p>
            <div className="raised">
              <Icon icon="akar-icons:arrow-up" color="#3dd292" />
              0%
              <p>Raised So far</p>
            </div>
          </div>
          <div className="icon">
            <Icon icon="bi:pie-chart-fill" color="white" />
          </div>
        </div>
      </div>
      <div className="faqs">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq) => {
          return (
            <div className="con">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          );
        })}
      </div>
    </DetailsStyled>
  );
};
