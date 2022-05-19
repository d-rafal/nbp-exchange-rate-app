import { TableCell, TableRow, Typography } from "@mui/material";
import { SortQueryInURL } from "../../../@types-and-const/@url-queries/@sort";
import SortableTableHeaderCell from "../../sortable-table-header-cell";

interface Props {
  sortingOrder: SortQueryInURL | null;
  setSortingOrderByCurrencyName: () => void;
  setSortingOrderByAverageExchangeRate: () => void;
}

const TableHeaderCurrencyExchangeRate = ({
  sortingOrder,
  setSortingOrderByCurrencyName,
  setSortingOrderByAverageExchangeRate,
}: Props) => {
  return (
    <TableRow>
      <SortableTableHeaderCell
        sortingOrder={
          sortingOrder === "name-asc"
            ? "ASCENDING"
            : sortingOrder === "name-desc"
            ? "DESCENDING"
            : "NONE"
        }
        sortingFunction={setSortingOrderByCurrencyName}
        headerText="Nazwa waluty"
        width="40%"
      />

      <TableCell align="right" sx={{ width: "30%" }}>
        <Typography sx={{ fontSize: "inherit" }}>Kod waluty</Typography>
      </TableCell>
      <SortableTableHeaderCell
        sortingOrder={
          sortingOrder === "rate-asc"
            ? "ASCENDING"
            : sortingOrder === "rate-desc"
            ? "DESCENDING"
            : "NONE"
        }
        sortingFunction={setSortingOrderByAverageExchangeRate}
        headerText="Kurs średni(g)"
        width="30%"
        justifyContent="end"
      />
    </TableRow>
  );
};

export default TableHeaderCurrencyExchangeRate;
