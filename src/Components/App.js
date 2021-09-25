import React from "react";
import FriendList from "./friendList/FriendList";
import Profile from "./profile/Profile";
import Statistics from "./statistics/Statistics";
import data from "../data/user.json";
import TransactionHistory from "./transactionHistory/TransactionHistory";
import transactions from "../data/transactions.json";
import friends from "../data/friends.json";

const App = () => {
  return (
    <>
      <Profile
        avatar={data.avatar}
        name={data.name}
        tag={data.tag}
        location={data.location}
        stats={data.stats}
      />
      <FriendList friends={friends} />
      <Statistics />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
