import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const InternshipandjobNav = () => {
  return (
    <>
      <div className='w-full bg-zinc-200'>
         <div className='w-full py-12 bg-[#212121] hidden lg:flex items-center justify-center gap-10 border-b '>
           <h3 className='text-md text-white cursor-pointer'>About us</h3>
           <h3 className='text-md text-white cursor-pointer'>Blog</h3>
           <h3 className='text-md text-white cursor-pointer'>We're hiring</h3>
           <h3 className='text-md text-white cursor-pointer'>Employer resources</h3>
           <h3 className='text-md text-white cursor-pointer'>Our services</h3>
           <h3 className='text-md text-white cursor-pointer'>Terms & conditions</h3>
           <h3 className='text-md text-white cursor-pointer'>Privacy</h3>
           <h3 className='text-md text-white cursor-pointer'>Refund policy</h3>
           <h3 className='text-md text-white cursor-pointer'>Contact us</h3>
           <h3 className='text-md text-white cursor-pointer'>Sitemap</h3>
         </div>
         <div className='w-full py-6 bg-[#212121] flex items-center justify-between px-12'>
            <div className='flex items-center gap-5'>
            <span className='text-2xl text-white cursor-pointer'><FaInstagram /></span>
            <span className='text-2xl text-white cursor-pointer'><CiTwitter /></span>
            <span className='text-2xl text-white cursor-pointer'><FaYoutube /></span>
            <span className='text-2xl text-white cursor-pointer'><FaLinkedinIn /></span>
            </div>
            <h3 className='text-md text-white'>© Copyright 2024 Internshala</h3>
         </div>
      </div>
    </>
  )
}

export default InternshipandjobNav
