import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useMarket } from "./marketContext";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function getTime(date) {
  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

function createData(symbol, time, lastPrice) {
  return { symbol, time, lastPrice };
}

export default function BasicTable() {
  const classes = useStyles();

  const marketData = useMarket();

  console.log({ marketData });

  const rows = Object.keys(marketData).map((symbol) => {
    return createData(
      marketData[symbol].s,
      getTime(new Date(marketData[symbol].E)),
      marketData[symbol].c
    );
  });

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Symbol</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Last Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.symbol}
              </TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.lastPrice}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
