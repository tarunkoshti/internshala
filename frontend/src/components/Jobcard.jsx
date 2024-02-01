import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Jobcard = () => {

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
    <div >
        {
          d.map((internship, index) => (
      <div className='h-[44vh] w-[20vw] bg-red-200 rounded-xl mb-16 ml-20'>
            <ul ><li  >{internship.duration}</li>
              <li  >{internship.profile}</li></ul>
      </div>
          ))
        }
    </div>
  )
}

export default Jobcard