import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { useNavigate } from 'react-router-dom'

const Doctorslist = () => {

  const { doctors, getAllDoctor, admintoken, changeAvailability, deleteDoctor } = useContext(AdminContext)
  const navigate = useNavigate()

  console.log(admintoken)

  useEffect(() => {

    if (admintoken) {
      if (admintoken) {
        getAllDoctor()
      }
    }


  }, [admintoken])

  return (
    <div className='m-5 max-h-[90vh] overflow-scroll'>

      <h1 className='text-lg font-medium'>All Doctors</h1>

      <div className='flex flex-wrap w-full gap-4 pt-5 gap-y-6'>

        {
          doctors.map((item, index) => (
            <div key={index} className='border border-gray-300 rounded-xl max-w-56 overflow-hidden cursor-pointer group'>
              <img src={item.image} alt="" className=' bg-indigo-200 group-hover:bg-[#5f6fff] transition-all duration-200' />
              <div className='p-4'>
                <p className='text-neutral-900 text-lg font-medium'>{item.name}</p>
                <p className='text-neutral-700 text-sm font-light'>{item.speciality}</p>
                <div className='mt-2 flex items-center gap-1 text-sm'>
                  <input onChange={() => changeAvailability(item._id)} type="checkbox" checked={item.available} />
                  <p>Available</p>
                </div>
                <div className='mt-3 flex justify-between'>
                  <button 
                    onClick={() => navigate(`/edit-doctor/${item._id}`)}
                    className='text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded hover:bg-blue-200 transition'>
                    Edit
                  </button>
                  <button 
                    onClick={() => {
                      if(window.confirm('Are you sure you want to delete this doctor?')) {
                        deleteDoctor(item._id)
                      }
                    }}
                    className='text-xs bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200 transition'>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Doctorslist
