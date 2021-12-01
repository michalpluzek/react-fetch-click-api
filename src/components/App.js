import React, { useState } from "react";
import "./App.css";
import ButtonFetchUsers from "./ButtonFetchUsers";
import UsersList from "./UsersList";

const API = "https://randomuser.me/api/?results=1";

const App = () => {
  const [users, setUsers] = useState([]);

  const handleDataFetch = () => {
    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error(response.status);
        }
      })
      .then((data) => {
        const user = data.results;

        setUsers((prevValue) => prevValue.concat(user));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <ButtonFetchUsers click={handleDataFetch} />
      {users.length > 0 ? <UsersList users={users} /> : users}
    </div>
  );
};

export default App;
