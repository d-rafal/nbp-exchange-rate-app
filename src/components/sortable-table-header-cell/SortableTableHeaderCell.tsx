import React from "react";
import { Stack, TableCell, Typography } from "@mui/material";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import { Property } from "csstype";
import { AriaSortAttribute } from "../../@types-and-const/@common";

import { SortingButton } from "./components/SortingButton";

interface Props {
  sortingOrder: "ASCENDING" | "DESCENDING" | "NONE";
  sortingFunction: () => void;
  headerText: string;
  width: Property.Width;
  justifyContent?: Property.JustifyContent;
}

const SortableTableHeaderCell = ({
  sortingOrder,
  sortingFunction,
  headerText,
  width,
  justifyContent = "start",
}: Props) => {
  let ariaSortAttribute: AriaSortAttribute = undefined;
  let sortingIcon = null;

  if (sortingOrder === "ASCENDING") {
    ariaSortAttribute = "ascending";
    sortingIcon = <ArrowDropUpIcon />;
  } else if (sortingOrder === "DESCENDING") {
    ariaSortAttribute = "descending";
    sortingIcon = <ArrowDropDownIcon />;
  }

  return (
    <TableCell sx={{ width }} aria-sort={ariaSortAttribute}>
      <Stack
        direction="row"
        justifyContent={justifyContent}
        sx={{ "& .MuiSvgIcon-root": { fontSize: "1.8rem" } }}
      >
        <SortingButton onClick={sortingFunction}>
          {sortingIcon}
          <Typography sx={{ fontSize: "inherit" }}>{headerText}</Typography>
        </SortingButton>
      </Stack>
    </TableCell>
  );
};

export default React.memo(SortableTableHeaderCell);
