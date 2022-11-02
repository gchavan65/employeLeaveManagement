import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Styles from "../../styles/Newtable.module.css"
import { Button } from '@material-ui/core';
import Styled from "../../styles/Admin1.module.css"
import CircularIndeterminate from './Loaderdiv'
import moment from 'moment';


function Row(props) {
  const { row } = props;
  // console.log(row.leavesData)
  let objdata = row.leavesData.reverse()
  let FinalApprove = () => {
    let finalApprove
    if ((row.Leave_requested <= 7) && (row.Leave_requested > 0)) {
      if (row.status1 == 0) {
        finalApprove = "Waiting"
        return (
          <>
            <span className={Styles.span2}>Waiting</span>
          </>
        )
      }
      else if (row.status1 == 1) {
        finalApprove = "Approved"
        return (
          <>
            <span className={Styles.span1}>Approved</span>
          </>
        )
      }
      else {
        finalApprove = "Reject"
        return (
          <>
            <span className={Styles.span3}>Reject</span>
          </>
        )
      }
    }
    else if ((7 < row.Leave_requested) && (row.Leave_requested <= 15)) {
      if ((row.status1 == -1) || (row.status2 == -1)) {
        finalApprove = "Reject"
        return (
          <>
            <span className={Styles.span3}>Reject</span>
          </>
        )
      }
      else if ((row.status1 == 0) || (row.status2 == 0)) {
        finalApprove = "Waiting"
        return (
          <>
            <span className={Styles.span2}>Waiting</span>
          </>
        )
      }
      else if ((row.status1 == 1) && (row.status2 == 1)) {
        finalApprove = "Approved"
        return (
          <>
            <span className={Styles.span1}>Approved</span>
          </>
        )
      }

    }
    else if (row.Leave_requested > 15) {
      if ((row.status1 == -1) || (row.status2 == -1) || (row.status3 == -1)) {
        finalApprove = "Reject"
        return (
          <>
            <span className={Styles.span3}>Reject</span>
          </>
        )
      }
      else if ((row.status1 == 0) || (row.status2 == 0) || (row.status3 == 0)) {
        finalApprove = "Waiting"
        return (
          <>
            <span className={Styles.span2}>Waiting</span>
          </>
        )
      }
      else if ((row.status1 == 1) && (row.status2 == 1) && (row.status3 == 1)) {
        finalApprove = "Approved"
        return (
          <>
            <span className={Styles.span1}>Approved</span>
          </>
        )
      }
    }



  }
  let Fun1 = () => {

    if ((row.Leave_requested <= 7) && (row.Leave_requested > 0)) {

      if (row.status1 == -1) {
        return (
          <>
            <span className={Styles.span3}>Reject</span>
          </>
        )
      }
      else if (row.status1 == 0) {
        return (
          <>

            <span className={Styles.span2}>Waiting</span>
          </>
        )
      }
      else if (row.status1 == 1) {
        return (
          <>
            <span className={Styles.span1}>Approved</span>
          </>
        )
      }
    }
    else if ((7 < row.Leave_requested) && (row.Leave_requested <= 15)) {

      if ((row.status2 == -1)) {
        return (
          <>
            <span className={Styles.span3}>Reject</span>
          </>
        )
      }
      else if ((row.status2 == 0)) {
        return (
          <>
            <span className={Styles.span2}>Waiting</span>
          </>
        )
      }
      else if ((row.status1 == 1)) {
        return (
          <>
            <span className={Styles.span1}>Approved</span>
          </>
        )
      }

      else if ((row.status2 == 1)) {
        return (
          <>

            <span className={Styles.span2}>Waiting</span>
          </>
        )
      }
    }
    else if (row.Leave_requested >= 15) {
      if ((row.status1 == -1)) {
        return (
          <>
            <span className={Styles.span3}>Reject</span>
          </>
        )
      }
      else if ((row.status2 == -1) && (row.status3 == 1)) {
        return (
          <>
            <span className={Styles.span3}>Reject</span>
          </>
        )
      }
      else if ((row.status3 == -1)) {
        return (
          <>
            <span className={Styles.span3}>Reject</span>
          </>
        )

      }
      else if ((row.status2 == 0)) {
        return (
          <>
            <span className={Styles.span2}>Waiting</span>
          </>
        )
      }
      else if ((row.status1 == 1) && (row.status2 == 1) && (row.status3 == 1)) {
        return (
          <>
            <span className={Styles.span1}>Approved</span>
          </>
        )
      }
      else if ((row.status2 == 1) && (row.status3 == 1)) {
        return (
          <>
            <span className={Styles.span2}>Waiting</span>
          </>
        )
      }

    }


  }
  let Fun2 = () => {
    if (row.Leave_requested <= 7) {
      if ((row.status1 == 1) || (row.status1 == -1)) {
        return (
          <>
            <span className={Styles.span4}>Admin1 Can Control</span>
          </>
        )
      }
      else if ((row.status2 == 0) && (row.status3 == 0)) {
        return (
          <>
            <span className={Styles.span4}>Admin1 Can Control</span>
          </>
        )
      }
      else if ((row.status3 == 0)) {
        return (
          <>
            <span className={Styles.span4}>Admin1 Can Control</span>
          </>
        )
      }
    }

    else if ((7 < row.Leave_requested) && (row.Leave_requested <= 15)) {
      if (row.status2 == -1) {
        return (
          <>
            <span className={Styles.span3}>Reject</span>
          </>
        )
      }
      else if (row.status2 == 0) {
        return (
          <>
            <span className={Styles.span2}>Waiting</span>
          </>
        )
      }
      else if (row.status2 == 1) {
        return (
          <>
            <span className={Styles.span1}>Approved</span>
          </>
        )
      }
    }
    else if (row.Leave_requested > 15) {
      if ((row.status3 == -1) || (row.status2 == -1)) {
        return (
          <>
            <span className={Styles.span3}>Reject</span>
          </>
        )

      }
      else if ((row.status3 == 0)) {
        return (
          <>
            <span className={Styles.span2}>Waiting</span>
          </>
        )
      }
      else if ((row.status3 == 1) && (row.status2 == 0)) {
        return (
          <>

            <span className={Styles.span2}>Waiting</span>
          </>
        )
      }
      else if ((row.status3 == 1) && (row.status2 == 1)) {
        return (
          <>
            <span className={Styles.span1}>Approved</span>
          </>
        )
      }
    }

  }
  let Fun3 = () => {

    if (row.Leave_requested <= 7) {
      if ((row.status1 == 1) || (row.status1 == -1)) {
        return (
          <>
            <span className={Styles.span4}>Admin1 Can Control</span>
          </>
        )

      }
      return (
        <>
          <span className={Styles.span4}>Admin1 Can Control</span>
        </>
      )
    }

    else if ((7 < row.Leave_requested) && (row.Leave_requested <= 15)) {
      if ((row.status1 == 1) || (row.status1 == -1)) {
        return (
          <>
            <span className={Styles.span4}>Admin2 Can Control</span>
          </>
        )
      }
      return (
        <>
          <span className={Styles.span2}>Admin2 Can Control</span>
        </>
      )
    }
    else if (row.Leave_requested > 15) {

      if (row.status3 == -1) {
        return (
          <>
            <span className={Styles.span3}>Reject</span>
          </>
        )

      }
      else if (row.status3 == 0) {
        return (
          <>

            <span className={Styles.span2}>Waiting</span>
          </>
        )
      }
      else if (row.status3 == 1) {
        return (
          <>
            <span className={Styles.span1}>Approved</span>
          </>
        )
      }
    }

  }

  const [open, setOpen] = React.useState(false);
  const status = ["waiting", "approve", "preparing"]
  return (
    <React.Fragment>
      {
        objdata.map((val,index) => {

          let FinalApprove = () => {
            let finalApprove
            if ((val.Leave_requested <= 7) && (val.Leave_requested > 0)) {
              if (val.status1 == 0) {
                finalApprove = "Waiting"
                return (
                  <>
                    <span className={Styles.span2}>Waiting</span>
                  </>
                )
              }
              else if (val.status1 == 1) {
                finalApprove = "Approved"
                return (
                  <>
                    <span className={Styles.span1}>Approved</span>
                  </>
                )
              }
              else {
                finalApprove = "Reject"
                return (
                  <>
                    <span className={Styles.span3}>Reject</span>
                  </>
                )
              }
            }
            else if ((7 < val.Leave_requested) && (val.Leave_requested <= 15)) {
              if ((val.status1 == -1) || (val.status2 == -1)) {
                finalApprove = "Reject"
                return (
                  <>
                    <span className={Styles.span3}>Reject</span>
                  </>
                )
              }
              else if ((val.status1 == 0) || (val.status2 == 0)) {
                finalApprove = "Waiting"
                return (
                  <>
                    <span className={Styles.span2}>Waiting</span>
                  </>
                )
              }
              else if ((val.status1 == 1) && (val.status2 == 1)) {
                finalApprove = "Approved"
                return (
                  <>
                    <span className={Styles.span1}>Approved</span>
                  </>
                )
              }
        
            }
            else if (val.Leave_requested > 15) {
              if ((val.status1 == -1) || (val.status2 == -1) || (val.status3 == -1)) {
                finalApprove = "Reject"
                return (
                  <>
                    <span className={Styles.span3}>Reject</span>
                  </>
                )
              }
              else if ((val.status1 == 0) || (val.status2 == 0) || (val.status3 == 0)) {
                finalApprove = "Waiting"
                return (
                  <>
                    <span className={Styles.span2}>Waiting</span>
                  </>
                )
              }
              else if ((val.status1 == 1) && (val.status2 == 1) && (val.status3 == 1)) {
                finalApprove = "Approved"
                return (
                  <>
                    <span className={Styles.span1}>Approved</span>
                  </>
                )
              }
            }
        
        
        
          }
          let Fun11 = () => {
        
            if ((val.Leave_requested <= 7) && (val.Leave_requested > 0)) {
        
              if (val.status1 == -1) {
                return (
                  <>
                    <span className={Styles.span3}>Reject</span>
                  </>
                )
              }
              else if (val.status1 == 0) {
                return (
                  <>
        
                    <span className={Styles.span2}>Waiting</span>
                  </>
                )
              }
              else if (val.status1 == 1) {
                return (
                  <>
                    <span className={Styles.span1}>Approved</span>
                  </>
                )
              }
            }
            else if ((7 < val.Leave_requested) && (val.Leave_requested <= 15)) {
        
              if ((val.status2 == -1)) {
                return (
                  <>
                    <span className={Styles.span3}>Reject</span>
                  </>
                )
              }
              else if ((val.status2 == 0)) {
                return (
                  <>
                    <span className={Styles.span2}>Waiting</span>
                  </>
                )
              }
              else if ((val.status1 == 1)) {
                return (
                  <>
                    <span className={Styles.span1}>Approved</span>
                  </>
                )
              }
        
              else if ((val.status2 == 1)) {
                return (
                  <>
        
                    <span className={Styles.span2}>Waiting</span>
                  </>
                )
              }
            }
            else if (val.Leave_requested >= 15) {
              if ((val.status1 == -1)) {
                return (
                  <>
                    <span className={Styles.span3}>Reject</span>
                  </>
                )
              }
              else if ((val.status2 == -1) && (val.status3 == 1)) {
                return (
                  <>
                    <span className={Styles.span3}>Reject</span>
                  </>
                )
              }
              else if ((val.status3 == -1)) {
                return (
                  <>
                    <span className={Styles.span3}>Reject</span>
                  </>
                )
        
              }
              else if ((val.status2 == 0)) {
                return (
                  <>
                    <span className={Styles.span2}>Waiting</span>
                  </>
                )
              }
              else if ((val.status1 == 1) && (val.status2 == 1) && (val.status3 == 1)) {
                return (
                  <>
                    <span className={Styles.span1}>Approved</span>
                  </>
                )
              }
              else if ((val.status2 == 1) && (val.status3 == 1)) {
                return (
                  <>
                    <span className={Styles.span2}>Waiting</span>
                  </>
                )
              }
        
            }
        
        
          }
          let Fun12 = () => {
            if (val.Leave_requested <= 7) {
              if ((val.status1 == 1) || (val.status1 == -1)) {
                return (
                  <>
                    <span className={Styles.span4}>Admin1 Can Control</span>
                  </>
                )
              }
              else if ((val.status2 == 0) && (val.status3 == 0)) {
                return (
                  <>
                    <span className={Styles.span4}>Admin1 Can Control</span>
                  </>
                )
              }
              else if ((val.status3 == 0)) {
                return (
                  <>
                    <span className={Styles.span4}>Admin1 Can Control</span>
                  </>
                )
              }
            }
        
            else if ((7 < val.Leave_requested) && (val.Leave_requested <= 15)) {
              if (val.status2 == -1) {
                return (
                  <>
                    <span className={Styles.span3}>Reject</span>
                  </>
                )
              }
              else if (val.status2 == 0) {
                
                return (
                  <>
                    <span className={Styles.span2}>Waiting</span>
                  </>
                )
              }
              else if (val.status2 == 1) {
                return (
                  <>
                    <span className={Styles.span1}>Approved</span>
                  </>
                )
              }
            }
            else if (val.Leave_requested > 15) {
              if ((val.status3 == -1) || (val.status2 == -1)) {
                return (
                  <>
                    <span className={Styles.span3}>Reject</span>
                  </>
                )
        
              }
              else if ((val.status3 == 0)) {
                return (
                  <>
                    <span className={Styles.span2}>Waiting</span>
                  </>
                )
              }
              else if ((val.status3 == 1) && (val.status2 == 0)) {
                return (
                  <>
        
                    <span className={Styles.span2}>Waiting</span>
                  </>
                )
              }
              else if ((val.status3 == 1) && (val.status2 == 1)) {
                return (
                  <>
                    <span className={Styles.span1}>Approved</span>
                  </>
                )
              }
            }
        
          }
          let Fun13 = () => {
        
            if (val.Leave_requested <= 7) {
              if ((val.status1 == 1) || (val.status1 == -1)) {
                return (
                  <>
                    <span className={Styles.span4}>Admin1 Can Control</span>
                  </>
                )
        
              }
              return (
                <>
                  <span className={Styles.span4}>Admin1 Can Control</span>
                </>
              )
            }
        
            else if ((7 < val.Leave_requested) && (val.Leave_requested <= 15)) {
              if ((val.status1 == 1) || (val.status1 == -1)) {
                return (
                  <>
                    <span className={Styles.span4}>Admin2 Can Control</span>
                  </>
                )
              }
              return (
                <>
                  <span className={Styles.span2}>Admin2 Can Control</span>
                </>
              )
            }
            else if (val.Leave_requested > 15) {
        
              if (val.status3 == -1) {
                return (
                  <>
                    <span className={Styles.span3}>Reject</span>
                  </>
                )
        
              }
              else if (val.status3 == 0) {
                return (
                  <>
        
                    <span className={Styles.span2}>Waiting</span>
                  </>
                )
              }
              else if (val.status3 == 1) {
                return (
                  <>
                    <span className={Styles.span1}>Approved</span>
                  </>
                )
              }
            }
        
          }
          let time = moment(val.time).format("DD-MM-YYYY h:mm:ss");
          return (<>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
              <TableCell>
                 <span> {index + 1})</span>
              </TableCell>
              <TableCell style={{ textTransform: "capitalize" }} component="th" scope="row">{time}</TableCell>
              <TableCell align="center" >{val.Leave_date_from}</TableCell>
              <TableCell align="center" >{val.Leave_date_to}</TableCell>
              <TableCell style={{ textTransform: "capitalize" }} component="th" scope="row">{val.address}</TableCell>
              <TableCell align="center">{val.Balance_leave}</TableCell>
              <TableCell align="center">{val.Leave_requested}</TableCell>
              <TableCell style={{ textTransform: "capitalize" }} component="th" scope="row"><FinalApprove/></TableCell>
              <TableCell align="center" style={{ width:"15%"}}><Fun11/></TableCell>
              <TableCell align="center" style={{ width:"15%"}}> <Fun12/></TableCell>
              <TableCell align="center" style={{ width:"15%"}}><Fun13/></TableCell>
            </TableRow>
          </>)
        })
      }
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    Address: PropTypes.string.isRequired,
    Balance_leave: PropTypes.number.isRequired,
    Leave_requested: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};



