import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <main className='flex gap-5 mx-10 my-10'>
        {/* Left section*/} 
    <div className='bg-white w-6/12 h-96'>
    <div className='text-blue-900 '>
    <h1 className='font-extrabold text-5xl'>Governor Sindh</h1>
    <p className='text-4xl'>Kamran Khan Tessori</p>
    <br />
    </div >
    <h2 className='text-sky-400 font-extrabold text-4xl'>Certified Cloud <br />Applied Generative AI <br />Engineer (GenEng)</h2>
    <br />
    <div className='text-blue-900 text-2xl font-extrabold'>
    <h1>Earn up to $5000 / month</h1>
    <br />
    <p>Now admission are <br />open in Hyderabad</p>
    </div>
    <div className='mt-4 flex gap-10 '>
    <button className='bg-blue-900 p-2 w-40 rounded-2xl text-white font-bold'>Apply Now</button>
    <div className='flex-col text-blue-900  '>
    <p className='text-center text-3xl  font-extrabold '>562,143</p>
    <p>
      Accepted Application
    </p>
    </div>
    </div>
   
    </div>
     {/* right section*/}

    <div className=' w-96 md:w-[700px]  '> 
    <Image
     src="/Images/cover.1d863e39.png"
      alt="photo"
     width={800}
     height={800}
     className='flex justify-around  '
     />
      </div>
    </main>
  )
}

export default Hero