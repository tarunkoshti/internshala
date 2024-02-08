import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Internshipcard = () => {

  const [d, setD] = useState([])

  const fetchData = async () => {
    const response = await axios.get("/api/employe/internship/read/all")
    const { internships } = response.data
    setD(internships)
    console.log(internships)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (

   

       <div id='jobcard' className='h-3/5 w-full bg-zinc-300 flex items-center gap-12 px-10 whitespace-nowrap overflow-y-hidden overflow-x-scroll snap-mandatory'>

          
       {
          d.map((internship, index) => (
            <div className='h-4/5 w-64 bg-zinc-400 shrink-0 rounded-xl'>
            <ul ><li>{internship.duration}</li>
              <li>{internship.profile}</li></ul>
      </div>
          ))
        } 
          
          
       </div>
       


  )
}

export default Internshipcard