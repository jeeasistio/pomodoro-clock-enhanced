import React from 'react';
import Moment from 'react-moment';
import { Box, Typography } from '@material-ui';

const TimeDisplay = ({ endTime, ticking, onTickHandle }) => {
  return (
    <Box>
      <Typography>
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
      <Box>
        <Typography>{ticking ? 'Come Back' : 'Have a Break'}</Typography> 
        {ticking && <Typography><Moment date={endTime} calendar interval={0}/></Typography>}
      </Box>
    </Box>
  )
}

export default TimeDisplay;