import { useFormik } from "formik"
import { Link, useNavigate } from "react-router-dom"
import * as Yup from 'yup'
import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import axios from "axios"
import { toast } from "react-toastify"

const Register = () => {
  const { backendurl, setToken } = useContext(AppContext)
  const navigate = useNavigate()

  const validationSchema = Yup.object({
    name: Yup.string().min(2, 'Name must be at least 2 characters').required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
  })


  const formik = useFormik({

    initialValues: {
      name: '',
      email: '',
      password: '',
    },

    validationSchema,

    onSubmit: async (val, { resetForm }) => {
      try {
        const response = await axios.post(backendurl + '/user/register', val)
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
          toast.success(response.data.message)
          resetForm()
          navigate('/')
        }
      } catch (error) {
        console.log(error)
        toast.error(error.response?.data?.message || error.message)
      }
    }

  })


  return (
    <div className="flex justify-center items-center px-2">

      <form
        onSubmit={formik.handleSubmit}
        className="border border-gray-300 rounded-lg shadow my-8 w-fit py-8 px-6 md:px-10 flex flex-col gap-4"
      >
        <div>
          <h1 className="text-xl capitalize font-medium text-gray-600">create account</h1>
          <p className="text-gray-500 text-sm">Please sign up to book appointment</p>
        </div>

        <div>
          <label htmlFor="name" className="text-gray-700">Full Name</label> <br />
          <input
            type="text"
            name="name"
            id="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            className="border border-gray-300 rounded focus:outline-0 px-2 w-full py-0.5"
          />
          {formik.touched.name && formik.errors.name &&
            (<p className="text-red-500 text-sm mt-1 transition-all duration-200">{formik.errors.name}</p>)
          }
        </div>

        <div>
          <label htmlFor="email" className="text-gray-700">Email</label> <br />
          <input
            type="text"
            name="email"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="border border-gray-300 rounded focus:outline-0 px-2 w-full py-0.5"
          />
          {formik.touched.email && formik.errors.email &&
            (<p className="text-red-500 text-sm mt-1 transition-all duration-200">{formik.errors.email}</p>)
          }
        </div>

        <div>
          <label htmlFor="password" className="text-gray-700">Password</label> <br />
          <input
            type="password"
            name="password"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            className="border border-gray-300 rounded focus:outline-0 px-2 w-full py-0.5"
          />
          {formik.touched.password && formik.errors.password &&
            (<p className="text-red-500 text-sm mt-1 transition-all duration-200">{formik.errors.password}</p>)
          }
        </div>

        <div className="flex flex-col justify-center items-center gap-3">

          <p className="text-gray-600 text-sm capitalize">already have an account ?
            <Link to={'/login'} className="underline text-blue-500">  login here</Link></p>
          <button type="submit" className=" text-white px-6 py-2 rounded bg-[#5F6FFF] active:scale-95 transition-all duration-200 capitalize">create account</button>
        </div>


      </form>



    </div>
  )
}

export default Register
