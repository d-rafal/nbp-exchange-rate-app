import { Alert, Box } from "@mui/material";

const ErrorIndicator = () => {
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
      <Alert variant="filled" severity="error">
        Pobieranie danych nie powiodło się!
      </Alert>
    </Box>
  );
};
export default ErrorIndicator;
