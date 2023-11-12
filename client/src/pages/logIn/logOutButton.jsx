/* eslint-disable react/button-has-type */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { useDispatch } from "react-redux";
// import { useAuth0 } from "@auth0/auth0-react";

import {userLogout} from "../../redux/actions";

const LogoutButton = () => {
  const dispatch = useDispatch();
  // const { logout } = useAuth0();


  const handleLogOut = ()=>{
    dispatch(userLogout());
  }

  return (
    <button onClick={handleLogOut}>
      Log Out
    </button>
  );
};

export default LogoutButton;