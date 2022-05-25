import React, { useEffect, useState } from "react";
import SingleApplication from "./SingleApplication";
import { getSingleApplicationFixture } from "./__fixtures__/applications.fixture";
import styles from "./Applications.module.css";
import { getTableData } from "./services/api.js";
const Applications = ({ applicationData }) => {
  const applications = getSingleApplicationFixture;
  return (
    <div className={styles.Applications}>
      <SingleApplication
        application={applications}
        applicationData={applicationData}
      />
    </div>
  );
};

export default Applications;
