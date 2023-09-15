import React from 'react';

const Table = ({ tableHeadings, tableRows }) => {
  // - Renders table rows with table data children
  const renderTableDataRows = (tableRows) => {
    let tableDataToRender = [];
    for (let i = 0; i < tableRows.length; i++) {
      let tableData = tableRows[i].map((tableData, index) => (
        <td key={index}>{tableData}</td>
      ));
      tableDataToRender = [...tableDataToRender, tableData];
    }
    return tableDataToRender.map((data, index) => <tr key={index}>{data}</tr>);
  };

  return (
    <>
      <table>
        <tbody>
          <tr>
            {tableHeadings.map((heading, index) => (
              <th key={index}>{heading}</th>
            ))}
          </tr>
          <>{renderTableDataRows(tableRows)}</>
        </tbody>
      </table>
    </>
  );
};

export default Table;
