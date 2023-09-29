import styled from "styled-components";

export const Container = styled.div`
  margin-top: 40px;
  .table-products {
    top: 30px;
    width: 100%;
    margin-bottom: 40px;
    justify-content: space-between;
    display: block;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    text-align: center;
    padding: 20px;
  }
  .border-table {
    background-color: #4e5d66;
    border-radius: 9px;
    width: 100%;
    th {
      color: #ffff;
      font-size: 0.8rem;
      border-right: 2px solid #fff;
      padding-right: 170px;
      text-align: left;
    }
  }
  .table-infor {
    color: #4e5d66;
    font-weight: 400;
    width: 100%;
    max-width: 900px;
    padding: 0;
    word-wrap: break-word;
    white-space: normal;
    .td-space {
      width: 250px; /* Defina a largura desejada para todas as células */
      white-space: nowrap; /* Evita que o texto quebre em várias linhas */
      overflow: hidden; /* Oculta o conteúdo que não couber na célula */
      text-overflow: ellipsis;
    }

    .td-space-description {
      max-width: 400px;
      word-wrap: break-word;
      white-space: normal;
      padding: 0;
    }
  }
`;
