import React from 'react'
import { shareSite } from '../assets/pagesData/data'
function Shares() {
  return (
    <div className='flex w-[100%] flex-row space-x-8 mt-8'>
        {shareSite.map((site, index) => (
            <div className='border w-[35%] text-center rounded p-4'>
                <p>{site.name}</p>
            </div>
        ))}
    </div>
  )
}

export default Shares