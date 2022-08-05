import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [admin] = useState({
    phoneNumber: "9191919191",
    password: "adminlogin",
  });

  function handleSubmit(e) {
    e.preventDefault();
    let authentication = false;

    let userId = e.target[0].value;
    let key = e.target[1].value;
    authentication =
      userId === admin.phoneNumber && key === admin.password ? true : false;
    console.log(authentication);
    if (authentication) {
      navigate("/resource");
    } else {
      alert("please provide correct phone no./password");
      navigate("/");
    }
  }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label for="phone_number">Enter your Phone No.</label>
          <input
            type="text"
            name="phone_number"
            id="phone_number"
            className="form-control mb-3"
            required="true"
          />
          <label for="password">Enter Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control mb-3"
            required="true"
          />
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
