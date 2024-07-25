// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//   Card,
//   CardContent,
//   Grid,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Typography,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Button
// } from '@mui/material';
// import config from "../../../config";

// function EmployeeAttendance() {
//   const [attendanceData, setAttendanceData] = useState([]);
//   const [employeeData, setEmployeeData] = useState({});
//   const [totalAttendance, setTotalAttendance] = useState(0);
//   const [todayAttendance, setTodayAttendance] = useState(0);
//   const [selectedMonth, setSelectedMonth] = useState('');
//   const [selectedEmployee, setSelectedEmployee] = useState('');
//   const [filteredAttendanceData, setFilteredAttendanceData] = useState([]);

//   // Array of month names
//   const months = [
//     'January', 'February', 'March', 'April', 'May', 'June',
//     'July', 'August', 'September', 'October', 'November', 'December'
//   ];

//   useEffect(() => {
    
   
//     // Fetch today's attendance
//     axios.get(`${config.apiUrl}/employee/todayAttendance`)
//       .then((res) => setTodayAttendance(res.data.today))
//       .catch((err) => console.error('Error fetching today\'s attendance:', err));

//     // Fetch all attendance records
//     axios.get(`${config.apiUrl}/employee/allAttendance`)
//       .then((res) => setAttendanceData(res.data))
//       .catch((err) => console.error('Error fetching all attendance:', err));

//     // Fetch all employees
//     axios.get(`${config.apiUrl}/employee/allEmployees`)
//       .then((res) => {
//         const employeeMap = {};
//         res.data.forEach(emp => {
//           employeeMap[emp.emp_id] = emp.emp_name;
//         });
//         setEmployeeData(employeeMap);
//       })
//       .catch((err) => console.error('Error fetching employee data:', err));
//   }, []);

//   const handleMonthChange = (event) => {
//     setSelectedMonth(event.target.value);
//   };

//   const handleEmployeeChange = (event) => {
//     setSelectedEmployee(event.target.value);
//   };

//   const handleFilter = () => {
//     axios.get(`${config.apiUrl}/employee/filterAttendance`, {
//       params: {
//         month: selectedMonth,
//         empId: selectedEmployee
//       }
//     })
//     .then((res) => setFilteredAttendanceData(res.data))
//     .catch((err) => console.error('Error fetching filtered attendance:', err));
//   };

//   return (
//     <>
//       <h1 className='text-center'>Employee Monthly Attendance</h1>
//       <Grid container spacing={2} className='mt-3'>
//         <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
//         </Grid>
//         <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
//           <Card>
//             <CardContent>
//               <Typography variant="h4">Today's Attendance</Typography>
//               <Typography variant="h2">{todayAttendance}</Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>

//       <Grid container spacing={2} className='mt-3'>
//         <Grid item xs={4}>
//           <FormControl fullWidth>
//             <InputLabel>Month</InputLabel>
//             <Select
//               value={selectedMonth}
//               onChange={handleMonthChange}
//               label="Month"
//             >
//               {months.map((months, index) => (
//                 <MenuItem key={index} value={index + 1}>{months}</MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </Grid>
//         <Grid item xs={4}>
//           <FormControl fullWidth>
//             <InputLabel>Employee</InputLabel>
//             <Select
//               value={selectedEmployee}
//               onChange={handleEmployeeChange}
//               label="Employee"
//             >
//               {Object.entries(employeeData).map(([id, name]) => (
//                 <MenuItem key={id} value={id}>{name}</MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </Grid>
//         <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center' }}>
//           <Button variant="contained" color="primary" onClick={handleFilter}>
//             Get Data
//           </Button>
//         </Grid>
//       </Grid>

//       <TableContainer component={Paper} className='mt-3'>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell style={{ fontWeight: 'bold' }}>S.no</TableCell>
//               <TableCell style={{ fontWeight: 'bold' }}>Employee Name</TableCell>
//               <TableCell style={{ fontWeight: 'bold' }}>Entry Time</TableCell>
//               <TableCell style={{ fontWeight: 'bold' }}>Exit Time</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredAttendanceData.map((attendance, index) => (
//               <TableRow key={attendance.attendance_id}>
//                 <TableCell>{index + 1}</TableCell>
//                 <TableCell>{employeeData[attendance.emp_id] || 'Unknown'}</TableCell>
//                 <TableCell>{attendance.entry_at ? new Date(attendance.entry_at).toLocaleString() : 'N/A'}</TableCell>
//                 <TableCell>{attendance.exit_at ? new Date(attendance.exit_at).toLocaleString() : 'N/A'}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </>
//   );
// }

// export default EmployeeAttendance;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//   Card,
//   CardContent,
//   Grid,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Typography,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Button,
//   TextField
// } from '@mui/material';
// import config from "../../../config";

