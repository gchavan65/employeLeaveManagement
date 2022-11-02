import  React,{useState} from 'react';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Styles from '../../styles/Loder.module.css'

const CircularProcess = (props) => {
  // const [loading, setLoading] = useState(false);
  return (
   
 <Box className={Styles.loderDiv} sx={{ height: 40 }}>
        <Fade
          in={props.loader}
          // style={{
          //   transitionDelay: props.loader ? '800ms' : '0ms',
          // }}
          unmountOnExit
          className={Styles.fadeDiv}
        >
          <CircularProgress  />
        </Fade>
      </Box>
   
  )
}

export default CircularProcess




