import styled from "styled-components";

export const FooterStyled = styled.div`
  background-color: #5e72e4;
  .main-con {
    width: 90%;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    align-items: center;

    img {
      width: 8%;
      height: 40%;
      border-radius: 50%;
    }
    .company {
      display: flex;
      align-items: center;
      gap: 2rem;
      .details {
        .sub {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }
        h1 {
          margin-bottom: -0.2rem;
          color: white;
        }
        .location {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          svg {
            font-size: 1.5rem;
          }
          p {
            font-size: 1.1rem;
            color: white;
          }
        }
        .email {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          svg {
            font-size: 1.5rem;
          }
          p {
            color: white;
            font-size: 1.1rem;
          }
        }
        .website {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          svg {
            font-size: 1.5rem;
          }
          p {
            color: white;
            font-size: 1.1rem;
          }
        }
        .pan {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          svg {
            font-size: 1.5rem;
          }
          p {
            color: white;
            font-size: 1.1rem;
          }
        }
      }
    }
    .links {
      display: flex;
      gap: 1rem;
      background-color: white;
      border-radius: 10px;
      padding: 0.5rem;
      svg {
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;
