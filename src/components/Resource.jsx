import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import searchLogo from "../assets/search.png";
import sortLogo from "../assets/Icon.png";
function Resource() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [itemsArr, setItemsArr] = useState([]);
  const [searchInput, setSearchInput] = useState("");
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

  function handleChange(event) {
    console.log(event.target.value);
    setSearchInput(event.target.value);
  }
  function handleSearch() {}

  function handleSort() {}

  if (Object.keys(data).length === 0)
    return (
      <div>
        <h2>Loading data for resource/{id}.....</h2>
      </div>
    );

  return (
    <div>
      <div className="description">
        <img src={data.icon_url} alt="" width={"60px"} />
        {data.title}
        <a href={data.link}>{data.link}</a>
        {data.description}
      </div>
      <button>Update</button>
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h4>Items</h4>
        </div>
        <div style={{ display: "flex" }}>
          <div className="searchBar">
            <img
              src={searchLogo}
              alt=""
              onClick={() => {
                handleSearch(searchInput);
              }}
            />
            <input
              name="searchInput"
              type="text"
              placeholder="Search"
              value={searchInput}
              onChange={handleChange}
            />
          </div>
          <div className="sort">
            {" "}
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-secondary dropdown-toggle"
                data-bs-toggle="dropdown"
                data-bs-display="static"
                aria-expanded="false"
              >
                <img src={sortLogo} alt="" /> Sort
              </button>
              <ul class="dropdown-menu dropdown-menu-lg-end">
                <li>
                  <button
                    class="dropdown-item"
                    type="button"
                    onClick={handleSort}
                  >
                    Ascending
                  </button>
                </li>
                <li>
                  <button
                    class="dropdown-item"
                    type="button"
                    onClick={handleSort}
                  >
                    Descending
                  </button>
                </li>
                <li>
                  <button
                    class="dropdown-item"
                    type="button"
                    onClick={handleSort}
                  >
                    Recently Added
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="tableContainer">
        <table className="table table hover">
          <tr>
            <td></td>
            <td>TITLE</td>
            <td>DESCRIPTION</td>
            <td>LINK</td>
          </tr>
          <tbody>
            {itemsArr.map((element) => {
              if (data.resource_items !== null) {
                return (
                  <tr key={element.id}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>{element.title}</td>
                    <td>{element.description.slice(0, 100) + "......"}</td>
                    <td>
                      <a href={element.link}>{element.link}</a>
                    </td>
                  </tr>
                );
              }
              return <div>empty list</div>;
            })}
          </tbody>
        </table>
      </div>
      <div
        className="functions"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div>
          <button>Add Item</button>
          <button>Delete Item</button>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Resource;
