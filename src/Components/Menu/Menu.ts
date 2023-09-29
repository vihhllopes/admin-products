import styled from "styled-components";

export const Container = styled.div`
  font-family: "Ubuntu", sans-serif;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px 30px;
  img {
    width: 80px;
  }
  span {
    margin-left: 10px;
    color: #fff;
  }
  .avatar {
    border-radius: 50%;
  }
`;

export const Options = styled.div`
  padding: 40px 40px;
  div {
    svg {
      font-size: 1.3rem;
      text-align: center;
    }
    width: 25%;
    min-width: var(--chakra-sizes-30);
  }
`;
