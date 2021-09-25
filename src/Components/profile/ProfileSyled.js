import styled from "styled-components";

export const ProfileContainer = styled.section`
  background-color: #dadada;
  padding: 50px;

  .profile-items__img {
    display: flex;
    margin: auto;
    width: 200px;
  }
  .profile-items__tag,
  .profile-items__location {
    color: gray;
    text-align: center;
    padding-bottom: 10px;
  }
  .profile-items__name {
    text-align: center;
    font-weight: bold;
  }
  .profile-items {
    margin: 0 auto;
    background-color: white;
    width: 400px;
  }
  .stats-items {
    color: #5e68ec;
    margin: 0 auto;
    padding-left: 0px;
    width: 400px;
    display: flex;
    justify-content: center;
    text-align: center;
    background-color: #a0a7b8;
    font-weight: bold;
  }
  .stats-items__item {
    list-style: none;
    margin: 20px;
  }
`;
