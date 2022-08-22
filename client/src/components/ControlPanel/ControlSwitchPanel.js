import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { FormControl, FormControlLabel, FormGroup, Switch } from '@mui/material';
import { filterTickers, setCurrentTicker, setTickerStatus } from '../../redux/tickersData/tickersDataSlice';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, id) {
  return { name, id };
}

const rows = [
  createData('Apple', 'AAPL'),
  createData('Alphabet', 'GOOGL'),
  createData('Microsoft', 'MSFT'),
  createData('Amazon', 'AMZN'),
  createData('Facebook', 'FB'),
  createData('Tesla', 'TSLA'),

];

const ControlSwitchPanel = () => {
  const dispatch = useDispatch()

const [name, setName] = React.useState([]);
console.log(name);
React.useEffect(() => {
  dispatch(setCurrentTicker(name))

}, [name, dispatch])

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  const changeHandler = (id) => {

    if (name.includes(id)) {
      const newList = name.filter((item) => item !== id);
      return setName(newList);
    }

    setName(prevName => {
     return [...prevName, id]
    })

  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 200 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Company</StyledTableCell>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">Toggle</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
               <StyledTableCell align="right">
                <FormControl component="fieldset" variant="standard">
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Switch onChange={() => changeHandler(row.id)} {...label} defaultChecked  />
                      }
                    />
                  </FormGroup>
                  </FormControl>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ControlSwitchPanel;