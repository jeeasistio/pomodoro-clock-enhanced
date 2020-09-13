import React from 'react';
import Moment from 'react-moment';
import { Box, Typography } from '@material-ui';

const HeaderDate = () => {
  return (
    <Box textAlign={['center', 'right']} >
      <Typography style={{fontWeight: 500}} >
        <Moment format="[Today is] dddd" />
      </Typography>
      <Typography>
        <Moment format="YYYY, MMM Do HH:mm" />
      </Typography>
    </Box>
  )
}

export default HeaderDate;