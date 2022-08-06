import React, { useState, useEffect } from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";
import ReactPaginate from "react-paginate";
import HomeTab from "./HomeTab";
import Loading from "./Loading";

function Home() {
  const [arr, setArr] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 6;
  const pagesVisited = pageNumber * itemsPerPage;
  const displayItems = arr.slice(pagesVisited, pagesVisited + itemsPerPage);
  const pageCount = Math.ceil(arr.length / itemsPerPage);

  /**Fetching data from API */
  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `https://media-content.ccbp.in/website/react-assignment/resources.json`
      )
        .then((res) => res.json())
        .then((actualData) => setArr(actualData))
        .catch((e) => console.error(e));
    };

    const timer = setTimeout(() => {
      fetchData();
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  /** search implementation */
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

    const searchedArr = arr1.filter(searchMatch);
    console.log(searchedArr);
    setArr(searchedArr);
  }

  /** for displaying resources based on  */
  function handleResourceUpdate(event) {
    const newArr = arr.filter((element) => {
      return element.tag === event.target.value;
    });
    setArr(newArr);
  }

  /**conditonal rendering for loading screen */
  if (arr.length === 0) return <Loading />;

  return (
    <div className="Home">
      <HomeTab data={arr} handleResourceUpdate={handleResourceUpdate} />
      <SearchBar handleSearch={handleSearch} />
      <div className="cardContainer">
        {displayItems.map((element) => {
          return (
            <div className="card" key={element.id}>
              <Card card={element} />
            </div>
          );
        })}
      </div>
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
  );
}

export default Home;
