import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Link } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import '../Appbar/Appbar.css';
import Menu from '@mui/material/Menu';

const options = [
  'PORTFOLIO',
  'BLOG',
  'CV',
  'STORE',
  'FREELANCE',
  'ABOUT ME'
];

const ITEM_HEIGHT = 48;

const Appbar = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
      <div className='appbar'>

        <div className="heading">
            <h1>zeppelins</h1>
        </div>

        <div className='links'>
          <a className='refl' href="/PORTFOLIO">PORTFOLIO</a>
          <a className='refl' href="/BLOG">BLOG</a>
          <a className='refl' href="/CV">CV</a>
          <a className='refl' href="/STORE">STORE</a>
          <a className='refl' href="/FREELANCE">FREELANCE</a>
          <a className='refl' href="/ABOUT-ME">ABOUT-ME</a>
          <a className='refl' href="/CONTACT">CONTACT</a>
        </div>

        <div className='icon'>
        <IconButton
            aria-label="menu"
            id="long-button"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
            size="large"
            edge="start"
            
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            // maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            <a className='option' href={option}>{option}</a>
          </MenuItem>
        ))}
      </Menu>
        </div>
      </div>    
        
    
  )
}

export default Appbar
