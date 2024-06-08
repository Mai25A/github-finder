// Users.js
import React from "react";
import UserItem from "./UserItem";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import Repos from "../repos/Repos";
const Users = (props) => {
  const { id } = useParams();
  
  const { users } = props;
  return (
    <div style={userStyle}>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)", 
  gridGap: "1rem",
};
export default Users;
