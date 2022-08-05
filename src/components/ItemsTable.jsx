import React from "react";
function ItemsTable({ currentItems }) {
  return (
    <div className="tableContainer">
      <table className="table table hover">
        <tr>
          <td></td>
          <td>TITLE</td>
          <td>DESCRIPTION</td>
          <td>LINK</td>
        </tr>
        <tbody>
          {currentItems.map((element) => {
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
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ItemsTable;
