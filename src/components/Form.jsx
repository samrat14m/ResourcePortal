import React, { useState, useEffect } from "react";
function Form() {
  /**creating state variables */
  const initialValues = { name: "", link: "", resource: "", description: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

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

  /**  function for posting data to api  */
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
      postData(formValues);
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
    <div className="addform">
      <form onSubmit={handleSubmit}>
        <div className="">
          <label for="item_name" className="">
            ITEM NAME
          </label>
          <input
            type="text"
            className=""
            id="item_name"
            required={true}
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{formErrors.name}</p>
        </div>
        <div className="">
          <label for="link" className="">
            LINK
          </label>
          <input
            type="text"
            className=""
            id="link"
            name="link"
            required={true}
            value={formValues.link}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{formErrors.link}</p>
        </div>
        <div className="">
          <label for="resource_name" className="">
            RESOURCE NAME
          </label>
          <input
            type="text"
            className=""
            id="resource_name"
            name="resource"
            required={true}
            value={formValues.resource}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{formErrors.resource}</p>
        </div>
        <div className="">
          <label for="description" className="">
            DESCRIPTION
          </label>
          <input
            className="textArea"
            type="text"
            id="description"
            name="description"
            required={true}
            value={formValues.description}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{formErrors.description}</p>
        </div>

        <button type="submit" className="updatebtn">
          CREATE
        </button>
      </form>
    </div>
  );
}

export default Form;
