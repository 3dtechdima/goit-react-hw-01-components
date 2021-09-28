import React from "react";
import PropTypes from "prop-types";

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

FriendsListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
  }),
};

export default FriendsListItem;
