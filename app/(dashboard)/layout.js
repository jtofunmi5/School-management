import Link from 'next/link'
import React from 'react'
import Menu from '../../components/Menu'

const layout = ({ children }) => {
  return (
    <div className='h-screen flex'>
       {/* left */}
    <div className='w-16 md:w-40 lg:w-50  bg-red-200 p-4'>
      <Link href="/" className='flex items-center justify-center lg:justify-start gap-2'>
      <img src="/logo.png" alt="logo" width={32}/>
      <span className='hidden lg:block font-bold'>SchoolLama</span>
      </Link>

      <Menu />
    </div>
     
     { children }

    {/* Right */}
    <div className='flex-1 bg-blue-50 p-4 overflow-y-auto'>R</div>
    
    </div>  
  )
}

export default layout

