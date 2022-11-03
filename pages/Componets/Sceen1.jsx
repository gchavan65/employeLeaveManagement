import React, { useState } from 'react'
import Styles from "../../styles/Screen1.module.css"
import Swal from "sweetalert2"
import { useDispatch } from "react-redux"
import { userSate } from '../redux/CartSlice'
import axios from 'axios'
import {useRouter} from 'next/router'

const Sceen1 = () => {
    const [Leave_requested ,setLeave_requested] = useState(0)
    const [count ,setCount] = useState(40)
    const [Available_leave ,setAvailable_leave] = useState(15)
    let [data , setData ] = useState({
        username:"",
        address:"",
        Leave_date_from:"",
        Leave_date_to:"",
        Balance_leave:40,
        status1:0,
        status2:0,
        status3:0, 
        password:"" 
    })
     const router = useRouter()

     function days_between() {
        const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        const firstDate = new Date(data.Leave_date_from);
        const secondDate = new Date(data.Leave_date_to);  
        var time_difference = (secondDate.getTime() - firstDate.getTime())/(1000 * 60 * 60 * 24);    
    let newLEave = data.Balance_leave - time_difference
    setData(data.Balance_leave = newLEave)
    setLeave_requested (Leave_requested = time_difference)
        setCount(count = newLEave)
         setLeave_requested (Leave_requested = time_difference)
    }
     const dispatch = useDispatch( );
     const handleClick = async (data2) =>{
        try{
                await dispatch(userSate({...data,Available_leave,Leave_requested}))

                const res = await axios.post("http://localhost:3000/api/Leave", data2)
         res ?  (router.push("/Componets/NewTable")) : router.push("/")
        }catch(e){
            console.log(e)
        }
     }

const handleChange = (e) =>{
let {name,value} = e.target
setData({
    ...data,
    [name]:value
})
}

const formonSubmit = (event) =>{
    event.preventDefault()
    days_between()
    let leavesData = [{
        Leave_date_from:data.Leave_date_from,
        Leave_date_to:data.Leave_date_to,
        address:data.address,
        Balance_leave:Available_leave,
        Leave_requested:Leave_requested,
        status1:0,
        status2:0,
        status3:0
    }]
    handleClick({...data,leavesData ,Available_leave,Leave_requested})
}
  return (
    <>
    <div className={Styles.container}>
        <form onSubmit={formonSubmit}>    <div className={Styles.wrapper}>
       
    <div className={Styles.wrapper1}>
       <div className={Styles.items}>
        <h3>Balanced Leave = {count}</h3>
        <label className={Styles.labels}>Name</label>
        <input onChange={handleChange} className={Styles.inputs} name="username" value={data.username}  type="text" placeholder='Enter Name' required/>
       </div>
       <div className={Styles.items}>
        <label className={Styles.labels}>Address</label>
        <input onChange={handleChange} className={Styles.inputs} name="address" value={data.address} type="text" placeholder='Enter Address' required/>
       </div>
       <div className={Styles.items}>
        <label className={Styles.labels}>Leave date from</label>
        <input onChange={handleChange} className={Styles.inputs} name="Leave_date_from" min={new Date().toISOString().split('T')[0]}  value={data.Leave_date_from} type="date"  required/>
       </div>
       <div className={Styles.items}>
        <label className={Styles.labels}>Leave date to</label>
        <input onChange={handleChange} className={Styles.inputs} name="Leave_date_to" min={new Date().toISOString().split('T')[0]} value={data.Leave_date_to} type="date" placeholder='Enter Password' required/>
       </div>
       </div>
       <div className={Styles.wrapper1}>
       <div className={Styles.items}>
        <label className={Styles.labels}>Total leave</label>
        <input onChange={handleChange} className={Styles.inputs} name="Available_leave"  value={Available_leave} type="text" placeholder='Enter Address' style={{color:"white" , fontWeight:"bolder"}} disabled  required/>
       </div>
       <div className={Styles.items}>
        <label className={Styles.labels}>Leave requested</label>
        <input  className={Styles.inputs}  style={{color:"white" , fontWeight:"bolder"}} name="Leave_requested" disabled value={Leave_requested} type="number" placeholder='Enter Address' required/>
       </div>
       <div className={Styles.items}>
        <label className={Styles.labels}>Balance leave</label>
        <input  className={Styles.inputs} style={{color:"white" , fontWeight:"bolder"}} name="Balance_leave" value={count} type="text" placeholder='Enter Address' disabled required/>
       </div>
       <div className={Styles.items}>
        <label className={Styles.labels}>Password</label>
        <input onChange={handleChange} className={Styles.inputs}  name="password" value={data.password} type="text" placeholder='Enter Password'  required/>
       </div>
</div>
    </div>
    <div className={Styles.btncontainer}>
    <button variant="contained" color="success">
  Success
</button>
    </div>
    </form>
    </div>
    </>
  )
}

export default Sceen1