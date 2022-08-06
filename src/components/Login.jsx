import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();
  const admin = {
    phoneNumber: "9191919191",
    password: "adminlogin",
  };

  function handleSubmit(e) {
    e.preventDefault();
    let authentication = false;

    let userId = e.target[0].value;
    let key = e.target[1].value;
    authentication =
      userId === admin.phoneNumber && key === admin.password ? true : false;
    console.log(authentication);
    if (userId.length !== 10) {
      toast.error("Enter a 10 digit phone number", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/");
    } else {
      if (authentication) {
        toast.success("Logged In", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate("/resource");
      } else {
        toast.error("Bad Credentials!! Try Again", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate("/");
      }
    }
  }
  return (
    <div>
      <form className="loginform" onSubmit={handleSubmit}>
        <div>
          <label for="phoneNumber">Enter your Phone No.</label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            required="true"
            className="form-control mb-3"
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
