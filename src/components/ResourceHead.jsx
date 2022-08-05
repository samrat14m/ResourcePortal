import React from "react";

function ResourceHead({ data }) {
  return (
    <div className="description">
      <img src={data.icon_url} alt="" width={"60px"} />
      {data.title}
      <a href={data.link}>{data.link}</a>
      {data.description}
      <button>Update</button>
    </div>
  );
}

export default ResourceHead;
