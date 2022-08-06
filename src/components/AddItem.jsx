import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
//import image from "../assets/image.png";
function AddItem() {
  const initialValues = { name: "", link: "", resource: "", description: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  /****navigating to the resource page */
  let id = useParams();
  let navigator = useNavigate();
  function goBack() {
    navigator(`/resource/${id.id}`);
  }
  /***filling the form values */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  /*** submit the form */
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  /** posting data to api and getting response */
  function postData(data) {
    fetch(
      "https://media-content.ccbp.in/website/react-assignment/add_resource.json",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  }
  /** final submit once the formErrors Object is empty*/
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      //postData(formValues);
    }
  }, [formErrors]);

  /***  validation function*/
  const validate = (values) => {
    const errors = {};
    const regexLink =
      /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/;
    if (values.name.length > 12 || values.name.length < 4) {
      errors.name = "Enter a item name between (4-12)";
    }
    if (values.description.length > 50 || values.description.length < 15) {
      errors.description = "Enter a description between (15-50) words";
    }
    if (!regexLink.test(values.link)) {
      errors.link = "Please Provide a valid link";
    }
    if (values.resource.length > 12 || values.resource.length < 4) {
      errors.resource = "Enter a item name between (4-12)";
    }
    return errors;
  };

  return (
    <div className="AddItem1">
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
              name="name"
              value={formValues.name}
              onChange={handleChange}
            />
          </div>
          <p style={{ color: "red" }}>{formErrors.name}</p>
          <div class="mb-3">
            <label for="link" class="form-label">
              LINK
            </label>
            <input
              type="text"
              class="form-control"
              id="link"
              name="link"
              required={true}
              value={formValues.link}
              onChange={handleChange}
            />
            <p style={{ color: "red" }}>{formErrors.link}</p>
          </div>
          <div class="mb-3">
            <label for="resource_page" class="form-label">
              RESOURCE PAGE
            </label>
            <input
              type="text"
              className="form-control"
              id="resource_page"
              name="resource"
              required={true}
              value={formValues.resource}
              onChange={handleChange}
            />
            <p style={{ color: "red" }}>{formErrors.resource}</p>
          </div>
          <div className="mb-3">
            <label for="description" class="form-label">
              DESCRIPTION
            </label>
            <input
              type="textarea"
              rows="100"
              columns="500"
              id="description"
              name="description"
              required={true}
              value={formValues.description}
              onChange={handleChange}
            />
          </div>
          <p style={{ color: "red" }}>{formErrors.description}</p>
          <button type="submit" className="btn btn-primary">
            CREATE
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddItem;
