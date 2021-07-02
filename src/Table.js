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
import { myHoldings } from "./myHoldings";
import { SimpleCard } from "./TotalCard";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function getTime(date) {
  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

function createData(symbol, time, lastPrice, myHoldingPrice) {
  return { symbol, time, lastPrice, myHoldingPrice };
}

export default function BasicTable() {
  const classes = useStyles();

  const marketData = useMarket();

  const rows = Object.keys(marketData).map((symbol) => {
    const lastPrice = parseFloat(marketData[symbol].c);
    const myHoldingPrice = lastPrice * myHoldings[symbol];
    return createData(
      marketData[symbol].s,
      getTime(new Date(marketData[symbol].E)),
      lastPrice,
      myHoldingPrice
    );
  });

  const holdingPrices = Object.keys(marketData).map((symbol) => {
    return parseFloat(marketData[symbol].c);
  });

  const totalHoldingPrice =
    holdingPrices.length &&
    holdingPrices.reduce((acc, currentValue) => {
      return currentValue + acc;
    });

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Symbol</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Last Price</TableCell>
            <TableCell align="right">My Holding Price</TableCell>
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
              <TableCell align="right">{row.myHoldingPrice}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <SimpleCard total={totalHoldingPrice} />
    </TableContainer>
  );
}
