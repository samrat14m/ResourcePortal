import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "./Form";
import image from "../assets/image.png";

function AddItem() {
  /****navigating to the resource page */
  let id = useParams();
  let navigator = useNavigate();
  function goBack() {
    navigator(`/resource/${id.id}`);
  }
  return (
    <div className="container" style={{ width: "96vw" }}>
      <div className="container-left">
        <div>
          <button className="goback" onClick={goBack}>
            &lt; Users
          </button>
        </div>
        <h3>Item Details </h3>
        <div className="formcontainer">
          <div className="blank"></div>
          <Form />
        </div>
      </div>
      <div
        className="container-right"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </div>
  );
}

export default AddItem;
