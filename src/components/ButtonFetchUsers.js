import React from "react";

const ButtonFetchUsers = (props) => {
  return (
    <button
      onClick={props.click}
      style={{
        margin: "20px",
        padding: "10px 20px",
        border: "2px solid black",
        background: "white",
        cursor: "pointer",
      }}
    >
      Dodaj użytkownika
    </button>
  );
};

export default ButtonFetchUsers;
