import React from 'react'
import Image from 'next/image'
function Navbar() {
  return (
    <nav className='bg-blue-900 h-20 flex justify-around'>
    <div>
      <Image src="/Images/Logo.png" alt="photo" height={60} width={60}  className='mr-40 mt-10'/>
       </div>
    <div className='h-10 mt-7 text-1xl text-blue-400 font-semibold'>Tuition Free Education Program on Latest Technologies</div>

    <ul className='flex gap-5 h-10 mt-7 text-1xl text-white '>
      <li>Home</li>
      <li>Apply</li>
      <li>Jobs</li>
      <li>Results</li>
      <li>Courses</li>
    </ul>
    </nav>
  )
}

export default Navbar