// function EmployeeAttendance() {
//   const [attendanceData, setAttendanceData] = useState([]);
//   const [employeeData, setEmployeeData] = useState({});
//   const [totalAttendance, setTotalAttendance] = useState(0);
//   const [todayAttendance, setTodayAttendance] = useState(0);
//   const [selectedMonth, setSelectedMonth] = useState('');
//   const [selectedEmployee, setSelectedEmployee] = useState('');
//   const [filteredAttendanceData, setFilteredAttendanceData] = useState([]);
//   const [fromDate, setFromDate] = useState('');
//   const [toDate, setToDate] = useState('');

//   // Array of month names
//   const months = [
//     'January', 'February', 'March', 'April', 'May', 'June',
//     'July', 'August', 'September', 'October', 'November', 'December'
//   ];

//   useEffect(() => {
//     // Fetch today's attendance
//     axios.get(`${config.apiUrl}/employee/todayAttendance`)
//       .then((res) => setTodayAttendance(res.data.today))
//       .catch((err) => console.error('Error fetching today\'s attendance:', err));

//     // Fetch all attendance records
//     axios.get(`${config.apiUrl}/employee/allAttendance`)
//       .then((res) => setAttendanceData(res.data))
//       .catch((err) => console.error('Error fetching all attendance:', err));

//     // Fetch all employees
//     axios.get(`${config.apiUrl}/employee/allEmployees`)
//       .then((res) => {
//         const employeeMap = {};
//         res.data.forEach(emp => {
//           employeeMap[emp.emp_id] = emp.emp_name;
//         });
//         setEmployeeData(employeeMap);
//       })
//       .catch((err) => console.error('Error fetching employee data:', err));
//   }, []);

//   const handleMonthChange = (event) => {
//     setSelectedMonth(event.target.value);
//   };

//   const handleEmployeeChange = (event) => {
//     setSelectedEmployee(event.target.value);
//   };

//   const handleFromDateChange = (event) => {
//     setFromDate(event.target.value);
//   };

//   const handleToDateChange = (event) => {
//     setToDate(event.target.value);
//   };

//   const handleFilter = () => {
//     axios.get(`${config.apiUrl}/employee/filterAttendance`, {
//       params: {
//         month: selectedMonth,
//         empId: selectedEmployee,
//         fromDate,
//         toDate
//       }
//     })
//     .then((res) => setFilteredAttendanceData(res.data))
//     .catch((err) => console.error('Error fetching filtered attendance:', err));
//   };

//   const calculateTotalHours = (entryTime, exitTime) => {
//     if (!entryTime || !exitTime) return 0;
//     const entry = new Date(entryTime);
//     const exit = new Date(exitTime);
//     const diff = (exit - entry) / 1000 / 3600; // difference in hours
//     return diff; // return hours
//   };

//   const totalWorkingHours = filteredAttendanceData.reduce((total, attendance) => {
//     return total + calculateTotalHours(attendance.entry_at, attendance.exit_at);
//   }, 0).toFixed(2);

//   return (
//     <>
//       <h1 className='text-center'>Employee Attendance Details</h1>
//       <Grid container spacing={2} className='mt-3'>
//         <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
//         </Grid>
//         <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
//           <Card>
//             <CardContent>
//               <Typography variant="h4">Today's Present Attendance</Typography>
//               <Typography variant="h2">{todayAttendance}</Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>

//       <Grid container spacing={2} className='mt-3'>
//         <Grid item xs={3}>
//           <FormControl fullWidth>
//             <InputLabel>Month</InputLabel>
//             <Select
//               value={selectedMonth}
//               onChange={handleMonthChange}
//               label="Month"
//             >
//               {months.map((month, index) => (
//                 <MenuItem key={index} value={index + 1}>{month}</MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </Grid>
//         <Grid item xs={3}>
//           <FormControl fullWidth>
//             <InputLabel>Employee</InputLabel>
//             <Select
//               value={selectedEmployee}
//               onChange={handleEmployeeChange}
//               label="Employee"
//             >
//               {Object.entries(employeeData).map(([id, name]) => (
//                 <MenuItem key={id} value={id}>{name}</MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </Grid>
//         <Grid item xs={3}>
//           <TextField
//             label="From Date"
//             type="date"
//             InputLabelProps={{ shrink: true }}
//             fullWidth
//             onChange={handleFromDateChange}
//             value={fromDate}
//           />
//         </Grid>
//         <Grid item xs={3}>
//           <TextField
//             label="To Date"
//             type="date"
//             InputLabelProps={{ shrink: true }}
//             fullWidth
//             onChange={handleToDateChange}
//             value={toDate}
//           />
//         </Grid>
//         <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
//           <Button variant="contained" color="primary" onClick={handleFilter}>
//             Get Data
//           </Button>
//         </Grid>
//       </Grid>

