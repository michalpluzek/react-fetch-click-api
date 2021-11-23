import React from "react";
import "./App.css";
import ButtonFetchUsers from "./ButtonFetchUsers";
import UsersList from "./UsersList";

const API = "https://randomuser.me/api/?results=5";

class App extends React.Component {
  state = {
    users: null,
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
        const users = data.results;
        this.setState({
          users,
        });
      })
      .catch((error) => console.log(error));
  };

  render() {
    const { users } = this.state;

    return (
      <div>
        <ButtonFetchUsers click={this.handleDataFetch} />
        {users ? <UsersList users={users} /> : users}
      </div>
    );
  }
}

export default App;
