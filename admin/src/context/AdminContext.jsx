import { createContext, useState } from "react";
import axios from 'axios'
import { toast } from "react-toastify";

export const AdminContext = createContext()

const AdminContextProvider = (props) => {

    const [admintoken, setadmintoken] = useState(localStorage.getItem('admintoken') ? localStorage.getItem('admintoken') : '')

    const [doctors, setdoctors] = useState([])

    const backendurl = import.meta.env.VITE_BACKEND_URL;

    const getAllDoctor = async () => {

        try {

            const { data } = await axios.get(backendurl + '/admin/allDoctors', { headers: { admintoken } })

            if (data.success) {
                setdoctors(data.doctors)
                console.log(data.doctors)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        }
    }

    const changeAvailability = async (docId) => {

        try {

            const { data } = await axios.post(backendurl + '/admin/changeavailability', { docId }, { headers: { admintoken } })

            if (data.success) {
                toast.success('availibility changed')
                getAllDoctor()
            }
            else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        }

    }

    const deleteDoctor = async (docId) => {
        try {
            const { data } = await axios.delete(backendurl + '/admin/deleteDoctor/' + docId, { headers: { admintoken } })

            if (data.success) {
                toast.success(data.message)
                getAllDoctor()
            }
            else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.response?.data?.message || error.message)
        }
    }

    const value = {
        admintoken, setadmintoken, backendurl, doctors, getAllDoctor, changeAvailability, deleteDoctor


    }

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )

}

export default AdminContextProvider