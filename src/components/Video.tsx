import React from 'react'
import { setShowDownload, setUrl } from '../features/urlSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { RootState } from '../store'

function Video(): JSX.Element {
    const [download, setDownload] = useState(false);

    const dispatch = useDispatch();
    const url = useSelector((store: RootState) => store.url.url);
    if (url != "") {
        dispatch(setShowDownload);
    }

    const dispatchMethodes = (value: string): any => {
        dispatch(setUrl({ type: "initialize", value: value }))

    }
    return (
        <div className='md:h-[40%] h-[47%]  border-b-0  text-black border border-[grey] bg-white text-white  mt-4 border p-6 flex items-center flex-col  space-y-10  w-[100%] mx-auto items-center'>
            <h1 className='text-center text-black text-[1.2rem] md:text-[1.5rem]'>YouTube Downloader & Converter</h1>
            <p className='text-black '>Convert and download YouTube video to MP3, MP4, WAV, WEBM, ...</p>
            <div className='md:w-[80%]  w-[100%] border-[0.2rem] z-100 border border-[#ff0068] h-[20%]  md:h-[25%] flex    mx-auto '>
                <div className='h-[100%] border border-[#ff0068] w-[75%]'>
                    <input onChange={(e) => dispatchMethodes(e.target.value)} type="text" name="link" placeholder='Search or paste a link here' className='w-[100%]  text-black pl-2 focus:outline-0  h-[100%] border' id="" />
                </div>
                <div className='w-[30%] md:w-[25%] bg-[#ff0068] text-center text-white h-[100%]'>
                    <button onClick={() => {
                        console.log(url)
                    }} className='text-center w-[100%] text-center  px-4 text-white font-bold rounded-l-lg h-[100%]'>Download</button>
                </div>
            </div>
            <div className='w-[80%] mx-auto hidden  flex items-center justify-center border mt-10 h-[60%]'>
                <p className='text-white text-center '>Your video will appear here</p>
            </div>
            <p className=' text-[0.75rem] md:text-[0.80rem]  text-black text-start'>By using our service you are accepting our <span className='text-[red]'>Terms of use</span></p>
        </div>

    )
}

export default Video