//       <TableContainer component={Paper} className='mt-3'>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell style={{ fontWeight: 'bold' }}>S.no</TableCell>
//               <TableCell style={{ fontWeight: 'bold' }}>Employee Name</TableCell>
//               <TableCell style={{ fontWeight: 'bold' }}>Status</TableCell>
//               <TableCell style={{ fontWeight: 'bold' }}>Exit Time</TableCell>
//               <TableCell style={{ fontWeight: 'bold' }}>Working Hours</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredAttendanceData.map((attendance, index) => (
//               <TableRow key={attendance.attendance_id}>
//                 <TableCell>{index + 1}</TableCell>
//                 <TableCell>{employeeData[attendance.emp_id] || 'Unknown'}</TableCell>
//                 <TableCell>Present: {attendance.entry_at ? new Date(attendance.entry_at).toLocaleString() : 'N/A'}</TableCell>
//                 <TableCell>{attendance.exit_at ? new Date(attendance.exit_at).toLocaleString() : 'N/A'}</TableCell>
//                 <TableCell>{calculateTotalHours(attendance.entry_at, attendance.exit_at).toFixed(2)} hours</TableCell>
//               </TableRow>
//             ))}
//             <TableRow>
//               <TableCell colSpan={4} style={{ fontWeight: 'bold', textAlign: 'right' }}>Total Working Hours:</TableCell>
//               <TableCell style={{ fontWeight: 'bold' }}>{totalWorkingHours} hours</TableCell>
//             </TableRow>
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </>
//   );
// }

// export default EmployeeAttendance;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//   Grid,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Button,
//   TextField,
//   Typography
// } from '@mui/material';
// import Calendar from './Calendar';
// import config from "../../../config";

// function EmployeeAttendance() {
//   const [attendanceData, setAttendanceData] = useState([]);
//   const [employeeData, setEmployeeData] = useState({});
//   const [todayAttendance, setTodayAttendance] = useState(0);
//   const [selectedMonth, setSelectedMonth] = useState('');
//   const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
//   const [selectedEmployee, setSelectedEmployee] = useState('');
//   const [filteredAttendanceData, setFilteredAttendanceData] = useState([]);
//   const [fromDate, setFromDate] = useState('');
//   const [toDate, setToDate] = useState('');

//   const months = [
//     'January', 'February', 'March', 'April', 'May', 'June',
//     'July', 'August', 'September', 'October', 'November', 'December'
//   ];

//   useEffect(() => {
//     axios.get(`${config.apiUrl}/employee/todayAttendance`)
//       .then((res) => setTodayAttendance(res.data.today))
//       .catch((err) => console.error('Error fetching today\'s attendance:', err));

//     axios.get(`${config.apiUrl}/employee/allAttendance`)
//       .then((res) => setAttendanceData(res.data))
//       .catch((err) => console.error('Error fetching all attendance:', err));

//     axios.get(`${config.apiUrl}/employee/allEmployees`)
//       .then((res) => {
//         const employeeMap = {};
//         res.data.forEach(emp => {
//           employeeMap[emp.emp_id] = emp.emp_name;
//         });
//         setEmployeeData(employeeMap);
//       })
//       .catch((err) => console.error('Error fetching employee data:', err));
//   }, []);

//   const handleMonthChange = (event) => {
//     setSelectedMonth(event.target.value);
//   };

//   const handleYearChange = (event) => {
//     setSelectedYear(event.target.value);
//   };

//   const handleEmployeeChange = (event) => {
//     setSelectedEmployee(event.target.value);
//   };

//   const handleFromDateChange = (event) => {
//     setFromDate(event.target.value);
//   };

//   const handleToDateChange = (event) => {
//     setToDate(event.target.value);
//   };

//   const handleFilter = () => {
//     axios.get(`${config.apiUrl}/employee/filterAttendance`, {
//       params: {
//         month: selectedMonth,
//         year: selectedYear,
//         empId: selectedEmployee,
//         fromDate,
//         toDate
//       }
//     })
//     .then((res) => setFilteredAttendanceData(res.data))
//     .catch((err) => console.error('Error fetching filtered attendance:', err));
//   };

//   return (
//     <>
//       <h1 className='text-center'>Employee Attendance Details</h1>
//       <Grid container spacing={2} className='mt-3'>
//         <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
//         </Grid>
//         <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
//           <Typography variant="h4">Today's Present Attendance</Typography>
//           <Typography variant="h2">{todayAttendance}</Typography>
//         </Grid>
//       </Grid>

