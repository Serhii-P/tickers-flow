import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {  socket, socketConnect } from './redux/tickersData/asyncActions';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import ChartBlock from './components/ChartContent/ChartBlock';
import './App.css';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(socketConnect())
    return () => socket.disconnect();
  }, [dispatch]);

  return (
    <>
     <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="/ticker/:id" element={<ChartBlock />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
