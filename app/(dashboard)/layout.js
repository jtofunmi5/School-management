import Link from 'next/link'
import React from 'react'
import Menu from '../../components/Menu'
import Navbar from '@/components/Navbar'

const layout = ({ children }) => {

  return (
    <div className='h-screen flex'>
       {/* left */}
    <div className='w-16 md:w-40 lg:w-45 bg-red-200 p-4 flex flex-col justify-between overflow-y-auto'>
      <div>
        <Link href="/" className='flex items-center justify-center lg:justify-start gap-2'>
          <img src="/logo.png" alt="logo" width={32}/>
          <span className='hidden lg:block font-bold'>Jtofunmi Institution</span>
        </Link>

        <Menu />
      </div>

  
    </div>
     
      <div className='flex flex-col flex-1'>
        <Navbar />
     <div className='flex-1 bg-white p-4 overflow-y-auto'>
       {children}
     </div>
      </div>    
</div>  
  )
}

export default layout