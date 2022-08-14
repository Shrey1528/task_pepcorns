import React from "react";
import { DealTermsStyled } from "./css/DealTermsStyled";

export const DealTerms = () => {
  const data = [
    {
      amount: 2000,
      points: [
        "LetzRent Premium Apparel (T-shirts & Coffee Mug)",
        "Early access to new features & promotions",
      ],
      tnc: " Limited to the first 100",
    },
    {
      amount: 5000,
      points: [
        "LetzRent Premium Apparel Box (T-shirts, Sweatshirts & additional Swag)",
        "Early access to new features & promotions",
      ],
      tnc: " Limited to the first 200",
    },
    {
      amount: 10000,
      points: [
        "Exclusive interest in owning equity with an investment of ₹50,000 — ₹2,00,000",
        "Invite to exclusive LetzRent team chat ",
        " LetzRent Premium Apparel Box (T-shirts, Sweatshirts & additional Swag) ",
        "Early access to new features & promotions",
      ],
      tnc: "Equity benefits with no voting rights. Limited to the first 5 investors.",
    },
    {
      amount: 25000,
      points: [
        "Exclusive interest in owning equity with an investment of ₹3,00,000 — ₹10,00,000",
        " One-on-one 30 minute video call with Co-Founders",
        "Invite to exclusive LetzRent team chat ",
        "LetzRent Premium Apparel Box (T-shirts, Sweatshirts & additional Swag)",
        "Early access to new features & promotions",
      ],
      tnc: "Equity benefits with no voting rights. Limited to the first 5 investors.",
    },
    {
      amount: 50000,
      points: [
        "Exclusive interest in owning equity with an investment of ₹11,00,000 — ₹30,00,000",
        "In-Person dinner with Co-Founder in Whitefield, Bangalore ",
        "One-on-one 30 minute video call with Co-Founders",
        "Invite to exclusive LetzRent team chat",
        " LetzRent Premium Apparel Box (T-shirts, Sweatshirts & additional Swag) ",
        "Early access to new features & promotions",
      ],
      tnc: "Equity benefits with voting rights. Limited to the first 5 investors.",
    },
    {
      amount: 100000,
      points: [
        "Exclusive interest in owning equity with an investment of above ₹40,00,000",
        " LetzRent Weekend Experience: Flight & Hotel on us",
        "In-Person dinner with Co-Founder in Whitefield, Bangalore ",
        " One-on-one 30 minute video call with Co-Founders",
        "Invite to exclusive LetzRent team chat",
        "LetzRent Premium Apparel Box (T-shirts, Sweatshirts & additional Swag)",
        " Early access to new features & promotions",
      ],
      tnc: "Equity benefits with voting rights(open for discussion of term sheet). Limited to the first 2 investors.",
    },
  ];
  return (
    <DealTermsStyled>
      <h1 className="deal">Deal Terms</h1>
      <hr />
      <p className="perks">Perks you will receive for Investing Letzrent</p>
      <div className="main-con">
        {data.map((item) => {
          return (
            <div className="cards">
              <div className="header">
                <h1>₹ {item.amount}</h1>
                <p>Invest</p>
              </div>
              {item.points?.map((list) => {
                return (
                  <div className="lists">
                    <ul>
                      <li>{list}</li>
                    </ul>
                  </div>
                );
              })}
              <button>Invest</button>
            </div>
          );
        })}
      </div>
    </DealTermsStyled>
  );
};
