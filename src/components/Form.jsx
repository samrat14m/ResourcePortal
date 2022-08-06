import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Form() {
  /**creating state variables */
  const [formValues, setFormValues] = useState({
    name: "",
    link: "",
    resource: "",
    description: "",
  });

  /***filling the form values */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  /*** submit the form */
  const handleSubmit = (e) => {
    e.preventDefault();
    const errCount = validate(formValues);
    if (errCount === 0) {
      successToastGenrator("Form Validation Successful");
      postData(formValues);
    }
  };

  /**  function for posting data to api  */
  async function postData(data) {
    await fetch(
      "https://media-content.ccbp.in/website/react-assignment/add_resource.json",
      {
        mode: "no-cors",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          successToastGenrator("Item Added Succesfully");
        }
        if (res.status === 403) {
          errorToastGenrator(
            "Server Understood the request but refuses to authorize"
          );
        }
      })
      .catch((e) =>
        errorToastGenrator(`Error in Form Submition \n ${e.message}`)
      );
  }

  /** toast generalised function */
  const errorToastGenrator = (message) => {
    toast.error(message, {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  /** */
  const successToastGenrator = (message) => {
    toast.success(message, {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  /***  validation function*/
  const validate = (values) => {
    let errorsCount = 0;
    const regexLink =
      /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/;
    if (values.name.length > 12 || values.name.length < 4) {
      errorToastGenrator("Item Name should be in (4-12) characters");
      errorsCount++;
    }
    if (values.description.length > 50 || values.description.length < 15) {
      errorToastGenrator("Enter a description between (15-50) words");
      errorsCount++;
    }
    if (!regexLink.test(values.link)) {
      errorToastGenrator("Please Provide a valid link");
      errorsCount++;
    }
    if (values.resource.length > 12 || values.resource.length < 4) {
      errorToastGenrator("Enter a item name between (4-12)");
      errorsCount++;
    }
    return errorsCount;
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
        </div>

        <button type="submit" className="updatebtn">
          CREATE
        </button>
      </form>
    </div>
  );
}

export default Form;
