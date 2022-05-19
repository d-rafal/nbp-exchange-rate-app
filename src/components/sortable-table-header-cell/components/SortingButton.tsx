import { styled } from "@mui/material";

export const SortingButton = styled("button")({
  appearance: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  border: "none",
  backgroundColor: "transparent",
  fontSize: "inherit",
  outline: "none",

  "&:focus-visible": {
    outline: "#42a5f5 solid 2px",
  },
});
