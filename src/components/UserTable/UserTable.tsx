import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
/* *** */
import Row from './Row';
import { rows } from '../../constants/data';

const UserTable = () => {
  return (
    <Box>
      <Box sx={{ margin: '50px 20px'}} maxWidth="80%">
        <Typography variant="h5">Registered Users</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Surname</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Balance</TableCell>
              <TableCell align="right">Registered</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: any) => (
              <Row key={row.name} data={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserTable;
