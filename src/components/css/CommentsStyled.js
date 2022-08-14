import styled from "styled-components";

export const CommentsStyled = styled.div`
  width: 80%;
  margin: 0 auto;
  .header {
    background-color: #5e72e3;
    padding: 1rem;
    border-radius: 10px;
    color: white;
  }
  .btn {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
    button {
      padding: 1rem;
      border: 1px solid #5e72e3;
      color: #5e72e3;
      cursor: pointer;
      &:hover {
        background-color: #5e72e3;
        color: white;
        transition: 0.3s ease-in-out;
      }
    }
  }
  .navigation {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
    svg {
      font-size: 2.5rem;
      border-radius: 50%;
      &:hover {
        cursor: pointer;
        background-color: #ebeef0;
      }
    }
  }
`;
