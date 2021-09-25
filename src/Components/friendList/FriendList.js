import React from "react";
import { FriendsListContainer } from "./FriendsListStyled";

const FriendList = (props) => {
  const { friends } = props;
  return (
    <FriendsListContainer>
      <ul className="friends-list">
        {friends.map((friend) => {
          return (
            <li className="friends-list__item" key={friend.id}>
              <div className={friend.isOnline.toString()}>
                {friend.isOnline}
              </div>
              <div>
                <img
                  className="avatar"
                  src={friend.avatar}
                  alt="{friend.name}"
                  width="48"
                />
                <p className="name">{friend.name}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </FriendsListContainer>
  );
};
export default FriendList;
