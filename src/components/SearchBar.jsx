import React, { useState } from "react";
import searchLogo from "../assets/search.png";

function SearchBar({ handleSearch }) {
  const [searchInput, setSearchInput] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setSearchInput(event.target.value);
  }
  return (
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
  );
}

export default SearchBar;
