import React from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
const Header = () => {
  return (
      <AppBar position="static" component="header">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Finances
          </Typography>
        </Toolbar>
      </AppBar>
  )
}

export default Header