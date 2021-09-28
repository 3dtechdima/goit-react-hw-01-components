import React from "react";
import { StatisticsContainer } from "./StatisticsSpyled";
import PropTypes from "prop-types";

const Statistics = (props) => {
  const { title, stats } = props;
  return (
    <StatisticsContainer>
      {title && <h2 className="statistics-title">{title}</h2>}
      <ul className="statistics-items">
        {stats.map((item) => {
          return (
            <li className="statistics-item" key={item.id}>
              <p className="statistics-list">{item.label}</p>
              <p className="statistics-percentage">{item.percentage}%</p>
            </li>
          );
        })}
      </ul>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};

export default Statistics;
