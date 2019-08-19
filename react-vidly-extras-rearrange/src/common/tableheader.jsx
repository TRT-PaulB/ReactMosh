import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = column => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.column === column) {
      // this is a direction change on the existing column sort
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
      sortColumn.column = column;
    } else {
      // this is a new column sort in ascending order
      sortColumn.order = "asc";
      sortColumn.column = column;
    }

    this.props.onSort(sortColumn); // THIS LINE PASSES BACK sortColumn via onSort function, relating to movies.handleSorting
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(column => (
            <th
              key={column.name || column.key}
              onClick={() => this.raiseSort(column.name)}
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
