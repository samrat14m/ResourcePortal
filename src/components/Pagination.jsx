import React from "react";
function Pagination({ itemsPerPage, totalItems, paginate }) {
  const itemNumbers = [];
  for (let i = 0; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    totalItems.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {itemNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
