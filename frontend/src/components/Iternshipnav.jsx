import React from 'react'
import { NavLink } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
// import Logo from '/logo.png'


const InternshipNav = ({ view }) => {
  return (
    <div className='w-full border-b-2 border-zinc-300'>
      <nav className='flex w-[80%]  m-auto justify-between items-center '>

        <NavLink to="/" className='h-20'><img className='h-[100%] bg-[url(/logo.png)] ' src="/logo.png" alt="" /></NavLink>

        {/* <div className='hidden lg:flex gap-10' id="navleft">
          <NavLink >Internships</NavLink>
          <NavLink>Jobs</NavLink>
          <NavLink>Courses</NavLink>
        </div> */}


        {/* nav right part */}
        <div className='hidden md:flex gap-14' id="navright">
          {/* <div className='flex items-center gap-3'>
            <CiSearch size='20' />
            <NavLink >Search</NavLink>
          </div> */}

          <NavLink to="#" className="text-zinc-700 font-medium">Place & Pricing</NavLink>
          <NavLink to="/employee/dashboard" className="text-zinc-700 font-medium">Deshboard</NavLink>
          <NavLink to="/employe/dashboard/internship/:id" className="text-zinc-700 font-medium">Post Internship / Job</NavLink>
         
        </div>
      </nav>
    </div>
  )
}

export default InternshipNav
