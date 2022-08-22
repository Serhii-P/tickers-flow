import { configureStore } from '@reduxjs/toolkit';
import tickersReducer from './tickersData/tickersDataSlice'


export const store = configureStore({
  reducer: {
    tickers: tickersReducer
  },
})