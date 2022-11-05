import React from 'react'
import { footerLInks } from '../assets/pagesData/data'
function Footer() {
    return (
        <div className='p-4'>
            <div className='md:w-[100%] w-[100%] flex space-y-3 flex-col items-center mx-auto'>
                <p>&copy;2022 v2mate.com</p>
                <ul className='flex mt-10 h-[60%] flex-row space-x-4 justify-center '>
                    {footerLInks.map((link, index) => (
                        <li className='text-[grey] hover:cursor-pointer hover:underline' key={index}>{link}</li>
                    ))}
                </ul>
                <p className=' '>&copy; valens. dev All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer