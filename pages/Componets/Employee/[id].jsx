import { Button } from '@mui/material'
import axios from 'axios'
import moment from 'moment/moment'
import Link from 'next/link'
import React from 'react'
import Styles from "../../../styles/Employee.module.css"
import Navbar from '../Navbar'
import Ttable from "../Table"

const Employee = ({usersd,id}) => {
  <Navbar id={usersd._id}/>
   console.log(usersd,"userID")
  return (
    <div className={Styles.container}>
 <div className={Styles.wrapper}>
 <div className={Styles.upcontainer}>
 <div className={Styles.cardcontainer}>
 <div className={Styles.textcontainer}>
 <div className={Styles.textleftcontainer}>
 <span className={Styles.maintext}>{usersd.firstname} {usersd.lastname}</span>
 <br/>
 <span className={Styles.dynamictext}>
 {usersd.email}
  </span>
  <span className={Styles.dynamictext}>
 {usersd.phoneno}
  </span>
<div className={Styles.btnContainer}>
<Link href={`/Componets/RequestLeave/${usersd._id}`} passHref>
<Button variant="contained" color="success">
  Apply
</Button>
</Link>
</div>
 </div>

 <div className={Styles.textrightcontainer}>
  <div>
  <span className={Styles.maintext}>Balanced Leave</span>
 <span className={Styles.dynamictext}>
 <span className={Styles.text1}>
  {usersd.Balance_leave}
  </span>
 </span>
  </div>

 {/* <span  className={Styles.maintext}>Gamil</span>
 <br/> */}
 {/* <span className={Styles.dynamictext}>
 <span className={Styles.text2}>
 {usersd.Leave_requested}
  </span>
  </span> */}

 </div>
 
 </div>
 </div>
 </div>
 <div className={Styles.downcontainer}>
<Ttable usersd={usersd} />
 </div>
 </div>
    </div>
  )
}



export default Employee

export const getServerSideProps = async ({params}) => {
  try {
    const getUSers = await axios.get(`http://localhost:3000/api/Leave/${params.id}`)
    return {
      props: {
        usersd: getUSers.data.data,
        id:getUSers.data
      }
    }
  } catch (e) {
    console.log(e)
  }

}