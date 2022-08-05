import React from "react";
import logo from "../assets/Nxt_logo.png";
import user from "../assets/user.png";
function Header() {
  return (
    <div>
      <div className="header">
        <img src={logo} alt="no img found" />
        <img src={user} alt="no img found" />
      </div>
    </div>
  );
}

export default Header;
