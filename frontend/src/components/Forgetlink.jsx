import axios from 'axios'
import React, { useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'



const Forgetlink = () => {
    // const [a, b] = useState(true)
    const { id } = useParams()


    // console.log(id)

    const navigate = useNavigate()

    const [password, setPassword] = useState("")

    const ClickHandler = async (e) => {

        e.preventDefault()

        const currentpathname = window.location.pathname
        const isStudent = currentpathname.includes("student")
        console.log(isStudent)
        // const isEmploye = currentpathname.includes("employe")

        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            // alert("jcnjd")

            // const { data } = await axios.post(`/api/employe/forget-link/${id}`,
            const { data } = await axios.post(`${isStudent ? `/api/user/student/forget-link/${id}` : `/api/employe/forget-link/${id}`}`,

                {
                    password
                },
                config
            )

            // console.log(data)

            isStudent ? navigate("/student/signin") :
                navigate("/employee/signin")
        }
        catch (err) {
            console.log(err.message)
        }

    }

    return (
        <div>
            
            <form
                className='w-full flex flex-col gap-4 pt-5'
                onSubmit={ClickHandler}>


                <div>
                    <label htmlFor="p">Password</label>
                    <input
                        className='w-full px-3 py-1.5 mt-1.5 border-[2px] rounded-md outline-blue-500'
                        type="text"
                        placeholder='Must be atleat 6 character'
                        id='p'
                        name='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>



                <button

                    className='w-full px-3 py-2 rounded-md bg-blue-500 text-white font-semibold'
                    type='submit' >change password
                </button>



            </form>
        </div>
    )
}

export default Forgetlink
