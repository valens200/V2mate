import React from 'react'
import Navigation from '../components/Navigation'
import { TextField } from '@material-ui/core'
import Shares from '../components/Shares'
function Home(): JSX.Element {

  return (
    <div className="w-[50%] mx-auto  h-screen flex items-center">
      <div className="border h-[90%] w-[100%]">
      <Navigation />
        <div className='h-[100%]    items-center'>
          <h1 className='text-center mt-3 font-bold p-2 my-4 '>Download your favourites</h1>
          <div className='h-[70%] flex items-center flex-col  space-y-10  w-[80%] mx-auto items-center'>
            <div className='w-[80%]  h-[9%] flex    mx-auto '>
              <div className='h-[100%] w-[70%]'>
                <TextField
                  className=" h-[100%] w-[100%] rounded-r-0 p-4"
                  label="Copy the video URL here"
                  type="text"
                  id="outlined-basic"
                  variant="outlined"
                />
              </div>
              <div className='w-[20%] bg-black h-[100%]'>
                <button className='text-center text-white px-4 font-bold rounded-l-lg h-[100%]'>Download</button>
              </div>
            </div>
            <div className='w-[80%] mx-auto border mt-10 h-[60%]'>
            </div>
            <div>
              <p>Share the video: </p>
              <Shares />

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home