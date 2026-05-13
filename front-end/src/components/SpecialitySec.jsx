import React from 'react'
import img1 from '../assets/images/assets_frontend/General_physician.svg'
import img2 from '../assets/images/assets_frontend/Gynecologist.svg'
import img3 from '../assets/images/assets_frontend/Dermatologist.svg'
import img4 from '../assets/images/assets_frontend/Pediatricians.svg'
import img5 from '../assets/images/assets_frontend/Neurologist.svg'
import img6 from '../assets/images/assets_frontend/Gastroenterologist.svg'
import { Link } from 'react-router-dom'

const SpecialitySec = () => {
  return (
    <div className='outline flex flex-col gap-6 md:gap-8 items-center'>

      <h2 className='text-3xl font-semibold md:text-4xl text-[#1F2937]'>Find by Speciality </h2>
      <p className='text-gray-600 px-6 text-center md:w-2/3 lg:w-1/2'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>

      <div className='flex flex-col gap-4 justify-center items-center text-center md:flex-row md:gap-6'>

        <Link to={'doctors/Generalphysician'} onClick={() => scrollTo(0, 0)} className=' flex flex-col items-center'>
          <img src={img1} alt="" className='w-24 md:w-18 mb-2 hover:-translate-y-1 transition-all duration-250' />
          <p className='text-gray-600 text-sm'>General physician</p>
        </Link>

        <Link to={'doctors/Gynecologist'} onClick={() => scrollTo(0, 0)} className=' flex flex-col items-center'>
          <img src={img2} alt="" className='w-24 md:w-18 mb-2 hover:-translate-y-1 transition-all duration-250' />
          <p className='text-gray-600 text-sm'>Gynecologist</p>
        </Link>

        <Link to={'doctors/Dermatologist'} onClick={() => scrollTo(0, 0)} className=' flex flex-col items-center'>
          <img src={img3} alt="" className='w-24 md:w-18 mb-2 hover:-translate-y-1 transition-all duration-250' />
          <p className='text-gray-600 text-sm'>Dermatologist</p>
        </Link>

        <Link to={'doctors/Pediatricians'} onClick={() => scrollTo(0, 0)} className=' flex flex-col items-center'>
          <img src={img4} alt="" className='w-24 md:w-18 mb-2 hover:-translate-y-1 transition-all duration-250' />
          <p className='text-gray-600 text-sm'>Pediatricians</p>
        </Link>

        <Link to={'doctors/Neurologist'} onClick={() => scrollTo(0, 0)} className=' flex flex-col items-center'>
          <img src={img5} alt="" className='w-24 md:w-18 mb-2 hover:-translate-y-1 transition-all duration-250' />
          <p className='text-gray-600 text-sm'>Neurologist </p>
        </Link>

        <Link to={'doctors/Gastroenterologist'} onClick={() => scrollTo(0, 0)} className=' flex flex-col items-center'>
          <img src={img6} alt="" className='w-24 md:w-18 mb-2 hover:-translate-y-1 transition-all duration-250' />
          <p className='text-gray-600 text-sm'>Gastroenterologist</p>
        </Link>

      </div>

    </div>
  )
}

export default SpecialitySec
