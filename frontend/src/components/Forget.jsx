import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Forget = () => {
    const [a, b] = useState(true)
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    
    const ClickHandler = async (e) => {

        e.preventDefault()

        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
          

            const {data } = await axios.post(`${a ? '/api/student/send-mail' : '/api/employe/send-mail'}`,
                {
                    email
                },
                config
            )

            const url = data.url


            console.log(data.url)

            a ? navigate("/student/dashboard") : navigate("/forget-link")
        }
        catch (err) {
            console.log(err.message)
        }

    }
  return (
    <div>
        <div className='h-[calc(100vh-82px)] w-full flex flex-col items-center py-10 gap-5'>
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
                    className='w-full flex flex-col gap-4 pt-5'
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
                        className='w-full px-3 py-2 rounded-md bg-blue-500 text-white font-semibold'
                        type='submit' >Forget Password
                    </button>

                  

                </form>
                </div>
                </div>
      
    </div>
  )
}

export default Forget
