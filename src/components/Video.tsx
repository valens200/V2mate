import React from 'react'
import { setShowDownload, setUrl } from '../features/urlSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { RootState } from '../store'
import { setShowDownloadDiv } from '../features/urlSlice'

function Video(): JSX.Element {
    const [download, setDownload] = useState(false);
    const [downloadDiv, showDownloadDiv] = useState(false);

    const dispatch = useDispatch();
    const url = useSelector((store: RootState) => store.url.url);

    if (url != "") {
        dispatch(setShowDownload);
    }

    const dispatchMethodes = (value: string): any => {
        dispatch(setUrl({ type: "initialize", value: value }))

    }

    const getClass = (): string => {
        if (downloadDiv) {
            return "g-white p-2 border  border-[grey] border-t-0 ";
        } else {
            return "g-white p-2 border  border-[grey] border-t-0  invisible";
        }
    }

    const sendUrl = async () => {
        setDownload(true);
        await fetch(`http://localhost:5000/app/url?id=${url.split("v=")[1]}`, {
            method: "GET"
        }).then(async (response) => {
            if (response.status == 200) {
                setTimeout(() => {
                    setDownload(false);
                    showDownloadDiv(true);
                    dispatch(setShowDownloadDiv({ type: "show" }))
                }, 3000)
                console.log(await response.json());
            }
        }).catch((error) => {
            console.log(error);
        })

    }
    return (
        <div className={download ? 'md:h-[46%] h-[47%]  border-b-0  text-black border border-[grey] bg-white text-white  mt-4 border p-6 flex items-center flex-col  space-y-10  w-[100%] mx-auto items-center' : 'md:h-[38%] h-[47%]  border-b-0  text-black border border-[grey] bg-white text-white  mt-4 border p-6 flex items-center flex-col  space-y-10  w-[100%] mx-auto items-center'} >
            <h1 className='text-center text-black text-[1.2rem] md:text-[1.5rem]'>YouTube Downloader & Converter</h1>
            <p className='text-black '>Convert and download YouTube video to MP3, MP4, WAV, WEBM, ...</p>
            <div className='md:w-[80%]  w-[100%] border-[0.2rem] z-100 border border-[#ff0068] h-[20%]  md:h-[50%] flex    mx-auto '>
                <div className='h-[100%] border border-[#ff0068] w-[75%]'>
                    <input onChange={(e) => dispatchMethodes(e.target.value)} type="text" name="link" placeholder='Search or paste a link here' className='w-[100%]  text-black pl-2 focus:outline-0  h-[100%] border' id="" />
                </div>
                <div className='w-[30%] md:w-[25%] bg-[#ff0068] text-center text-white h-[100%]'>
                    <button onClick={() => sendUrl()} className='text-center w-[100%] text-center  px-4 text-white font-bold rounded-l-lg h-[100%]'>Get the video</button>
                </div>
            </div>
            {download ? < img className='h-[10%]' src='https://www.y2mate.com/themes/images/loading.gif' /> : null}
            <p className=' text-[0.75rem] md:text-[0.80rem]  text-black text-start'>By using our service you are accepting our <span className='text-[red]'>Terms of use</span></p>
        </div>

    )
}

export default Video