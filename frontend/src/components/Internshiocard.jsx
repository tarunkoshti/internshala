import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { IoLocationOutline } from "react-icons/io5";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { CiCalendar } from "react-icons/ci";
import { IoChevronForward } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Internshiocard = ({ id }) => {
  console.log(id)
  const [internship, setInternship] = useState([])
  // const [id, setId] = useState("")

  const fetchData = async () => {
    const response = await axios.get("/api/employe/internship/read/all")
    const { internships } = response.data
    setInternship(internships);
    console.log(internships)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div id='scroll' className='h-3/5 w-full  flex items-center gap-10 whitespace-nowrap overflow-y-hidden overflow-x-scroll snap-mandatory mx-5'>
      {/* to="/student/signin" */}
      {
        internship.map((data, index) => (
          <Link to={id ? `/student/dashboard/internship/${data._id}` : `/student/signin`} >
            <div key={index} className=' w-60 bg-white shrink-0 rounded-lg'>
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
  )
}

export default Internshiocard
