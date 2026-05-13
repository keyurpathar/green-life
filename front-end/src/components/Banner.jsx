import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/images/assets_frontend/appointment_img.png'

const Banner = () => {

    return (
        <div>
            <div
                className='bg-blue-800 flex flex-col  lg:flex-row lg:pt-2 rounded-lg px-2 lg:px-12  my-8 justify-center items-center gap-2  text-white'
            >

                {/* left side  */}
                <div
                    className='  flex flex-col gap-6 justify-center items-center md:items-start py-10 m-auto '
                >

                    <p
                        className='text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold leading-snug'
                    >
                        Book Appointment <br /> With 100+ Trusted Doctors
                    </p>

                    <Link to={'/login'}
                        className='flex items-center gap-6 justify-center bg-white text-black px-4 py-3 md:px-8 md:py-4 rounded-full active:scale-95 transition-all duration-250 '
                        onClick={() => { scrollTo(0, 0) }}
                    >
                        Create Account
                    </Link>

                </div>

                {/* right side  */}
                <div
                    className='md:w-1/2 lg:w-1/3'
                >
                    <img
                        src={img}
                        alt="An banner image"
                        className='w-full h-auto rounded-lg ' />
                </div>

            </div>
        </div>
    )
}

export default Banner
