import styled from "styled-components";

export const StatisticsContainer = styled.section`
  background-color: #dadada;
  margin-bottom: -15px;
  .statistics-title {
    text-align: center;
    margin: 0 auto;
    color: #9199e2;
  }
  .statistics-items {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .statistics-item {
    list-style: none;
    text-align: center;
    width: 150px;
    height: 100px;
    border: 1px solid gray;
  }
`;
