import React from 'react'
import img from '../assets/images/assets_frontend/contact_image.png'

const Contact = () => {
  return (
    <div className='my-8 px-2 lg:px-10'>

      <div>
        <p className='text-center uppercase my-4 text-gray-700 text-2xl'>contact us</p>

        <div className='flex flex-col justify-center my-4 gap-4 md:flex-row md:gap-8'>

          <img
            src={img}
            alt="An about image"
            className='rounded-lg w-full md:w-1/2 lg:w-1/3'
          />

          <div className='flex flex-col gap-3 lg:gap-8 xl:gap-10 xl:mt-8 text-gray-500 text-base'>

            <div className='flex flex-col gap-4 text-center md:text-left md:gap-6'>

              <h4 className='uppercase text-gray-800'>our office</h4>

              <p className='text-sm'>54709 Willms Station <br />
                Suite 350, Washington, USA</p>

              <p className='text-sm'>Tel: (415) 555‑0132</p>
              <p className='text-sm'>Email: random@gmail.com</p>

            </div>

            <div className='text-center md:text-left'>
              <h4 className='uppercase text-gray-800'>Careers at PRESCRIPTO</h4>

              <p className='text-sm'>Learn more about our teams and job openings.</p>

              <button className='px-6 py-2 border mt-6 capitalize hover:bg-[#5f6fff] hover:text-white transition-all duration-200'>explore jobs</button>
            </div>



          </div>

        </div>

        {/* <div className='my-8 flex flex-col gap-6'>
    
              <p className='uppercase text-gray-700 font-semibold'>why choose us</p>
    
              <div className='flex flex-col md:flex-row'>
    
                <div className='border border-gray-400 px-4 py-12' >
                  <p className='my-2 uppercase text-gray-700'>Efficiency:</p>
                  <p className='text-gray-500'>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
                </div>
    
                <div className='border border-gray-400 px-4 py-12'>
                  <p className='my-2 uppercase text-gray-700'>Convenience:</p>
                  <p className='text-gray-500'>Access to a network of trusted healthcare professionals in your area.</p>
                </div>
    
                <div className='border border-gray-400 px-4 py-12'>
                  <p className='my-2 uppercase text-gray-700'>Personalization:</p>
                  <p className='text-gray-500'>Tailored recommendations and reminders to help you stay on top of your health.</p>
                </div>
    
              </div>
    
            </div> */}

      </div>

    </div>
  )
}

export default Contact
