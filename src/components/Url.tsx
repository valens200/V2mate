import React from 'react'
import ReactDOM from 'react-dom'
import { BiArrowToBottom } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { useEffect, useState } from 'react';
import { setShowPortal } from '../features/urlSlice';


function Url(): JSX.Element {
  const url = useSelector((store: RootState) => store.url.url);
  const url2 = useSelector((store: RootState) => store.url.resultUrl);
  const showPortal = useSelector((store: RootState) => store.url.showPortal);
  const dispatch = useDispatch();
  useEffect(() => {
    const disablePortal = () => {
      setTimeout(() => {
        dispatch(setShowPortal({ type: false }))
      }, 5000)
    }
    disablePortal();
  })

  return !showPortal ? <p>{null}</p> : ReactDOM.createPortal(<div className='md:h-[10vh] ml-[5%] w-[90%] md:w-[37%]  fixed top-0 md:ml-[31%]   md:ml-[36%] top-40  mx-auto bg-[#ff0068] rounded transition ease-in-out  hover:scale-104    text-white p-2'>
    <div className='flex w-[100%] mb-2  space-x-4'>
      <BiArrowToBottom className='text-[2rem] w-[10%] md:block hidden animate-bounce font-bold' />
      <p className='text-white w-[80%]'>Just copy and paste this url in browser's url to download the video</p>
      <BiArrowToBottom className='md:text-[2rem] w-[10%] text-[4rem] animate-bounce font-bold' />
    </div>
    <div className='text-white flex flex-row space-x-4 md:w-[90%] mx-auto'>
      <p className='md:w-[90%] border p-1'>{url2}</p>
      <button onClick={() => navigator.clipboard.writeText(url2)} className='bg-white text-black md:w-[10%] p-1 rounded'>Copy</button>
    </div>
  </div>, document.getElementById("url")!)
}

export default Url