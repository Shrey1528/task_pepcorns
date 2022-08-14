import styled from "styled-components";

export const AboutStyled = styled.div`
  width: 91%;
  margin: 0 auto;
  margin-bottom: 1rem;
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);
  background-color: white;
  h1 {
    position: absolute;
    top: 70px;
    left: 45%;
    text-transform: uppercase;
    background-color: #f8f9fe;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    color: #525f7f;
  }
  .list {
    display: flex;
    gap: 1rem;
    justify-content: center;
    .first {
      background-color: #fbdcda;
      padding: 0.2rem 0.5rem;
      border-radius: 5px;
    }
  }
`;
