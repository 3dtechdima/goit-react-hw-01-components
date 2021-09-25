import React from "react";
import { ProfileContainer } from "./ProfileSyled";
// import PropTypes from "prop-types";

const Profile = (props) => {
  const { avatar, name, tag, location, stats } = props;
  return (
    <ProfileContainer>
      <div className="profile-items">
        <img className="profile-items__img" src={avatar} alt={name} />
        <p className="profile-items__name">{name}</p>
        <p className="profile-items__tag">@{tag}</p>
        <p className="profile-items__location">{location}</p>
      </div>

      <ul className="stats-items">
        {Object.entries(stats).map((item) => (
          <li className="stats-items__item" key={item[0]}>
            <span> {item[0]}</span>
            <span> {item[1]}</span>
          </li>
        ))}
      </ul>
    </ProfileContainer>
  );
};

// Profile.propTypes = {
//   user: PropTypes.shape({
//     avatar: PropTypes.string,
//     name: PropTypes.string,
//     tag: PropTypes.string,
//     location: PropTypes.string,
//     stats: PropTypes.shape({
//       followers: PropTypes.number,
//       views: PropTypes.number,
//       likes: PropTypes.number,
//     }),
//   }),
// };

export default Profile;
