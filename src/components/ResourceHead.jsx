import React from "react";

function ResourceHead({ data, goBack }) {
  return (
    <>
      <button className="goback" onClick={goBack}>
        &lt; Resource
      </button>
      <div className="description">
        <div className="descriptionTop">
          <div className="descriptionImgContainer">
            <img src={data.icon_url} alt="" height={"60px"} />
          </div>
          <div className="namelink">
            <div>{data.title}</div>
            <a href={data.link} target={"_blank"} rel="noreferrer">
              {data.link}
            </a>
          </div>
        </div>
        <div>{data.description}</div>
        <button className="updatebtn">UPDATE</button>
      </div>
    </>
  );
}

export default ResourceHead;
