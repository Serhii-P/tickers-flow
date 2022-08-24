import React from 'react'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  return (
    <BottomNavigation showLabels sx={{
    width: '100%',
    position: 'fixed',
    bottom: 0,
    margin: 'auto',
    }} component="footer"  >
      <BottomNavigationAction sx={{flexDirection: 'row'}}
      label="Copyright 2022" icon={<CopyrightIcon />} />
    </BottomNavigation>
  )
}

export default Footer