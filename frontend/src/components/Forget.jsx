import axios, { Axios } from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HiBadgeCheck } from "react-icons/hi";


const Forget = () => {
    const [a, b] = useState(true)
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    // console.log()
    const currentHost = window.location.host


    const myRef = useRef(null)
    const Click = () => {
        console.log(myRef)
        // myRef.current.innerHTML = "Mail Send Successfully"
        myRef.current.style.opacity = 1
    }


    const ClickHandler = async (e) => {

        e.preventDefault()

        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };


            const { data } = await axios.post(`${a ? '/api/user/student/send-mail' : '/api/employe/send-mail'}`,
                {
                    email,
                    currentHost
                },
                config
            )
            // console.log(data)
            let url = data.url
            // let backendHost = data.backendhost


            console.log(url)
            // console.log(backendHost)

            // const currentUrl = url.replace(backendHost, window.location.host)
            // console.log(currentUrl)

            // a ? navigate("/student/dashboard") : navigate("/forget-link")
        }
        catch (err) {
            console.log(err.message)
        }

    }
    return (
        <div>
            <div ref={myRef}
                className='text-xl flex items-center gap-2 m-auto w-fit  text-green-600 font-bold mt-10 opacity-0'
            ><span>Message Send Successfully</span> <HiBadgeCheck color='green' size="26" /></div>
            <div className='h-[calc(100vh-82px)] w-full flex flex-col items-center py-14 gap-5'>
                <h1 className='text-3xl font-bold'>Password Forget</h1>
                <div className='w-full max-w-md flex flex-col gap-4 shadow-lg shadow-blue-100  rounded-xl overflow-hidden  px-5'>
                    <div className='w-full flex'>
                        <div
                            onClick={() => b(true)}
                            className='text-2xl text-center w-1/2 cursor-pointer py-3 font-semibold'
                            style={a ? { borderBottom: "3px solid blue", color: "blue" } : { borderBottomColor: "transparent" }}>Student</div>
                        <div
                            onClick={() => b(false)}
                            className='text-2xl text-center w-1/2 cursor-pointer py-3 font-semibold'
                            style={a ? { backgroundColor: "transparent" } : { borderBottom: "3px solid blue", color: "blue" }}>Employee</div>
                    </div>
                    <form
                        className='w-full flex flex-col gap-4 py-5'
                        onSubmit={ClickHandler}>
                        <div>
                            <label htmlFor="e">Email</label>
                            <input
                                className='w-full px-3 py-1.5 mt-1.5 border-[2px] rounded-md outline-blue-500'
                                type="email"
                                placeholder='John@example.com'
                                id='e'
                                name='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <button
                            onClick={Click}
                            className='w-full px-3 py-2 rounded-md bg-blue-500 text-white font-semibold'
                            type='submit' >Send Mail
                        </button>



                    </form>
                </div>
            </div>

        </div>
    )
}

export default Forget