//       <Grid container spacing={2} className='mt-3'>
//         <Grid item xs={2}>
//           <FormControl fullWidth>
//             <InputLabel>Month</InputLabel>
//             <Select
//               value={selectedMonth}
//               onChange={handleMonthChange}
//               label="Month"
//             >
//               {months.map((month, index) => (
//                 <MenuItem key={index} value={index + 1}>{month}</MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </Grid>
//         <Grid item xs={2}>
//           <TextField
//             label="Year"
//             type="number"
//             InputLabelProps={{ shrink: true }}
//             fullWidth
//             onChange={handleYearChange}
//             value={selectedYear}
//           />
//         </Grid>
//         <Grid item xs={3}>
//           <FormControl fullWidth>
//             <InputLabel>Employee</InputLabel>
//             <Select
//               value={selectedEmployee}
//               onChange={handleEmployeeChange}
//               label="Employee"
//             >
//               {Object.entries(employeeData).map(([id, name]) => (
//                 <MenuItem key={id} value={id}>{name}</MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </Grid>
//         <Grid item xs={2}>
//           <TextField
//             label="From Date"
//             type="date"
//             InputLabelProps={{ shrink: true }}
//             fullWidth
//             onChange={handleFromDateChange}
//             value={fromDate}
//           />
//         </Grid>
//         <Grid item xs={2}>
//           <TextField
//             label="To Date"
//             type="date"
//             InputLabelProps={{ shrink: true }}
//             fullWidth
//             onChange={handleToDateChange}
//             value={toDate}
//           />
//         </Grid>
//         <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
//           <Button variant="contained" color="primary" onClick={handleFilter}>
//             Get Data
//           </Button>
//         </Grid>
//       </Grid>

//       <Calendar
//         attendanceData={filteredAttendanceData}
//         selectedMonth={selectedMonth}
//         selectedYear={selectedYear}
//       />
//     </>
//   );
// }

// export default EmployeeAttendance;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//   Grid,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Button,
//   Typography,
//   TextField
// } from '@mui/material';
// import Calendar from './Calendar';
// import config from "../../../config";

// function EmployeeAttendance() {
//   const [attendanceData, setAttendanceData] = useState([]);
//   const [employeeData, setEmployeeData] = useState({});
//   const [todayAttendance, setTodayAttendance] = useState(0);
//   const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
//   const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
//   const [selectedEmployee, setSelectedEmployee] = useState('');
//   const [filteredAttendanceData, setFilteredAttendanceData] = useState([]);

//   const months = [
//     'January', 'February', 'March', 'April', 'May', 'June',
//     'July', 'August', 'September', 'October', 'November', 'December'
//   ];

//   useEffect(() => {
//     axios.get(`${config.apiUrl}/employee/todayAttendance`)
//       .then((res) => setTodayAttendance(res.data.today))
//       .catch((err) => console.error('Error fetching today\'s attendance:', err));

//     axios.get(`${config.apiUrl}/employee/allAttendance`)
//       .then((res) => setAttendanceData(res.data))
//       .catch((err) => console.error('Error fetching all attendance:', err));

//     axios.get(`${config.apiUrl}/employee/allEmployees`)
//       .then((res) => {
//         const employeeMap = {};
//         res.data.forEach(emp => {
//           employeeMap[emp.emp_id] = emp.emp_name;
//         });
//         setEmployeeData(employeeMap);
//       })
//       .catch((err) => console.error('Error fetching employee data:', err));
//   }, []);

//   const handleMonthChange = (event) => {
//     setSelectedMonth(event.target.value);
//   };

//   const handleYearChange = (event) => {
//     setSelectedYear(event.target.value);
//   };

//   const handleEmployeeChange = (event) => {
//     setSelectedEmployee(event.target.value);
//   };

//   const handleFilter = () => {
//     axios.get(`${config.apiUrl}/employee/filterAttendance`, {
//       params: {
//         month: selectedMonth,
//         year: selectedYear,
//         empId: selectedEmployee
//       }
//     })
//     .then((res) => setFilteredAttendanceData(res.data))
//     .catch((err) => console.error('Error fetching filtered attendance:', err));
//   };

//   return (
//     <>
//       <h1 className='text-center'>Employee Attendance Details</h1>
//       <Grid container spacing={2} className='mt-3'>
//         <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
//         </Grid>
//         <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
//           <Typography variant="h4">Today's Present Attendance</Typography>
//           <Typography variant="h2">{todayAttendance}</Typography>
//         </Grid>
//       </Grid>

//       <Grid container spacing={2} className='mt-3'>
//         <Grid item xs={3}>
//           <FormControl fullWidth>
//             <InputLabel>Month</InputLabel>
//             <Select
//               value={selectedMonth}
//               onChange={handleMonthChange}
//               label="Month"
//             >
//               {months.map((month, index) => (
//                 <MenuItem key={index} value={index + 1}>{month}</MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </Grid>
//         <Grid item xs={3}>
//           <TextField
//             label="Year"
//             type="number"
//             InputLabelProps={{ shrink: true }}
//             fullWidth
//             onChange={handleYearChange}
//             value={selectedYear}
//           />
//         </Grid>
//         <Grid item xs={3}>
//           <FormControl fullWidth>
//             <InputLabel>Employee</InputLabel>
//             <Select
//               value={selectedEmployee}
//               onChange={handleEmployeeChange}
//               label="Employee"
//             >
//               {Object.entries(employeeData).map(([id, name]) => (
//                 <MenuItem key={id} value={id}>{name}</MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </Grid>
//         <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
//           <Button variant="contained" color="primary" onClick={handleFilter}>
//             Get Data
//           </Button>
//         </Grid>
//       </Grid>

