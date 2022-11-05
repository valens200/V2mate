import React from 'react'
import Navigation from '../components/Navigation'
import { TextField } from '@material-ui/core'
import Shares from '../components/Shares'
import Footer from '../components/Footer'
import { steps } from '../assets/pagesData/data'
import { actions } from '../assets/pagesData/data'
import Video from '../components/Video'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'

function Home(): JSX.Element {
  const url = useSelector((store: RootState) => store.url.url);
  const videoUrl =  "https://youtube.com/embed/" + url.substring(url.length - 11);
  const showDownload = useSelector((store : RootState) => store.url.showDownload);

  const getClass =  () : string => {
    if(showDownload){
      return "g-white p-2 border  border-[grey] border-t-0 ";
    }else{
      return "g-white p-2 border  border-[grey] border-t-0  invisible";
    }
  }
  return (
    <div className=''>
      <div className=" w-[90%] md:w-[50%] mx-auto  h-screen ">
        <div className=" h-[90%] w-[100%]">
          <div className=''>
            <Navigation />
          </div>
          <div className='h-[100%]'>
            <Video />
            <div  className='bg-white p-2 border  border-[grey] border-t-0 '>
              <div className='flex  border justify-center md:w-[80%] w-[100%] mx-auto  space-x-10'>
                <iframe className='h-[30%] w-[50%]'
                  src={videoUrl}>
                </iframe>
                <div className='flex w-[50%] items-center'>
                  <button className='bg-[green] text-white text-center md:w-[40%] w-[90%]  h-[25%] rounded font-bold'>Download</button>
                </div>

              </div>
            </div>
            <div className=' text-start md:text-center  flex flex-col space-y-8'>
              <h1 className='font-bold mb-4 mt-10 text-[1.9rem] '>Y2mate.com - YouTube Video Downloader</h1>
              <div className='mt-3  flex flex-col space-y-2'>
                <p>Y2mate lets you to convert & download video from YouTube in HD quality. Y2mate supports downloading all</p>
                <p>video and audio formats such as: MP4, M4V, 3GP, WMV, FLV, MO, MP3, WEBM, etc. You can easily</p>
                <p>download for free thousands of videos from YouTube and other websites.</p>
              </div>
              <div className='md:w-[80%] w-[90%] mx-auto mt-4 h-[10%]  border-b-2 border-t-0 border-x-0 border-b-[#dcdfe4] '></div>
            </div>
            < div className='mt-10  w-[80%] mx-auto flex flex-col space-y-4'>
              <h1 className='text-[1.5rem]'>Steps to convert and download YouTube videos</h1>
              {steps.map((step, index) => (
                <p key={index}>{index + 1 + "." + step}</p>
              ))}
            </div>
            <div className='md:w-[80%] w-[90%] mx-auto mt-4 h-[10%]  border-b-2 border-t-0 border-x-0 border-b-[#dcdfe4] '></div>
            <div className='md:w-[80%] w-[90%]  h-[40vh] md:h-[25vh]  items-center  p-2 border justify-between  flex flex-col md:flex-row md:space-y-0 space-y-7  mx-auto mt-4 '>
              {actions.map((action, index) => (
                <div key={index} className='text-center'>
                  <p className='font-bold text-[#c10841] text-[1.3rem]'>{action.name}</p>
                  <p>{action.description1}</p>
                  <p>{action.description2}</p>
                </div>
              ))}
            </div>
            <div className='w-[100%] h-[10vh] border-x-0 footer border  border-t-2 border-[#dcdfe4] border'>
              <Footer />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home