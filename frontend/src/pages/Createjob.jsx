import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


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
    const [company,setCopany] = useState("");
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
    <div className='h-[calc(100vh-82px)] w-full flex flex-col items-center py-10 gap-5'>
    <h1 className='text-5xl font-bold'>Login to show more</h1>
    <div className='w-full max-w-md flex flex-col gap-4 shadow-lg shadow-blue-100  rounded-xl overflow-hidden py-10 px-5'>
        
        <form
            className='w-full flex flex-col gap-4 pt-5'
            onSubmit={ClickHandler}>
            <div>
                <label htmlFor="t">Profile</label>
                <input
                    className='w-full px-3 py-1.5 mt-1.5 border-[2px] rounded-md outline-blue-500'
                    type="title"
                    placeholder='HR Manager'
                    id='t'
                    name='title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="c">skills</label>
                <input
                    className='w-full px-3 py-1.5 mt-1.5 border-[2px] rounded-md outline-blue-500'
                    type="skills"
                    placeholder='skills'
                    id='p'
                    name='skills'
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="c">jobtype</label>
                <input
                    className='w-full px-3 py-1.5 mt-1.5 border-[2px] rounded-md outline-blue-500'
                    type="jobtype"
                    placeholder='jobtype'
                    id='p'
                    name='jobtype'
                    value={jobtype}
                    onChange={(e) => setJobtype(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="c">workingtype</label>
                <input
                    className='w-full px-3 py-1.5 mt-1.5 border-[2px] rounded-md outline-blue-500'
                    type="workingtype"
                    placeholder='workingtype'
                    id='p'
                    name='workingtype'
                    value={workingtype}
                    onChange={(e) => setWorkingtype(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="c">contact</label>
                <input
                    className='w-full px-3 py-1.5 mt-1.5 border-[2px] rounded-md outline-blue-500'
                    type="contact"
                    placeholder='contact'
                    id='p'
                    name='contact'
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                />
            </div>





            <div>
                <label htmlFor="c">Contact</label>
                <input
                    className='w-full px-3 py-1.5 mt-1.5 border-[2px] rounded-md outline-blue-500'
                    type="contact"
                    placeholder='contact'
                    id='p'
                    name='contact'
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                />
            </div>

            <button
                className='w-full px-3 py-2 rounded-md bg-blue-500 text-white font-semibold'
                type='submit' >Post Internship
            </button>

            

        </form>
    </div>

</div>
  )
}

export default Createjob;
