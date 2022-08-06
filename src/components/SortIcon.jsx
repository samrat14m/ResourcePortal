import React from "react";
import sortLogo from "../assets/Icon.png";
function SortIcon({ handleSort }) {
  return (
    <div className="sort" style={{ marginTop: "-5px" }}>
      <div className="btn btn-group buttongroup">
        <button
          type="button"
          className="btn btn-secondary dropdown-toggle buttondropdown"
          data-bs-toggle="dropdown"
          data-bs-display="static"
          aria-expanded="false"
        >
          <img src={sortLogo} alt="" /> SORT
        </button>
        <ul className="dropdown-menu dropdown-menu-lg-end">
          <li>
            <button
              className="dropdown-item"
              type="button"
              value="asc"
              onClick={handleSort}
            >
              Ascending
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              type="button"
              value="dsc"
              onClick={handleSort}
            >
              Descending
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              type="button"
              value="recent"
              onClick={handleSort}
            >
              Recently Added
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SortIcon;
