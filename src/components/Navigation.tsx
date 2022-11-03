import React from 'react'
import { navData } from '../assets/pagesData/data'
function Navigation() {
  return (
    <div className='flex sticky top-0 bg-white  flex-row items-center border-b p-4 justify-center space-x-10'>
      <div className='font-bold text-[2rem]'>
        <p className='text-[grey]'>V2mate</p>
      </div>
      <ul className='flex flex-row  justify-center space-x-5'>
        {navData.map((nav, index) => (
        <li key={index}>{nav.name}</li>
      ))}
      </ul>

    </div>
  )
}

export default Navigation