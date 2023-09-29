import styled from "styled-components";

export const Container = styled.div`
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
`;
