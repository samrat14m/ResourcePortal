import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ItemsTable from "./ItemsTable";
import ResourceHead from "./ResourceHead";
import SearchBar from "./SearchBar";
import SortIcon from "./SortIcon";
import ReactPaginate from "react-paginate";
function Resource() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [itemsArr, setItemsArr] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 6;
  const pagesVisited = pageNumber * itemsPerPage;
  const displayItems = itemsArr.slice(
    pagesVisited,
    pagesVisited + itemsPerPage
  );
  const pageCount = Math.ceil(itemsArr.length / itemsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

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
  function handleDelete() {}

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
      <ItemsTable currentItems={displayItems} />
      <div
        className="functions"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div>
          <Link to={`/resource/${id}/add`}>
            <button className="btn btn-success">Add Item</button>
          </Link>
          <button className="btn btn-danger" onClick={handleDelete}>
            Delete Item
          </button>
        </div>
        <div>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBtns"}
            previousLinkClassName={"prevBtn"}
            nextLinkClassName={"nextBtn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
      </div>
    </div>
  );
}

export default Resource;
