import styled from "styled-components";

export const PitchStyled = styled.div`
  .pitch-container {
    .deck {
      display: flex;
      justify-content: space-between;
    }
    .pitch {
      .heading {
        font-size: 0.9rem;
        color: #32325d;
      }
      .text {
        font-size: 0.9rem;
        color: #536174;
      }
    }
    .deck-info {
      .heading {
        font-size: 0.9rem;
        margin-bottom: -0.5rem;
        color: #536174;
      }
    }
    .con {
      img {
        display: block;
        margin: auto;
        margin-bottom: 1rem;
      }
      h3 {
        color: #32325d;
      }
      p {
        color: #536174;
      }
      .lists {
        li {
          color: #536174;
        }
      }
    }
    .documents {
      h3 {
        color: #32325d;
      }
      a {
        text-decoration: none;
        color: #2381c8;
      }
    }
  }
`;
