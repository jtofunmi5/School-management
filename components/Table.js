'use client'

const Table = ({ columns }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index} className={col.className}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* Render your rows using col.accessor */}
      </tbody>
    </table>
  );
};

export default Table;
