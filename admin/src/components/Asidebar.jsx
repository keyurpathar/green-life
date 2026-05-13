import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import img from '../assets/assets_admin/home_icon.svg'
import img2 from '../assets/assets_admin/appointment_icon.svg'
import img3 from '../assets/assets_admin/add_icon.svg'
import img4 from '../assets/assets_admin/people_icon.svg'

const Asidebar = () => {

  const {admintoken} = useContext(AdminContext)

  return (
    <div className='min-h-screen bg-white border-r'>
  {   

      admintoken && 

      <ul className='text-[#515151] mt-5'>
        <NavLink to={'/adminDashboard'} className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#f2f3ff] border-r-4 border-[#5f6fff]' : ''}` }> 
              <img src={img} alt="An image Home Icon" />  
              <p>dashboard</p>
         </NavLink>
          <NavLink to={'/allapointments'} className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#f2f3ff] border-r-4 border-[#5f6fff]' : ''}` }> 
              <img src={img2} alt="An image Appointment Icon" />  
              <p>Appointments</p>
         </NavLink>
          <NavLink to={'/addDoctor'} className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#f2f3ff] border-r-4 border-[#5f6fff]' : ''}` }> 
              <img src={img3} alt="An image Add Icon" />  
              <p>Add doctor</p>
         </NavLink>
         <NavLink to={'/doctorlist'} className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#f2f3ff] border-r-4 border-[#5f6fff]' : ''}` }> 
              <img src={img4} alt="An image Add Icon" />  
              <p>Doctors list</p>
         </NavLink>
      </ul>
    
  }
    </div>
  )
}

export default Asidebar
