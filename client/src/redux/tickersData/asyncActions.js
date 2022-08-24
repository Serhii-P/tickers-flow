import { createAsyncThunk } from '@reduxjs/toolkit'
import { io } from "socket.io-client";

const BASE_URL = 'http://localhost:4000';
export const socket = io.connect(BASE_URL);

export const socketConnect = () => (dispatch) => {
       socket.on("connect", () => socket.connected);
       socket.emit("start");
       socket.on('ticker', (data) =>  dispatch(fetchData(data)));
  }

 export const fetchData = createAsyncThunk(
     'data/asyncData',
  async (data) => (data)
 )