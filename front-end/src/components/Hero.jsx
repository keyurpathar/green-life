import React from 'react'
import groupPic from '../assets/images/assets_frontend/group_profiles.png'
import heroImg from '../assets/images/assets_frontend/header_img.png'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";






const Hero = () => {
    return (

        <div className='bg-blue-800 flex flex-col  lg:flex-row lg:pt-6 rounded-lg px-2 lg:px-10  my-8 justify-between items-center gap-2 text-white'>

            {/* left side  */}
            <div className='md:w-1/2 flex flex-col gap-6 justify-center items-center md:items-start py-10 m-auto '>
                <p  className='text-3xl md:text-3xl lg:text-4xl xl:5xl font-semibold leading-snug'>Book Appointment <br /> With Trusted Doctors</p>

                <div className='flex flex-col justify-between md:flex-row items-center h-auto  w-3/4 md:w-auto gap-3  text-sm font-light'>
                    <img src={groupPic} alt="An group image" className='w-28' />
                    <p className='md:text-sm leading-relaxed'>Simply browse through our extensive list of trusted doctors schedule your appointment hassle-free.</p>
                </div>

                <Link className='flex items-center gap-6 justify-center bg-white text-black px-4 py-3 md:px-8 md:py-4 rounded-full active:scale-95 transition-all duration-250 '>Book Appointment <FaArrowRightLong /> </Link>

            </div>

            {/* right side  */}
            <div className='md:w-1/2 relative '>
                <img src={heroImg} alt="" className=' w-full h-auto rounded-lg ' />
            </div>

        </div>
    )
}

export default Hero
