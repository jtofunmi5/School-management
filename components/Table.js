'use client'

const Table = ({ columns, data = [] }) => {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr className="text-left text-gray-500 text-sm">
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





