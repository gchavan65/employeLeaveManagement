import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
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
import { Button } from '@mui/material';
import editUser from "../../api/backendJason"
import Styles from "../../../styles/Admin1.module.css"
import moment from 'moment/moment';

function createData(name, Address, Leave_requested, Balance_leave) {
  return {
    name,
    Address,
    Leave_requested,
    Balance_leave,

  };
}

function Row(props) {
  
  const { adminStatus,row, handleAprrove1, handleReject1, handleAprrove2, handleReject2, handleAprrove3, handleReject3 } = props;
  const [open, setOpen] = React.useState(false);
 

  
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
        let iddata = {
          id1: row._id,
          id2: data.id._id,
          objdata: data.id,
          rowbjj: row
        }
        return (
          <>
            <Button className={Styles.btnStyles} onClick={() => { handleAprrove1(iddata) }} variant="contained" color="success">
              Approve
            </Button>     <Button className={Styles.btnStyles} onClick={() => handleReject1(iddata)} variant="contained" color="error">
              Reject
            </Button>
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
      if ((row.status1 == -1)) {
        return (
          <>
            <span className={Styles.span3}>Reject</span>
          </>
        )
      }
      else if ((row.status2 == -1)) {
        return (
          <>
            <span className={Styles.span3}>Reject</span>
          </>
        )

      }
      else if ((row.status2 == 0)) {
        return (
          <>
            <span className={Styles.span2} >Waiting For Approval 2</span>
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
        let iddata = {
          id1: row._id,
          id2: data.id._id,
          objdata: data.id,
          rowbjj: row
        }
        return (
          <>
            <Button className={Styles.btnStyles} onClick={() => { handleAprrove1(iddata) }} variant="contained" color="success">
              Approve
            </Button>     <Button className={Styles.btnStyles} onClick={() => handleReject1(iddata)} variant="contained" color="error">
              Reject
            </Button>
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
            <span className={Styles.span2}>Waiting For Approval2</span>
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
        let iddata = {
          id1: row._id,
          id2: data.id._id,
          objdata: data.id,
          rowbjj: row
        }
        return (
          <>
            <Button className={Styles.btnStyles} onClick={() => { handleAprrove1(iddata) }} variant="contained" color="success">
              Approve
            </Button>     <Button className={Styles.btnStyles} onClick={() => handleReject1(iddata)} variant="contained" color="error">
              Reject
            </Button>
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
            <span className={Styles.span3}>Admin1 Can Control</span>
          </>
        )
      }
      else if ((row.status2 == 0) && (row.status3 == 0)) {
        return (
          <>
            <span className={Styles.span2}>Admin1 Can Control</span>
          </>
        )
      }
      else if ((row.status3 == 0)) {
        return (
          <>
            <span className={Styles.span3}>Admin1 Can Control</span>
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
        let iddata = {
          id1: row._id,
          id2: data.id._id,
          objdata: data.id,
          rowbjj: row
        }
        return (
          <>
            <Button className={Styles.btnStyles} onClick={() => { handleAprrove2(iddata) }} variant="contained" color="success">
              Approve
            </Button>     <Button className={Styles.btnStyles} onClick={() => handleReject2(iddata)} variant="contained" color="error">
              Reject
            </Button>
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
            <span className={Styles.span2}>Waiting For Approval2</span>
          </>
        )
      }
      else if ((row.status3 == 1) && (row.status2 == 0)) {
        let iddata = {
          id1: row._id,
          id2: data.id._id,
          objdata: data.id,
          rowbjj: row
        }
        return (
          <>
            <Button className={Styles.btnStyles} onClick={() => { handleAprrove2(iddata) }} variant="contained" color="success">
              Approve
            </Button>     <Button className={Styles.btnStyles} onClick={() => handleReject2(iddata)} variant="contained" color="error">
              Reject
            </Button>
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
      console.log("row.Leave_requested < 7 ")


      if ((row.status1 == 1) || (row.status1 == -1)) {
        return (
          <>
            <span className={Styles.span3}>Admin1 Can Control</span>
          </>
        )
      }
      return (
        <>
          <span className={Styles.span2}>Admin1 Can Control</span>
        </>
      )
    }

    else if ((7 < row.Leave_requested) && (row.Leave_requested <= 15)) {
      if ((row.status1 == 1) || (row.status1 == -1)) {
        return (
          <>
            <span className={Styles.span3}>Admin2 Can Control</span>
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
        let iddata = {
          id1: row._id,
          id2: data.id._id,
          objdata: data.id,
          rowbjj: row
        }
        return (
          <>
            <Button className={Styles.btnStyles} onClick={() => { handleAprrove3(iddata) }} variant="contained" color="success">
              Approve
            </Button>     <Button className={Styles.btnStyles} onClick={() => handleReject3(iddata)} variant="contained" color="error">
              Reject
            </Button>
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
  let FinalApprove = () => {
    if ((row.Leave_requested <= 7) && (row.Leave_requested > 0)) {
      if (row.status1 == 0) {
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
      else {
        return (
          <>
            <span className={Styles.span3}>Reject</span>
          </>
        )
      }
    }
    else if ((7 < row.Leave_requested) && (row.Leave_requested <= 15)) {
      if ((row.status1 == -1) || (row.status2 == -1)) {
        return (
          <>
            <span className={Styles.span3}>Reject</span>
          </>
        )
      }
      else if ((row.status1 == 0) || (row.status2 == 0)) {
        return (
          <>
            <span className={Styles.span2}>Waiting</span>
          </>
        )
      }
      else if ((row.status1 == 1) && (row.status2 == 1)) {
        return (
          <>
            <span className={Styles.span1}>Approved</span>
          </>
        )
      }
    }
    else if (row.Leave_requested > 15) {
      if ((row.status1 == -1) || (row.status2 == -1) || (row.status3 == -1)) {
        return (
          <>
            <span className={Styles.span3}>Reject</span>
          </>
        )
      }
      else if ((row.status1 == 0) || (row.status2 == 0) || (row.status3 == 0)) {
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

    }

  }
  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell style={{textTransform:"uppercase"}} component="th" scope="row">
          {row.firstname} {row.lastname} 
        </TableCell> 
         <TableCell align="center">{row.email}</TableCell>
        <TableCell align="center">{row.phoneno}</TableCell>
        {/* <TableCell align="center">{row.firstname}</TableCell> */}
        <TableCell align="center">{row.Balance_leave}</TableCell>
        {/* <TableCell align="center"><Fun1 /></TableCell>
        <TableCell align="center"><Fun2 /></TableCell>
        <TableCell align="center"><Fun3 /></TableCell> */}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="big" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Apply Date</TableCell>
                    <TableCell align="center">FromDate</TableCell>
                    <TableCell align="center">ToDate</TableCell>
                    <TableCell align="center">Adress</TableCell>
                    <TableCell align="center">Balance leave</TableCell>
                    <TableCell align="center">Requested Leave</TableCell>
                    <TableCell align="center">FinalApproval</TableCell>
                    <TableCell align="center"  style={{width: '20%'}}>{adminStatus}</TableCell>
                    {/* <TableCell align="center">Approval-2</TableCell>
                    <TableCell align="center">Approval-3</TableCell> */}
                  </TableRow>
                </TableHead>
              

                <TableBody>
                  {
                    row.leavesData.map((historyRow) => {
                    
                      const Approved = () => {
                        if ((historyRow.Leave_requested <= 7) && (historyRow.Leave_requested > 0)) {
                          if (historyRow.status1 == 0) {
                            return (
                              <>
                                <span className={Styles.span2}>Waiting</span>
                              </>
                            )
                          }
                          else if (historyRow.status1 == 1) {
                            return (
                              <>
                                <span className={Styles.span1}>Approved</span>
                              </>
                            )
                          }
                          else {
                            return (
                              <>
                                <span className={Styles.span3}>Reject</span>
                              </>
                            )
                          }
                        }
                        else if ((7 < historyRow.Leave_requested) && (historyRow.Leave_requested < 15)) {
                          if ((historyRow.status1 == -1) || (historyRow.status2 == -1)) {
                            return (
                              <>
                                <span className={Styles.span3}>Reject</span>
                              </>
                            )
                          }
                          else if ((historyRow.status1 == 0) || (historyRow.status2 == 0)) {
                            return (
                              <>
                                <span className={Styles.span2}>Waiting</span>
                              </>
                            )
                          }
                          else if ((historyRow.status1 == 1) && (historyRow.status2 == 1)) {
                            return (
                              <>
                                <span className={Styles.span1}>Approved</span>
                              </>
                            )
                          }

                        }
                        else if (historyRow.Leave_requested > 15) {
                          if ((historyRow.status1 == -1) || (historyRow.status2 == -1) || (historyRow.status3 == -1)) {
                            return (
                              <>
                                <span className={Styles.span3}>Reject</span>
                              </>
                            )
                          }
                          else if ((historyRow.status1 == 0) || (historyRow.status2 == 0) || (historyRow.status3 == 0)) {
                            return (
                              <>
                                <span className={Styles.span2}>Waiting</span>
                              </>
                            )
                          }
                          else if ((historyRow.status1 == 1) && (historyRow.status2 == 1) && (historyRow.status3 == 1)) {
                            return (
                              <>
                                <span className={Styles.span1}>Approved</span>
                              </>
                            )
                          }

                        }
                      }
                      const { handleAprrove1, 
                        handleReject1, handleAprrove2, handleReject2, handleAprrove3, handleReject3 } = props;
                      // const [open, setOpen] = useState(false);
                      console.log(row, "rows")
                      let Fun11 = (data) => {
                        let data1 = data.id
                        if ((data1.Leave_requested <= 7) && (data1.Leave_requested > 0)) {
                          if (data1.status1 == -1) {
                            return (
                              <>
                                <span className={Styles.span3}>Reject</span>
                              </>
                            )
                          }
                          else if (data1.status1 == 0) {
                            let iddata = {
                              id1: row._id,
                              id2: data.id._id,
                              data3: data.id,
                              rowonj: row

                            }
                            return (
                              <>
                                <Button className={Styles.btnStyles} onClick={() => { handleAprrove1(iddata) }} variant="contained" color="success">
                                  Approve
                                </Button>     <Button className={Styles.btnStyles} onClick={() => handleReject1(iddata)} variant="contained" color="error">
                                  Reject
                                </Button>
                              </>
                            )
                          }
                          else if (data1.status1 == 1) {
                            return (
                              <>
                                <span className={Styles.span1}>Approved</span>
                              </>
                            )
                          }
                        }
                        else if ((7 < data1.Leave_requested) && (data1.Leave_requested <= 15)) {
                          if ((data1.status1 == -1)) {
                            return (
                              <>
                                <span className={Styles.span3}>Reject</span>
                              </>
                            )
                          }
                          else if ((data1.status2 == -1)) {
                            return (
                              <>
                                <span className={Styles.span3}>Reject</span>
                              </>
                            )

                          }
                          else if ((data1.status2 == 0)) {
                            return (
                              <>
                                <span className={Styles.span2} >Waiting For Approval 2</span>
                              </>
                            )
                          }
                          else if ((data1.status1 == 1)) {
                            return (
                              <>
                                <span className={Styles.span1}>Approved</span>
                              </>
                            )
                          }

                          else if ((data1.status2 == 1)) {
                            let iddata = {
                              id1: row._id,
                              id2: data.id._id,
                              objdata: data.id,
                              rowbjj: row
                            }
                            return (
                              <>
                                <Button className={Styles.btnStyles} onClick={() => { handleAprrove1(iddata) }} variant="contained" color="success">
                                  Approve
                                </Button>     <Button className={Styles.btnStyles} onClick={() => handleReject1(iddata)} variant="contained" color="error">
                                  Reject
                                </Button>
                              </>
                            )
                          }
                        }
                        else if (data1.Leave_requested >= 15) {
                          if ((data1.status1 == -1)) {
                            return (
                              <>
                                <span className={Styles.span3}>Reject</span>
                              </>
                            )
                          }
                          else if ((data1.status2 == -1) && (row.status3 == 1)) {
                            return (
                              <>
                                <span className={Styles.span3}>Reject</span>
                              </>
                            )
                          }
                          else if ((data1.status3 == -1)) {
                            return (
                              <>
                                <span className={Styles.span3}>Reject</span>
                              </>
                            )

                          }
                          else if ((data1.status2 == 0)) {
                            return (
                              <>
                                <span className={Styles.span2}>Waiting For Approval2</span>
                              </>
                            )
                          }
                          else if ((data1.status1 == 1) && (data1.status2 == 1) && (data1.status3 == 1)) {
                            return (
                              <>
                                <span className={Styles.span1}>Approved</span>
                              </>
                            )
                          }
                          else if ((data1.status2 == 1) && (data1.status3 == 1)) {
                            let iddata = {
                              id1: row._id,
                              id2: data.id._id,
                              objdata: data.id,
                              rowbjj: row
                            }
                            return (
                              <>
                                <Button className={Styles.btnStyles} onClick={() => { handleAprrove1(iddata) }} variant="contained" color="success">
                                  Approve
                                </Button>     <Button className={Styles.btnStyles} onClick={() => handleReject1(iddata)} variant="contained" color="error">
                                  Reject
                                </Button>
                              </>
                            )
                          }

                        }


                      }
                      let Fun12 = (data) => {
                        let data1 = data.id
                        if (data1.Leave_requested <= 7) {
                          if ((data1.status1 == 1) || (data1.status1 == -1)) {
                            return (
                              <>
                                <span className={Styles.span3}>Admin1 Can Control</span>
                              </>
                            )
                          }
                          else if ((data1.status2 == 0) && (data1.status3 == 0)) {
                            return (
                              <>
                                <span className={Styles.span2}>Admin1 Can Control</span>
                              </>
                            )
                          }
                          else if ((data1.status3 == 0)) {
                            return (
                              <>
                                <span className={Styles.span3}>Admin1 Can Control</span>
                              </>
                            )
                          }
                        }
                        else if ((7 < data1.Leave_requested) && (data1.Leave_requested <= 15)) {
                          if (data1.status2 == -1) {
                            return (
                              <>
                                <span className={Styles.span3}>Reject</span>
                              </>
                            )
                          }
                          else if (data1.status2 == 0) {
                            let iddata = {
                              id1: row._id,
                              id2: data.id._id,
                              objdata: data.id,
                              rowbjj: row
                            }
                            return (
                              <>
                                <Button className={Styles.btnStyles} onClick={() => { handleAprrove2(iddata) }} variant="contained" color="success">
                                  Approve
                                </Button>     <Button className={Styles.btnStyles} onClick={() => handleReject2(iddata)} variant="contained" color="error">
                                  Reject
                                </Button>
                              </>
                            )
                          }

                          else if (data1.status2 == 1) {
                            return (
                              <>
                                <span className={Styles.span1}>Approved</span>
                              </>
                            )
                          }
                        }
                        else if (data1.Leave_requested > 15) {
                          if ((data1.status3 == -1) || (data1.status2 == -1)) {
                            return (
                              <>
                                <span className={Styles.span3}>Reject</span>
                              </>
                            )

                          }
                          else if ((data1.status3 == 0)) {
                            return (
                              <>
                                <span className={Styles.span2}>Waiting For Approval2</span>
                              </>
                            )
                          }
                          else if ((data1.status3 == 1) && (data1.status2 == 0)) {
                            let iddata = {
                              id1: row._id,
                              id2: data.id._id,
                              objdata: data.id,
                              rowbjj: row
                            }
                            return (
                              <>
                                <Button className={Styles.btnStyles} onClick={() => { handleAprrove2(iddata) }} variant="contained" color="success">
                                  Approve
                                </Button>     <Button className={Styles.btnStyles} onClick={() => handleReject2(iddata)} variant="contained" color="error">
                                  Reject
                                </Button>
                              </>
                            )
                          }
                          else if ((data1.status3 == 1) && (data1.status2 == 1)) {
                            return (
                              <>
                                <span className={Styles.span1}>Approved</span>
                              </>
                            )
                          }
                        }

                      }
                      let Fun13 = (data) => {
                        let data1 = data.id
                        if (data1.Leave_requested <= 7) {
                          console.log("row.Leave_requested < 7 ")


                          if ((data1.status1 == 1) || (data1.status1 == -1)) {
                            return (
                              <>
                                <span className={Styles.span3}>Admin1 Can Control</span>
                              </>
                            )
                          }
                          return (
                            <>
                              <span className={Styles.span2}>Admin1 Can Control</span>
                            </>
                          )
                        }

                        else if ((7 < data1.Leave_requested) && (data1.Leave_requested <= 15)) {
                          if ((data1.status1 == 1) || (data1.status1 == -1)) {
                            return (
                              <>
                                <span className={Styles.span3}>Admin2 Can Control</span>
                              </>
                            )

                          }

                          return (
                            <>
                              <span className={Styles.span2}>Admin2 Can Control</span>
                            </>
                          )



                        }
                        else if (data1.Leave_requested > 15) {

                          if (data1.status3 == -1) {
                            return (
                              <>
                                <span className={Styles.span3}>Reject</span>
                              </>
                            )

                          }
                          else if (data1.status3 == 0) {
                            let iddata = {
                              id1: row._id,
                              id2: data.id._id,
                              objdata: data.id,
                              rowbjj: row
                            }
                            return (
                              <>
                                <Button className={Styles.btnStyles} onClick={() => { handleAprrove3(iddata) }} variant="contained" color="success">
                                  Approve
                                </Button>     <Button className={Styles.btnStyles} onClick={() => handleReject3(iddata)} variant="contained" color="error">
                                  Reject
                                </Button>
                              </>
                            )
                          }
                          else if (data1.status3 == 1) {
                            return (
                              <>
                                <span className={Styles.span1}>Approved</span>
                              </>
                            )
                          }
                        }

                      }
                      let FinalApprove = (data) => {
                        let data1 = data.id
                        if ((data1.Leave_requested <= 7) && (data1.Leave_requested > 0)) {
                          if (data1.status1 == 0) {
                            return (
                              <>
                                <span className={Styles.span2}>Waiting</span>
                              </>
                            )
                          }
                          else if (data1.status1 == 1) {
                            return (
                              <>
                                <span className={Styles.span1}>Approved</span>
                              </>
                            )
                          }
                          else {
                            return (
                              <>
                                <span className={Styles.span3}>Reject</span>
                              </>
                            )
                          }
                        }
                        else if ((7 < data1.Leave_requested) && (data1.Leave_requested <= 15)) {
                          if ((data1.status1 == -1) || (data1.status2 == -1)) {
                            return (
                              <>
                                <span className={Styles.span3}>Reject</span>
                              </>
                            )
                          }
                          else if ((data1.status1 == 0) || (data1.status2 == 0)) {
                            return (
                              <>
                                <span className={Styles.span2}>Waiting</span>
                              </>
                            )
                          }
                          else if ((data1.status1 == 1) && (data1.status2 == 1)) {
                            return (
                              <>
                                <span className={Styles.span1}>Approved</span>
                              </>
                            )
                          }
                        }
                        else if (data1.Leave_requested > 15) {
                          if ((data1.status1 == -1) || (data1.status2 == -1) || (data1.status3 == -1)) {
                            return (
                              <>
                                <span className={Styles.span3}>Reject</span>
                              </>
                            )
                          }
                          else if ((data1.status1 == 0) || (data1.status2 == 0) || (data1.status3 == 0)) {
                            return (
                              <>
                                <span className={Styles.span2}>Waiting</span>
                              </>
                            )
                          }
                          else if ((data1.status1 == 1) && (data1.status2 == 1) && (data1.status3 == 1)) {
                            return (
                              <>
                                <span className={Styles.span1}>Approved</span>
                              </>
                            )
                          }

                        }

                      }


                      let ShowStaus = () =>{
                        
                        if(adminStatus == "admin1"){
                        return(
                          <>
                          <Fun11  id={historyRow} />
                          </>
                        )
                        }
                        else if(adminStatus == "admin2"){
                          return(
                            <>
                            <Fun12  id={historyRow} />
                            </>
                          )
                          }
                          else if(adminStatus == "admin3"){
                            return(
                              <>
                              <Fun13  id={historyRow} />
                              </>
                            )
                            }
                      }
var time = moment(historyRow.time).format("DD-MM-YYYY h:mm:ssss");
                        
                      return (
                        <>
                          <TableRow >
                            <TableCell align="center" component="th" scope="row">
                              {time}
                            </TableCell>
                            <TableCell align="center" component="th" scope="row">
                              {historyRow.Leave_date_from}
                            </TableCell>
                            <TableCell align="center" component="th" scope="row">
                              {historyRow.Leave_date_to}
                            </TableCell>
                            <TableCell align="center" component="th" scope="row">
                              {historyRow.address}
                            </TableCell>
                            <TableCell align="center" component="th" scope="row">
                              {historyRow.Balance_leave}
                            </TableCell>
                            {/* <TableCell align="center" component="th" scope="row">
                              {historyRow.Leave_requested}
                            </TableCell> */}
                            <TableCell align="center">  {historyRow.Leave_requested}</TableCell>
                            <TableCell align="center"><FinalApprove id={historyRow} /></TableCell>
                            <TableCell align="center" style={{width:"15%"}}>
                              {/* <Fun11 id={historyRow} /> */}
                            <ShowStaus/>
                            </TableCell>
                            {/* <TableCell align="center"><Fun12 id={historyRow} /></TableCell>
                            <TableCell align="center"><Fun13 id={historyRow} /></TableCell> */}
                          </TableRow>

                        </>
                      )
                    })
                  }
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
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

  }).isRequired,
};



export default function CollapsibleTable({ usersd  , email}) {
 

  const [data, Getdata] = useState([])
  const [update, Setupdate] = useState()
  const [status, Setstatus] = useState([])

  let adminStatus = email.Id

  useEffect(() => {
    Getdata(usersd)

  }, [usersd])


  useEffect(() => {
    dataGetting(usersd)

  }, [usersd])
  const dataGetting = async (data2) => {

    const res = await axios.get("http://localhost:3000/api/Leave/" + data2.id)
    await Setupdate(res.data)
    Setstatus(res.data)
  }


  const handleAprrove1 = async (data) => {
    try {

      const res = await axios.put(`http://localhost:3000/api/Leave/nestedApi?id=${data.id1}&subid=${data.id2}`,

        {
          "leavesData.$.status1": 1,
        }
      )

      window.location.reload()

    } catch (err) {
      console.log(err);
    }
  };

  const handleReject1 = async (data) => {
    // console.log(data)
    let objdata = data.objdata
    let objrequestLeave = objdata.Leave_requested
    let mainobj = data.rowbjj

    try {

      const res = await axios.put(`http://localhost:3000/api/Leave/nestedApi?id=${data.id1}&subid=${data.id2}`,
         {
          "leavesData.$.status1": -1,
        }
      ).then(async (res) => {
        const res2 = await axios.put("http://localhost:3000/api/Leave/" + data.id1, {
          Balance_leave: mainobj.Balance_leave + objrequestLeave

        })
      })

      window.location.reload()


    } catch (err) {
      console.log(err);
    }
  };

  const handleAprrove2 = async (data) => {
    try {
      const res = await axios.put(`http://localhost:3000/api/Leave/nestedApi?id=${data.id1}&subid=${data.id2}`,

        {
          "leavesData.$.status2": 1,
        }
      )
      window.location.reload()

    } catch (err) {
      console.log(err);
    }
  };

  const handleReject2 = async (data) => {
    let objdata = data.objdata
    let objrequestLeave = objdata.Leave_requested
    let mainobj = data.rowbjj
    try {
      const res = await axios.put(`http://localhost:3000/api/Leave/nestedApi?id=${data.id1}&subid=${data.id2}`,
        {
          "leavesData.$.status2": -1,
        }
      ).then(async (res) => {
        const res2 = await axios.put("http://localhost:3000/api/Leave/" + data.id1, {
          Balance_leave: mainobj.Balance_leave + objrequestLeave

        })
      })

      window.location.reload()


    } catch (err) {
      console.log(err);
    }
  };

  const handleAprrove3 = async (data) => {

    try {
      const res = await axios.put(`http://localhost:3000/api/Leave/nestedApi?id=${data.id1}&subid=${data.id2}`,

        {
          "leavesData.$.status3": 1,
        }
      )
      window.location.reload()

    } catch (err) {
      console.log(err);
    }
  };

  const handleReject3 = async (data) => {
    // console.log(data)
    let objdata = data.objdata
    let objrequestLeave = objdata.Leave_requested
    let mainobj = data.rowbjj
    try {
      const res = await axios.put(`http://localhost:3000/api/Leave/nestedApi?id=${data.id1}&subid=${data.id2}`,
        {
          "leavesData.$.status3": -1,
        }
      ).then(async (res) => {

        const res2 = await axios.put("http://localhost:3000/api/Leave/" + data.id1, {
          Balance_leave: mainobj.Balance_leave + objrequestLeave

        })
      })

      window.location.reload()


    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className={Styles.wraperH1}>
        <h1 style={{textTransform:"uppercase"}} className={Styles.items}>{adminStatus}</h1>
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Contact No</TableCell>
              <TableCell align="center">Balanced Leave</TableCell>
              {/* <TableCell align="center">Approve - 2</TableCell>
              <TableCell align="center">Approve - 3</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((data) =>
            
            (
             
              <Row
                handleAprrove1={handleAprrove1} handleReject1={handleReject1}
                handleAprrove2={handleAprrove2} handleReject2={handleReject2}
                handleAprrove3={handleAprrove3} handleReject3={handleReject3}
                key={data.name} row={data}
                adminStatus={adminStatus}
                />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export const getServerSideProps = async ({params}) => {
  try {
   


    const getUSers = await axios.get(`http://localhost:3000/api/Leave`)
    return {
      props: {
        usersd: getUSers.data.data || null,
        email:params
      }
    }
  } catch (e) {
    return {
      redirect: {
        destination: '/',
        statusCode: 307
      }
    }
  }

}
