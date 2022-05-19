import React from "react";
import { TableCell, Typography, TableRow } from "@mui/material";
import { Currency } from "../../../@types-and-const/@currency-exchange-rate";

interface Props {
  currency: Currency;
}

const TableRowCurrencyExchangeRate = ({ currency }: Props) => {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        <Typography>{currency.name}</Typography>
      </TableCell>
      <TableCell align="right">
        <Typography>{`${currency.ratio} ${currency.code}`}</Typography>
      </TableCell>
      <TableCell align="right">
        <Typography> {currency.averageExchangeRate}</Typography>
      </TableCell>
    </TableRow>
  );
};

type CurrencyKeys = keyof Currency;

const propsAreEqual = (prevProps: Props, nextProps: Props) => {
  Object.keys(prevProps.currency).forEach((key) => {
    if (
      prevProps.currency[key as CurrencyKeys] !==
      nextProps.currency[key as CurrencyKeys]
    )
      return false;
  });
  return true;
};

export default React.memo(TableRowCurrencyExchangeRate, propsAreEqual);
