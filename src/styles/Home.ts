import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Ocupa a altura total da janela de visualização */
  margin: 0;
  color: #4e5d66;
  h2 {
    font-size: 0.9rem;
    color: #4e5d66;
  }
  h1 {
    font-size: 1.6rem;
    font-weight: bolder;
  }
  h3 {
    margin-bottom: 30px;
    font-size: 1.4rem;
    color: #5a4ca7;
    font-weight: bolder;
  }
  .simple-grid {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }
  .cards-home {
    .cards-body-home {
      padding: 20px 20px;
      padding-top: 0px;
      p {
        font-size: 0.7rem;
        color: #109e8e;
        font-weight: 500;
        margin-bottom: 10px;
      }
      h4 {
        color: #4e5d66;
      }
    }
  }
  .cards-grafic {
    padding: 20px 20px;
    padding-top: 0px;
  }
  .card-products {
    width: 100%;
    padding: 20px 30px;
    min-width: 100%;
    h2 {
      font-size: 1.5rem;
    }
  }
  .search {
    background: #f3f5f6 0% 0% no-repeat padding-box;
    border-radius: 8px;
    opacity: 1;
    button {
      background-color: transparent;
      padding: 0;
      svg {
        margin-right: 20px;
      }
    }
  }
`;
