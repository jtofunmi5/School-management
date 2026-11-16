'use client'
import React from 'react'
import Searchbar from "../../../components/ui/searchbar"
import { teachersData } from '@/lib/data' 
import { FaPlus, FaSortAmountDownAlt } from 'react-icons/fa'
import { MdOutlineSettingsInputComposite } from 'react-icons/md'
import ReactPaginate from 'react-paginate'
import Table from '@/components/Table'


 const columns = [
    {
        header:"Info",
        accessor:"info",
    },

    {
        header:"Teacher ID",
        accessor:"teacherId",
        className:"hidden md:table-cell",
    },

    {
        header:"Subjects",
        accessor:"subjects",
        className:"hidden md:table-cell",
    },

    {
        header:"Classes",
        accessor:"classes ",
        className:"hidden md:table-cell",
    },

    {
        header:"Phone",
        accessor:"phone",
        className:"hidden lg:table-cell"
    },

    {
        header:"Address",
        accessor:"address",
        className:"hidden lg:table-cell"
    },

    {
        header:"Actions",
        accessor:"action",
        
    }
 ];


const TeachersListPage = () => {
  return (
    <div className='  rounded-md flex-1 m-3 mt-0'>
        <div className='flex  justify-center md:justify-between  items-center p-2 '>
           <h1 className='hidden md:block text-lg font-semibold'>All Teachers</h1>
        
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
              <Table columns={columns} />

                  {/* pagination */}
            <div className='flex border-1 bg-amber-100 border-zinc-950 justify-center'>
                <ReactPaginate
                  pageCount={10}
                   onPageChange={(event) => console.log(event.selected + 1)}
                   containerClassName="flex gap-4"
            />
            </div>
    </div>
  )
};

export default TeachersListPage;