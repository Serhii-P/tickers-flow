import { Button, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

import { fetchStocksPause, setSocketInterval, socket, socketConnect, socketResume } from './redux/tickersData/asyncActions';
import MainTableContainer from './components/Table/MainTableContainer';
import ControlSwitchPanel from './components/ControlPanel/ControlSwitchPanel';
// import useTickersData from './hooks/useTickersData';
// import {io} from "socket.io-client";

// const socket = io.connect('http://localhost:4000')


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(socketConnect())
    return () => socket.disconnect();
  }, [dispatch]);

  // const socketResume = () => {
  //   window.location.reload()

  // }


// useEffect(()=>{
// socket.on('ticker',(e)=> {
// // console.log(e);
// e && e.map(item => (
//   console.log(item)

// ))
// })
// }, [])
//   const startRace = () => {
//     socket.emit("start")
//   }

//   const stopRace = () => {
//     socket.off('ticker')
//   }


  return (
    <>
    <Header />
    <main className="App">
      <Container maxWidth="md" >
        <Typography variant="h3" gutterBottom align="center" sx={{ my: 5 }}>
          Table
        </Typography>
        <MainTableContainer />
        <ControlSwitchPanel />
      </Container>

    </main>
    {/* <Footer /> */}
    </>
  );
}

export default App;
