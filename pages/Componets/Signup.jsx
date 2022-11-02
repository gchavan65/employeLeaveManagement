import React, { useState } from 'react'
import Styles from '../../styles/Signup.module.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from 'next/link'
import EmployeLoginIcon from './Admin/EmployeLoginIcon';
import LeaveImage from '../../public/images/leaveImage.jpg'
import Image from 'next/image';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import axios from 'axios';
import Swal from 'sweetalert2'
import {useRouter} from 'next/router'
const Signup = () => {
  const router = useRouter()
  let [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phoneno: "",
  repassword:"",
  Balance_leave:40
  })
  const [error ,setError] =useState(false)
  const [visible , notVisible] = useState(true)


  const handleClick = async (data2) =>{
    try{
            // await dispatch(userSate({...data,Available_leave,Leave_requested}))

            const res = await axios.post("http://localhost:3000/api/Signup", data2)
          
            Swal.fire({
              position: 'top-center',
              icon: 'success',
              title: 'Ragister Successfully',
              showConfirmButton: false,
              timer: 1500
            })
       res ?   router.push("/") : " "
    }catch(e){
        console.log(data)
        Swal.fire({
          position: 'top-center',
          icon: 'error',
          title: e,
          showConfirmButton: false,
          timer: 1500
        })
    }
 }
 
  const onSubmit = (event) =>{
    event.preventDefault()
    if(data.password != data.repassword){
      // alert("not match")
      setError(true)
      
    }
    else{
      handleClick(data)
    }
    
  }
  const handleChange = (e) =>{
    let {name,value} = e.target
    setData({
        ...data,
        [name]:value
    })

 

    }
  return (
    <div className={Styles.container}>

      <div className={Styles.swapper}>
      <div className={Styles.leftContainer}>
    <div className={Styles.itemsContainer}> 
<h1>Signup</h1>
<h3>Welocome To Employee Leave Management System</h3>
</div>  
<div className={Styles.imgContainer}>
<Image src={LeaveImage} width="300px" height="300px" className={Styles.img}/>
</div>

    </div>
        <div className={Styles.right}>
          <form onSubmit={onSubmit}>
        <div className={Styles.btncontainer}>
          <EmployeLoginIcon />
        
    </div>
 
          <div className={Styles.wrapper}>

            <div className={Styles.wrapper1}>
              <div className={Styles.items}>
              
                <TextField  required onChange={handleChange} name="firstname" type="text" value={data.firstname}   disableUnderline={false}  className={Styles.textField} id="standard-basic" label="Firstname" variant="standard" />
              </div>
              <div className={Styles.items}>
              
                <TextField required onChange={handleChange} name="email" type="email" value={data.email} className={Styles.textField} id="standard-basic" label="Email" variant="standard" />
              </div>
              <div className={Styles.items}>
              
               <TextField 
                error={error}
                type={visible ?  "password" : "text" }
                helperText={error ? "Password Not Match" : ""}
                required onChange={handleChange} name="password" value={data.password} className={Styles.textField} id="standard-basic" label="Password" variant="standard" />
                
                
              </div>
              
         

            </div>
            
            <div className={Styles.wrapper1}>
              <div className={Styles.items}>
                
              <TextField required onChange={handleChange} type="text" name="lastname" value={data.lastname} className={Styles.textField} id="standard-basic" label="Lastname" variant="standard" />
              </div>
              <div className={Styles.items}>
               
                <TextField required onChange={handleChange} type="number"  name="phoneno" value={data.phoneno} className={Styles.textField} id="standard-basic" label="Phone No" variant="standard" />
              </div>
              <div className={Styles.items}>
            
              <TextField 
                error={error ? true : false}
                helperText={error ? "Password Not Match" : ""}
              required onChange={handleChange} type="password" name="repassword" value={data.repassword} className={Styles.textField} id="standard-basic" label="Reeneter Password" variant="standard" />
                </div>
            
            </div>
        

          </div>
          <div>
      
          </div>
          <div className={Styles.visibility}>
                  {
                    visible ? <VisibilityIcon style={{color:"black"}} onClick={()=>{notVisible(false)}} /> : <VisibilityOffIcon style={{color:"black"}} onClick={()=>{notVisible(true)}} />
                  } </div>
          <div className={Styles.btncontainer}>
          <Button type="submit" variant="contained" >
  Create Account 
</Button>

    </div>
<div className={Styles.alredy} >
  <p>Already I have account ? 
  <Link href={`/`} passHref>
    <a className={Styles.link}> Log in</a>
    </Link>
    </p>
</div>
</form>
        </div>

     
      </div>
     

    </div>
  )
}

export default Signup