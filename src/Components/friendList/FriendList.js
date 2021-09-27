import React from "react";
import FriendsListItem from "./FriendsListItem";
import { FriendsListContainer } from "./FriendsListStyled";

const FriendList = (props) => {
  const { friends } = props;
  return (
    <FriendsListContainer>
      <ul className="friends-list">
        {friends.map((friend) => {
          return <FriendsListItem friend={friend} key={friend.id} />;
        })}
      </ul>
    </FriendsListContainer>
  );
};
export default FriendList;
