import React, { useEffect, useState } from 'react'
import Jobcard from '../components/Jobcard'
import axios from 'axios'

const Employee = () => {
  const [internship, setInternship] = useState([])

  const fetchData = async () => {
      const response = await axios.get("/api/employe/internship/read")
      setInternship(response.data)
      console.log(response.data)
      const internships =response.data.internships;
      setInternship(internships);
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
   <div className='h-[40vh] bg-zinc-200 w-full '>
        <h1 className='text-center text-6xl'>Your internships</h1>
        {internship.map((internship,index)=>(
         <div key={index} className='h-80 w-60 bg-zinc-200 shrink-0 rounded'>
         {internship.profile}
         </div>
        ))} 
        
         
        </div>
    </div>
  )
}

export default Employee
