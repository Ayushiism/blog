import * as React from 'react';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import '../Appbar/Appbar.css';

const Appbar = () => {
  return (
    <div >
      {/* <AppBar 
      position="static" 
      color="inherit" 

      >
        <Toolbar>
          <Typography 
          variant="h4" 
          component="div" 
          sx={{ flexGrow: 1 }}
          className='heading'
          >
            zeppelins
          </Typography>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar> */}
      <div className='appbar'>

        <div className="heading">
            <h1>zeppelins</h1>
        </div>

        <div className='icon'>
        <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </div>
      </div>    
        
    </div>
  )
}

export default Appbar
