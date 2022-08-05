import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ItemsTable from "./ItemsTable";
import ResourceHead from "./ResourceHead";
import SearchBar from "./SearchBar";
import SortIcon from "./SortIcon";

function Resource() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [itemsArr, setItemsArr] = useState([]);
  useEffect(() => {
    fetch(
      `https://media-content.ccbp.in/website/react-assignment/resource/${id}.json`
    )
      .then((response) => response.json())
      .then((actualData) => {
        return (
          setData({ ...actualData }), setItemsArr(actualData.resource_items)
        );
      });
  }, [id]);

  function handleSearch(searchKey) {
    console.log(searchKey);
    searchKey = searchKey.toUpperCase();
    function searchMatch(element) {
      console.log(element.title);
      const string = element.title.toUpperCase();
      const matchedArr = string.match(searchKey);
      console.log(matchedArr);
      return matchedArr !== null;
    }
    const searchedArr = itemsArr.filter(searchMatch);
    console.log(searchedArr);
    setItemsArr(searchedArr);
  }
  function handleSort(event) {
    let sortArr = itemsArr;
    if (event.target.value === "asc") {
      console.log("asc");
      sortArr.sort((a, b) => {
        let fa = a.title.toLowerCase(),
          fb = b.title.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
    } else if (event.target.value === "dsc") {
      console.log("dsc");
      sortArr.sort((a, b) => {
        let fa = a.title.toLowerCase(),
          fb = b.title.toLowerCase();

        if (fa < fb) {
          return 1;
        }
        if (fa > fb) {
          return -1;
        }
        return 0;
      });
    } else if (event.target.value === "recent") {
      console.log("recent");
      sortArr.sort(function (a, b) {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
    }
    setItemsArr([...sortArr]);
  }

  if (Object.keys(data).length === 0)
    return (
      <div>
        <h2>Loading data for resource/{id}.....</h2>
      </div>
    );

  return (
    <div>
      <ResourceHead data={data} />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h4>Items</h4>
        </div>
        <div style={{ display: "flex" }}>
          <SearchBar handleSearch={handleSearch} />
          <SortIcon handleSort={handleSort} />
        </div>
      </div>
      <ItemsTable currentItems={itemsArr} />
      <div
        className="functions"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div>
          <Link to={`/resource/${id}/add`}>
            <button>Add Item</button>
          </Link>
          <button>Delete Item</button>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Resource;
