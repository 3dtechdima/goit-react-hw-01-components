import React from "react";

const FriendsListItem = (props) => {
  const { friend } = props;
  return (
    <li className="friends-list__item">
      <div className={friend.isOnline.toString()}>{friend.isOnline}</div>
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
};

export default FriendsListItem;
