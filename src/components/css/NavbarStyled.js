import styled from "styled-components";

export const NavbarStyled = styled.div`
  overflow-x: hidden;
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 5rem;
  margin: 0 auto;
  background-color: #5e72e4;
  .logo {
    display: flex;
    margin-left: 2rem;
    gap: 1rem;
    align-items: center;
    img {
      width: 10%;
      height: 75%;
      border-radius: 50%;
    }
    h1 {
      color: white;
    }
  }
  .user {
    display: flex;
    gap: 5rem;
    align-items: center;
    margin-right: -10rem;
    img {
      width: 8%;
    }
    .btn-con {
      display: flex;
      gap: 1rem;
      button {
        padding: 0.5rem 1rem;
        background-color: #f5365c;
        color: white;
        font-size: 1.1rem;
        border: none;
        border-radius: 10px;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;
