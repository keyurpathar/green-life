import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AdminContext } from './context/AdminContext'
import Navbar from './components/Navbar'
import Asidebar from './components/Asidebar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/admin/Dashboard'
import AllApointments from './pages/admin/AllApointments'
import Adddoctor from './pages/admin/Adddoctor'
import Doctorslist from './pages/admin/Doctorslist'

const App = () => {

  const { admintoken } = useContext(AdminContext)


  return admintoken ? (
    <div className='bg-[#f8f9fd]'>

      <ToastContainer />

      <Navbar />
      <div className='flex items-start'>

        <Asidebar />

        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/adminDashboard' element={<Dashboard />} />
          <Route path='/allapointments' element={<AllApointments />} />
          <Route path='/addDoctor' element={<Adddoctor />} />
          <Route path='/edit-doctor/:id' element={<Adddoctor />} />
          <Route path='/doctorlist' element={<Doctorslist />} />
        </Routes>

      </div>

    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  )
}

export default App
