import React from "react";
import { TransactionContainer } from "./TransactionStyled";
import PropTypes from "prop-types";

const TransactionHistory = (props) => {
  const { items } = props;

  return (
    <TransactionContainer>
      <table className="transaction-history__tab">
        <thead>
          <tr className="transaction-history__title">
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody className="transaction-history__item">
          {items.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </TransactionContainer>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};

export default TransactionHistory;
