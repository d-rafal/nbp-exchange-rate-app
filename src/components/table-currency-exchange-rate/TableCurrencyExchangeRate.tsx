import { CurrenciesExchangeRateFromApi } from "../../@types-and-const/@currency-exchange-rate";
import {
  Container,
  Paper,
  styled,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Typography,
} from "@mui/material";

import useSortCurrencies from "./hooks/useSortCurrencies";
import useSortingOrderProvider from "./hooks/useSortingOrderProvider";

import TableHeaderCurrencyExchangeRate from "./components/TableHeaderCurrencyExchangeRate";
import TableRowCurrencyExchangeRate from "./components/TableRowCurrencyExchangeRate";

const Caption = styled("caption")`
  caption-side: top !important;
`;
interface Props {
  currenciesExchangeRateFromApi: CurrenciesExchangeRateFromApi | null;
}

const TableCurrencyExchangeRate = ({
  currenciesExchangeRateFromApi,
}: Props) => {
  const [
    sortingOrder,
    setSortingOrderByCurrencyName,
    setSortingOrderByAverageExchangeRate,
  ] = useSortingOrderProvider();

  const sortedCurrencies = useSortCurrencies(
    currenciesExchangeRateFromApi?.currencies,
    sortingOrder
  );

  return (
    <Container
      maxWidth="md"
      component={Paper}
      elevation={6}
      sx={{
        marginTop: "3rem",
        marginBottom: "3rem",
        padding: "1rem 1rem 2rem",
      }}
    >
      <TableContainer
        sx={{
          "& .MuiTableCell-head": {
            fontSize: "1.3rem",
          },
        }}
      >
        <Table size="small" aria-label="kursy wymiany walut">
          <Caption>
            <Typography
              variant="h4"
              component="h4"
              sx={{ textAlign: "center" }}
            >
              Tabela nr {currenciesExchangeRateFromApi?.tableNr} z dnia{" "}
              {currenciesExchangeRateFromApi?.publicationDate}
            </Typography>
          </Caption>
          <TableHead>
            <TableHeaderCurrencyExchangeRate
              sortingOrder={sortingOrder}
              setSortingOrderByCurrencyName={setSortingOrderByCurrencyName}
              setSortingOrderByAverageExchangeRate={
                setSortingOrderByAverageExchangeRate
              }
            />
          </TableHead>
          <TableBody>
            {sortedCurrencies.map((currency) => (
              <TableRowCurrencyExchangeRate
                key={currency.code}
                currency={currency}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TableCurrencyExchangeRate;
