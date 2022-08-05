import React from "react";

import { useNavigate, useParams } from "react-router-dom";
//import image from "../assets/image.png";
function AddItem() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  let id = useParams();
  let navigator = useNavigate();
  function goBack() {
    navigator(`/resource/${id.id}`);
  }

  return (
    <div className="AddItem">
      <button onClick={goBack}>Users</button>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h2>Item Details </h2>
          <div class="mb-3">
            <label for="item_name" class="form-label">
              ITEM NAME
            </label>
            <input
              type="text"
              class="form-control"
              id="item_name"
              required={true}
            />
          </div>
          <div class="mb-3">
            <label for="link" class="form-label">
              LINK
            </label>
            <input type="text" class="form-control" id="link" required="true" />
          </div>
          <div class="mb-3">
            <label for="resource_page" class="form-label">
              RESOURCE PAGE
            </label>
            <input
              type="text"
              class="form-control"
              id="resource_page"
              required={true}
            />
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">
              DESCRIPTION
            </label>
            <input
              type="textarea"
              rows="100"
              columns="500"
              id="description"
              required={true}
            />
          </div>
          <button type="submit" class="btn btn-primary">
            CREATE
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddItem;
