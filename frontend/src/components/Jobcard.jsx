import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { IoLocationOutline } from "react-icons/io5";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { CiCalendar } from "react-icons/ci";
import { IoChevronForward } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Jobcard = () => {

  const [job, setJob] = useState([])

  const fetchData = async () => {
    const response = await axios.get("/api/employe/job/read/all")
    const { jobs } = response.data
    setJob(jobs);
    console.log(jobs)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div id='scroll' className='h-3/5 w-full  flex items-center gap-10 whitespace-nowrap overflow-y-hidden overflow-x-scroll snap-mandatory mx-5'>

      {
        job.map((data, index) => (
          <Link className='pointer' to="/student/signin">
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
  )
}

export default Jobcard
