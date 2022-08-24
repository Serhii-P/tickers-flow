import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import ControlSwitchPanel from '../components/ControlPanel/ControlSwitchPanel'
import MainTableContainer from '../components/Table/MainTableContainer'

const Home = () => {
  return (
    <Container maxWidth="lg" >
      <Typography variant="h3" gutterBottom align="center" sx={{ my: 5 }}>
        Table
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <MainTableContainer />
        <ControlSwitchPanel />
      </Box>
    </Container>
  )
}

export default Home