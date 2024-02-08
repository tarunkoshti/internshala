import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InternshipNav from '../components/Iternshipnav'



const Createinternship = () => {
   


    const navigate = useNavigate()
    const [profile,setProfile] = useState("");
    const [skills,setSkills] = useState("");
    const [internshiptype,setInternshiptype] = useState("");
    const [workingtype,setWorkingType] = useState("");
    const [openings,setOpenings] = useState();
    const [start, setstart] = useState("");
    const [from,setFrom] = useState("");
    const [to,setTo] = useState("");
    const [duration,setDuration] = useState("");
    const [ responsibility,setResponsibility] = useState("");
    const [preferences,setpreferences] = useState("");
    const [status,setStatus] = useState("");
    const [amount,setAmount] = useState();
    const [perks,setPerks] = useState([]);
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

            const { data } = await axios.post(`${"/api/employe/internship/create"}`,
                {
                    profile,
                    skills,
                    internshiptype,
                    workingtype,
                    openings,
                    start,
                    from,
                    to,
                    duration,
                    responsibility,
                    preferences,
                    stipend:{
                        status,
                        amount,
                    },
                    perks,
                    company,
                    location,
                    contact,
                    assements
                   
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
         
    <h1 className='text-4xl font-bold'>Post Internship</h1>
    <div className='w-full max-w-2xl flex flex-col gap-4   rounded-md overflow-hidden py-10 px-5'>

       
        <form
            className='w-full flex flex-col gap-4 pt-3'
            onSubmit={ClickHandler}>

                {/* Section-1-div */}
                <div>
                <h1 className='text-xl pl-2 py-4 font-semibold'>Internship details</h1>
                <div className=' w-full max-w-2xl flex flex-col gap-4 border border-zinc-300  rounded-xl overflow-hidden py-10 px-5'>

                {/* Profile-div */}
                    <div>
                        <label htmlFor="p">Profile</label>
                        <input
                            className='w-full px-3 py-1.5 mt-1.5 border-[2px] rounded-md outline-blue-500'
                            type="profile"
                            placeholder='e.g. Android App Development'
                            id='p'
                            name='profile'
                            value={profile}
                            onChange={(e) => setProfile(e.target.value)}
                        />
                    </div>

                     {/* Skill-div */}

                    <div>
                        <label  htmlFor="skills">Skills required(optional)</label>
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
                        {/* Internship-tyep-div */}
                   <div>
                   <label htmlFor="internship-tyep">Internship type</label>
                    {/* Radio-div */}
                    <div className='flex items-center gap-3'>
                    {/* first */}
                    <div className='space-y-6'>
                        <div className='flex items-center gap-x-3'>
                            <input 
                                type="radio"
                                name="internship-type" 
                                id="internship-type1" 
                                value="In office"
                                onChange={(e) => setInternshiptype(e.target.value)}
                                className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                            />
                            <label htmlFor="internship-type1" className='block text-sm font-medium leading-6 text-zinc-500'>In office</label>
                        </div>
                    </div>
                    {/* second */}
                    <div className='space-y-6'>
                        <div className='flex items-center gap-x-3'>
                            <input 
                                type="radio"
                                name="internship-type" 
                                id="internship-type2" 
                                value="Hybrid"
                                onChange={(e) => setInternshiptype(e.target.value)}
                                className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                            />
                            <label htmlFor="internship-type2" className='block text-sm font-medium leading-6 text-zinc-500'>Hybrid</label>
                        </div>
                    </div>
                    {/* third */}
                    <div className='space-y-6'>
                        <div className='flex items-center gap-x-3'>
                            <input 
                                type="radio"
                                name="internship-type" 
                                id="internship-type3" 
                                value="Remote"
                                onChange={(e) => setInternshiptype(e.target.value)}
                                className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                            />
                            <label htmlFor="internship-type3" className='block text-sm font-medium leading-6 text-zinc-500'>Remote</label>
                        </div>
                    </div>
                </div>
                   </div>

                 {/* Working-tyep */}

                <div>
                <label htmlFor="working-type" className="block  leading-6 text-gray-700">
                    Part-time / Full-time
                </label>
                {/* Radio-div */}
                <div className='flex items-center gap-3'>
                    {/* Full-time */}
                    <div className='space-y-6'>
                    <div className='flex items-center gap-x-3'>
                        <input 
                        type="radio"
                        name="working-type" 
                        id="working-type1" 
                        className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                        value="Full-time" 
                        // checked = {workingtype === 'Full-time'}
                        onChange={(e) => setWorkingType(e.target.value)}
                        />
                        <label htmlFor="working-type1" className='block text-sm font-medium leading-6 text-zinc-500'>Full-time</label>
                    </div>
                    </div>
                    {/* Part-time */}
                    <div className='space-y-6'>
                    <div className='flex items-center gap-x-3'>
                        <input 
                        type="radio"
                        name="working-type" 
                        id="working-type2" 
                        className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                        value="Part-time"
                        // checked = {workingtype === 'Part-time'}
                        onChange={(e) => setWorkingType(e.target.value)}
                        />
                        <label htmlFor="working-type2" className='block text-sm font-medium leading-6 text-zinc-500'>Part-time</label>
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

               {/* Start-Date */}

                <div>
                    <label htmlFor="start1" className="block  leading-6 text-gray-700">
                    Internship start date
                    </label>
                    {/* Radio-div */}
                    <div className='flex items-center gap-3'>
                        {/* Immediately */}
                        <div className='space-y-6'>
                            <div className='flex items-center gap-x-3'>
                                <input 
                                    type="radio"
                                    name="start" // Use a unique name for this group of radio inputs
                                    id="start1" 
                                    className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                                    value="Immediately" 
                                    onChange={(e) => setstart(e.target.value)}
                                />
                                <label htmlFor="start1" className='block text-sm font-medium leading-6 text-zinc-500'>Immediately (within next 30 days)</label>
                            </div>
                        </div>

                        {/* Later */}
                        <div className='space-y-6'>
                            <div className='flex items-center gap-x-3'>
                                <input 
                                    type="radio"
                                    name="start" // Use the same name as the other radio input in the group
                                    id="start2" 
                                    className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                                    value="Later"
                                    onChange={(e) => setstart(e.target.value)}
                                />
                                <label htmlFor="start2" className='block text-sm font-medium leading-6 text-zinc-500'>Later</label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Duration */}

                <div >
                <label htmlFor="duration">Internship duration</label>
                 <select className='w-full px-3 py-1.5 mt-1.5 border-[2px] rounded-md outline-blue-500'
                  name="duration" id="Option"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  >
                    <option disabled value="">Choose duration(In Month)</option>
                    <option value="1 month">1</option>
                    <option value="2 month">2</option>
                    <option value="3 month">3</option>
                    <option value="4 month">4</option>
                    <option value="5 month">5</option>
                    <option value="6 month">6</option>
                 </select>
                </div>

                {/* Responsibility */}
               <div>
               <div className="mb-4">
                <label htmlFor=" responsibility" className="block mb-2 ">Intern's  responsibility</label>
                <textarea
                id=" responsibility"
                name=" responsibility"
                value={ responsibility}
                onChange={(e) => setResponsibility(e.target.value)}
                rows={4} // You can adjust this value to determine the initial number of rows
                className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-700 resize-none"
                placeholder="selected Intern's day-to-day  responsibility includes :&#10;1.&#10;2.&#10;3."
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
                placeholder="1. e.g. Candidate pursuing Computer Science Engineering Preferred&#10;2.&#10;3."
                />
                </div>
               </div>  

               </div>
                </div>

               {/* Section-2-div */}
               <div>
               <h1 className='text-xl pl-2 py-4 font-semibold'>Stipend & perks</h1>
               <div className=' w-full max-w-2xl flex flex-col gap-4 border border-zinc-300  rounded-xl overflow-hidden py-10 px-5'>
      
                {/* Stipend */}
                     <div>
                          <label htmlFor="status" className="block leading-6">
                                        Stipend
                                    </label>
                                    {/* Radio-div */}
                                    <div className='flex items-center gap-3'>
                                        {/* Fixed */}
                                        <div className='space-y-6'>
                                            <div className='flex items-center gap-x-3'>
                                                <input 
                                                    type="radio"
                                                    name="status" // Use a unique name for this group of radio inputs
                                                    id="status1" 
                                                    className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                                                    value="Fixed" 
                                                    onChange={(e) => setStatus(e.target.value)}
                                                />
                                                <label htmlFor="status1" className='block text-sm font-medium leading-6 text-zinc-500'>Fixed</label>
                                            </div>
                                        </div>

                                        {/* Negotiable */}
                                        <div className='space-y-6'>
                                            <div className='flex items-center gap-x-3'>
                                                <input 
                                                    type="radio"
                                                    name="status" // Use the same name as the other radio input in the group
                                                    id="status2" 
                                                    className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                                                    value="Negotiable"
                                                    onChange={(e) => setStatus(e.target.value)}
                                                />
                                                <label htmlFor="status2" className='block text-sm font-medium leading-6 text-zinc-500'>Negotiable</label>
                                            </div>
                                        </div>
                                        
                                        {/* Performance based */}
                                        <div className='space-y-6'>
                                            <div className='flex items-center gap-x-3'>
                                                <input 
                                                    type="radio"
                                                    name="status" // Use the same name as the other radio input in the group
                                                    id="status3" 
                                                    className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                                                    value="Performance based"
                                                    onChange={(e) => setStatus(e.target.value)}
                                                />
                                                <label htmlFor="status3" className='block text-sm font-medium leading-6 text-zinc-500'>Performance based</label>
                                            </div>
                                        </div>

                                        {/* Unpaid */}
                                        <div className='space-y-6'>
                                            <div className='flex items-center gap-x-3'>
                                                <input 
                                                    type="radio"
                                                    name="status" // Use the same name as the other radio input in the group
                                                    id="status4" 
                                                    className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                                                    value="Unpaid"
                                                    onChange={(e) => setStatus(e.target.value)}
                                                />
                                                <label htmlFor="status4" className='block text-sm font-medium leading-6 text-zinc-500'>Unpaid</label>
                                            </div>
                                        </div>
                                    </div>
                      </div>

                {/* Amount */}
               
                <div> 

                <label className='' htmlFor="amount">Salary</label>
                <input
                    className='w-full px-3 py-1.5 mt-1.5 border-[2px] rounded-md outline-blue-500'
                    type="amount"
                    placeholder='e.g. 10000'
                    id='amount'
                    name='amount'
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
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
                        name="Certificate"
                        id='checkbox1'
                        className="mr-1"
                        value="Certificate"
                        onChange={(e) => setPerks([...perks, e.target.value])}
                        />
                        Certificate
                    </label>
                    <label className="flex items-center">
                        <input
                        type="checkbox"
                        name="Letter of recommendation"
                        id='checkbox2'
                        className="mr-2"
                        value="Letter of recommendation"
                        onChange={(e) => setPerks([...perks, e.target.value])}
                        />
                        Letter of recommendation
                    </label>
                    <label className="flex items-center">
                        <input
                        type="checkbox"
                        name="Flexible work hours"
                        id='checkbox3'
                        className="mr-2"
                        value="Flexible work hours"
                        onChange={(e) => setPerks([...perks, e.target.value])}
                        />
                        Flexible work hours
                    </label>
                    </div>
                    <div className="space-y-4">
                    <label className="flex items-center gap-2">
                        <input
                        type="checkbox"
                        name="5 days a week"
                        id='checkbox4'
                        className="mr-1"
                        value="5 days a week"
                        onChange={(e) => setPerks([...perks, e.target.value])}
                        />
                        5 days a week
                    </label>
                    <label className="flex items-center">
                        <input
                        type="checkbox"
                        name="Informal dress code"
                        id='checkbox5'
                        className="mr-2"
                        value="Informal dress code"
                        onChange={(e) => setPerks([...perks, e.target.value])}
                        />
                        Informal dress code
                    </label>
                    <label className="flex items-center">
                        <input
                        type="checkbox"
                        name="Free snacks & beverages"
                        id='checkbox6'
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
                <h6 className='text-zinc-500'>Are you available for 1 month, starting immediately, for a full-time work from home internship? If not, what is the time period you are available for and the earliest date you can start this internship on?</h6>
                <h4>Assessment question </h4>
                <h6 className='text-zinc-500'>If you want the applicants to upload a document as a part of the assessment question, please ask them to upload it on Dropbox or Google Drive and share the link in the answer.</h6>

                {/* assements */}
                <div>
                <div className="mb-2">
                <label htmlFor="preferences" className="block "></label>
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
                                    id='c'
                                    name='contact'
                                    value={contact}
                                    onChange={(e) => setContact(e.target.value)}
                                />
                        </div>

                    </div>
               </div>

             

            <button
                className='w-full px-3 py-2 rounded-md bg-blue-500 text-white font-semibold'
                type='submit' >Post Internship
            </button>

            
           
        </form>
    </div>

</div>
</>
  )
}

export default Createinternship;
