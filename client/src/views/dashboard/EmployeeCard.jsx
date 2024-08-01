import { Grid } from '@mui/material';
import axios from 'axios';
import config from '../../config';
import React, { useEffect, useState } from 'react';
import { FaUsersViewfinder } from "react-icons/fa6";
import './EmpCard.css';

const EmployeeCard = ({ isLoading }) => {
  const [empTotal, setEmpTotal] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(isLoading);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await axios.get(`${config.apiUrl}/employee`);
        setEmpTotal(res.data);
      } catch (err) {
        console.log("Employee Total is not fetched.");
        setEmpTotal([]); // Set default value to avoid breaking the UI
      }
    };

    const fetchAttendance = async () => {
      try {
        const response = await axios.get(`${config.apiUrl}/emp_attend/todayAttendance`);
        const attendanceData = response.data.attendance || []; // Ensure attendance is an array
        setAttendance(attendanceData);
        setTotalCount(attendanceData.length);
      } catch (error) {
        console.error('Error fetching data:', error);
        setAttendance([]); // Set default value to avoid breaking the UI
        setTotalCount(0);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
    fetchAttendance();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <div>
        <div className="emp-card">
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={8}>
              <h3 className="emp-card-heading text-white">Employees</h3>
            </Grid>
            <Grid item xs={4} className="icon-container">
              <FaUsersViewfinder className="emp-icon" />
            </Grid>
          </Grid>
          <h3 className="emp-value">{empTotal.length}</h3>
        </div>
        <div className='att'>
          <h2>Today's Attendance</h2>
          <p>Total Attendance Count: {totalCount}</p>
        </div>
      </div>
    </>
  );
}

export default EmployeeCard;
