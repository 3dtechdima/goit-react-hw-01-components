import React from "react";
import { TransactionContainer } from "./TransactionStyled";

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

export default TransactionHistory;
