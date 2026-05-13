import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'


const Doctors = () => {

  const navigate = useNavigate()

  const { speciality } = useParams()

  const { doctors } = useContext(AppContext)

  const [filter, setfilter] = useState([])

  const [showFilter , setShoeFilter] = useState(false)

  const applyFilter = () => {
    if (speciality) {
      setfilter(doctors.filter(doc => doc.speciality == speciality))
    }
    else {
      setfilter(doctors)
    }
  }

  useEffect(() => {

    applyFilter()

  }, [doctors, speciality])

  return (
    <div className='my-4 px-4'>
      <p className='text-[#4B5563]'>Browse through the doctors specialist.</p>

      <div className='flex flex-col text-center md:flex-row gap-4 my-8'>

        <button className={`py-1 px-3 border rounded text-sm transition-all md:hidden  ${showFilter ? 'bg-blue-700 text-white' : ''}`} onClick={() => setShoeFilter(prev => !prev)}>Filters</button>

        <div className={`text-[#4B5563] flex flex-col gap-3 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={() => { speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician') }} className='border border-gray-400 rounded-lg px-8 py-2  transition-all duration-200 hover:bg-[#E2E5FF] cursor-pointer'>General physician</p>

          <p onClick={() => { speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist') }} className='border border-gray-400 rounded-lg px-8 py-2  transition-all duration-200 hover:bg-[#E2E5FF] cursor-pointer'>Gynecologist</p>

          <p onClick={() => { speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist') }} className='border border-gray-400 rounded-lg px-8 py-2  transition-all duration-200 hover:bg-[#E2E5FF] cursor-pointer'>Dermatologist</p>

          <p onClick={() => { speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians') }} className='border border-gray-400 rounded-lg px-8 py-2  transition-all duration-200 hover:bg-[#E2E5FF] cursor-pointer'>Pediatricians</p>

          <p onClick={() => { speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist') }} className='border border-gray-400 rounded-lg px-8 py-2  transition-all duration-200 hover:bg-[#E2E5FF] cursor-pointer'>Neurologist</p>

          <p onClick={() => { speciality === 'Gastroenterologist' ? navigate('/doctors/Gastroenterologist') : navigate('/doctors') }} className='border border-gray-400 rounded-lg px-8 py-2  transition-all duration-200 hover:bg-[#E2E5FF] cursor-pointer '>Gastroenterologist</p>

        </div>

        <div className='w-full flex flex-col md:grid md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {
            filter.map((item, indx) => (

              <div key={indx} onClick={() => navigate(`/appointment/${item._id}`)} className='border rounded-lg border-gray-300 cursor-pointer hover:-translate-y-1 transition-all duration-200'>

                <img className='bg-blue-50 rounded-tl-lg rounded-tr-lg' src={item.image} alt="An doctor image" />

                <div className='p-4'>

                  <div className='flex items-center gap-2 text-sm text-left text-green-500'>
                    <p className='w-2 h-2 bg-green-500 text-sm rounded-full'></p><p>Available</p>
                  </div>

                  <p className='text-base text-left font-semibold'>{item.name}</p>
                  <p className='text-sm text-gray-500 text-left'>{item.speciality}</p>

                </div>

              </div>

            ))}
        </div>

      </div>
    </div>
  )
}

export default Doctors
