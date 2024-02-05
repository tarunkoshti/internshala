import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"

const SingleInternship = () => {
    const { id } = useParams()

    const [internship, setInternship] = useState({})

    const fetchData = async () => {
        const response = await axios.get(`/api/employe/internship/read/${id}`)
        // console.log(response)
        setInternship(response.data)
        console.log(response.data)
        const intern = response.data.internship;
        setInternship(intern);
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            prashant chutiya hai
            <div>{internship.profile}</div>
        </div>
    )
}

export default SingleInternship
