import { createSlice } from '@reduxjs/toolkit'
import { fetchData } from './asyncActions';

export const tickersDataSlice = createSlice({
    name: 'tickers',
    initialState: {
      data: [],
      currentTicker: [],
      status: '',
    },
    reducers: {
        setCurrTicker: (state, action) => {
            state.currTicker = action.payload;
        },
        setData: (state, action) => {
          console.log(action.payload);
            state.data = action.payload
        },
        setError: (state, action) => {
          state.error = action.payload 
        },

      setCurrentTicker: (state, action) => {
          state.currentTicker = action.payload;
      }
    },
    extraReducers: {
      [fetchData.fulfilled]: (state, action) => {
        if (state.currentTicker.length > 0) {

          const filteredData = action.payload.filter(item => (
           !state.currentTicker.includes(item.ticker)
          ))
         state.data = filteredData

        } else {
          state.data = action.payload
        }
        },
      [fetchData.rejected]: (state, action) => {
        state.status = 'error';
        state.data = []
         },
    }
})

export const { setData, setCurrentTicker, setError, setInterval, filterTickers, setTickerStatus } = tickersDataSlice.actions

export default tickersDataSlice.reducer