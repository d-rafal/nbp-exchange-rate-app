import { Box, CircularProgress, Typography } from "@mui/material";

const LoadingIndicator = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <CircularProgress size={120} sx={{ marginBottom: "1rem" }} />
      <Typography>Loading...</Typography>
    </Box>
  );
};

export default LoadingIndicator;
