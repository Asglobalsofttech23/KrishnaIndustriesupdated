import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Search from "../../Search Option/Search";
import AdminLeadsFilterForm from "./AdminLeadsFilterForm";
import config from '../../../config'

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const formattedHours = hours.toString().padStart(2, '0');

  return `${day}/${month}/${year} ${formattedHours}:${minutes} ${ampm}`;
};

const LeadsIndex = () => {
  const yesterday = moment().subtract(1, "days").format("YYYY-MM-DD");
  const today = moment().format("YYYY-MM-DD");
  const [leadsData, setLeadsData] = useState([]);
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [searchedFilter, setSearchedFilter] = useState([]);
  const [dataPerPage, setDataPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [startTime, setStartTime] = useState(
    moment(`${yesterday} 22:00:00`).format("YYYY-MM-DD HH:mm:ss")
  );
  const [endTime, setEndTime] = useState(
    moment().format("YYYY-MM-DD HH:mm:ss")
  );
  const [filterLeadsData, setFilterLeadsData] = useState(false);
  const [todayLeadsData, setTodayLeadsData] = useState(false);

  useEffect(() => {
    if (todayLeadsData) {
      fetchLeadsData(startTime, endTime);
    }
  }, [startTime, endTime, todayLeadsData]);

  useEffect(() => {
    if (!filterLeadsData) {
      const storedData = sessionStorage.getItem("leadsData");
      if (storedData) {
        setLeadsData(JSON.parse(storedData));
        setSearchedFilter(JSON.parse(storedData));
      }
    }
  }, [filterLeadsData]);

  useEffect(() => {
    axios
      .get(`${config.apiUrl}/leads/getFollowingLeadsMobile`)
      .then((res) => {
        // Assuming you may still need this data for other purposes
      })
      .catch((err) => {
        console.log("Error Following Data Can't be fetched.");
      });
  }, []);

  useEffect(() => {
    axios.get(`${config.apiUrl}/customer/getCustomer`)
      .then((res) => {
        // Assuming you may still need this data for other purposes
      })
      .catch((err) => {
        console.log("Error Customer Data Can't be fetched.");
      });
  }, []);

  const fetchLeadsData = (startTime, endTime) => {
    axios
      .get(`${config.apiUrl}/leads/leadsData/?startTime=${startTime}&endTime=${endTime}`)
      .then((res) => {
        if (res.data.data.RESPONSE.length > 0) {
          sessionStorage.setItem("leadsData", JSON.stringify(res.data.data.RESPONSE));
          setLeadsData(res.data.data.RESPONSE);
          setSearchedFilter(res.data.data.RESPONSE);
        }
      })
      .catch((err) => {
        setOpenError(true);
        setErrorMsg(
          err.response?.data?.message || "An error occurred while fetching leads data"
        );
        console.error("Error:", err);
      });
  };

  const handleFilterChange = (selectedState, selectedCity, startDate, endDate) => {
    let filteredData = leadsData;
    if (selectedState) {
      filteredData = filteredData.filter(lead => lead.SENDER_STATE === selectedState);
    }
    if (selectedCity) {
      filteredData = filteredData.filter(lead => lead.SENDER_CITY === selectedCity);
    }
    if (startDate && endDate) {
      filteredData = filteredData.filter(lead => {
        const leadDate = moment(lead.CREATED_DATE);
        return leadDate.isBetween(startDate, endDate);
      });
    }
    setSearchedFilter(filteredData);
  };

  const handleCancelFilter = () => {
    setFilterLeadsData(false);
    setSearchedFilter(leadsData);
  };

  const handleChangeDataPerPage = (e) => {
    const newDataPerPage = parseInt(e.target.value, 10);
    if (newDataPerPage === 1) {
      setDataPerPage(leadsData.length);
      setCurrentPage(1);
    } else {
      setDataPerPage(newDataPerPage);
      setCurrentPage(1);
    }
  };

  const firstIndexOfData = (currentPage - 1) * dataPerPage;
  const lastIndexOfData = currentPage * dataPerPage;
  const currentData = searchedFilter.slice(firstIndexOfData, lastIndexOfData);

  return (
    <div>
      {filterLeadsData && !todayLeadsData && (
        <h1 className="text-center">Filtered Leads Index</h1>
      )}

      {!filterLeadsData && todayLeadsData && (
        <h1 className="text-center">Today Leads</h1>
      )}

      {!filterLeadsData && !todayLeadsData && (
        <h1 className="text-center">Leads Index</h1>
      )}

      {filterLeadsData ? (
        <AdminLeadsFilterForm onFilterChange={handleFilterChange} />
      ) : null}

      <Grid container spacing={2}>
        <Grid item xs={4} display="flex" justifyContent="center">
          <Search data={leadsData} setData={setSearchedFilter} />
        </Grid>
        <Grid item xs={4} display="flex" justifyContent="center">
          {filterLeadsData ? (
            <Button
              onClick={handleCancelFilter}
              variant="contained"
            >
              Cancel Filter
            </Button>
          ) : (
            <>
              <Button
                onClick={() => setFilterLeadsData(true)}
                variant="contained"
              >
                Apply Filter
              </Button>
              <Button
                onClick={() => setTodayLeadsData(true)}
                style={{ marginLeft: "30px" }}
                variant="contained"
              >
                Today Leads
              </Button>
            </>
          )}
        </Grid>
        <Grid item xs={4} display="flex" justifyContent="center">
          <FormControl>
            <Select value={dataPerPage} onChange={handleChangeDataPerPage}>
              <MenuItem value={5}>5 Per Page</MenuItem>
              <MenuItem value={10}>10 Per Page</MenuItem>
              <MenuItem value={15}>15 Per Page</MenuItem>
              <MenuItem value={1}>All Per Page</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <TableContainer component={Paper} className="mt-3">
        <Table>
          <TableHead>
            <TableRow style={{ fontWeight: "bold", backgroundColor: "#FFF9C4" }}>
              <TableCell style={{ fontWeight: "bold" }}>S.No</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Date</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Mobile Number</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Email</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Company</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Address</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>City</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>State</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Product Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentData.map((leads, index) => (
              <TableRow key={leads.UNIQUE_QUERY_ID}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{formatDate(leads.QUERY_TIME)}</TableCell>
                <TableCell>{leads.SENDER_NAME}</TableCell>
                <TableCell>{leads.SENDER_MOBILE}</TableCell>
                <TableCell>{leads.SENDER_EMAIL}</TableCell>
                <TableCell>{leads.SENDER_COMPANY}</TableCell>
                <TableCell>{leads.SENDER_ADDRESS}</TableCell>
                <TableCell>{leads.SENDER_CITY}</TableCell>
                <TableCell>{leads.SENDER_STATE}</TableCell>
                <TableCell>{leads.QUERY_PRODUCT_NAME}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Grid container spacing={2} display="flex" justifyContent="center" className="mt-4">
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(searchedFilter.length / dataPerPage)}
            page={currentPage}
            onChange={(e, value) => setCurrentPage(value)}
            size="small"
            style={{ cursor: 'pointer' }}
          />
        </Stack>
      </Grid>

      <Dialog open={openError} onClose={() => setOpenError(false)}>
        <DialogTitle className="text-center bg-danger">ERROR</DialogTitle>
        <DialogContent className="mt-3">
          <p>{errorMsg}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenError(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LeadsIndex;
