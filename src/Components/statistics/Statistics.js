import React from "react";
import data from "../../data/statistical.json";
import { StatisticsContainer } from "./StatisticsSpyled";

const Statistics = () => {
  return (
    <StatisticsContainer>
      <h2 className="statistics-title">Upload stats</h2>
      <ul className="statistics-items">
        {data.map(({ label, percentage, id }) => {
          return (
            <li className="statistics-item" key={id}>
              <p className="statistics-list">{label}</p>
              <p className="statistics-percentage">{percentage}%</p>
            </li>
          );
        })}
      </ul>
    </StatisticsContainer>
  );
};

export default Statistics;
