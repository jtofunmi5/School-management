'use client'
import React, { useState, } from 'react'
import Searchbar from "@/components/ui/searchbar"
import { FaPlus, FaSortAmountDownAlt } from 'react-icons/fa'
import { MdOutlineSettingsInputComposite } from 'react-icons/md'
import ReactPaginate from 'react-paginate'
import Table from '@/components/Table'
import { parentsData } from '@/lib/data'

 


 const columns = [
    {
        header: "Info",
        accessor: "name",
        cell: (item) => (
            <div className="flex items-center gap-3">
                {/* <img 
                    src={item.photo || '/avatar.png'} 
                    alt="" 
                    className="w-10 h-10 rounded-full object-cover" 
                /> */}
                <div className="flex flex-col">
                    <span className="font-semibold">{item.name}</span>
                    <span className="text-xs text-gray-500">{item.email}</span>
                </div>
            </div>
        ),
    },

    {
        header:"Parent ID",
        accessor:"id",
        className:"hidden md:table-cell",
    },
       
    {
      header: "Students",
      accessor: "students",
      cell: (item) => <span>{item.students.join(", ")}</span>,
    },

    
    {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },

    {
        header:"Address",
        accessor:"address",
        className:"hidden lg:table-cell"
    },
    

    {
        header:"Actions",
        accessor:"action",
        
    },

    
 ];




const parentsListPage = () => {

const [currentPage, setCurrentPage] = useState(0);
const itemsPerPage = 5;
const startIndex = currentPage * itemsPerPage;
const endIndex = startIndex + itemsPerPage;

const paginatedData = parentsData.slice(startIndex, endIndex);

  return (
    <div className='  rounded-md flex-1 m-3 mt-0'>
        <div className='flex  justify-center md:justify-between  items-center p-6 '>
           <h1 className='hidden md:block text-lg font-semibold'>All Parent</h1>
        
        <div className='flex flex-col  md:flex-row   items-center gap-4 w-full md:w-auto'>
           <div className=' w-full'>
            <Searchbar />
           </div>

           <div className="flex items-center gap-4 self-end">
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-300">
              <MdOutlineSettingsInputComposite className="text-base" />
             </button>
           <button className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-300">
              <FaSortAmountDownAlt className="text-sm" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-300">
            <FaPlus className="text-sm" />
           </button>
         </div>
        </div>
         </div>

              {/* <Table columns={studentColumns} data={studentsData} /> */}

                 <Table columns={columns} data={paginatedData} />
                  
            <div className="flex justify-center mt-10">
               <ReactPaginate
                pageCount={Math.ceil(parentsData.length / itemsPerPage)}
                onPageChange={(event) => setCurrentPage(event.selected)}
                containerClassName="flex items-center gap-2"
                pageLinkClassName="px-3 py-1.5 border border-gray-300 rounded-md hover:bg-gray-100 cursor-pointer block"
                activeLinkClassName="bg-zinc-900 text-white border-zinc-900 hover:bg-zinc-800"
                previousLinkClassName="px-4 py-1.5 border border-gray-300 rounded-md hover:bg-gray-100 cursor-pointer font-medium block"
                nextLinkClassName="px-4 py-1.5 border border-gray-300 rounded-md hover:bg-gray-100 cursor-pointer font-medium block"
               disabledLinkClassName="opacity-50 cursor-not-allowed hover:bg-transparent"
             />
           </div>
    </div>
  )
};

export default parentsListPage;