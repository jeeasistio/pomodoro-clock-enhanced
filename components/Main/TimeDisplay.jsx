import React from 'react';
import Moment from 'react-moment';
import { Box, Typography } from '@material-ui';

const TimeDisplay = ({ endTime, ticking, onTickHandle }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      textAlign="center"
      p={4}
    >
    
      <Typography paragraph variant="h4">
        {ticking ?
          <Moment 
            durationFromNow 
            date={endTime} 
            interval={ticking ? 1000 : 0} 
            onChange={onTickHandle} 
          />
        : '00:00'
        }
      </Typography>
      
      <Box
        display="flex"
        justifyContent="center"
      >
        <Typography component="pre">
          {ticking ? 'Come Back ' : 'Have a Break'}
        </Typography> 
        {ticking && 
          <Typography style={{fontWeight: 500}}>
            <Moment date={endTime} calendar interval={0}/>
          </Typography>
        }
      </Box>
    </Box>
  )
}

export default TimeDisplay;