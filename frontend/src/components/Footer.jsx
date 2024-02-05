import React from 'react'
import { FaGooglePlay } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=' w-full bg-zinc-800 text-white'>
      <div className='py-5 w-full lg:flex items-start  border-b '>
        <div className='hidden  w-64  lg:flex flex-col items-start justify-center  px-5'>
            <h6 className='text-base font-semibold'>Internships by places</h6>
            <br />
            <h6 className='text-base'>Internship in India</h6>
            <h6 className='text-base'>Internship in Delhi</h6>
            <h6 className='text-base'>Internship in Bangalore</h6>
            <h6 className='text-base'>Internship in Hyderabad</h6>
            <h6 className='text-base'>Internship in Mumbai</h6>
            <h6 className='text-base'>Internship in Chennai</h6>
            <h6 className='text-base'>Internship in Gurgaon</h6>
            <h6 className='text-base'>Internship in Kolkata</h6>
            <h6 className='text-base'>Virtual internship</h6>
            <h6 className='text-base'>View all internships</h6>
        </div>
        <div className='hidden  w-64  lg:flex flex-col items-start justify-center  px-5'>
            <h6 className='text-base font-semibold'>Internship by Stream</h6>
            <br />
            <h6 className='text-base'>Computer Science Internship</h6>
            <h6 className='text-base'>Electronics Internship</h6>
            <h6 className='text-base'>Mechanical Internship</h6>
            <h6 className='text-base'>Civil Internship</h6>
            <h6 className='text-base'>Chemical Internship</h6>
            <h6 className='text-base'>Marketing Internship</h6>
            <h6 className='text-base'>Finance Internship</h6>
            <h6 className='text-base'>Summer Research Fellowship</h6>
            <h6 className='text-base'>Campus Ambassador Program</h6>
            <h6 className='text-base'>View all internships</h6>
        </div>
        <div className='hidden  w-64  lg:flex flex-col items-start justify-center  px-5'>
            <h6 className='text-base font-semibold'>Jobs by Places</h6>
            <br />
            <h6 className='text-base'>Jobs in Delhi</h6>
            <h6 className='text-base'>Jobs in Mumbai</h6>
            <h6 className='text-base'>Jobs in Bangalore</h6>
            <h6 className='text-base'>Jobs in Jaipur</h6>
            <h6 className='text-base'>Jobs in Kolkata</h6>
            <h6 className='text-base'>Jobs in Hyderabad</h6>
            <h6 className='text-base'>Jobs in Pune</h6>
            <h6 className='text-base'>Jobs in Chennai</h6>
            <h6 className='text-base'>Jobs in Lucknow</h6>
            <h6 className='text-base'>View all jobs</h6>
        </div>
        <div className='hidden  w-64  lg:flex flex-col items-start justify-center  px-5'>
            <h6 className='text-base font-semibold'>Jobs by Stream</h6>
            <br />
            <h6 className='text-base'>Marketing jobs</h6>
            <h6 className='text-base'>Content writing jobs</h6>
            <h6 className='text-base'>Web development jobs</h6>
            <h6 className='text-base'>Sales jobs</h6>
            <h6 className='text-base'>Finance jobs</h6>
            <h6 className='text-base'>Digital Marketing jobs</h6>
            <h6 className='text-base'>Computer Science jobs</h6>
            <h6 className='text-base'>Graphic Design jobs</h6>
            <h6 className='text-base'>Data Science jobs</h6>
            <h6 className='text-base'>View all jobs</h6>
        </div>
        <div className=' w-80  flex flex-col items-start justify-center  px-5 leading-6'>
        <h6 className='text-base font-semibold'>Placement Guarantee Courses ! OFFER</h6>
            <br />
            <h6 className='text-sm'>Full Stack Development course with placement</h6>
            <h6 className='text-sm'>Data Science course with placement</h6>
            <h6 className='text-sm'>Human Resource Management course with placement</h6>
            <h6 className='text-sm'>Digital Marketing course with placement</h6>
            <h6 className='text-sm'>Product Management course with placement</h6>
            <h6 className='text-sm'>UI/UX Design course with placement</h6>
            <h6 className='text-sm'>Electric Vehicle course with placement</h6>
            <br />
            <br />
            <h6 className='text-base font-semibold'>Certification Courses</h6>
        </div>
      </div>
      <div className='py-5 px-4 w-full  flex flex-col gap-5'>
        <div className=' w-full  md:flex '>
            <div className='w-full gap-10  lg:flex  '>
            <div className=' flex flex-col  leading-7'>
                <h1>About us</h1>
                <h1>We're hiring</h1>
                <h1>Hire interns for your company</h1>
            </div>
            <div className='flex flex-col  leading-7'>
                <h1>Team Diary</h1>
                <h1>Blog</h1>
                <h1>Our Services</h1>
            </div>
            </div>
            <div className='w-full gap-10 lg:flex  '>
            <div className='  flex flex-col  leading-7'>
                <h1>Terms & Conditions</h1>
                <h1>Privacy</h1>
                <h1>Contact us</h1>
            </div>
            <div className='  flex flex-col  leading-7'>
                <h1>Sitemap</h1>
                <h1>College TPO registration</h1>
                <h1>List of Companies</h1>
            </div>
            </div>
        </div>
        <div className='py-3 w-full  flex items-center justify-start gap-5'>
            <button className='px-10 py-2 border-2 text-white flex items-center gap-2'><span><FaGooglePlay /></span>Get Android App</button>
            <FaInstagram size="28" color='white' />
            <FaTwitter size="28" color='white'/>
            <FaYoutube size="28" color='white'/>
            <FaLinkedin size="28" color='white'/>
        </div>
      </div>
    </div>
  )
}

export default Footer
