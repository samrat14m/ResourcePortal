import React from "react";
import sortLogo from "../assets/Icon.png";
function SortIcon({ handleSort }) {
  return (
    <div className="sort">
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
              value="asc"
              onClick={handleSort}
            >
              Ascending
            </button>
          </li>
          <li>
            <button
              class="dropdown-item"
              type="button"
              value="dsc"
              onClick={handleSort}
            >
              Descending
            </button>
          </li>
          <li>
            <button
              class="dropdown-item"
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
