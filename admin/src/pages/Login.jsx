import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets_admin/assets'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {

    const [state, setstate] = useState('Admin')

    const { setadmintoken, backendurl } = useContext(AdminContext)

    const [email, setemail] = useState('')

    const [password, setpassword] = useState('')

                       

    const onsubmithandler = async (e) => {

        e.preventDefault()

        try {

            if (state == 'Admin') {

                const { data } = await axios.post(backendurl + '/admin/login', { email, password })

                if (data.success) {
                    localStorage.setItem('admintoken', data.token)
                    setadmintoken(data.token);
                    toast.success("Login successful!")
                } else {
                    toast.error(data.message)
                }

            }

        } catch (err) {
            toast.error(err.message)
        }
    }

    return (
        <div>
            <form onSubmit={onsubmithandler} className='min-h-[80vh] flex items-center '>
                <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border border-gray-300 rounded-xl text-[#5e5e5e] text-sm'>

                    <p className='text-2xl font-semibold m-auto '><span className='text-[#5f6fff]'>{state}</span> login</p>
                    <div className='w-full '>
                        <p>Email : </p>
                        <input onChange={(e) => setemail(e.target.value)} value={email} className='border border-gray-400 rounded w-full p-2 mt-1' type="email" required />
                    </div>

                    <div className='w-full '>
                        <p>Password : </p>
                        <input onChange={(e) => setpassword(e.target.value)} value={password} className='border border-gray-400 rounded w-full p-2 mt-1' type="password" required />
                    </div>

                    <button className='bg-[#5f6fff] text-white w-full py-2 rounded-md text-base'>Login</button>
                    {
                        state === 'Admin' ? <p>Doctor Login ? <span className='text-[#5f6fff] underline cursor-pointer' onClick={() => setstate('Doctor')}>click here</span></p> : <p>Admin Login <span className='text-[#5f6fff] underline cursor-pointer' onClick={() => setstate('Admin')}>click here ? </span></p>
                    }
                </div>
            </form>

        </div>
    )
}

export default Login
