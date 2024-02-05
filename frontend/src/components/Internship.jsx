import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import { MdOutlineHomeWork } from "react-icons/md";
import { IoPlayCircleOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { LiaMoneyBillSolid } from "react-icons/lia";
import Footer from './Footer';

const Internship = () => {
    const { id } = useParams()

    const [internship, setInternship] = useState({})
    const [applicants,setApplicants] = useState();
    const fetchData = async () => {
        const response = await axios.get(`/api/employe/internship/read/${id}`)
        // console.log(response)
        setInternship(response.data)
        console.log(response.data)
        const intern = response.data.internship;
        setInternship(intern);
        setApplicants(intern.students.length)
        console.log(intern.students.length  )
    }

    useEffect(() => {
        fetchData()
    }, [applicants])

    return (
        <div className='h-[100vh] w-screen    '>
            <div className='h-auto w-[65vw] mx-64 mt-16 '>
                <div className='h-1/5 w-full   '>
                    <img src="https://internshala.com/static/images/internship/detail/specialization_banner/dm_1/r1920.png" alt="" />
                </div>
                <h1 className='text-zinc-800 text-4xl font-semi-bold mt-6 mb-6 text-center '>{internship.profile} Intern ({internship.internshiptype})
                </h1>
                <div className=' h-full bg-zinc-100 rounded-lg'>
                    {/* detailed container */}
                    <div id='detailed'className='h-content border-bottom '>
                        <h1 className='pt-6 pl-10 text-zinc-800  text-[19px] font-semibold '>{internship.profile}</h1>
                        <h1 className='pt-2 pl-10 text-zinc-600  text-[15px] font-semibold '>{internship.company}</h1>
                        <h1 className='flex pl-10 pt-6 gap-4 items-center '> <MdOutlineHomeWork />{internship.internshiptype} </h1>
                        <div className='h-[30px] mt-4 ml-10  text-zinc-500 text-[14px] flex gap-40'>
                            <h1 className='flex  gap-2 items-center '><IoPlayCircleOutline />START DATE</h1>
                            <h1 className='flex  gap-2 items-center '><CiCalendar /> DURATION</h1>
                            <h1 className='flex  gap-2 items-center '><LiaMoneyBillSolid /> STIPEND</h1>
                            <h1></h1>
                        </div>
                        <div className='h-[30px] mt-2 ml-10  text-zinc-500 text-[14px] flex gap-48'>
                            <h1>{internship.to}</h1>
                            <h1>{internship.duration}</h1>
                            
                        </div>
                    <h1 className='flex pl-10 pt-5 gap-2 text-zinc-500 items-center'><GoPeople />{applicants} applicants</h1>
                    </div>
                    <hr className='ml-10 mr-10 my-5 ' />
                    
                </div>
             
            </div>
            <div ><Footer/></div>
        </div>
    )
}

export default Internship
