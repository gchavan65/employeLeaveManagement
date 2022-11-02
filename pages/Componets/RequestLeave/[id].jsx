
import React, { useState, useEffect } from 'react'
import Styles from "../../../styles/Screen1.module.css"
import Swal from "sweetalert2"
import { useDispatch } from "react-redux"
import { userSate } from '../../Redux/CartSlice'
import axios from 'axios'
import { useRouter } from 'next/router'


const Sceen1 = ({ userById }) => {
    console.log(userById)
    const [getId, SetgetId] = useState([])
    const [count, setCount] = useState(40)
    const [Available_leave, setAvailable_leave] = useState(40)
    const [Leave_requested, setLeave_requested] = useState(0)
    const [data, setData] = useState({
        username: "",
        address: "",
        Leave_date_from: "",
        Leave_date_to: "",
        Balance_leave: 0,
        status1: 0,
        status2: 0,
        status3: 0,
    })

    useEffect(() => {
        SetgetId(userById)

    }, [])

    const router = useRouter()
    const dispatch = useDispatch();

    function days_between() {
        const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        const firstDate = new Date(data.Leave_date_from);
        const secondDate = new Date(data.Leave_date_to);

        var time_difference = (secondDate.getTime() - firstDate.getTime()) / (1000 * 60 * 60 * 24);
        let newLEave = data.Balance_leave - time_difference
        setData(data.Balance_leave = newLEave)
        setLeave_requested(Leave_requested = time_difference)
        setCount(count = newLEave)
        setLeave_requested(Leave_requested = time_difference)
    }

    const handleClick = async (data2) => {

       
        try {
            // console.log(data2, "data2")
            // await dispatch(userSate({ ...data, Available_leave, Leave_requested }))
            if (getId.Balance_leave < Leave_requested) {
                Swal.fire({
                    title: `Hey u have exceed your leave limit?`,
                    showDenyButton: true,
                    confirmButtonText: 'Request',
                    denyButtonText: `Denied`,
                }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        Swal.fire('Applied!', `U Will Apply more  for  ${Leave_requested - getId.Balance_leave}  extra leaves`, 'success').then(async () => {
                            router.push("/Componets/EmployeeTable")
                            const res = await axios.put(`http://localhost:3000/api/Leave/${getId._id}`, {  
                                Balance_leave: getId.Balance_leave - Leave_requested,
                            }).then(async (res) => {
                                console.log(res.data.data, "resdata")
                                const obj = res.data.data
                            
                                try {
                                    const res2 = await axios.put(`http://localhost:3000/api/Leave/${getId._id}`, {
                                        $push: {
                                            leavesData: [{
                                                Leave_date_from: obj.Leave_date_from,
                                                Leave_date_to: obj.Leave_date_to,
                                                address: obj.address,
                                                username: obj.username,
                                                Balance_leave: obj.Balance_leave,
                                                Leave_requested: obj.Leave_requested,
                                                status1: obj.status1,
                                                status2: obj.status2,
                                                status3: obj.status3,
                                            }]
                                        }
                                    })
                                    await res2 ? (router.push(`/Componets/RequestLeave/`)) : router.push("/")
                                  
                                } catch (e) {
                                    console.log(e)
                                }
                            })

                        })
                    }
                    else if (result.isDenied) {
                        Swal.fire('Changes are not saved', '', 'info').then(() => {
                            router.push("/Componets/EmployeeTable")
                        })
                    }
                })

            } else {

                try {
                    const res = await axios.put(`http://localhost:3000/api/Leave/${getId._id}`, {  
                                Balance_leave: getId.Balance_leave - Leave_requested,
                            }).then(async()=>{
                                const res2 = await axios.put(`http://localhost:3000/api/Leave/${getId._id}`, {
                                    $push: {
                                        leavesData: [{
                                            Leave_date_from: data2.Leave_date_from,
                                            Leave_date_to: data2.Leave_date_to,
                                            status1: 0,
                                            status2: 0,
                                            status3: 0,
                                            Balance_leave: getId.Balance_leave - Leave_requested,
                                            Leave_requested: Leave_requested,
                                            address: data2.address,
                                        }]
                                    }
                                })
                                Swal.fire({
                                    position: 'top-center',
                                    icon: 'success',
                                    title: 'u have  Successfully apply for leave',
                                    showConfirmButton: false,
                                    timer: 1500
                                  })
                                 
                                await res2 ?(router.push(`/Componets/Employee/${getId._id}`)) : router.push("/")
                            })
                   
                } catch (e) {
                    console.log(e)
                }

            }
        } catch (e) {
            console.log(e)
        }
    }









    const handleChange = (e) => {
        let { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }

    const formonSubmit = (event) => {
        event.preventDefault()
        days_between()
        handleClick({ ...data, Available_leave, Leave_requested })
    }

    return (
        <>
            <div className={Styles.container}>

                <form onSubmit={formonSubmit}>    <div className={Styles.wrapper}>
                    <div className={Styles.wrapper1}>
                        <div className={Styles.items}>
                            <h3>Balanced Leave = {getId.Balance_leave}</h3>
                            <label className={Styles.labels}>Name</label>
                            <input onChange={handleChange} style={{ color: "white", fontWeight: "bolder" }} disabled className={Styles.inputs} name="username" value={`${getId.firstname} ${getId.lastname}`} type="text" placeholder='Enter Name' required />
                        </div>
                        <div className={Styles.items}>
                            <label className={Styles.labels}>Address</label>
                            <input onChange={handleChange} className={Styles.inputs} name="address" value={data.address} type="text" placeholder='Enter Address' required />
                        </div>
                        <div className={Styles.items}>
                            <label className={Styles.labels}>Leave date from</label>
                            <input onChange={handleChange} className={Styles.inputs} name="Leave_date_from" min={new Date().toISOString().split('T')[0]} value={data.Leave_date_from} type="date" placeholder='Enter Address' required />
                        </div>
                        <div className={Styles.items}>
                            <label className={Styles.labels}>Leave date to</label>
                            <input onChange={handleChange} className={Styles.inputs} name="Leave_date_to" min={new Date().toISOString().split('T')[0]} value={data.Leave_date_to} type="date" placeholder='Enter Address' required />
                        </div>
                    </div>
                    <div className={Styles.wrapper1}>
                        <div className={Styles.items}>
                            <label className={Styles.labels}>Total leave</label>
                            <input onChange={handleChange} className={Styles.inputs} name="Available_leave" value={Available_leave} type="text" placeholder='Enter Address' style={{ color: "white", fontWeight: "bolder" }} disabled required />
                        </div>
                        <div className={Styles.items}>
                            <label className={Styles.labels}>Leave requested</label>
                            <input onChange={handleChange} className={Styles.inputs} style={{ color: "white", fontWeight: "bolder" }} name="Leave_requested" disabled value={Leave_requested} type="number" placeholder='Enter Address' required />
                        </div>
                        <div className={Styles.items}>
                            <label className={Styles.labels}>Balance leave</label>
                            <input className={Styles.inputs} style={{ color: "white", fontWeight: "bolder" }} name="Balance_leave" value={getId.Balance_leave} type="text" placeholder='Enter Address' disabled required />
                        </div>
                    </div>
                </div>
                    <div className={Styles.btncontainer}>
                        <button className={Styles.btn}  >Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Sceen1

export const getServerSideProps = async ({ params }) => {
    try {
        const getUSers = await axios.get(`http://localhost:3000/api/Leave/${params.id}`)
        return {
            props: {
                userById: getUSers.data.data,
                par: params
            }
        }
    } catch (e) {
        console.log(e)
    }

}