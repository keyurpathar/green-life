import React, { useContext } from 'react'
import logo from '../assets/assets_admin/admin_logo.svg'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const { admintoken , setadmintoken } = useContext(AdminContext)

    const navigate = useNavigate()

    const logout = () => {
        navigate('/')
            admintoken && setadmintoken('')
            admintoken && localStorage.removeItem('admintoken')
    }

    return (
        <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>

            <div className='flex items-center gap-2 text-xs'>
                <img className='w-36 sm:w-40 cursor-pointer' src={logo} alt="" />
                <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600'>{admintoken ? 'admin' : 'doctor'}</p>
            </div>
                <button onClick={logout} className='bg-[#5f6fff] text-sm text-white px-10 py-2 rounded-full'>logout</button>

        </div>
    )
}

export default Navbar
