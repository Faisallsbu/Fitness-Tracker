import { useContext, useState } from "react";

import { Link } from "react-router-dom";

import { UserAuth } from "./Context/AuthContext";
import Sign_in from "./Components/Sign_in";

function App() {
  
  // const { user } = UserAuth();

  // console.log(user);

  return (
    <>
      <Sign_in />
    </>
  );
}

export default App;