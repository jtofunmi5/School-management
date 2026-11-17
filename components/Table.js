'use client'

const Table = ({ columns, data = [] }) => {
  return (
    <table className=" w-full mt-5 ">
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
        {data.map((item, rowIndex ) => (
          <tr
           key={item.id || rowIndex}
           className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purple-50"
          >
           {columns.map ((col, colIndex) => (
              <td key={colIndex} className={`p-7 ${col.className}`}>
                {col.cell ? (
                  col.cell(item)
                ) :  col.accessor === 'action' ? ( 
             <div className="flex items-center gap-2">
                 <button className="px-2 py-1 bg-blue-50 text-blue-600 rounded">Edit</button>
                  <button className="px-2 py-1 bg-red-50 text-red-600 rounded">Delete</button>
               </div>
             ) : (
                Array.isArray(item[col.accessor])
                  ? item[col.accessor].join(",")

                  : item[col.accessor]
              )}  
              </td>
           ))}

          </tr>         
          ))}
          
      </tbody>
    </table>
  );
};

export default Table;





