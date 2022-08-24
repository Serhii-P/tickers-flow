import React from 'react'
import { TableCell, TableRow } from '@mui/material'
import SouthIcon from '@mui/icons-material/South';
import NorthIcon from '@mui/icons-material/North';
import usePrevious from '../../helpers/usePreviousValue';

const TableBodyContent = ({row}) => {
   const prevAmount = usePrevious(row);

  const priceIndicator =  prevAmount?.price < row?.price ? 'inc' :  'dec';
  const dividendIndicator = prevAmount?.dividend < row?.dividend ? 'inc' :  'dec';

  const operationDate =  new Date( Date.parse(row.time)).toLocaleString([], 
  { year: 'numeric', month: 'numeric', day: 'numeric',  hour: '2-digit', minute: '2-digit' })
  
  return (
    <>
      <TableRow
        key={row.name}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="center" 
        style={{color: priceIndicator === 'inc' ? 'green' : 'red'}}
        >
          {
            priceIndicator === 'inc' ?
            <NorthIcon fontSize="small"/> :
            <SouthIcon fontSize="small"/>
          }
          {row.price}</TableCell>
        <TableCell align="right">{row.exchange}</TableCell>
        <TableCell 
          style={{color: dividendIndicator === 'inc' ? 'green' : 'red'}}
        align="right">{`${row.dividend}%`}</TableCell>
        <TableCell align="right">{operationDate}</TableCell>
      </TableRow>
    </>
  )
}

export default TableBodyContent