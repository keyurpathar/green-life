import React from 'react'
import logo from '../assets/images/assets_frontend/logo.svg'

const Footer = () => {
    return (
        <footer className='mx-auto text-sm'>
            <div
             className='flex flex-col items-center gap-4 text-center md:grid md:grid-cols-4 '
             >

                {/* left side  */}
                <div className='col-span-2'>
                    <img 
                    src={logo} 
                    alt="An logo"
                    className='my-4'
                     />
                    <p className='md:text-left md:text-sm text-[#4B5563]'> <span className='text-gray-700 font-semibold text-lg'>   "Your Health Is Our Greatest Mission." </span> <br />
                        At our hospital, every patient is treated with the highest level of <br /> care, compassion, and expertise.</p>
                </div>


                {/* center  */}
                <div className='text-[#4B5563]'>
                    <p className='uppercase text-xl'>Company</p>

                    <ul className='flex flex-col gap-1'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Privacy Policy</li>
                    </ul>

                </div>


                {/* right side  */}
                <div className='text-[#4B5563]'>
                    <p className='uppercase my-2 text-xl'>Heading</p>

                    <ul className='flex flex-col gap-2'>
                        <li>+91 12121 13131</li>
                        <li>random@gmail.com</li>
                    </ul>
                </div>

            </div>

            <div >
                <hr className='text-gray-500 my-4'  />

                <p className='text-[#4B5563] text-center text-sm'>Copyright © 2024 GreatStack - All Right Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
