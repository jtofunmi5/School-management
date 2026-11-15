'use client'
import React from 'react'
import Searchbar from "../../../components/ui/searchbar"
import { TbFilter2Search } from 'react-icons/tb'
import { FaPlus, FaSortAmountDownAlt } from 'react-icons/fa'
import { MdOutlineSettingsInputComposite } from 'react-icons/md'
import ReactPaginate from 'react-paginate'


 const columns = [
    {
        header:"Subject",
        accessor:"subject",
        className:"hidden md:table-cell",
    },

    {
        header:"Classes",
        accessor:"subject",
        className:"hidden md:table-cell",
    },

    {
        header:"Phone",
        accessor:"subject",
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
        className:"hidden lg:table-cell"
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

           <div className='flex gap-3 self-end md:self-auto '>
            <span className='bg-amber-300 p-1.5 rounded-2xl'>
                <MdOutlineSettingsInputComposite  className=' text-lg rounded '/>
            </span>
              <span className='bg-amber-300 p-1 rounded-2xl'>
                <FaSortAmountDownAlt className='rounded text-lg' />
            </span >
            <span className='bg-amber-300 p-1 rounded-lg'>
                <FaPlus className='rounded text-xl'/>
            </span>
           </div>
        </div>
    </div>
              
            <div className='flex border-1 bg-amber-100 border-zinc-950 justify-center'>
                <ReactPaginate
                  pageCount={10}
                   onPageChange={(event) => console.log(event.selected + 1)}
                   containerClassName="flex gap-4"
            />
            </div>
    </div>
  )
}

export default TeachersListPage