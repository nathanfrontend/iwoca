import React, { useEffect, useState } from "react";
import styles from "./SingleApplication.module.css";
import Moment from "moment";
import NumberFormat from "react-number-format";
import { motion, AnimatePresence } from "framer-motion";
import UploadDialog from "./ui/Button/UploadDialog";
import { getApplicationInfo } from "./services/api.js";
const SingleApplication = ({ application, applicationData }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [rowData, setRowData] = useState([]);
  // useEffect(() => {
  //   setDialogOpen(false);
  // }, []);
  const handleApplicationRow = (item) => {
    setDialogOpen(true);
    // seems like the datas the same, realisticaally just making a call to get the contextual data, wouldnt it be more efficient to just use the id of the row/ index and use that to get the rowContext with bracket notation?
    getApplicationInfo(item.id).then((data) => {
      setRowData(data);
    });
  };
  const handleDialogClose = (item) => {
    setDialogOpen(false);
  };
  return (
    <>
      <div className={styles.SingleApplication}>
        <div className={styles.cell}>
          <sub>Company</sub>
        </div>
        <div className={styles.cell}>
          <sub>Name</sub>
        </div>
        <div className={styles.cell}>
          <sub>Email</sub>
        </div>
        <div className={styles.cell}>
          <sub>Loan Amount</sub>
        </div>
        <div className={styles.cell}>
          <sub>Application Date</sub>
        </div>
        <div className={styles.cell}>
          <sub>Expiry date</sub>
        </div>
      </div>

      {
        // ideally would use isLoading property/parameter for  but this will do

        applicationData.map((application, index) => (
          <motion.div
            whileHover={{
              backgroundColor: "#e3e2de",
            }}
            className={styles.SingleApplication}
            onClick={() => handleApplicationRow(application, index)}
          >
            <div className={styles.cell}>{application.company}</div>
            <div className={styles.cell}>
              {application.first_name} {application.last_name}
            </div>
            <div className={styles.cell}>
              <a href="">{application.email}</a>
            </div>
            <div className={styles.cell}>
              {" "}
              <NumberFormat
                value={application.loan_amount}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"£"}
              />
            </div>
            <div className={styles.cell}>
              {Moment(application.date_created.split("T")[0]).format(
                "Do MMMM YYYY"
              )}
            </div>
            <div className={styles.cell}>
              {Moment(application.expiry_date.split("T")[0]).format(
                "Do MMMM YYYY"
              )}
            </div>
          </motion.div>
        ))
      }
      <UploadDialog dialogOpen={dialogOpen} />
    </>
  );
};

export default SingleApplication;
