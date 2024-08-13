import { useTable } from "react-table";
import React, { useMemo } from "react";
import "./table.css";

const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Stock price",
    accessor: "stockPrice",
  },
  {
    Header: "Extra price",
    accessor: "extraPrice",
  },
  {
    Header: "Provider",
    accessor: "provider",
  }
];

const copyTable = () => {
  const elTable = document.querySelector("table");

  let range, sel;

  // Ensure that range and selection are supported by the browsers
  if (document.createRange && window.getSelection) {
    range = document.createRange();
    sel = window.getSelection();
    // unselect any element in the page
    sel.removeAllRanges();

    try {
      range.selectNodeContents(elTable);
      sel.addRange(range);
    } catch (e) {
      range.selectNode(elTable);
      sel.addRange(range);
    }

    document.execCommand("copy");
  }

  sel.removeAllRanges();

  console.log("Element Copied! Paste it in a file");
};

const BasicTable = ({ resultArr }) => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => resultArr, []);

  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <>
      <h4
        onClick={() => {
          copyTable();
        }}
      >
        ❐ Copy
      </h4>

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default BasicTable;
