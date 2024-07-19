import React from 'react';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import logo from '../../../images/logo (1).png';
import moment from 'moment';
import '../Purchase/printStyles.css';

// Function to calculate GST and total amount
const calculateGST = (price, gstRate) => {
  return (price * gstRate) / 100;
};

const PrintLayout = ({ data, dueDate }) => {
  const gstRate = 18; // GST rate in percentage
  const price = parseFloat(data.price) || 0;
  const gstAmount = calculateGST(price, gstRate);
  const total = price + gstAmount;

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
      <Typography variant="h4" align="center" style={{ marginBottom: '20px' }}>Customer Purchase Invoice</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} display='flex' justifyContent='end'>
          <img src={logo} alt="Company Logo" width='100' height='100' />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" style={{ fontWeight: 'bold' }}>From</Typography>
          <Typography>{data.purch_address ? data.purch_address : 'Krishna Industries'}</Typography>
          <Typography>{data.purch_address ? '' : 'Peelamedu, Singanallur'}</Typography>
          <Typography>{data.purch_address ? '' : 'Coimbatore, 627757'}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" style={{ fontWeight: 'bold' }}>To</Typography>
          <Typography>{data.cust_name}</Typography>
          <Typography>{data.cust_mobile}</Typography>
          <Typography>{data.cust_email}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" style={{ display: 'inline-block', marginRight: '20px' }}>
            <span style={{ fontWeight: 'bold' }}>Invoice Date &nbsp; &nbsp;: </span> {moment().format('YYYY-MM-DD')}
          </Typography>
          <Typography variant="h6" style={{ display: 'inline-block', marginTop: '2px' }}>
            <span style={{ fontWeight: 'bold' }}>Due Date &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; :</span> {moment(dueDate).format('YYYY-MM-DD')}
          </Typography>
        </Grid>
      </Grid>
      <TableContainer style={{ marginTop: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ border: '1px solid #ddd', fontWeight: 'bold' }}>S.No</TableCell>
              <TableCell style={{ border: '1px solid #ddd', fontWeight: 'bold' }}>Product Name</TableCell>
              <TableCell style={{ border: '1px solid #ddd', fontWeight: 'bold' }}>Description</TableCell>
              <TableCell style={{ border: '1px solid #ddd', fontWeight: 'bold' }}>Quantity</TableCell>
              <TableCell style={{ border: '1px solid #ddd', fontWeight: 'bold' }}>Price</TableCell>
              <TableCell style={{ border: '1px solid #ddd', fontWeight: 'bold' }}>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell style={{ border: '1px solid #ddd' }}>01</TableCell>
              <TableCell style={{ border: '1px solid #ddd' }}>{data.pro_name}</TableCell>
              <TableCell style={{ border: '1px solid #ddd' }}>{data.specification}</TableCell>
              <TableCell style={{ border: '1px solid #ddd' }}>{data.quantity}</TableCell>
              <TableCell style={{ border: '1px solid #ddd' }}>{price.toFixed(2)}</TableCell>
              <TableCell style={{ border: '1px solid #ddd' }}>{total.toFixed(2)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ marginTop: '20px', borderTop: '1px solid #ddd', textAlign: 'right' }}>
        <Typography className='mt-2' variant="h6" >
          <span style={{ fontWeight: 'bold' }}>Price</span> : {price.toFixed(2)}
        </Typography>
        <Typography className='mt-2' variant="h6" >
          <span style={{ fontWeight: 'bold' }}>GST 18%</span> : {gstAmount.toFixed(2)}
        </Typography>
        <Typography className='mt-2' variant="h6" >
          <span style={{ fontWeight: 'bold' }}>Total</span> : {total.toFixed(2)}
        </Typography>
      </div>
    </div>
  );
};

export default PrintLayout;