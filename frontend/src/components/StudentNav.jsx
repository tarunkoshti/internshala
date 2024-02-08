import React, { useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
// import Logo from '/logo.png'
import axios from 'axios'


const StudentNav = ({ name, email }) => {


  // console.log(name)
  const [a, setA] = useState(true)
  const myRef1 = useRef()
  const navigate = useNavigate()

  const MouseEnter = () => {
    setA(false)
    myRef1.current.style.display = 'block'
    myRef1.current.style.width = "250px"
    myRef1.current.style.backgroundColor = "white"
  }

  const MouseLeave = () => {
    setA(true)
    myRef1.current.style.display = 'none'
  }

  // logout function
  const LogoutHandler = async () => {

    const response = await axios.get("/api/user/student/signout")
    // console.log(response)
    navigate("/")
  }

  return (
    <div className='w-full border-b-2 border-zinc-300'>
      <nav className='flex w-[80%]  m-auto justify-between items-center '>

        <NavLink to="/" className='h-20'><img className='h-[100%] bg-[url(/logo.png)] ' src="/logo.png" alt="" /></NavLink>

        <div className='hidden lg:flex gap-10 items-center' id="navleft">
          <NavLink >Internships</NavLink>
          <NavLink>Jobs</NavLink>
          <NavLink>Courses</NavLink>
          <div onClick={a ? MouseEnter : MouseLeave}

            className='cursor-pointer capitalize h-8 w-8 border border-black rounded-full flex items-center justify-center text-xl'>{name?.charAt(0)}</div>

        </div>
      </nav>

      <div ref={myRef1} className='absolute top-24 right-16 shadow-lg p-5 shadow-blue-100 hidden'>
        <h1 className='capitalize text-xl font-semibold'>{name}</h1>
        <h1 >{email}</h1>
        <hr className='mt-2' />
        <div className='flex flex-col w-full gap-3 p-2'>
          <NavLink to="/student/dashboard" >Home</NavLink>
          <NavLink to="/student/applications" >My Applications</NavLink>
          <NavLink to="/student/resume" >Edit Resume</NavLink>
          <NavLink to="/student/preferences" >Edit Preferences</NavLink>
          <NavLink to="/student/safety" >Safety Tips</NavLink>
          <NavLink to="/student/manage" >Manage Account</NavLink>
          <NavLink onClick={LogoutHandler}>Logout</NavLink>
        </div>

      </div>
    </div>
  )
}

export default StudentNav;
