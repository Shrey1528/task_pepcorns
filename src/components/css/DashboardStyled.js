import styled from "styled-components";

export const DashboardStyled = styled.div`
  .container {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    .video-con {
      background-color: #000;
      width: 60%;
    }
    .campaign {
      width: 25%;
      background-color: white;
      box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);
      border-radius: 10px;
      .info {
        margin: 1.5rem;
        display: flex;
        flex-direction: column;
        .goal {
          h1 {
            margin-bottom: -0.5rem;
            margin-top: -0.5rem;
            color: #5e72e4;
          }
          p {
            margin-bottom: 1.2rem;
            color: #525f7f;
          }
        }
        .investors {
          h1 {
            margin-top: -0rem;
            margin-bottom: -0.5rem;
            color: #556080;
          }
          p {
            margin-bottom: 1.2rem;
            color: #525f7f;
            font-size: 1.2rem;
          }
        }
        .left {
          h1 {
            margin-top: -0rem;
            margin-bottom: -0.5rem;
            color: #556080;
          }
          p {
            color: #525f7f;
            margin-bottom: 1.2rem;
            font-size: 1.2rem;
          }
        }
        button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.7rem 1rem;
          border-radius: 10px;
          border: none;
          font-size: 1.2rem;
          margin-top: 1rem;
          background-color: #f5365c;
          color: white;
          &:hover {
            cursor: pointer;
          }
        }
        .text {
          text-align: center;
          margin-bottom: -0.5rem;
        }
      }
    }
  }
`;
