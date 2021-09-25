import styled from "styled-components";

export const FriendsListContainer = styled.section`
  background-color: #dadada;
  padding: 50px;
  margin: auto;

  .friends-list {
    list-style: none;
  }
  .friends-list__item {
    border-radius: 10px;
    border: 1px solid gray;
    margin-top: 20px;
    padding: 40px 50px 40px 20px;
    width: 100px;
    height: 100px;
    display: flex;
    text-align: center;
    margin: auto;
  }
  .true,
  .false {
    margin-top: 35px;
    margin-right: 20px;
    text-align: center;
    width: 30px;
    height: 30px;
    border-radius: 15px;
  }
  .true {
    background-color: green;
  }
  .false {
    background-color: red;
  }
`;
