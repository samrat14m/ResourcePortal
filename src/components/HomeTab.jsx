import React from "react";

function HomeTab({ arr, handleResourceUpdate }) {
  return (
    <div className="hometab">
      <button className="btn btn-primary">Resouce</button>
      <button
        className="btn btn-primary"
        value="request"
        onClick={handleResourceUpdate}
      >
        Requests
      </button>
      <button
        className="btn btn-primary"
        value="user"
        onClick={handleResourceUpdate}
      >
        Users
      </button>
    </div>
  );
}

export default HomeTab;
