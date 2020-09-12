import React from 'react';
import HeaderDate from './HeaderDate.jsx';
import { AppBar, Typography, Box } from '@material-ui';

const Header = () => {
  return (
    <AppBar position="static">
      <Box>
        <Typography>Pomodoro Clock</Typography>
      </Box>
      <HeaderDate />
    </AppBar>
  )
}

export default Header;