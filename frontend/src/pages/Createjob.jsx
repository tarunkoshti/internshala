import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InternshipNav from '../components/Iternshipnav'
import InternshipandjobNav from '../components/InternshipandjobNav'



const Createjob = () => {
   


    const navigate = useNavigate()
    const [title,setTitle] = useState("");
    const [skills,setSkills] = useState("");
    const [jobtype,setJobtype] = useState("");
    const [workingtype,setWorkingtype] = useState("");
    const [openings,setOpenings] = useState();
    const [responsbility,setResponsbility] = useState("");
    const [preferences,setpreferences] = useState("");
    const [salary,setSalary] = useState();
    const [perks,setPerks] = useState("");
    const [company,setCompany] = useState("");
    const [location,setLocation] = useState("");
    const [contact,setContact] = useState("");
    const [assements,setAssements] = useState("");


    const ClickHandler = async (e) => {

        e.preventDefault()

        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            // alert("jcnjd")

            const { data } = await axios.post(`${"/api/employe/job/create"}`,
                {
                    title,
                    skills,
                    jobtype,
                    workingtype,
                    openings,
                    responsbility,
                    preferences,
                    salary,
                    perks,
                    company,
                    location,
                    assements,
                    contact,
                   
                },
                config
            )

            // console.log(data)

          navigate("/employee/dashboard")
        }
        catch (err) {
            console.log(err.message)
        }
    }


  return (
    <>
   <InternshipNav/>
    <div className=' w-full flex flex-col items-center py-10 gap-5'>
         
    <h1 className='text-4xl font-bold'>Post Jobs</h1>
    <div className='w-full max-w-2xl flex flex-col gap-4 rounded-md overflow-hidden py-10 px-5'>

       
        <form
            className='w-full flex flex-col gap-4 pt-3'
            onSubmit={ClickHandler}>

                {/* Section-1-div */}
                <div>
                <h1 className='text-xl pl-2 py-4 font-semibold'>Internship details</h1>
                <div className=' w-full max-w-2xl flex flex-col gap-4 border border-zinc-300  rounded-xl overflow-hidden py-10 px-5'>

                    {/* Tittle-div */}
                    <div>
                        <label htmlFor="title">Job Title</label>
                        <input
                            className='w-full px-3 py-1.5 mt-1.5 border-[2px] rounded-md outline-blue-500'
                            type="title"
                            placeholder='e.g. Android App Development'
                            id='title'
                            name='title'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                     {/* Skill-div */}

                    <div>
                        <label  htmlFor="skills">Skills required</label>
                        <input
                            className='w-full px-3 py-1.5 mt-1.5 border-[2px] rounded-md outline-blue-500'
                            type="skills"
                            placeholder='e.g. Java'
                            id='skills'
                            name='skills'
                            value={skills}
                            onChange={(e) => setSkills(e.target.value)}
                        />
                    </div>
                        {/* job-type-div */}
                   <div>
                   <label htmlFor="jobtype">Job type</label>
                    {/* Radio-div */}
                    <div className='flex items-center gap-3'>
                    {/* first */}
                    <div className='space-y-6'>
                        <div className='flex items-center gap-x-3'>
                            <input 
                                type="radio"
                                name="jobtype" 
                                id="jobtype1" 
                                value="In office"
                                onChange={(e) => setJobtype(e.target.value)}
                                className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                            />
                            <label htmlFor="jobtype1" className='block text-sm font-medium leading-6 text-zinc-500'>In office</label>
                        </div>
                    </div>
                    {/* second */}
                    <div className='space-y-6'>
                        <div className='flex items-center gap-x-3'>
                            <input 
                                type="radio"
                                name="jobtype" 
                                id="jobtype2" 
                                value="Remote"
                                onChange={(e) => setJobtype(e.target.value)}
                                className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                            />
                            <label htmlFor="jobtype2" className='block text-sm font-medium leading-6 text-zinc-500'>Remote</label>
                        </div>
                    </div>
                  
                </div>
                   </div>

                  {/* Working-tyep */}

                <div>
                <label htmlFor="workingtype" className="block  leading-6 text-gray-700">
                    Part-time / Full-time
                </label>
                {/* Radio-div */}
                <div className='flex items-center gap-3'>
                    {/* Full-time */}
                    <div className='space-y-6'>
                    <div className='flex items-center gap-x-3'>
                        <input 
                        type="radio"
                        name="workingtype" 
                        id="workingtype1" 
                        className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                        value="Full-time" 
                        // checked = {workingtype === 'Full-time'}
                        onChange={(e) => setWorkingtype(e.target.value)}
                        />
                        <label htmlFor="workingtype1" className='block text-sm font-medium leading-6 text-zinc-500'>Full-time</label>
                    </div>
                    </div>
                    {/* Part-time */}
                    <div className='space-y-6'>
                    <div className='flex items-center gap-x-3'>
                        <input 
                        type="radio"
                        name="workingtype" 
                        id="workingtype2" 
                        className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                        value="Part-time"
                        // checked = {workingtype === 'Part-time'}
                        onChange={(e) => setWorkingtype(e.target.value)}
                        />
                        <label htmlFor="workingtype2" className='block text-sm font-medium leading-6 text-zinc-500'>Part-time</label>
                    </div>
                    </div>
                </div>
                </div>

                {/* Openings */}

                <div>
                <label htmlFor="opnings">Number of openings</label>
                <input
                    className='w-full px-3 py-1.5 mt-1.5 border-[2px] rounded-md outline-blue-500'
                    type="opnings"
                    placeholder='e.g. 4'
                    id='opnings'
                    name='opnings'
                    value={openings}
                    onChange={(e) => setOpenings(e.target.value)}
                />
                </div>

            

                {/* Responsibility */}
               <div>
               <div className="mb-4">
                <label htmlFor="responsbility" className="block mb-2 ">Job description</label>
                <textarea
                id=" responsibility"
                name="responsbility"
                value={responsbility}
                onChange={(e) => setResponsbility(e.target.value)}
                rows={4} // You can adjust this value to determine the initial number of rows
                className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-700 resize-none"
                placeholder="Key responsbility : &#10;1.&#10;2.&#10;3."
                />
                </div>
               </div>

                {/* preferences */}
               <div>
               <div className="mb-4">
                <label htmlFor="preferences" className="block mb-2 ">Additional candidate preferences:</label>
                <textarea
                id="preferences"
                name="preferences"
                value={preferences}
                onChange={(e) => setpreferences(e.target.value)}
                rows={4} // You can adjust this value to determine the initial number of rows
                className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-700 resize-none"
                placeholder="1. e.g. Computer science Graduate Preferred&#10;2.&#10;3."
                />
                </div>
               </div>  

               </div>
                </div>

               {/* Section-2-div */}
               <div>
               <h1 className='text-xl pl-2 py-4 font-semibold'>Salary & perks</h1>
               <div className=' w-full max-w-2xl flex flex-col gap-4 border border-zinc-300  rounded-xl overflow-hidden py-10 px-5'>

                {/* CTC */}
               
                <div> 

                <label className='' htmlFor="salary">CTC</label>
                <input
                    className='w-full px-3 py-1.5 mt-1.5 border-[2px] rounded-md outline-blue-500'
                    type="salary"
                    placeholder='e.g. 10000'
                    id='salary'
                    name='salary'
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                /> 
                </div>

               {/* Perks */}
               <div>
                <label htmlFor="checkbox">Perks</label>
                <div className='flex items-center gap-24'>
                    <div className="space-y-4 py-2 px-2">
                    <label htmlFor='checkbox1' className="flex items-center gap-2">
                        <input
                        type="checkbox"
                        name="5 days a week"
                        id='checkbox1'
                        className="mr-1"
                        value="5 days a week"
                        onChange={(e) => setPerks([...perks, e.target.value])}
                        />
                       5 days a week
                    </label>
                    <label className="flex items-center">
                        <input
                        type="checkbox"
                        name="Health Insurance"
                        id='checkbox2'
                        className="mr-2"
                        value="Health Insurance"
                        onChange={(e) => setPerks([...perks, e.target.value])}
                        />
                        Health Insurance
                    </label>
                    
                    </div>
                    <div className="space-y-4">
                    <label className="flex items-center gap-2">
                        <input
                        type="checkbox"
                        name="Life Insurance"
                        id='checkbox3'
                        className="mr-1"
                        value="Life Insurance"
                        onChange={(e) => setPerks([...perks, e.target.value])}
                        />
                       Life Insurance
                    </label>
                    <label className="flex items-center">
                        <input
                        type="checkbox"
                        name="Free snacks & beverages"
                        id='checkbox4'
                        className="mr-2"
                        value="Free snacks & beverages"
                        onChange={(e) => setPerks([...perks, e.target.value])}
                        />
                        Free snacks & beverages
                    </label>
                    </div>
                </div>
              </div>

               {/* company */}
                <div> 

                <label htmlFor="company">Company Name</label>
                <input
                    className='w-full px-3 py-1.5 mt-1.5 border-[2px] rounded-md outline-blue-500'
                    type="company"
                    placeholder='company'
                    id='company'
                    name='company'
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                />
                </div>

                  {/* location */}
                   <div> 

                    <label htmlFor="location">Location</label>
                    <input
                        className='w-full px-3 py-1.5 mt-1.5 border-[2px] rounded-md outline-blue-500'
                        type="location"
                        placeholder='location'
                        id='location'
                        name='location'
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    </div>


               </div>
               </div>

               {/* Section-3-div */}
               <div>
               <h1 className='text-xl pl-2 py-4 font-semibold'>Cover letter, availability & assessment question</h1>
               <div className=' w-full max-w-2xl flex flex-col gap-4 border border-zinc-300  rounded-xl overflow-hidden py-6 px-5'>
                <h6 className='text-zinc-500'>Cover letter & availability question will be asked to every applicant by default. If you wish, you may ask two more customized questions as an assessment.</h6>
                <h4>Cover letter</h4>
                <h6 className='text-zinc-500'>Why should you be hired for this role?</h6>
                <h4>Availability</h4>
                <h6 className='text-zinc-500'>Are you available for a full-time remote job starting immediately? If not, what is the earliest date you can start this job?</h6>
                <h4>Assessment question </h4>
                <h6 className='text-zinc-500'>If you want the applicants to upload a document as a part of the assessment question, please ask them to upload it on Dropbox or Google Drive and share the link in the answer.</h6>

                {/* assements */}
                <div>
                <div className="mb-2">
                <label htmlFor="assements" className="block "></label>
                <textarea
                id="assements"
                name="assements"
                value={assements}
                onChange={(e) => setAssements(e.target.value)}
                rows={4} // You can adjust this value to determine the initial number of rows
                className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-700 resize-none"
                placeholder="Type your question here."
                />
                </div>
               </div>  


               </div>
               </div>

               {/* Section-4-div */}

               <div>
               <div className=' w-full max-w-2xl flex flex-col gap-4 border border-zinc-300  rounded-xl overflow-hidden py-6 px-5'>
                <h4>Alternate mobile number for this listing</h4>
                <h6 className='text-zinc-500'>Our team will call you on this number in case of any query regarding this listing only. Primary account number will not be updated.</h6>
                       {/* Contect-div */}
                        <div> 

                                <label htmlFor="contact">Contact Number</label>
                                <input
                                    className='w-full px-3 py-1.5 mt-1.5 border-[2px] rounded-md outline-blue-500'
                                    type="contact"
                                    placeholder='+91 Enter mobile number'
                                    id='contact'
                                    name='contact'
                                    value={contact}
                                    onChange={(e) => setContact(e.target.value)}
                                />
                        </div>

                    </div>
               </div>

             

            <button
                className='w-full px-3 py-2 rounded-md bg-blue-500 text-white font-semibold'
                type='submit' >Post Job
            </button>

            
           
        </form>
    </div>

   </div>
   <InternshipandjobNav/>
   </>
  )
}

export default Createjob;
