import React, { useEffect, useState } from "react";
import "./App.css";
import Applications from "./Applications";
import Header from "./Header";
import { Button } from "./ui/Button/Button.jsx";
import { getTableData, getTableRows } from "./services/api.js";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";
import TablePagination from "@mui/material/TablePagination";
function App() {
  const [applicationData, setApplicationData] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [rows, setRows] = useState(1);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  //useEffect is dependant on refresh and a change in page/limit data
  useEffect(() => {
    fetchApplications();
    setRefresh(false);
  }, [page, limit]);
  const fetchApplications = () => {
    // by passing the limit and page in as a parameter the choice of having a growing table view/ paginated view is easy to toggle betweem.
    getTableData(page, limit).then((data) => {
      setApplicationData(data);
    });
    getTableRows().then((data) => {
      setRows(data.length);
    });
  };
  document.title = "iwoca | Application Portal";
  return (
    <div className="App">
      <Header />
      {applicationData.length !== 0 ? (
        <div>
          <Applications applicationData={applicationData} />

          <Button
            setPage={setPage}
            page={page}
            limit={limit}
            setLimit={setLimit}
            applicationData={applicationData}
            rows={rows}
          />
        </div>
      ) : (
        <LinearProgress />
      )}
    </div>
  );
}

export default App;
