import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
// import Logo from '/logo.png'



const StudentNav = ({ name,email }) => {
   
    
    // console.log(name)
    const [a , setA] = useState(true)
    const myRef1 = useRef()
    const emailref = useRef()
    const nameref = useRef()
    const homeref = useRef()
    const applicationsref = useRef()
    const resumeref = useRef()
    const preferencesref = useRef()
    const safetytipsref = useRef()
    const manageref = useRef()
    const logoutref = useRef()
    
        const MouseEnter = () => {
            setA(false)
            myRef1.current.style.opacity = 1

                myRef1.current.style.height = "px"
                myRef1.current.style.width = "250px"
                myRef1.current.style.backgroundColor = "white"
                emailref.current.textContent = `${email}`
                nameref.current.textContent= `${name}`
                homeref.current.textContent ="Home"
                applicationsref.current.textContent ="My Applications"
                resumeref.current.textContent ="Edit Resume"
                preferencesref.current.textContent ="Edit Preferences"
                safetytipsref.current.textContent ="Safety Tips"
                manageref.current.textContent ="Manage Account"
                logoutref.current.textContent = "Logout"
               
            }
    
        const MouseLeave = () => {
            setA(true)
            myRef1.current.style.opacity = 0
            // myRef1.current.style.width = "0px"
            // myRef1.current.style.backgroundColor = "white"
        }
    

  return (
    <div className='w-full border-b-2 border-zinc-300'>
      <nav className='flex w-[80%]  m-auto justify-between items-center '>

        <NavLink to="/" className='h-20'><img className='h-[100%] bg-[url(/logo.png)] ' src="/logo.png" alt="" /></NavLink>

        <div className='hidden lg:flex gap-10 items-center' id="navleft">
          <NavLink >Internships</NavLink>
          <NavLink>Jobs</NavLink>
          <NavLink>Courses</NavLink>
          <div onClick={a? MouseEnter : MouseLeave}
          
           className='h-8 w-8 border border-black rounded-full flex items-center justify-center text-xl'>{name?.charAt(0)}</div>

        </div>        
      </nav>

      <div ref={myRef1} className='absolute top-24 right-16 shadow-lg p-5 shadow-blue-100 opacity-0'>
         <h1 ref={nameref} className=' pt-2 text-xl font-semibold'></h1>
        <h1 ref={emailref} className=''></h1>
        <hr className='mt-2' />
        <div className='  flex flex-col  w-full   pt-4'>
        <NavLink to="/student/dashboard" ref={homeref}></NavLink>
        <NavLink to ="/student/applications" className="pt-4"  ref={applicationsref}></NavLink>
        <NavLink to="/student/resume" className="pt-4" ref={resumeref}></NavLink>
        <NavLink to="/student/preferences" className="pt-4" ref={preferencesref}></NavLink>
        <NavLink to="/student/safety"className="pt-4" ref={safetytipsref}></NavLink>
        <NavLink to="/student/manage"className="pt-4" ref={manageref}></NavLink>
        <NavLink  className="pt-4" ref={logoutref}></NavLink>
        </div>
       
      </div>
    </div>
  )
}

export default StudentNav;
