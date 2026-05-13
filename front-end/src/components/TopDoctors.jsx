import React, { useContext } from 'react'
// import { doctors } from '../assets/images/assets_frontend/assets'
import { ImEarth } from 'react-icons/im'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'


const TopDoctors = () => {

    const navigate = useNavigate()
    const { doctors } = useContext(AppContext)

    return (
        <div className=' my-8 flex flex-col items-center gap-4 text-gray-900 md:mx-10'>

            <h2 className='text-3xl font-semibold md:text-4xl text-[#1F2937]'>Top Doctors to Book</h2>

            <p className='text-sm text-gray-500'>Simply browse through our extensive list of trusted doctors.</p>

            <div className='w-full grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-5 gap-y-6 px-3 sm:px-0' >
                {doctors.slice(0, 8).map((item, indx) => (
                    <div key={indx} onClick={() => navigate(`/appointment/${item._id}`)} className='border rounded-lg border-gray-300 cursor-pointer hover:-translate-y-1 transition-all duration-200'>
                        <img className='bg-blue-50 rounded-tl-lg rounded-tr-lg' src={item.image} alt="An doctor image" />
                        <div className='p-4'>
                            <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                                <p className='w-2 h-2 bg-green-500 text-sm rounded-full'></p><p>Available</p>
                            </div>
                            <p className='text-base font-semibold'>{item.name}</p>
                            <p className='text-sm text-gray-500'>{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={() => { navigate('/doctors'); scrollTo(0, 0) }} className='bg-blue-200 px-12 py-3 rounded-full'>more</button>

        </div>
    )
}

export default TopDoctors 
