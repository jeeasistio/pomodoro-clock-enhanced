import React from 'react';
import HeaderDate from './HeaderDate.jsx';
import { makeStyles, AppBar, Typography, Box } from '@material-ui';

const Header = () => {
  
  const useStyles = makeStyles(theme => ({
    appBar: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '5px 10px'
    }
  }))
  
  const classes = useStyles();
  
  return (
    <AppBar 
      component={Box} 
      position="static"
      display="flex"
      flexDirection={['column', 'row']}
      justifyContent="space-between"
      alignItems="center"
      px={2}
      py={[1, 2]}
    >
      <Box>
        <Typography component="h1" variant="h5">Pomodoro Clock</Typography>
      </Box>
      <HeaderDate />
    </AppBar>
  )
}

export default Header;