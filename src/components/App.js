import React from "react";
import ButtonFetchUsers from "./ButtonFetchUsers";
import UsersList from "./UsersList";

class App extends React.Component {
  render() {
    return (
      <div>
        <ButtonFetchUsers />
        <UsersList />
      </div>
    );
  }
}

export default App;
