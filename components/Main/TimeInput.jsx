import React from 'react';
import { Box, TextField } from '@material-ui';

const TimeInput = ({ updateTime }) => {

  return (
    <Box>
      {['Hours', 'Minutes', 'Seconds'].map((type) => (
        <TextField 
          onChange={(e) => updateTime(e, type.toLowerCase())}
          type="number"
          label={type}
        />
      ))}
    </Box>
  )
}

export default TimeInput;