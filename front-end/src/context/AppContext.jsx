import { createContext, useEffect, useState } from "react"
// import { doctors } from '../assets/images/assets_frontend/assets'
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {

    const currencySymbol = '$'

    const backendurl = import.meta.env.VITE_BACKEND_URL

    const [doctors, setdoctors] = useState([])

    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '')

    const [userData, setuserData] = useState(false)


    const getDoctorData = async () => {

        try {

            const { data } = await axios.get(backendurl + '/doctor/list')
            // console.log(data)

            if (data.success) {

                setdoctors(data.doctors)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.response?.data?.message || error.message)
        }
    }

    const loadUserData = async () => {
        try {
            const { data } = await axios.get(backendurl + '/user/profile', { headers: { token } })
            if (data.success) {
                setuserData(data.data)
            }
            else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.response?.data?.message || error.message)
        }
    }

    const value = {
        doctors, currencySymbol, token, setToken, backendurl, userData, loadUserData, setuserData , getDoctorData
    }


    useEffect(() => {
        getDoctorData()
    }, [])

    useEffect(() => {
        if (token) {
            loadUserData()
        }
        else {
            setuserData(false)
        }
    }, [token])

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider