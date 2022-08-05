import React, { useState } from "react";
import logo from "../assets/Nxt_logo.png";
import userImage from "../assets/user.png";
import { useNavigate } from "react-router-dom";
function Header() {
  const [toggle, setToggle] = useState(false);
  const display = toggle ? "inline" : "none";
  let buttonStyle = {
    display,
    color: "blue",
  };

  function handleUser() {
    setToggle(!toggle);
    console.log(toggle);
    console.log(buttonStyle);
  }
  let navigator = useNavigate();
  function logOut() {
    navigator("/");
  }

  return (
    <div>
      <div className="header">
        <img src={logo} alt="no img found" />
        <div>
          <img
            width={"100px"}
            src={userImage}
            alt="no img found"
            onClick={() => {
              handleUser();
            }}
          />
          <button onClick={logOut} style={buttonStyle}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
