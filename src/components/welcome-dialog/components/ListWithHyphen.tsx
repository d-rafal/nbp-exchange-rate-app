import { styled } from "@mui/material";

export const ListWithHyphen = styled("ul")({
  listStyleType: "none",
  margin: 0,
  paddingInlineStart: "1rem",
  "&>li": {
    "&:before": { content: "'- '" },
  },
});
