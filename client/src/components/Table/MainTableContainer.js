import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
// import MainTable from './MainTable';
import TableBodyContent from './TableBodyContent';

function createData(name, price, exchange, dividend, time) {
  return { name, price, exchange, dividend, time };
}

const MainTableContainer = () => {
  
  const tickersData = useSelector(store => store.tickers.data);

  const dataRow = tickersData.map(data => {
     const {ticker, exchange, price, change, change_percent, dividend, last_trade_time} = data;

      return createData(ticker, price, exchange, dividend, last_trade_time)

   })
 
  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell align="center" colSpan={1}>
              Companies
            </TableCell>
            <TableCell align="center" colSpan={4}>
              Details
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {dataRow && dataRow.map((el, i) => <TableBodyContent key={i} row={el}/>)}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default MainTableContainer