import styled from "styled-components";

export const DealTermsStyled = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 5rem;
  .deal {
    position: absolute;
    top: 103%;
    left: 45%;
    background-color: #f8f9fe;
    padding: 0 0.5rem;
    color: #556080;
  }
  hr {
    margin-bottom: 3rem;
    height: 3px;
    background-color: #c8e1f2;
    border: none;
  }
  .perks {
    text-align: center;
    margin-top: -1rem;
    margin-bottom: 2.5rem;
  }
  .main-con {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    .cards {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);
      background-color: #ffffff;
      width: 80%;
      .header {
        text-align: center;
        display: flex;
        flex-direction: column;
        h1 {
          margin-bottom: -1rem;
          margin-top: 0;
          color: #556080;
          font-size: 2.5rem;
        }
      }
      .lists {
        li {
          margin-bottom: -1.8rem;
        }
      }
      button {
        margin-top: 2rem !important;
        width: 80%;
        margin: 0 auto;
        padding: 0.5rem 1rem;
        border-radius: 10px;
        border: none;
        background-color: #96a3ed;
        color: white;
        font-size: 1.2rem;
        &:hover {
          cursor: pointer;
          transform: scale(1.1);
        }
      }
    }
  }
`;
