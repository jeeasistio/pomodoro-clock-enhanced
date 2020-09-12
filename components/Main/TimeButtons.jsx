import React from 'react';
import { Box, Button } from '@material-ui'

const TimeButtons = ({ stopTicking, ticking }) => {
  return (
    <Box>
      <Button 
        type="submit"
        disabled={ticking}
      >
        Start
      </Button>
      <Button 
        disabled={!ticking}
        onClick={stopTicking}
      >
        Stop
      </Button>
    </Box>
  )
}

export default TimeButtons;