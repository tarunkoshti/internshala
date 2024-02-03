import React from 'react'
import { NavLink } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
// import Logo from '/logo.png'


const Nav = ({ view }) => {
  return (
    <div className='border-b-2 border-zinc-300'>
      <nav className='flex w-[80%]  m-auto justify-between items-center '>

        <NavLink to="/" className='h-20'><img className='h-[100%] bg-[url(/logo.png)] ' src="/logo.png" alt="" /></NavLink>

        <div className='flex gap-10' id="navleft">
          <NavLink >Internships</NavLink>
          <NavLink>Jobs</NavLink>
          <NavLink>Courses</NavLink>
        </div>


        {/* nav right part */}
        <div className='flex gap-6' id="navright">
          <div className='flex items-center gap-3'>
            <CiSearch size='20' />
            <NavLink >Search</NavLink>
          </div>

          <NavLink to="/student/signin" className="border px-[18px] rounded-md border-blue-700 text-blue-700 font-semi-bold">Login</NavLink>
          <NavLink to="/student/signup" className="px-8 py-1 bg-[#00A5EC] text-[15px] text-white font-bold rounded-md">Candidate Sign-up</NavLink>
          <NavLink to="/employe/signup" className="px-8 py-1 bg-[#00A5EC] text-[15px] text-white font-bold rounded-md">Employer Sign-up</NavLink>
         
        </div>
      </nav>
    </div>
  )
}

export default Nav
