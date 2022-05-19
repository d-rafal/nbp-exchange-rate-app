import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import { ListWithHyphen } from "./components/ListWithHyphen";

const WelcomeDialog = () => {
  const [showWelcomeDialog, setShowWelcomeDialog] = useState(true);

  const handleCloseWelcomeDialog = () => {
    setShowWelcomeDialog(false);
  };
  return (
    <Dialog
      open={showWelcomeDialog}
      onClose={handleCloseWelcomeDialog}
      scroll="paper"
      aria-labelledby="welcome-dialog-title"
      sx={{ margin: "0rem" }}
    >
      <DialogTitle id="welcome-dialog-title">
        Welcome to my App
        <IconButton
          aria-label="close"
          onClick={handleCloseWelcomeDialog}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers={true} sx={{ "& > p + p": { mt: "0.6rem" } }}>
        <Typography>
          This <strong>SPA</strong> was created as a job recruitment task.
        </Typography>
        <Typography>
          The purpose of this simple app is to download currencies' exchange
          rate table from <u>https://www.nbp.pl/kursy/xml/a095z220518.xml</u> in
          xml format, display it in browser with possibility of sorting
          displayed data by currency name or exchange rate.
        </Typography>
        <Typography>
          It's based on <strong>Create React App</strong> environment
          configuration and written in <strong>Typescript</strong>.
        </Typography>
        <Typography sx={{ mb: "0.5rem" }}>Used libraries:</Typography>
        <ListWithHyphen style={{ listStyle: "" }}>
          <li>react</li>
          <li>react-router</li>
          <li>material-ui</li>
          <li>emotion</li>
        </ListWithHyphen>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseWelcomeDialog}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default WelcomeDialog;
