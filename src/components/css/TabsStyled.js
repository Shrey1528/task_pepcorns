import styled from "styled-components";

export const TabsStyled = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    width: 90%;
    background: #f8f9fe;
    margin: 0 auto;
    margin-top: 3rem;
  }

  .bloc-tabs {
    display: flex;
    justify-content: space-between;
  }
  .tabs {
    padding: 15px;
    text-align: center;
    width: 20%;
    cursor: pointer;
    box-sizing: content-box;
    position: relative;
  }

  .active-tabs {
    background: #5e72e3;
    color: #f8f9fe;
  }

  button {
    border-radius: 10px;
    font-size: 1rem;
    border: none;
    background-color: white;
    margin-bottom: 1rem;
    box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    &:hover {
      background-color: #5e72e3;
      color: #f8f9fe;
    }
  }
  .content-tabs {
    flex-grow: 1;
  }
  .content {
    background: white;
    padding: 20px;
    width: 100%;
    height: 100%;
    display: none;
  }

  .active-content {
    display: block;
  }
`;
