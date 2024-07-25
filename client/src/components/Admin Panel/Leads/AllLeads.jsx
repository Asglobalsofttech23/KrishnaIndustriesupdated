import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, Card, CardContent, Typography, Grid } from '@mui/material';
import config from '../../../config';

// Utility function to format date
const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${day}/${month}/${year} ${hours}:${minutes}`;
};

const LeadsList = () => {
  const [leads, setLeads] = useState([]);
  const [followingLeads, setFollowingLeads] = useState([]);
  const [filteredLeads, setFilteredLeads] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [loading, setLoading] = useState(true);

  // Pagination states
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    const fetchLeadsAndFollowing = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${config.apiUrl}/employee/api/leads-and-following`);
        const { leads, followingLeads } = response.data;

        // Ensure data is an array
        if (Array.isArray(leads) && Array.isArray(followingLeads)) {
          setLeads(leads);
          setFollowingLeads(followingLeads);
          setFilteredLeads(leads); // Set both leads and filteredLeads initially
        } else {
          console.error('Expected arrays of leads and following leads data');
        }
      } catch (error) {
        console.error('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeadsAndFollowing();
  }, []);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    setSelectedMonth(''); // Clear month selection when date is selected
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
    setSelectedDate(''); // Clear date selection when month is selected
  };

  const applyFilter = () => {
    let filtered = Array.isArray(leads) ? [...leads] : [];

    if (selectedDate) {
      filtered = filtered.filter(lead => new Date(lead.QUERY_TIME).toDateString() === new Date(selectedDate).toDateString());
    } else if (selectedMonth) {
      const [year, month] = selectedMonth.split('-');
      filtered = filtered.filter(lead => {
        const leadDate = new Date(lead.QUERY_TIME);
        return leadDate.getFullYear() === parseInt(year) && (leadDate.getMonth() + 1) === parseInt(month);
      });
    }

    setFilteredLeads(filtered);
    setPage(0); // Reset to the first page when filtering
  };

  // Handle pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to the first page when changing rows per page
  };

  // Calculate paginated data
  const paginatedLeads = filteredLeads.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  // Match leads with followingLeads
  const getRowStyle = (leadId) => {
    return followingLeads.some(follow => follow.leads_id === leadId) ? { backgroundColor: 'lightgreen' } : {};
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Leads</h1>
      <Grid container spacing={3} style={{ marginBottom: '20px' }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Total Leads
              </Typography>
              <Typography variant="h4" component="div">
                {leads.length}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Following Leads
              </Typography>
              <Typography variant="h4" component="div">
                {followingLeads.length}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <div style={{ marginBottom: '20px' }}>
        <TextField
          type="date"
          label="Select Date"
          value={selectedDate}
          onChange={handleDateChange}
          InputLabelProps={{ shrink: true }}
          style={{ marginRight: '10px' }}
        />
        <FormControl style={{ marginRight: '10px', minWidth: 120 }}>
          <InputLabel>Month</InputLabel>
          <Select
            value={selectedMonth}
            onChange={handleMonthChange}
            label="Month"
          >
            <MenuItem value="">None</MenuItem>
            {/* Generate options for the current year */}
            {Array.from({ length: 12 }).map((_, i) => (
              <MenuItem key={i} value={`${new Date().getFullYear()}-${i + 1}`}>
                {`${new Date(0, i).toLocaleString('default', { month: 'long' })} ${new Date().getFullYear()}`}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={applyFilter}
        >
          Filter
        </Button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>S.No</TableCell>
                  <TableCell>Unique Query ID</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Mobile Number</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Company</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>City</TableCell>
                  <TableCell>State</TableCell>
                  <TableCell>Product Name</TableCell>
                  {/* Add more headers as needed */}
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedLeads.length > 0 ? (
                  paginatedLeads.map((lead, index) => (
                    <TableRow key={lead.UNIQUE_QUERY_ID} style={getRowStyle(lead.UNIQUE_QUERY_ID)}>
                      <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                      <TableCell>{lead.UNIQUE_QUERY_ID}</TableCell>
                      <TableCell>{formatDate(lead.QUERY_TIME)}</TableCell>
                      <TableCell>{lead.SENDER_NAME}</TableCell>
                      <TableCell>{lead.SENDER_MOBILE}</TableCell>
                      <TableCell>{lead.SENDER_EMAIL}</TableCell>
                      <TableCell>{lead.SENDER_COMPANY}</TableCell>
                      <TableCell>{lead.SENDER_ADDRESS}</TableCell>
                      <TableCell>{lead.SENDER_CITY}</TableCell>
                      <TableCell>{lead.SENDER_STATE}</TableCell>
                      <TableCell>{lead.QUERY_PRODUCT_NAME}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={11}>No data available</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 50]}
            component="div"
            count={filteredLeads.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </>
      )}
    </div>
  );
};

export default LeadsList;
