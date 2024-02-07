import React from 'react'
import { NavLink } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
// import Logo from '/logo.png'


const EmployeNav = ({ view }) => {
  return (
    <div className='w-full border-b-2 border-zinc-300'>
      <nav className='flex w-[80%]  m-auto justify-between items-center '>

        <NavLink to="/" className='h-20'><img className='h-[100%] bg-[url(/logo.png)] ' src="/logo.png" alt="" /></NavLink>

        <div className='hidden lg:flex gap-10' id="navleft">
          <NavLink >Internships</NavLink>
          <NavLink>Jobs</NavLink>
          <NavLink>Courses</NavLink>
        </div>


        {/* nav right part */}
        <div className='hidden md:flex gap-6' id="navright">
          <div className='flex items-center gap-3'>
            <CiSearch size='20' />
            <NavLink >Search</NavLink>
          </div>
          
          <NavLink to="/employe/internship/create" className="px-8 py-1 bg-[#00A5EC] text-[15px] text-white font-bold rounded-md">Create Internship</NavLink>
          <NavLink to="/employe/job/create" className="px-8 py-1 bg-[#00A5EC] text-[15px] text-white font-bold rounded-md">Create Job</NavLink>
         
        </div>
      </nav>
    </div>
  )
}

export default EmployeNav