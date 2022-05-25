import React, { useEffect, useState } from "react";
import styles from "./SingleApplication.module.css";
import Moment from "moment";
import NumberFormat from "react-number-format";
import { motion, AnimatePresence } from "framer-motion";
import ApplicationDialog from "./components/Dialogs/ApplicationDialog";
import { getApplicationInfo } from "./services/api.js";
const SingleApplication = ({ application, applicationData }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [rowData, setRowData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  // useEffect(() => {
  //   setDialogOpen(false);
  // }, []);
  const handleApplicationRow = async (item) => {
    setDialogOpen(true);
    // seems like the datas the same, realisticaally just making a call to get the contextual data, wouldnt it be more efficient to just use the id of the row/ index and use that to get the rowContext with bracket notation?

    // image sometimes loads slower than other
    await getApplicationInfo(item.id).then((data) => {
      setRowData(data);

      setLoading(true);
    });
  };
  const handleDialogClose = (item) => {
    setDialogOpen(false);
    // setRowData([]);
    setLoading(false);
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
        <div className={styles.cellEnd}>
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
              <a href={application.email}>{application.email}</a>
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
            <div className={styles.cellEnd}>
              {Moment(application.expiry_date.split("T")[0]).format(
                "Do MMMM YYYY"
              )}
            </div>
          </motion.div>
        ))
      }
      {isLoading ? (
        <ApplicationDialog
          handleDialogClose={handleDialogClose}
          rowData={rowData[0]}
          dialogOpen={dialogOpen}
        />
      ) : null}
    </>
  );
};

export default SingleApplication;
