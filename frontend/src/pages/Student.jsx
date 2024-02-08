import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import Internshiocard from '../components/Internshiocard'
import Jobcard from '../components/Jobcard'
import Footer from '../components/Footer'

const Student = () => {
    const [d, setD] = useState({})
    

    const fetchData = async () => {
        const response = await axios.get("/api/user/student")
        setD(response.data)
        console.log(response.data)
    }

    useEffect(() => {
        fetchData()
    }, [])
    // const  data  = axios.get("/user/student")
    // console.log(data)
    return (
        <>
        
            {/* Main-div */}
            <div className='w-full overflow-hidden bg-yellow '>
                {/* Profile-div */}
                <div className='py-8 w-full border-b  flex flex-col justify-center px-16 gap-3 mt-5'>
                    <h1 className='text-center text-3xl font-semibold'>Hi, {d.firstname} ! 🤚</h1>
                    <h3 className='text-center text-xl'>Let's help you land your dream career</h3>
                </div>

                {/* Deshbord-div */}
                <div className='w-full  flex items-center '>
                    
                    <div className='w-full overflow-hidden  px-2'>
                        {/* HomePage-div */}

                        {/* scroll */}
                        <div id='job' className='h-96 w-full mt-10  flex items-center gap-12 px-5 whitespace-nowrap overflow-y-hidden overflow-x-scroll snap-mandatory '>

                            <div className='h-5/6 w-4/12 shrink-0 rounded-3xl bg-[url(https://internshala.com/static/images/pgc_course_specific_banners/pgc_homepage_banner_new.png)] bg-cover bg-no-repeat'></div>

                            <div className='h-5/6 w-4/12 shrink-0 rounded-3xl  bg-[url(https://internshala-uploads.internshala.com/banner-images/home_new/eoss_fh_jan24-student.png.webp)] bg-cover bg-no-repeat'></div>

                            <div className='h-5/6 w-4/12 shrink-0 rounded-3xl bg-[url(https://internshala-uploads.internshala.com/banner-images/home_new/study_abroad_is-student.png.webp)] bg-cover bg-no-repeat'></div>

                            <div className='h-5/6 w-4/12 shrink-0 rounded-3xl bg-[url(https://internshala-uploads.internshala.com/banner-images/home_new/aditya_birla_capital-student.png.webp)] bg-cover bg-no-repeat'></div>

                            <div className='h-5/6 w-4/12 shrink-0 rounded-3xl bg-[url(https://internshala-uploads.internshala.com/banner-images/home_new/is_jobs-student.png.webp)] bg-cover bg-no-repeat'></div>

                            <div className='h-5/6 w-4/12 shrink-0 rounded-3xl bg-[url(https://internshala-uploads.internshala.com/banner-images/home_new/int_opps-student.png.webp)] bg-cover bg-no-repeat'></div>


                        </div>

                        {/* Internship-card & Job-card */}

                        <div className='bg-zinc-100'>
                            {/* Heading-Internship-card */}
                            <div className='py-10 w-full mt-5 text-center'>
                                <h3 className='text-3xl font-semibold'>Latest internships on Internshala</h3>
                            </div>

                            {/* Internship-card */}
                            <div className='h-4/5 w-full '>
                                <Internshiocard id={d._id}/>
                            </div>

                            {/* Heading-Job-card */}
                            <div className='py-10 w-full mt-5 text-center'>
                                <h3 className='text-3xl font-semibold'>Latest jobs on Internshala</h3>
                            </div>

                            {/* Job-card */}
                            <div className='h-4/5 w-full mb-8'>
                                <Jobcard />
                            </div>
                        </div>

                    </div>
                </div>

                {/* Footer-div */}

                <div className=' w-full flex items-center'>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Student