//       <Calendar
//         attendanceData={filteredAttendanceData}
//         selectedMonth={selectedMonth}
//         selectedYear={selectedYear}
//         employeeData={employeeData}
//         selectedEmployee={selectedEmployee}
//       />
//     </>
//   );
// }

// export default EmployeeAttendance;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//   Grid,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Button,
//   Typography,
//   TextField
// } from '@mui/material';
// import Calendar from './Calendar';
// import config from "../../../config";

// function EmployeeAttendance() {
//   const [attendanceData, setAttendanceData] = useState([]);
//   const [employeeData, setEmployeeData] = useState({});
//   const [todayAttendance, setTodayAttendance] = useState(0);
//   const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
//   const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
//   const [selectedEmployee, setSelectedEmployee] = useState('');
//   const [filteredAttendanceData, setFilteredAttendanceData] = useState([]);
//   const [showCalendar, setShowCalendar] = useState(false);

//   const months = [
//     'January', 'February', 'March', 'April', 'May', 'June',
//     'July', 'August', 'September', 'October', 'November', 'December'
//   ];

//   useEffect(() => {
//     axios.get(`${config.apiUrl}/employee/todayAttendance`)
//       .then((res) => setTodayAttendance(res.data.today))
//       .catch((err) => console.error('Error fetching today\'s attendance:', err));

//     axios.get(`${config.apiUrl}/employee/allAttendance`)
//       .then((res) => setAttendanceData(res.data))
//       .catch((err) => console.error('Error fetching all attendance:', err));

//     axios.get(`${config.apiUrl}/employee/allEmployees`)
//       .then((res) => {
//         const employeeMap = {};
//         res.data.forEach(emp => {
//           employeeMap[emp.emp_id] = emp.emp_name;
//         });
//         setEmployeeData(employeeMap);
//       })
//       .catch((err) => console.error('Error fetching employee data:', err));
//   }, []);

//   const handleMonthChange = (event) => {
//     setSelectedMonth(event.target.value);
//   };

//   const handleYearChange = (event) => {
//     setSelectedYear(event.target.value);
//   };

//   const handleEmployeeChange = (event) => {
//     setSelectedEmployee(event.target.value);
//   };

//   const handleFilter = () => {
//     axios.get(`${config.apiUrl}/employee/filterAttendance`, {
//       params: {
//         month: selectedMonth,
//         year: selectedYear,
//         empId: selectedEmployee
//       }
//     })
//     .then((res) => {
//       setFilteredAttendanceData(res.data);
//       setShowCalendar(true);  // Show the calendar after data is fetched
//     })
//     .catch((err) => console.error('Error fetching filtered attendance:', err));
//   };

//   return (
//     <>
//       <h1 className='text-center'>Employee Attendance Details</h1>
//       <Grid container spacing={2} className='mt-3'>
//         <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
//         </Grid>
//         <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
//           <Typography variant="h4">Today's Present Attendance</Typography>
//           <Typography variant="h2">{todayAttendance}</Typography>
//         </Grid>
//       </Grid>

//       <Grid container spacing={2} className='mt-3'>
//         <Grid item xs={3}>
//           <FormControl fullWidth>
//             <InputLabel>Month</InputLabel>
//             <Select
//               value={selectedMonth}
//               onChange={handleMonthChange}
//               label="Month"
//             >
//               {months.map((month, index) => (
//                 <MenuItem key={index} value={index + 1}>{month}</MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </Grid>
//         <Grid item xs={3}>
//           <TextField
//             label="Year"
//             type="number"
//             InputLabelProps={{ shrink: true }}
//             fullWidth
//             onChange={handleYearChange}
//             value={selectedYear}
//           />
//         </Grid>
//         <Grid item xs={3}>
//           <FormControl fullWidth>
//             <InputLabel>Employee</InputLabel>
//             <Select
//               value={selectedEmployee}
//               onChange={handleEmployeeChange}
//               label="Employee"
//             >
//               {Object.entries(employeeData).map(([id, name]) => (
//                 <MenuItem key={id} value={id}>{name}</MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </Grid>
//         <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
//           <Button variant="contained" color="primary" onClick={handleFilter}>
//             Get Data
//           </Button>
//         </Grid>
//       </Grid>

//       {showCalendar && (
//         <Calendar
//           attendanceData={filteredAttendanceData}
//           selectedMonth={selectedMonth}
//           selectedYear={selectedYear}
//           employeeData={employeeData}
//           selectedEmployee={selectedEmployee}
//         />
//       )}
//     </>
//   );
// }

// export default EmployeeAttendance;





// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//   Grid,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Button,
//   Typography,
//   TextField
// } from '@mui/material';
// import Calendar from './Calendar';
// import config from "../../../config";

