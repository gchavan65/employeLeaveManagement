import Styles from '../../styles/Navbar.module.css';
import Link from 'next/link';
import LogoutIcon from '../../public/images/lg.png';
import { Button } from '@mui/material';
import Swal from 'sweetalert2';
import {useRouter} from 'next/router'
import { useEffect, useState } from 'react';
const Navbar = () => {
  // console.log(id,"di")
const [getwindow , Setwindow] = useState()

const [sendRequest, setSendRequest] = useState(true);
//
// console.log(data,"windoes")
useEffect(()=>{
  let data = window.localStorage.getItem("isLogedIn")
 
  if(data){
    Setwindow(data)
    
  }
})
 
  const router = useRouter()
 
  return (<>    <div className={Styles.container}>
    <div className={Styles.item0}>
      <div className={Styles.callButtom}>
      </div>
      <div className={Styles.texts}>
        <div className={Styles.text}>Employe Leave</div>
        <div className={Styles.text}></div>Managment System
      </div>
    </div>
    <div className={Styles.item1}>
      <ul className={Styles.list}>
        {/* <Link href="/" passHref>
          <li className={Styles.litsItems}>
            Home
          </li>
        </Link>
        <Link href={`http://localhost:3000/Componets/Employee/${id}`} passHref>
          <li className={Styles.litsItems}>
            LeaveTable
          </li>
        </Link> */}
        {/* <Link href="/Componets/Admin" passHref>
          <li className={Styles.litsItems}>
            Admin
          </li>
        </Link> */}
      </ul>
    </div>
    <div className={Styles.item2}>
      <div className={Styles.cart}>
 
      <h3 className={Styles.logout}>
        {
        getwindow == null ? " " : ( <Button onClick={()=>{

window.localStorage.removeItem("isLogedIn")
setSendRequest(false)
           Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Logout Sucessfully',
            showConfirmButton: false,
            timer: 1500
          }).then(async()=>{
           await  router.push("/")
           window.location.reload()
          }
          )
        }} variant="contained" color="error">
      Logout
        </Button>) 
}
        </h3>
         
    
      </div>
    </div>
  </div>
  </>
  )
}

export default Navbar

