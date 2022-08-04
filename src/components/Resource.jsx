import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Resource() {
  const { resourceId } = useParams();
  const id = resourceId.charAt(resourceId.length - 1);
  //console.log(resourceId, id);

  useEffect(() => {
    fetch(
      `https://media-content.ccbp.in/website/react-assignment/resource/${id}.json`
    )
      .then((response) => response.json())
      .then((actualData) => console.log({ ...actualData }));
  }, [id]);

  return <div>hello</div>;
}

export default Resource;
