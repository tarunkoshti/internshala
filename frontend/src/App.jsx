import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Student from './pages/Student'
import Nav from './components/Nav'
import Signup from './pages/Signup'
import Homepage from './pages/Homepage'
import Employee from './pages/Employee'
import Forget from './components/Forget'
import Forgetlink from './components/forgetlink'
import Employesignup from './pages/Employesignup'

const App = () => {
  return (
    <>
      {/* <Routes>
        <Route path='/user/student'/>
      </Routes> */}
      {/* <div>
        <Link to="/student/signin">login</Link>
        <Link to="/student">current user</Link>
      </div> */}
      <Nav />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/student/signin' element={<Login />} />
        <Route path='/employee/signin' element={<Login />} />
        <Route path='/student/signup' element={<Signup />} />
        <Route path='/employe/signup' element={<Employesignup />} />
        <Route path='/student/dashboard' element={<Student />} />
        <Route path='/employee/dashboard' element={<Employee />} />
        <Route path='/forget' element={<Forget/>} />
        <Route path='/forget-link' element={<Forgetlink/>} />

      </Routes>
    </>
  )
  
}

export default App
