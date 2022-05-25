import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "../Dialogs/Application.css";
import NumberFormat from "react-number-format";
import CloseIcon from "@mui/icons-material/Close";
import Moment from "moment";
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
  Avatar,
  Stack,
  LinearProgress,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import { motion, AnimatePresence } from "framer-motion";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

function ApplicationDialog({ dialogOpen, rowData, handleDialogClose }) {
  const [libraryvalue, setLibraryValue] = useState([]);
  const [libraryuploadvalue, setUploadLibraryValue] = useState([]);

  return (
    <>
      <Dialog
        open={dialogOpen}
        aria-labelledby="draggable-dialog-title"
        maxWidth="xl"
        sx={{ width: "100%" }}
      >
        <AppBar
          sx={{
            position: "relative",
            bgcolor: "#5c95db",
            justifyContent: "flex-end",
          }}
        >
          <div className="end">
            <CloseIcon
              className="close"
              color="action"
              onClick={() => handleDialogClose()}
            />
          </div>
        </AppBar>

        <DialogContent>
          <Grid container className="profileContainer" spacing={2}>
            <Grid container spacing={2}>
              <Grid item>
                <Avatar
                  sx={{ width: 100, height: 100 }}
                  alt="Remy Sharp"
                  src={rowData.avatar}
                />
              </Grid>
              <Grid item>
                <Stack direction="column">
                  <Typography className="companyHeader">
                    {rowData.company}
                  </Typography>
                  <Typography className="personSub">
                    {rowData.first_name} {rowData.last_name}
                  </Typography>
                  <Typography className="personSub">
                    <a href={rowData.email}>{rowData.email}</a>
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
            <Box>
              <Divider orientation="vertical" variant="middle" flexItem />
            </Box>
            <Grid container>
              <Grid item>
                <Typography className="productHead">Loan amount</Typography>
                <Typography className="companyHeader">
                  <NumberFormat
                    value={rowData.loan_amount}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"£"}
                  />
                </Typography>
              </Grid>
              <Grid item>
                <Stack direction="row" spacing={8}>
                  <Grid item>
                    <Typography className="productHead">Product</Typography>
                    <Typography className="productSub">
                      {rowData.loan_type}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography className="productHead">
                      Application date
                    </Typography>
                    <Typography className="productSub">
                      {Moment(rowData.date_created.split("T")[0]).format(
                        "DD-MM-YYYY"
                      )}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography className="productHead">Expiry date</Typography>
                    <Typography className="productSub">
                      {" "}
                      {Moment(rowData.expiry_date.split("T")[0]).format(
                        "DD-MM-YYYY"
                      )}
                    </Typography>
                  </Grid>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={10.5}>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                className="headers"
                sx={{
                  m: 1,
                  flexGrow: 1,
                  display: "flex",
                }}
              >
                Loan History
              </Typography>
            </Grid>
          </Grid>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="tableSub">Start date</TableCell>
                  <TableCell className="tableSub">End date</TableCell>
                  <TableCell className="tableSub">Principal</TableCell>
                  <TableCell className="tableSub">Interest</TableCell>
                  <TableCell className="tableSub">Repayment</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rowData.loan_history.map((row, index) => (
                  <TableRow
                    key={row.name}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {Moment(row.loan_started.split("T")[0]).format(
                        "Do MMMM YYYY"
                      )}
                    </TableCell>
                    <TableCell>
                      {" "}
                      {Moment(row.loan_ended.split("T")[0]).format(
                        "Do MMMM YYYY"
                      )}
                    </TableCell>
                    <TableCell>
                      <NumberFormat
                        value={row.principle}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"£"}
                      />
                    </TableCell>
                    <TableCell>
                      {" "}
                      <NumberFormat
                        value={row.interest}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"£"}
                      />
                    </TableCell>
                    <TableCell>
                      <NumberFormat
                        value={row.interest + row.principle}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"£"}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>

        <DialogActions></DialogActions>
      </Dialog>
    </>
  );
}

export default ApplicationDialog;