// function EmployeeAttendance() {
//   const [attendanceData, setAttendanceData] = useState([]);
//   const [employeeData, setEmployeeData] = useState({});
//   const [todayAttendance, setTodayAttendance] = useState(0);
//   const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
//   const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
//   const [selectedEmployee, setSelectedEmployee] = useState('');
//   const [filteredAttendanceData, setFilteredAttendanceData] = useState([]);
//   const [showCalendar, setShowCalendar] = useState(false);

//   const months = [
//     'January', 'February', 'March', 'April', 'May', 'June',
//     'July', 'August', 'September', 'October', 'November', 'December'
//   ];

//   useEffect(() => {
//     axios.get(`${config.apiUrl}/employee/todayAttendance`)
//       .then((res) => setTodayAttendance(res.data.today))
//       .catch((err) => console.error('Error fetching today\'s attendance:', err));

//     axios.get(`${config.apiUrl}/employee/allEmployees`)
//       .then((res) => {
//         const employeeMap = {};
//         res.data.forEach(emp => {
//           employeeMap[emp.emp_id] = emp.emp_name;
//         });
//         setEmployeeData(employeeMap);
//       })
//       .catch((err) => console.error('Error fetching employee data:', err));
//   }, []);

//   const handleMonthChange = (event) => {
//     setSelectedMonth(event.target.value);
//   };

//   const handleYearChange = (event) => {
//     setSelectedYear(event.target.value);
//   };

//   const handleEmployeeChange = (event) => {
//     setSelectedEmployee(event.target.value);
//   };

//   const handleFilter = () => {
//     axios.get(`${config.apiUrl}/employee/monthlyAttendance`, {
//       params: {
//         month: selectedMonth,
//         year: selectedYear,
//         empId: selectedEmployee
//       }
//     })
//     .then((res) => {
//       setFilteredAttendanceData(res.data);
//       console.log('Filtered Attendance Data:', res.data);
//       setShowCalendar(true);  // Show the calendar after data is fetched
//     })
//     .catch((err) => console.error('Error fetching filtered attendance:', err));
//   };

//   return (
//     <>
//       <h1 className='text-center'>Employee Attendance Details</h1>
//       <Grid container spacing={2} className='mt-3'>
//         <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
//         </Grid>
//         <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
//           <Typography variant="h4">Today's Present Attendance</Typography>
//           <Typography variant="h2">{todayAttendance}</Typography>
//         </Grid>
//       </Grid>

//       <Grid container spacing={2} className='mt-3'>
//         <Grid item xs={3}>
//           <FormControl fullWidth>
//             <InputLabel>Month</InputLabel>
//             <Select
//               value={selectedMonth}
//               onChange={handleMonthChange}
//               label="Month"
//             >
//               {months.map((month, index) => (
//                 <MenuItem key={index} value={index + 1}>{month}</MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </Grid>
//         <Grid item xs={3}>
//           <TextField
//             label="Year"
//             type="number"
//             InputLabelProps={{ shrink: true }}
//             fullWidth
//             onChange={handleYearChange}
//             value={selectedYear}
//           />
//         </Grid>
//         <Grid item xs={3}>
//           <FormControl fullWidth>
//             <InputLabel>Employee</InputLabel>
//             <Select
//               value={selectedEmployee}
//               onChange={handleEmployeeChange}
//               label="Employee"
//             >
//               {Object.entries(employeeData).map(([id, name]) => (
//                 <MenuItem key={id} value={id}>{name}</MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </Grid>
//         <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
//           <Button variant="contained" color="primary" onClick={handleFilter}>
//             Get Data
//           </Button>
//         </Grid>
//       </Grid>

//       {showCalendar && (
//         <Calendar
//           attendanceData={filteredAttendanceData}
//           selectedMonth={selectedMonth}
//           selectedYear={selectedYear}
//           selectedEmployee={selectedEmployee}
//         />
//       )}
//     </>
//   );
// }

// export default EmployeeAttendance;



// ======================================================================================

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//   Card,
//   CardContent,
//   Grid,
//   Typography,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Button,
//   TextField
// } from '@mui/material';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import config from "../../../config";

// const localizer = momentLocalizer(moment);

// function EmployeeAttendance() {
//   const [attendanceData, setAttendanceData] = useState([]);
//   const [employeeData, setEmployeeData] = useState({});
//   const [totalAttendance, setTotalAttendance] = useState(0);
//   const [todayAttendance, setTodayAttendance] = useState(0);
//   const [selectedMonth, setSelectedMonth] = useState('');
//   const [selectedEmployee, setSelectedEmployee] = useState('');
//   const [filteredAttendanceData, setFilteredAttendanceData] = useState([]);
//   const [fromDate, setFromDate] = useState('');
//   const [toDate, setToDate] = useState('');

//   const months = [
//     'January', 'February', 'March', 'April', 'May', 'June',
//     'July', 'August', 'September', 'October', 'November', 'December'
//   ];

