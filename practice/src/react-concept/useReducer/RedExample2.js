import React, { useReducer } from "react";

const RedExample2 = () => {
  const [user, dispatch] = useReducer(reducer, initialState);

  const handleNameChange = (e) => {
    dispatch({
      type: "addname",
      payload: e.target.value,
    });
  };
  const handleEmailChange = (e) => {
    dispatch({
      type: "addemail",
      payload: e.target.value,
    });
  };

  return (
    <div>
      <form>
        <input name="name" type="text" onChange={handleNameChange} /> <br />
        <input name="email" type="text" onChange={handleEmailChange} /> <br />
        <h2> Name - {user.name} </h2>
        <h2> Email - {user.email} </h2>
      </form>
    </div>
  );
};

const initialState = {
  name: "",
  email: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "addname":
      return { ...state, name: action.payload };
    case "addemail":
      return { ...state, email: action.payload };
    case "nothing":
      return initialState;
    default:
      throw new Error("Unexpected action");
  }
};

export default RedExample2;
