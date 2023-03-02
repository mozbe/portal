import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, Collapse, IconButton, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { RowProps } from '../../constants/types';

const Row = ({ data }: { data: RowProps }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow
        key={data.name}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="data">{data.name}</TableCell>
        <TableCell component="th" scope="data">{data.surname}</TableCell>
        <TableCell align="right">{data.email}</TableCell>
        <TableCell align="right">{data.status}</TableCell>
        <TableCell align="right">€{data.balance}</TableCell>
        <TableCell align="right">{data.timestamp}</TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0, backgroundColor: '#f4f4f4' }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="subtitle1" gutterBottom component="div">
                  Transaction History
              </Typography>

              {!!data.transactions.length &&
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell align="right">Amount</TableCell>
                      <TableCell align="right">Type</TableCell>
                      <TableCell align="right">Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.transactions.map((transactionRow: any) => (
                      <TableRow key={transactionRow.id}>
                        <TableCell component="th" scope="row">
                          {new Date(transactionRow.timestamp).toLocaleDateString('en-GB')}
                        </TableCell>
                        <TableCell align="right">€{transactionRow.amount}</TableCell>
                        <TableCell align="right">{transactionRow.type}</TableCell>
                        <TableCell align="right">{transactionRow.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              }
              {!data.transactions.length &&
                'No registered transactions'
              }
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default Row;