export default function CollapsibleTable({ usersd }) {

  const [data, Getdata] = useState([])


  // useEffect(async () => {
  //   await Getdata(usersd)
  // }, [usersd])

  return (
    <>
      {/* <div className={Styled.wraperH1}>
        <h1 className={Styled.items}>User Leave
          <br /> Application</h1>
      </div> */}
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align="center">Apply Date</TableCell>
              <TableCell align="center">FromDate</TableCell>
              <TableCell align="center">ToDate</TableCell>
              <TableCell align="center">Adress</TableCell>
              <TableCell align="center">Balance leave</TableCell>
              <TableCell align="center">Requested Leave</TableCell>
              <TableCell align="center">Approval</TableCell>
              <TableCell align="center">Approval_1</TableCell>
              <TableCell align="center">Approval_2</TableCell>
              <TableCell align="center">Approval_3</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {data.map((data) => ( */}
            <Row key={usersd._id} row={usersd} />
            {/* {
              usersd.leavesData.map((val, index) => {
                return (
                  <>
                  <Row key={usersd._id} row={val} />
                  </>
                  )
              })
            } */}

          </TableBody>
        </Table>
      </TableContainer>
    </>

  );
}

// export const getServerSideProps = async () => {
//   try {
//     const getUSers = await axios.get(`http://localhost:3000/api/Leave`)
//     return {
//       props: {
//         usersd: getUSers.data.data,
//       }
//     }
//   } catch (e) {
//     console.log(e)
//   }

// }
