import React from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import TableBodyContent from './TableBodyContent';

function createData(name, price, exchange, dividend, time) {
  return { name, price, exchange, dividend, time };
}

const MainTableContainer = () => {
  const navigate = useNavigate();

  const tickersData = useSelector(store => store.tickers?.data);

  const dataRow = tickersData?.map(data => {
     const {ticker, exchange, price, dividend, last_trade_time} = data;

      return createData(ticker, price, exchange, dividend, last_trade_time)

   })

   const tableSX = {
    cursor: 'pointer',
    "&:hover": {
      backgroundColor: '#e0e3e6'
    },
  };
 
  return (
    <>
    <TableContainer component={Paper} sx={{ maxWidth: 750 }}>
      <Table  aria-label="simple table">
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
        {dataRow && dataRow.map((el, i) => (
        <TableBody 
          sx={tableSX}
          key={i} 
          onClick={() => navigate(`/ticker/${el.name}`)} >

          <TableBodyContent row={el} />

          </TableBody>
        ) )}
      </Table>
    </TableContainer>
    </>
  )
}

export default MainTableContainer