import React from 'react';

const Table = () => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
          </tr>
          <tr>
            <td>column 1 - Row A data </td>
            <td>column 2 - Row A data</td>
            <td>column 3 - Row A data</td>
          </tr>
          <tr>
            <td>column 1 - Row B data </td>
            <td>column 2 - Row B data</td>
            <td>column 3 - Row B data</td>
          </tr>
          <tr>
            <td>column 1 - Row C data </td>
            <td>column 2 - Row C data</td>
            <td>column 3 - Row C data</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
