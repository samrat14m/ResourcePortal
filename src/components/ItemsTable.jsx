import React from "react";
function ItemsTable({ currentItems, handleCheckBoxClick }) {
  return (
    <div className="tableContainer">
      <table className="table table hover">
        <thead>
          <tr>
            <td></td>
            <td>TITLE</td>
            <td>DESCRIPTION</td>
            <td>LINK</td>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((element) => {
            return (
              <tr key={element.id}>
                <td>
                  <input
                    type="checkbox"
                    onClick={(event) => {
                      handleCheckBoxClick(event, element.id);
                    }}
                  />
                </td>
                <td>{element.title}</td>
                <td>{element.description.slice(0, 100) + "......"}</td>
                <td>
                  <a href={element.link} target={"_blank"} rel="noreferrer">
                    {element.link}
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ItemsTable;
