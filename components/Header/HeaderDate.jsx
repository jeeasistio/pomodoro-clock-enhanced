import React from 'react';
import Moment from 'react-moment';
import { Box, Typography } from '@material-ui';

const HeaderDate = () => {
  return (
    <Box>
      <Typography>
        <Moment format="[Today is] dddd" />
      </Typography>
      <Typography>
        <Moment format="YYYY, MMM Do" />
      </Typography>
    </Box>
  )
}

export default HeaderDate;