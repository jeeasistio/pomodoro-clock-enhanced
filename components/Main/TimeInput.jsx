import React from 'react';
import { Box, TextField, Divider } from '@material-ui';

const TimeInput = ({ updateTime }) => {

  return (
    <Box
      display="flex"
      justifyContent="space-around"
      flexDirection={['column', 'row']}
      px={4}
    >
      {['Hours', 'Minutes', 'Seconds'].map((type) => (
        <TextField 
          onChange={(e) => updateTime(e, type.toLowerCase())}
          type="number"
          label={type}
          margin="normal"
        />
      ))}
    </Box>
  )
}

export default TimeInput;