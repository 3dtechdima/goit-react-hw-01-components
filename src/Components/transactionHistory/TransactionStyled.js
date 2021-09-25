import styled from "styled-components";

export const TransactionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dadada;
  padding: 50px;
  .transaction-history__title {
    text-align: center;
    background-color: gray;
  }
  tr:nth-child(odd) {
    background: #cdced3;
  }
  .transaction-history__tab {
    text-align: center;
    border: 1px solid gray;
  }
`;
