import React, { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./Button.module.css";
import Grid from "@mui/material/Grid";
import { getTableData, page } from "../../services/api.js";
import { Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
// using the button as a footer
export const Button = ({
  className,
  setPage,
  page,
  setLimit,
  limit,
  applicationData,
  rows,
}) => {
  const LoadMore = () => {
    setLimit((previousState) => previousState + 5);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    // console.log(newPage);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item className="buttonCenter">
          <button className={cn(styles.button, className)} onClick={LoadMore}>
            {" "}
            Load More
          </button>

          <Pagination
            className={styles.pagination}
            onChange={handleChangePage}
            count={parseInt(rows / limit)}
          />

          <Typography>
            {limit} of {rows}
          </Typography>
        </Grid>
      </Grid>

      {/* <Typography className={cn(styles.button, className)}> */}
      {/* to do it dynamically i wouldve done applicationsData.length / page, but since im setting the limit to 5 at runtime and im not going to  */}
      {/* Page {page} of 20
      </Typography> */}
    </>
  );
};
