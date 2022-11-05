import React from 'react'
import { navData } from '../assets/pagesData/data'
function Navigation() {
  return (
    <div className='flex z-20 sticky top-0  flex-row items-center  p-4 justify-center space-x-10'>
      <div className='flex  items-center  space-x-4 flex-row text-[2rem]'>
        <img className='w-[19%] h-[40%] ' src="https://www.y2mate.com/themes/images/logo.png" />
        <p className='hover:text-[red] font-bold text-[1.5rem] hover:cusor-pointer'>V2mate.com</p>
      </div>
      <ul className='md:flex hidden   hover:rounded h-[5vh] flex-row  justify-center space-x-5'>
        {navData.map((nav, index) => (
        <li className='h-[100%] p-3 hover:cursor-pointer  hover:text-[red]  hover:bg-[#dcdfe4]' key={index}>{nav.name}</li>
      ))}
      </ul>

    </div>
  )
}

export default Navigation