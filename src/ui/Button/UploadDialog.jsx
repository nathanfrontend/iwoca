import React, { useState, useRef, useEffect } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import {
  Autocomplete,
  TextField,
  AppBar,
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

function UploadDialog({ dialogOpen }) {
  const [libraryvalue, setLibraryValue] = useState([]);
  const [libraryuploadvalue, setUploadLibraryValue] = useState([]);

  return (
    <>
      <Dialog
        open={dialogOpen}
        aria-labelledby="draggable-dialog-title"
        maxWidth="lg"
      >
        <AppBar sx={{ position: "relative", bgcolor: "#385c69" }}>
          <DialogTitle sx={{ m: 0, p: 2 }}>
            <Typography variant="h4"></Typography>
          </DialogTitle>
        </AppBar>
        <DialogContent></DialogContent>

        <DialogActions></DialogActions>
      </Dialog>
    </>
  );
}

export default UploadDialog;
