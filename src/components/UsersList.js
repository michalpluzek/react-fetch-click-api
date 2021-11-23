import React from "react";

const UsersList = (props) => {
  const users = props.users.map((user) => <li>{user.name.first}</li>);

  return <ul>{users}</ul>;
};

export default UsersList;
