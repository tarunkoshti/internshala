import React, { useEffect, useState } from 'react'
import Jobcard from '../components/Jobcard'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { IoChevronForward, IoLocationOutline } from 'react-icons/io5'
import { LiaMoneyBillSolid } from 'react-icons/lia'
import { CiCalendar } from 'react-icons/ci';
import EmployeNav from '../components/EmployeNav'

const Employee = () => {
  const [internship, setInternship] = useState([])
  const [job, setJob] = useState([])
 
  const fetchData = async () => {
    // internship
      const response1 = await axios.get("/api/employe/internship/read")
      // setInternship(response1.data)
      console.log(response1.data)
      const internships =response1.data.internships;
      setInternship(internships);

    // job  
      const response2 = await axios.get("/api/employe/job/read")
      // setJob(response2.data)
      console.log(response2.data)
      const jobs =response2.data.jobs;
      setJob(jobs);
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className='bg-zinc-100'>
      <EmployeNav/>
    {/* Heading-Internship-card */}
    <div className='py-10 w-full mt-5 text-center'>
      <h3 className='text-3xl font-semibold'>Latest internships on Internshala</h3>
    </div>

    {/* Internship-card */}
    <div className='h-4/5 w-full '>
    <div id='scroll' className='h-3/5 w-full  flex items-center gap-10 whitespace-nowrap overflow-y-hidden overflow-x-scroll snap-mandatory mx-5'>

{
  internship.map((data, index) => (
    <Link  to={`/employe/dashboard/internship/${data._id}`}>
      <div  key={index} className=' w-60 bg-white shrink-0 rounded-lg'>
        <div className=' w-full py-5 border-b-2 px-4'>
          <div className='font-semibold'>{data.profile}</div>
          <div className='text-zinc-500 font-semibold text-sm'>{data.company}</div>
        </div>
        <div className=' w-full py-5 px-4'>
          <span className='flex text-md items-center gap-2'>
            <IoLocationOutline size="20" /> {data.internshiptype}
          </span>
          <span className='flex text-md items-center gap-2'>
            <LiaMoneyBillSolid size="20" /> {data.stipend?.status}
          </span>
          <span className='flex text-md items-center gap-2'>
            <CiCalendar size="20" /> {data.duration}
          </span>
        </div>
        <div className=' w-full py-5  px-4 flex items-center justify-between'>
          <span className='font-semibold text-xs py-1 px-2 bg-zinc-200 rounded-md'>Internship</span>
          <span className='flex text-md items-center gap-1 text-blue-500 font-semibold'>View Details <IoChevronForward size="18" /></span>
        </div>
      </div>
    </Link>
  ))
}
</div>
    </div>

    {/* Heading-Job-card */}
    <div className='py-10 w-full mt-5 text-center'>
      <h3 className='text-3xl font-semibold'>Latest jobs on Internshala</h3>
    </div>

    {/* Job-card */}
    <div className='h-4/5 w-full '>
    <div id='scroll' className='h-3/5 w-full  flex items-center gap-10 whitespace-nowrap overflow-y-hidden overflow-x-scroll snap-mandatory mx-5'>

{
  job.map((data, index) => (
    <Link className='pointer' to={`/employe/dashboard/job/${data._id}`}>
      <div key={index} className=' w-60 bg-white shrink-0 rounded-lg mb-5'>
        <div className=' w-full py-5 border-b-2 px-4'>
          <div className='font-semibold'>{data.title}</div>
          <div className='text-zinc-500 font-semibold text-sm'>{data.company}</div>
        </div>
        <div className=' w-full py-5 px-4'>
          <span className='flex text-md items-center gap-2'>
            <IoLocationOutline size="20" /> {data.location}
          </span>
          <span className='flex text-md items-center gap-2'>
            <LiaMoneyBillSolid size="20" />₹ {data.salary}/ year
          </span>
          {/* <span className='flex text-md items-center gap-2'>
          <CiCalendar size="20" /> {data.duration}
        </span> */}
        </div>
        <div className=' w-full py-5  px-4 flex items-center justify-between'>
          <span className='font-semibold text-xs py-1 px-2 bg-zinc-200 rounded-md'>Job</span>
          <span className='flex text-md items-center gap-1 text-blue-500 font-semibold'>View Details <IoChevronForward size="18" /></span>
        </div>
      </div>
   </Link>
  ))
}
</div>
    </div>
  </div>
  )
}

export default Employee
