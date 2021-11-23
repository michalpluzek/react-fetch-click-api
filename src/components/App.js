import React from "react";
import "./App.css";
import ButtonFetchUsers from "./ButtonFetchUsers";
import UsersList from "./UsersList";

const API = "https://randomuser.me/api/?results=1";

class App extends React.Component {
  state = {
    users: [],
  };

  handleDataFetch = () => {
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

        this.setState((prev) => ({
          users: prev.users.concat(user),
        }));
      })
      .catch((error) => console.log(error));
  };

  render() {
    const { users } = this.state;

    return (
      <div>
        <ButtonFetchUsers click={this.handleDataFetch} />
        {users.length > 0 ? <UsersList users={users} /> : users}
      </div>
    );
  }
}

export default App;
