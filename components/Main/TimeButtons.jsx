import React from 'react';
import moment from 'moment';
import { Box, Button, ButtonGroup } from '@material-ui'

const TimeButtons = ({ stopTicking, ticking, endTime, addTime, subtTime }) => {
  return (
    <Box textAlign="center" p={[1, 3]}>
    
      <Box 
        display="flex" 
        justifyContent="space-evenly" 
        width={'50%'}
        my={2}
        mx={'auto'}
      >
        <Button 
          type="submit"
          disabled={ticking}
          variant="contained"
          color="primary"
        >
          Start
        </Button>
        <Button 
          disabled={!ticking}
          onClick={stopTicking}
          variant="contained"
          color="secondary"
        >
          Stop
        </Button>
      </Box>
      
      <Box my={2}>
        <ButtonGroup
          variant="contained"
          size="small"
        >
          {[2, 5, 10, 30, 60].map(num => (
            <Button onClick={() => addTime(num)}>+{num} mins</Button>
          ))}
        </ButtonGroup>
      </Box>
      
      <Box my={2}>
        <ButtonGroup
          variant="contained"
          size="small"
          disabled={!ticking}
        >
          {[2, 5, 10, 30, 60].map(num => (
            <Button onClick={() => subtTime(num)}>-{num} mins</Button>
          ))}
        </ButtonGroup>
      </Box>
      
    </Box>
  )
}

export default TimeButtons;