import Image from 'next/image'
import React,{useEffect, useState} from 'react'
import axios from 'axios'
import Styles from '../../styles/LoginUI.module.css'
import LeaveImage from '../../public/images/leaveImage.jpg'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import EmployeLoginIcon from './Admin/EmployeLoginIcon';
import {useRouter} from 'next/router'
import Swal from 'sweetalert2'
import Navbar from './Navbar'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Cricular from './Snakbar';
import cookie from 'js-cookie';
import Link from 'next/link'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const LoginUI = () => {
  const [loading ,setLoading] = useState(true)
  // const [ credential , Setcredential] = useState()
    let [data , setData ] = useState({
        email:"", 
        password:"" ,
      
    })
    const [changeUSer ,SetUSer] = useState("User")
    let [change , Setchange] = useState(false)
    const [error ,setError] =useState(false)
    const [visible , notVisible] = useState(true)
     const router = useRouter()
     
     useEffect(()=>{
      let iddata =  window.localStorage.getItem("isLogedIn")
      if(iddata){
     router.push(`/Componets/Employee/${iddata}`)
      }
     },[])



     const handleChange = (e) =>{
        let {name,value} = e.target
        setData({
            ...data,
            [name]:value
        })
        }

        const dataChange = (e) =>{
         
          let {name,value} = e.target
          setData({
              ...data,
              [name]:value
          })
        }
        

        const loginUser = async() => {   
         
try{
  let response =  await axios.post("http://localhost:3000/api/Login/UserLogin", data)
  if(response){
    
    window.localStorage.setItem("isLogedIn",response.data.id)
    console.log(response.data.firstname)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `${response.data.firstname} Login Sucessful`,
        showConfirmButton: false,
        timer: 1500
      })
          router.push(`/Componets/Employee/${response.data.id}`)
  }
}catch(e){
  // alert("error")
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Credential Not Match',
      showConfirmButton: false,
      timer: 1500
    })
    router.push("/")
}        
        }

        const loginAdmin = async() => {    
          
          try{
            let response =  await axios.post("http://localhost:3000/api/admin/adminLogin", data)
            
               router.push(`/Componets/Admin/${response.data.email}`)
              
            console.log(response)
            if(response){
              // window.localStorage.setItem("isLogedIn",response.data.id)
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Login Sucessful',
                  showConfirmButton: false,
                  timer: 1500
                })
                   
            }
          }catch(e){
            // alert("error")
              Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Credential Not Match',
                showConfirmButton: false,
                timer: 1500
              })
              router.push("/")
          }        
                  }

                  const changeUSerData = () =>{
                   
                    changeUSer == "User" ? loginUser() : loginAdmin()
                  }

        const fgot = () =>{
          setLoading(!loading)
        }
        const forgotPassword = async () =>{
       
          let response =  await axios.put("http://localhost:3000/api/Login/UpdatePassword",{
            email:data.email,
            password:data.password
          })
         console.log(response,"resonce")
        if(response) {
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Password Update Sucessful',
                showConfirmButton: false,
                timer: 1500
              })
          setLoading(!loading)
        }
      }

  return (
    <>
    <div className={Styles.mainContainer}>
    <div className={Styles.leftContainer}>
    <div className={Styles.itemsContainer}> 
<h1>Login</h1>
<h3>Welocome To Employee Leave Management System</h3>
</div>  
<div className={Styles.imgContainer}>
<Image src={LeaveImage} width="300px" height="300px" className={Styles.img}/>
</div>

    </div>
    <div className={Styles.rightContainer}>
    <div className={Styles.symbol}>
        
     <EmployeLoginIcon />
       </div>
       <div className={Styles.radio}>
       {
  loading ? 

       <FormControl>
    
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="User"
      >

        <FormControlLabel onChange={dataChange} hecked={changeUSer === 'Admin'}  onClick={() => {(SetUSer('Admin'))}}  value="Admin" control={<Radio style={{color:"white"}} />} label="Admin" />
        <FormControlLabel onChange={dataChange} hecked={changeUSer === 'User'}  onClick={() => {SetUSer('User')}}  value="User" control={<Radio style={{color:"white"}} />} label="User" />
        {/* <FormControlLabel onChange={dataChange} hecked={changeUSer === 'Admin'}  onClick={() => {SetUSer('Admin')}}  value="Admin" /> */}
       
      </RadioGroup>
    </FormControl>:""
}
       </div>
   
       <form autocomplete="off" >
    <div className={Styles.formContainer}>
        <h1 className={Styles.names}>{loading ?  <span>Sign In</span> :<span>Update New Password</span> }</h1>
   
    <input  autocomplete="off" onChange={handleChange}  name="email" value={data.email} className={Styles.inputField} required id="outlined-basic"label="Standard" variant="standard" placeholder='Enter Your Username' />
     {
loading ? (<input  autocomplete="off" onChange={handleChange}  name="password" value={data.password}   type={visible ?  "password" : "text" } className={Styles.inputField} required id="filled-basic" label="Standard" variant="standard "  placeholder='Enter Your Password' />) :""
     } 
      <div className={Styles.visibility}>
                  {
                    visible ? <VisibilityIcon style={{color:"black"}} onClick={()=>{notVisible(false)}} /> : <VisibilityOffIcon style={{color:"black"}} onClick={()=>{notVisible(true)}} />
                  } </div>
     
      <div className={Styles.forgotPass}>
        {
loading ?  <span onClick={()=>fgot()} >Forgot Password</span> :""
        }
     
      </div>
      {/* <label>Update Password</label> */}
      
    {
      loading ? "" : <input autocomplete="off"  onChange={handleChange}  name="password" value={data.password}  className={Styles.inputField} required id="filled-basic" label="Standard" variant="standard" placeholder='Enter new password' /> 
 
    }  
    
     {
      loading ? (
      <div className={Styles.groupbtn}>
      <Button onClick={() => changeUSerData()} className={Styles.singninbtn}   variant="contained" color="success"> Sign In</Button>
      <span>Not a Member ?  
      <Link href={`/Componets/Signup`} passHref>
    <a className={Styles.link}> Ragister Now</a>
    </Link>
      </span>
      </div>
      ) : 
      (<Button onClick={() => forgotPassword(data.email,data.password)}   variant="contained" color="success"> Update Password</Button>) 
     } 

</div>
</form>
    </div>
    
    </div>
    {/* <Cricular loader={loading}/> */}
    </>
  )
}

export default LoginUI