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


function Row(props) {
  const { row } = props;
  console.log(row, "row")
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
    else if ((7 < row.Leave_requested) && (row.Leave_requested < 15)) {
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

    else if ((7 < row.Leave_requested) && (row.Leave_requested < 15)) {
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


  console.log(row, "rows")
  const [open, setOpen] = React.useState(false);
  const status = ["waiting", "approve", "preparing"]
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
        <TableCell component="th" scope="row">
          {row.username}
        </TableCell>
        <TableCell align="center">{row.Leave_requested}</TableCell>
        <TableCell align="center">{row.Balance_leave}</TableCell>
        <TableCell align="center">
          <FinalApprove />
        </TableCell>
        <TableCell align="center"><Fun1 /></TableCell>
        <TableCell align="center"> <Fun2 /></TableCell>
        <TableCell align="center"> <Fun3 /></TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">FromDate</TableCell>
                    <TableCell align="center">ToDate</TableCell>
                    <TableCell align="center">Adress</TableCell>
                    <TableCell align="center">Balance leave</TableCell>
                    <TableCell align="center">Requested Leave</TableCell>
                    <TableCell align="center">Approval</TableCell>
                    <TableCell component="th" scope="row">
                      <Link href={`/Componets/RequestLeave/${row._id}`} passHref>
                        <Button color="secondary" variant="outlined">Apply For Leave</Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>

                  <TableRow className={Styles.LatestApprove}>
                    <TableCell align="center" component="th" scope="row">
                      {row.Leave_date_from}
                    </TableCell>
                    <TableCell align="center" component="th" scope="row">
                      {row.Leave_date_to}
                    </TableCell>
                    <TableCell align="center" component="th" scope="row">
                      {row.address}
                    </TableCell>
                    <TableCell align="center" component="th" scope="row">
                      {row.Balance_leave}
                    </TableCell>
                    <TableCell align="center" component="th" scope="row">
                      {row.Leave_requested}
                    </TableCell>
                    <TableCell align="center" component="th" scope="row">
                      <FinalApprove />

                    </TableCell>

                  </TableRow>
                </TableBody>

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
                      return (
                        <>
                          <TableRow >
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
                            <TableCell align="center" component="th" scope="row">
                              {row.Leave_requested}
                            </TableCell>
                            <TableCell align="center" component="th" scope="row">
                            </TableCell>
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
    protein: PropTypes.number.isRequired,
  }).isRequired,
};



export default function CollapsibleTable({ usersd }) {
  const [data, Getdata] = useState([])

  useEffect(() => {
    Getdata(usersd)
  }, [usersd])

  return (
    <>
      <div className={Styled.wraperH1}>
        <h1 className={Styled.items}>User Leave
          <br /> Application</h1>
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Name</TableCell>
              <TableCell align="center">Leave requested</TableCell>
              <TableCell align="center">Balance leave</TableCell>
              <TableCell align="center">Final Approve</TableCell>
              <TableCell align="center">Approve - 1</TableCell>
              <TableCell align="center">Approve - 2</TableCell>
              <TableCell align="center">Approve - 3</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((data) => (
              <Row key={data.name} row={data} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>

  );
}

export const getServerSideProps = async () => {
  try {
    const getUSers = await axios.get(`http://localhost:3000/api/Leave`)
    return {
      props: {
        usersd: getUSers.data.data,
      }
    }
  } catch (e) {
    console.log(e)
  }

}
