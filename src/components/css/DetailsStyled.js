import styled from "styled-components";

export const DetailsStyled = styled.div`
  .text {
    text-align: center;
    span {
      font-weight: 500;
    }
  }
  .founders {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    .card {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      padding: 1rem;
      background-color: #f8f9fe;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);

      img {
        border-radius: 50%;
        width: 25%;
      }
      .details {
        .name {
          font-size: 2rem;
          margin-bottom: -1rem;
        }
        .pos {
          font-size: 1.2rem;
        }
      }
      .links {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
    }
  }
  .funds {
    margin-top: 2rem;
    background-color: #f8f9fe;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);
    padding: 1rem;
    h2 {
      color: #32325d;
    }
    .sub {
      display: flex;
      gap: 1rem;
      justify-content: center;
      align-items: center;
      margin-top: -0.5rem;
    }
  }
  .target-con {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 2rem !important;
    gap: 5rem;
    width: 80%;
    margin: 0 auto;
    .text-con1 {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      border-radius: 10px;
      background-color: #f8f9fe;
      box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);

      .start-date {
        .heading {
          text-transform: uppercase;
          margin-bottom: -0.5rem;
        }
        .date-time {
          display: flex;
          gap: 1rem;
          font-size: 1.5rem;
        }
        .ends {
          display: flex;
          gap: 1rem;
          margin-top: -0.5rem;
          .sub {
            display: flex;
            align-items: center;
            gap: 0.2rem;
          }
        }
      }
      .icon-point {
        background-color: #f5365c;
        width: fit-content;
        padding: 0.7rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        svg {
          font-size: 2rem;
        }
      }
    }
    .target-raised {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      border-radius: 10px;
      background-color: #f8f9fe;
      box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);

      .text-con {
        display: flex;
        flex-direction: column;
        .heading {
          text-transform: uppercase;
        }
        .amount {
          font-size: 1.5rem;
          margin-top: -0.5rem;
        }
        .raised {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: -0.9rem;
        }
      }
      .icon {
        background-color: #fb6340;
        width: fit-content;
        padding: 0.7rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        svg {
          font-size: 2rem;
        }
      }
    }
  }
  .faqs {
    margin-top: 2rem;
    padding: 1rem;
    background-color: #f8f9fe;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);
    h2 {
      margin-bottom: 2rem;
      color: #32325d;
      text-align: center;
    }
    .con {
      h3 {
        color: #32325d;
      }
      p {
        margin-bottom: 2rem;
      }
    }
  }
`;
