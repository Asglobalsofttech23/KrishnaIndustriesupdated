import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  TextField,
} from '@mui/material';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import config from "../../../config";
import './EmployeeAttendance.css'; // Importing the CSS file

const localizer = momentLocalizer(moment);

function EmployeeAttendance() {
  const [attendanceData, setAttendanceData] = useState([]);
  const [employeeData, setEmployeeData] = useState({});
  const [todayAttendance, setTodayAttendance] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [filteredAttendanceData, setFilteredAttendanceData] = useState([]);
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [adminLeaveDate, setAdminLeaveDate] = useState('');
  const [adminLeaveReason, setAdminLeaveReason] = useState('');
  const [adminLeaveEvents, setAdminLeaveEvents] = useState([]);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  useEffect(() => {
    axios.get(`${config.apiUrl}/employee/todayAttendance`)
      .then((res) => setTodayAttendance(res.data.today))
      .catch((err) => console.error('Error fetching today\'s attendance:', err));

    axios.get(`${config.apiUrl}/employee/allAttendance`)
      .then((res) => setAttendanceData(res.data))
      .catch((err) => console.error('Error fetching all attendance:', err));

    axios.get(`${config.apiUrl}/employee/allEmployees`)
      .then((res) => {
        const employeeMap = {};
        res.data.forEach(emp => {
          employeeMap[emp.emp_id] = emp.emp_name;
        });
        setEmployeeData(employeeMap);
      })
      .catch((err) => console.error('Error fetching employee data:', err));

    axios.get(`${config.apiUrl}/employee/adminLeave`)
      .then((res) => {
        const leaveEvents = res.data.map(leave => ({
          id: leave.leave_id,
          title: `Holiday: ${leave.reason}`,
          start: new Date(leave.leave_date),
          end: new Date(leave.leave_date),
          type: 'leave'
        }));
        setAdminLeaveEvents(leaveEvents);
      })
      .catch((err) => console.error('Error fetching admin leave data:', err));
  }, []);

  const handleMonthChange = (event) => {
    const month = event.target.value;
    setSelectedMonth(month);
    const date = new Date(calendarDate.getFullYear(), month - 1, 1);
    setCalendarDate(date);
  };

  const handleEmployeeChange = (event) => {
    setSelectedEmployee(event.target.value);
  };

  const handleFilter = () => {
    axios.get(`${config.apiUrl}/employee/filterAttendance`, {
      params: {
        month: selectedMonth,
        empId: selectedEmployee
      }
    })
    .then((res) => setFilteredAttendanceData(res.data))
    .catch((err) => console.error('Error fetching filtered attendance:', err));
  };

  const handleAdminLeaveDateChange = (event) => {
    setAdminLeaveDate(event.target.value);
  };

  const handleAdminLeaveReasonChange = (event) => {
    setAdminLeaveReason(event.target.value);
  };

  const handleSubmitAdminLeave = () => {
    if (!adminLeaveDate || !adminLeaveReason) {
      alert('Please fill out both the date and reason.');
      return;
    }

    axios.post(`${config.apiUrl}/employee/enterLeave`, {
      leave_date: adminLeaveDate,
      reason: adminLeaveReason
    })
    .then(() => {
      alert('Leave entered successfully!');
      // Optionally refresh data or clear form
      setAdminLeaveDate('');
      setAdminLeaveReason('');
      // Fetch admin leave data again to update calendar
      axios.get(`${config.apiUrl}/employee/adminLeave`)
        .then((res) => {
          const leaveEvents = res.data.map(leave => ({
            id: leave.leave_id,
            title: `Holiday: ${leave.reason}`,
            start: new Date(leave.leave_date),
            end: new Date(leave.leave_date),
            type: 'leave'
          }));
          setAdminLeaveEvents(leaveEvents);
        })
        .catch((err) => console.error('Error fetching admin leave data:', err));
    })
    .catch((err) => console.error('Error entering leave:', err));
  };

  const events = filteredAttendanceData.map(attendance => ({
    id: attendance.attendance_id,
    title: employeeData[attendance.emp_id] || 'Unknown',
    start: new Date(attendance.entry_at),
    end: new Date(attendance.exit_at),
    type: 'present'  // Custom attribute to differentiate types of events
  }));

  const allEvents = [...events, ...adminLeaveEvents];

  const eventPropGetter = (event) => {
    const backgroundColor = event.type === 'leave' ? 'yellow' :
                            event.type === 'present' ? 'green' : 'white';
    return {
      style: {
        backgroundColor,
        color: 'black'
      }
    };
  };
  return (
    <div className="container">
      <h1 className="heading">Employee Attendance Details</h1>

      {/* Attendance Card */}
      <Grid container spacing={2}>
        {/* <Grid item xs={6} className="card-container">
          {/* You can add additional cards or content here 
        </Grid> */}
        <Grid item xs={3} className="card-container">
          <Card>
            <CardContent>
              <Typography variant="h4">Today's Present Attendance</Typography>
              <Typography variant="h2">{todayAttendance}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Main Content Layout */}
      <Grid container spacing={2} style={{ marginTop: '16px' }}>
        <Grid item xs={12} md={6} className="admin-leave-container">
          <Card>
            <CardContent>
              <Typography style={{paddingBottom:"10px"}} variant="h4">Admin Leave Management</Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    label="Leave Date"
                    type="date"
                    value={adminLeaveDate}
                    onChange={handleAdminLeaveDateChange}
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Leave Reason"
                    value={adminLeaveReason}
                    onChange={handleAdminLeaveReasonChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="secondary" onClick={handleSubmitAdminLeave}>
                    Submit Leave
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} className="filter-container">
          <Card>
            <CardContent>
            <Typography style={{paddingBottom:"10px"}} variant="h4">Filter Attendance Data</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>Month</InputLabel>
                    <Select
                      value={selectedMonth}
                      onChange={handleMonthChange}
                      label="Month"
                    >
                      {months.map((month, index) => (
                        <MenuItem key={index} value={index + 1}>{month}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>Employee</InputLabel>
                    <Select
                      value={selectedEmployee}
                      onChange={handleEmployeeChange}
                      label="Employee"
                    >
                      {Object.entries(employeeData).map(([id, name]) => (
                        <MenuItem key={id} value={id}>{name}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary" onClick={handleFilter}>
                    Get Data
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Calendar Component */}
      <div className="calendar-container" style={{ marginTop: '16px' }}>
        <Calendar
          localizer={localizer}
          events={allEvents}
          startAccessor="start"
          endAccessor="end"
          date={calendarDate}
          onNavigate={date => setCalendarDate(date)}
          style={{ height: 500 }}
          eventPropGetter={eventPropGetter}
        />
      </div>
    </div>
  );
};

export default EmployeeAttendance;