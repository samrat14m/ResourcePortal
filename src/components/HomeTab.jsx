import React from "react";

function HomeTab({ arr, handleResourceUpdate }) {
  return (
    <div className="hometab">
      <button
        className="navbuttons navbtn1"
        onClick={() => {
          console.log("hii");
        }}
      >
        Resouce
      </button>
      <button
        className="navbuttons navbtn2"
        value="request"
        onClick={handleResourceUpdate}
      >
        Requests
      </button>
      <button
        className="navbuttons navbtn3 "
        value="user"
        onClick={handleResourceUpdate}
      >
        Users
      </button>
    </div>
  );
}

export default HomeTab;
