import React from "react";

function ResourceHead({ data, logOut }) {
  return (
    <div className="description">
      <button onClick={logOut}>Resource</button>
      <img src={data.icon_url} alt="" width={"60px"} />
      {data.title}
      <a href={data.link} target={"_blank"} rel="noreferrer">
        {data.link}
      </a>
      {data.description}
      <button className="btn btn-primary">Update</button>
    </div>
  );
}

export default ResourceHead;
