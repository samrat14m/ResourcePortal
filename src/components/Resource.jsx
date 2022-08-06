import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import ItemsTable from "./ItemsTable";
import ResourceHead from "./ResourceHead";
import SearchBar from "./SearchBar";
import SortIcon from "./SortIcon";
import ReactPaginate from "react-paginate";
import Loading from "./Loading";

function Resource() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [itemsArr, setItemsArr] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [isPending, setIsPending] = useState(true);

  let checkboxIdArr = [];
  const [deleteBtnDisabled, setDeleteBtnDisabled] = useState(true);

  /** creating varialbles for pagination */
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

  /**Fetching data from API */
  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `https://media-content.ccbp.in/website/react-assignment/resource/${id}.json`
      )
        .then((res) => res.json())
        .then((actualData) => {
          return (
            setData({ ...actualData }),
            setItemsArr(actualData.resource_items),
            setIsPending(false)
          );
        })
        .catch((e) => console.error(e));
    };
    const timer = setTimeout(() => {
      fetchData();
    }, 1500);

    return () => clearTimeout(timer);
  }, [id]);

  /** Implementing the search */
  function handleSearch(searchKey) {
    searchKey = searchKey.toUpperCase();

    function searchMatch(element) {
      const string = element.title.toUpperCase();
      const matchedArr = string.match(searchKey);
      return matchedArr !== null;
    }
    const searchedArr = itemsArr.filter(searchMatch);
    console.log(searchedArr);
    setItemsArr(searchedArr);
  }

  // sort functionality
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
  // delete functionality
  function deleteItemsById() {
    console.log("i m working");
    const checkboxIdSet = new Set(checkboxIdArr);
    const newArr = itemsArr.filter((element) => {
      return !checkboxIdSet.has(element.id);
    });
    setItemsArr(newArr);
  }

  // creating a list of checkbox ids for deleting
  function checkBoxClick(event, id) {
    console.log(event.target.checked, id);
    const checked = event.target.checked;

    if (checked) checkboxIdArr = [...checkboxIdArr, id];
    else checkboxIdArr = checkboxIdArr.filter((element) => element !== id);

    console.log(checkboxIdArr);

    if (checkboxIdArr.length === 0) setDeleteBtnDisabled(true);
    else setDeleteBtnDisabled(false);
  }

  // conditional rendering for the addItem button
  function addItemBtn() {
    if (deleteBtnDisabled) {
      return (
        <Link to={`/resource/${id}/add`}>
          <button className="addBtn" disabled={!deleteBtnDisabled}>
            ADD ITEM
          </button>
        </Link>
      );
    } else {
      return (
        <button className="addBtn" disabled={!deleteBtnDisabled}>
          ADD ITEM
        </button>
      );
    }
  }

  // function for navigating back
  let navigator = useNavigate();
  function goBack() {
    navigator("/resource");
  }

  // conditional rendering for loading screen
  if (isPending) return <Loading message={"Loading..."} />;
  return (
    <div>
      <ResourceHead data={data} goBack={goBack} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "1rem",
        }}
      >
        <div>
          <h3>Items</h3>
        </div>
        <div style={{ display: "flex" }}>
          <SearchBar handleSearch={handleSearch} />
          <SortIcon handleSort={handleSort} />
        </div>
      </div>
      <ItemsTable
        currentItems={displayItems}
        handleCheckBoxClick={checkBoxClick}
      />
      <div className="bottombuttons">
        <div
          className="functions"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div>
            {addItemBtn()}
            <button
              className="deleteBtn"
              onClick={deleteItemsById}
              disabled={deleteBtnDisabled}
            >
              DELETE
            </button>
          </div>
        </div>
        <div className="paginateBtns">
          <ReactPaginate
            previousLabel={"<<"}
            nextLabel={">>"}
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