//   useEffect(() => {
//     axios.get(`${config.apiUrl}/employee/todayAttendance`)
//       .then((res) => setTodayAttendance(res.data.today))
//       .catch((err) => console.error('Error fetching today\'s attendance:', err));

//     axios.get(`${config.apiUrl}/employee/allAttendance`)
//       .then((res) => setAttendanceData(res.data))
//       .catch((err) => console.error('Error fetching all attendance:', err));

//     axios.get(`${config.apiUrl}/employee/allEmployees`)
//       .then((res) => {
//         const employeeMap = {};
//         res.data.forEach(emp => {
//           employeeMap[emp.emp_id] = emp.emp_name;
//         });
//         setEmployeeData(employeeMap);
//       })
//       .catch((err) => console.error('Error fetching employee data:', err));
//   }, []);

//   const handleMonthChange = (event) => {
//     setSelectedMonth(event.target.value);
//   };

//   const handleEmployeeChange = (event) => {
//     setSelectedEmployee(event.target.value);
//   };

//   const handleFromDateChange = (event) => {
//     setFromDate(event.target.value);
//   };

//   const handleToDateChange = (event) => {
//     setToDate(event.target.value);
//   };

//   const handleFilter = () => {
//     axios.get(`${config.apiUrl}/employee/filterAttendance`, {
//       params: {
//         month: selectedMonth,
//         empId: selectedEmployee,
//         fromDate,
//         toDate
//       }
//     })
//     .then((res) => setFilteredAttendanceData(res.data))
//     .catch((err) => console.error('Error fetching filtered attendance:', err));
//   };

//   const events = filteredAttendanceData.map(attendance => ({
//     id: attendance.attendance_id,
//     title: employeeData[attendance.emp_id] || 'Unknown',
//     start: new Date(attendance.entry_at),
//     end: new Date(attendance.exit_at),
//   }));

//   return (
//     <>
//       <h1 className='text-center'>Employee Attendance Details</h1>
//       <Grid container spacing={2} className='mt-3'>
//         <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
//         </Grid>
//         <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
//           <Card>
//             <CardContent>
//               <Typography variant="h4">Today's Present Attendance</Typography>
//               <Typography variant="h2">{todayAttendance}</Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>

//       <Grid container spacing={2} className='mt-3'>
//         <Grid item xs={3}>
//           <FormControl fullWidth>
//             <InputLabel>Month</InputLabel>
//             <Select
//               value={selectedMonth}
//               onChange={handleMonthChange}
//               label="Month"
//             >
//               {months.map((month, index) => (
//                 <MenuItem key={index} value={index + 1}>{month}</MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </Grid>
//         <Grid item xs={3}>
//           <FormControl fullWidth>
//             <InputLabel>Employee</InputLabel>
//             <Select
//               value={selectedEmployee}
//               onChange={handleEmployeeChange}
//               label="Employee"
//             >
//               {Object.entries(employeeData).map(([id, name]) => (
//                 <MenuItem key={id} value={id}>{name}</MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </Grid>
//         <Grid item xs={3}>
//           <TextField
//             label="From Date"
//             type="date"
//             InputLabelProps={{ shrink: true }}
//             fullWidth
//             onChange={handleFromDateChange}
//             value={fromDate}
//           />
//         </Grid>
//         <Grid item xs={3}>
//           <TextField
//             label="To Date"
//             type="date"
//             InputLabelProps={{ shrink: true }}
//             fullWidth
//             onChange={handleToDateChange}
//             value={toDate}
//           />
//         </Grid>
//         <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
//           <Button variant="contained" color="primary" onClick={handleFilter}>
//             Get Data
//           </Button>
//         </Grid>
//       </Grid>

//       <div className="mt-3">
//         <Calendar
//           localizer={localizer}
//           events={events}
//           startAccessor="start"
//           endAccessor="end"
//           style={{ height: 500 }}
//         />
//       </div>
//     </>
//   );
// }

// export default EmployeeAttendance;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//   Card,
//   CardContent,
//   Grid,
//   Typography,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Button
// } from '@mui/material';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import config from "../../../config";

// const localizer = momentLocalizer(moment);

// function EmployeeAttendance() {
//   const [attendanceData, setAttendanceData] = useState([]);
//   const [employeeData, setEmployeeData] = useState({});
//   const [totalAttendance, setTotalAttendance] = useState(0);
//   const [todayAttendance, setTodayAttendance] = useState(0);
//   const [selectedMonth, setSelectedMonth] = useState('');
//   const [selectedEmployee, setSelectedEmployee] = useState('');
//   const [filteredAttendanceData, setFilteredAttendanceData] = useState([]);
//   const [calendarDate, setCalendarDate] = useState(new Date());

//   const months = [
//     'January', 'February', 'March', 'April', 'May', 'June',
//     'July', 'August', 'September', 'October', 'November', 'December'
//   ];

//   useEffect(() => {
//     axios.get(`${config.apiUrl}/employee/todayAttendance`)
//       .then((res) => setTodayAttendance(res.data.today))
//       .catch((err) => console.error('Error fetching today\'s attendance:', err));

//     axios.get(`${config.apiUrl}/employee/allAttendance`)
//       .then((res) => setAttendanceData(res.data))
//       .catch((err) => console.error('Error fetching all attendance:', err));

//     axios.get(`${config.apiUrl}/employee/allEmployees`)
//       .then((res) => {
//         const employeeMap = {};
//         res.data.forEach(emp => {
//           employeeMap[emp.emp_id] = emp.emp_name;
//         });
//         setEmployeeData(employeeMap);
//       })
//       .catch((err) => console.error('Error fetching employee data:', err));
//   }, []);

//   const handleMonthChange = (event) => {
//     const month = event.target.value;
//     setSelectedMonth(month);
//     const date = new Date(calendarDate.getFullYear(), month - 1, 1);
//     setCalendarDate(date);
//   };

//   const handleEmployeeChange = (event) => {
//     setSelectedEmployee(event.target.value);
//   };

//   const handleFilter = () => {
//     axios.get(`${config.apiUrl}/employee/filterAttendance`, {
//       params: {
//         month: selectedMonth,
//         empId: selectedEmployee
//       }
//     })
//     .then((res) => setFilteredAttendanceData(res.data))
//     .catch((err) => console.error('Error fetching filtered attendance:', err));
//   };

//   const events = filteredAttendanceData.map(attendance => ({
//     id: attendance.attendance_id,
//     title: employeeData[attendance.emp_id] || 'Unknown',
//     start: new Date(attendance.entry_at),
//     end: new Date(attendance.exit_at),
//   }));

//   return (
//     <>
//       <h1 className='text-center'>Employee Attendance Details</h1>
//       <Grid container spacing={2} className='mt-3'>
//         <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
//         </Grid>
//         <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
//           <Card>
//             <CardContent>
//               <Typography variant="h4">Today's Present Attendance</Typography>
//               <Typography variant="h2">{todayAttendance}</Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>

//       <Grid container spacing={2} className='mt-3'>
//         <Grid item xs={4}>
//           <FormControl fullWidth>
//             <InputLabel>Month</InputLabel>
//             <Select
//               value={selectedMonth}
//               onChange={handleMonthChange}
//               label="Month"
//             >
//               {months.map((month, index) => (
//                 <MenuItem key={index} value={index + 1}>{month}</MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </Grid>
//         <Grid item xs={4}>
//           <FormControl fullWidth>
//             <InputLabel>Employee</InputLabel>
//             <Select
//               value={selectedEmployee}
//               onChange={handleEmployeeChange}
//               label="Employee"
//             >
//               {Object.entries(employeeData).map(([id, name]) => (
//                 <MenuItem key={id} value={id}>{name}</MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </Grid>
//         <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
//           <Button variant="contained" color="primary" onClick={handleFilter}>
//             Get Data
//           </Button>
//         </Grid>
//       </Grid>

//       <div className="mt-3">
//         <Calendar
//           localizer={localizer}
//           events={events}
//           startAccessor="start"
//           endAccessor="end"
//           date={calendarDate}
//           onNavigate={date => setCalendarDate(date)}
//           style={{ height: 500 }}
//         />
//       </div>
//     </>
//   );
// }

// export default EmployeeAttendance;


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
  Button
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
  const [totalAttendance, setTotalAttendance] = useState(0);
  const [todayAttendance, setTodayAttendance] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [filteredAttendanceData, setFilteredAttendanceData] = useState([]);
  const [calendarDate, setCalendarDate] = useState(new Date());

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

  const events = filteredAttendanceData.map(attendance => ({
    id: attendance.attendance_id,
    title: employeeData[attendance.emp_id] || 'Unknown',
    start: new Date(attendance.entry_at),
    end: new Date(attendance.exit_at),
  }));

  return (
    <div className="container">
      <h1 className="heading">Employee Attendance Details</h1>
      <Grid container spacing={2}>
        <Grid item xs={6} className="card-container">
        </Grid>
        <Grid item xs={6} className="card-container">
          <Card>
            <CardContent>
              <Typography variant="h4">Today's Present Attendance</Typography>
              <Typography variant="h2">{todayAttendance}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={2} className="filter-container">
        <Grid item xs={6}>
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
        <Grid item xs={6}>
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
        <Grid item xs={12} className="card-container">
          <Button variant="contained" color="primary" onClick={handleFilter}>
            Get Data
          </Button>
        </Grid>
      </Grid>

      <div className="calendar-container">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          date={calendarDate}
          onNavigate={date => setCalendarDate(date)}
          style={{ height: 500 }}
          eventPropGetter={(event) => ({
            className: 'calendar-event'
          })}
        />
      </div>
    </div>
  );
}

export default EmployeeAttendance;
