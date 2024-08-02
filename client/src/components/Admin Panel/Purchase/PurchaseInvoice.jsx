// import { Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
// import React, { useState } from 'react';
// import logo from '../../../images/logo (1).png';
// import moment from 'moment';
// import './printStyles.css';


// // PrintLayout component for the print-specific layout
// const PrintLayout = ({ data, dueDate }) => (
//   <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
//     <Typography variant="h4" align="center" style={{ marginBottom: '20px' }}>Invoice</Typography>
//     <Grid container spacing={3}>
//       <Grid item xs={12} display='flex' justifyContent='end'>
//         <img src={logo} alt="Company Logo" width='100' height='100' />
//       </Grid>
//       <Grid item xs={4}>
//         <Typography variant="h6" style={{ fontWeight: 'bold' }}>From</Typography>
//         <Typography>{data.purch_address}</Typography>
//       </Grid>
//       <Grid item xs={4}>
//         <Typography variant="h6" style={{ fontWeight: 'bold' }}>To</Typography>
//         <Typography>Krishna Industries</Typography>
//         <Typography>Peelamedu, Singanallur</Typography>
//         <Typography>Coimbatore, 627757</Typography>
//       </Grid>
//       <Grid item xs={4}>
//         <Typography variant="h6" style={{ display: 'inline-block', marginRight: '20px' }}>
//           <span style={{ fontWeight: 'bold' }}>Invoice Date &nbsp; &nbsp;: </span> {moment().format('YYYY-MM-DD')}
//         </Typography>
//         <Typography variant="h6" style={{ display: 'inline-block', marginTop: '2px' }}>
//           <span style={{ fontWeight: 'bold' }}>Due Date &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; :</span> {moment(dueDate).format('YYYY-MM-DD')}
//         </Typography>
//       </Grid>
//     </Grid>
//     <TableContainer style={{ marginTop: '20px' }}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell style={{ border: '1px solid #ddd',fontWeight:'bold' }}>S.No</TableCell>
//             <TableCell style={{  border: '1px solid #ddd',fontWeight:'bold' }}>Product Name</TableCell>
//             <TableCell style={{  border: '1px solid #ddd',fontWeight:'bold' }}>Description</TableCell>
//             <TableCell style={{  border: '1px solid #ddd',fontWeight:'bold' }}>Quantity</TableCell>
//             <TableCell style={{  border: '1px solid #ddd',fontWeight:'bold' }}>Price</TableCell>
//             <TableCell style={{  border: '1px solid #ddd',fontWeight:'bold' }}>Total</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           <TableRow>
//             <TableCell style={{ border: '1px solid #ddd' }}>01</TableCell>
//             <TableCell style={{ border: '1px solid #ddd' }}>{data.pro_name}</TableCell>
//             <TableCell style={{ border: '1px solid #ddd' }}>{data.specification}</TableCell>
//             <TableCell style={{ border: '1px solid #ddd' }}>{data.quantity}</TableCell>
//             <TableCell style={{ border: '1px solid #ddd' }}>{data.price}</TableCell>
//             <TableCell style={{ border: '1px solid #ddd' }}>{data.total}</TableCell>
//           </TableRow>
//         </TableBody>
//       </Table>
//     </TableContainer>
//     <div style={{ marginTop: '20px', borderTop: '1px solid #ddd', textAlign: 'right' }}>
//       <Typography className='mt-2' variant="h6" > <span style={{ fontWeight: 'bold' }}>Price</span> : {data.price}</Typography>
//       <Typography className='mt-2' variant="h6" > <span style={{ fontWeight: 'bold' }}>GST 18%</span> : {data.gst}</Typography>
//       <Typography className='mt-2' variant="h6" > <span style={{ fontWeight: 'bold' }}>Total</span> : {data.total}</Typography>
//     </div>
//   </div>
// );

// // PurchaseInvoice component
// const PurchaseInvoice = ({ data }) => {
//   const [dueDate, setDueDate] = useState(null);

//   const handlePrint = () => {
//     // Hide the print button to avoid it being printed
//     const printButton = document.getElementById('printButton');
//     if (printButton) {
//       printButton.style.display = 'none';
//     }
//     // Trigger printing
//     window.print();
//     // Show the print button again after printing is done
//     if (printButton) {
//       printButton.style.display = 'block';
//     }
//   };

//   return (
//     <>
//       {dueDate ? (
//         <>
//         <PrintLayout data={data} dueDate={dueDate}  />
//         <Button id="printButton" onClick={handlePrint} style={{ display: 'block', margin: '20px auto' }}>Print</Button>
//         </>
//       ) : (
//         <TextField
//           label="Due Date"
//           type='date'
//           InputLabelProps={{ shrink: true }}
//           onChange={(e) => setDueDate(e.target.value)}
//           value={dueDate}
//         />
//       )}
//     </>
//   );
// };

// export default PurchaseInvoice;


// old


// import { Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
// import React, { useState, useEffect } from 'react';
// import logo from '../../../images/logo (1).png';
// import moment from 'moment';
// import './printStyles.css';

// const PrintLayout = ({ data, dueDate, cgst, sgst }) => (
//   <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
//     <Typography variant="h4" align="center" style={{ marginBottom: '20px' }}>Invoice</Typography>
//     <Grid container spacing={3}>
//       <Grid item xs={12} display='flex' justifyContent='end'>
//         <img src={logo} alt="Company Logo" width='100' height='100' />
//       </Grid>
//       <Grid item xs={4}>
//         <Typography variant="h6" style={{ fontWeight: 'bold' }}>From</Typography>
//         <Typography>{data.purch_address}</Typography>
//       </Grid>
//       <Grid item xs={4}>
//         <Typography variant="h6" style={{ fontWeight: 'bold' }}>To</Typography>
//         <Typography>Krishna Industries</Typography>
//         <Typography>Peelamedu, Singanallur</Typography>
//         <Typography>Coimbatore, 627757</Typography>
//       </Grid>
//       <Grid item xs={4}>
//         <Typography variant="h6" style={{ display: 'inline-block', marginRight: '20px' }}>
//           <span style={{ fontWeight: 'bold' }}>Invoice Date &nbsp; &nbsp;: </span> {moment().format('YYYY-MM-DD')}
//         </Typography>
//         <Typography variant="h6" style={{ display: 'inline-block', marginTop: '2px' }}>
//           <span style={{ fontWeight: 'bold' }}>Due Date &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; :</span> {moment(dueDate).format('YYYY-MM-DD')}
//         </Typography>
//       </Grid>
//     </Grid>
//     <TableContainer style={{ marginTop: '20px' }}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell style={{ border: '1px solid #ddd', fontWeight: 'bold' }}>S.No</TableCell>
//             <TableCell style={{ border: '1px solid #ddd', fontWeight: 'bold' }}>Product Name</TableCell>
//             <TableCell style={{ border: '1px solid #ddd', fontWeight: 'bold' }}>Description</TableCell>
//             <TableCell style={{ border: '1px solid #ddd', fontWeight: 'bold' }}>Quantity</TableCell>
//             <TableCell style={{ border: '1px solid #ddd', fontWeight: 'bold' }}>Price</TableCell>
//             <TableCell style={{ border: '1px solid #ddd', fontWeight: 'bold' }}>Total</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           <TableRow>
//             <TableCell style={{ border: '1px solid #ddd' }}>01</TableCell>
//             <TableCell style={{ border: '1px solid #ddd' }}>{data.pro_name}</TableCell>
//             <TableCell style={{ border: '1px solid #ddd' }}>{data.specification}</TableCell>
//             <TableCell style={{ border: '1px solid #ddd' }}>{data.quantity}</TableCell>
//             <TableCell style={{ border: '1px solid #ddd' }}>{data.price}</TableCell>
//             <TableCell style={{ border: '1px solid #ddd' }}>{data.total}</TableCell>
//           </TableRow>
//         </TableBody>
//       </Table>
//     </TableContainer>
//     <div style={{ marginTop: '20px', borderTop: '1px solid #ddd', textAlign: 'right' }}>
//       <Typography className='mt-2' variant="h6"> <span style={{ fontWeight: 'bold' }}>Price</span> : {data.price}</Typography>
//       <Typography className='mt-2' variant="h6"> <span style={{ fontWeight: 'bold' }}>CGST %</span> : {cgst}</Typography>
//       <Typography className='mt-2' variant="h6"> <span style={{ fontWeight: 'bold' }}>SGST %</span> : {sgst}</Typography>
//       <Typography className='mt-2' variant="h6"> <span style={{ fontWeight: 'bold' }}>Total</span> : {data.total}</Typography>
//     </div>
//   </div>
// );

// const PurchaseInvoice = ({ data }) => {
//   const [dueDate, setDueDate] = useState(null);
//   const [cgst, setCgst] = useState(0);
//   const [sgst, setSgst] = useState(0);

//   useEffect(() => {
//     const gst = parseFloat(data.gst) || 0;
//     setCgst(gst / 2);
//     setSgst(gst / 2);
//   }, [data.gst]);

//   const handlePrint = () => {
//     const printButton = document.getElementById('printButton');
//     if (printButton) {
//       printButton.style.display = 'none';
//     }
//     window.print();
//     if (printButton) {
//       printButton.style.display = 'block';
//     }
//   };

//   return (
//     <>
//       {dueDate ? (
//         <>
//           <PrintLayout data={data} dueDate={dueDate} cgst={cgst} sgst={sgst} />
//           <Button id="printButton" onClick={handlePrint} style={{ display: 'block', margin: '20px auto' }}>Print</Button>
//         </>
//       ) : (
//         <TextField
//           label="Due Date"
//           type='date'
//           InputLabelProps={{ shrink: true }}
//           onChange={(e) => setDueDate(e.target.value)}
//           value={dueDate}
//         />
//       )}
//     </>
//   );
// };

// export default PurchaseInvoice;



// new



import React, { useRef } from 'react';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Button } from '@mui/material';
import logo from '../../../images/Krishna Industries2.jpeg';
import moment from 'moment';

// Function to calculate GST and total amount
const calculateGST = (price, gstRate) => {
  return (price * gstRate) / 100;
};

const PurchaseInvoice = ({ data, dueDate }) => {
  const gstRate = 18; // GST rate in percentage
  const price = parseFloat(data.price) || 0;
  const gstAmount = calculateGST(price, gstRate);
  const total = price + gstAmount;
  
  // Reference to the print button
  const printButtonRef = useRef(null);

  const handlePrint = () => {
    // Hide the print button
    if (printButtonRef.current) {
      printButtonRef.current.style.display = 'none';
    }

    // Print the document
    window.print();

    // After printing, show the print button again
    setTimeout(() => {
      if (printButtonRef.current) {
        printButtonRef.current.style.display = 'block';
      }
    }, 100);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', backgroundColor: '#e8f5e9', padding: '20px', borderRadius: '8px' }}>
      <Typography variant="h4" align="center" style={{ marginBottom: '20px', color: '#4CAF50' }}>Purchase Invoice</Typography>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} container justifyContent="flex-end">
          <img src={logo} alt="Company Logo" width='100' height='100' />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" style={{ fontWeight: 'bold', color: '#2196F3' }}>From</Typography>
          <Typography>Krishna</Typography>
          <Typography>Peelamedu, Singanallur</Typography>
          <Typography>Coimbatore, 627757</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" style={{ fontWeight: 'bold', color: '#2196F3' }}>To</Typography>
          <Typography>{data.purch_address}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6">
            <span style={{ fontWeight: 'bold', color: '#2196F3' }}>Invoice Date: </span> {moment().format('YYYY-MM-DD')}
          </Typography>
          <Typography variant="h6" style={{ marginTop: '8px' }}>
            <span style={{ fontWeight: 'bold', color: '#2196F3' }}>Due Date: </span> {moment(dueDate).format('YYYY-MM-DD')}
          </Typography>
        </Grid>
      </Grid>
      <TableContainer style={{ marginTop: '20px' }}>
        <Table>
          <TableHead style={{ backgroundColor: '#f0f0f0' }}>
            <TableRow>
              <TableCell style={{ border: '1px solid #ddd', fontWeight: 'bold', padding: '8px' }}>S.No</TableCell>
              <TableCell style={{ border: '1px solid #ddd', fontWeight: 'bold', padding: '8px' }}>Product Name</TableCell>
              <TableCell style={{ border: '1px solid #ddd', fontWeight: 'bold', padding: '8px' }}>Description</TableCell>
              <TableCell style={{ border: '1px solid #ddd', fontWeight: 'bold', padding: '8px' }}>Quantity</TableCell>
              <TableCell style={{ border: '1px solid #ddd', fontWeight: 'bold', padding: '8px' }}>Price</TableCell>
              <TableCell style={{ border: '1px solid #ddd', fontWeight: 'bold', padding: '8px' }}>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>01</TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>{data.pro_name}</TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>{data.specification}</TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>{data.quantity}</TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>{price.toFixed(2)}</TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>{total.toFixed(2)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ marginTop: '200px', borderTop: '1px solid #ddd', paddingTop: '10px', textAlign: 'right' }}>
        <Typography variant="h6" style={{ marginBottom: '8px' }}>
          <span style={{ fontWeight: 'bold', color: '#FF5722' }}>Price: </span> {price.toFixed(2)}
        </Typography>
        <Typography variant="h6" style={{ marginBottom: '8px' }}>
          <span style={{ fontWeight: 'bold', color: '#FF5722' }}>GST 18%: </span> {gstAmount.toFixed(2)}
        </Typography>
        <Typography variant="h6" style={{ marginBottom: '8px' }}>
          <span style={{ fontWeight: 'bold', color: '#FF5722' }}>Total: </span> {total.toFixed(2)}
        </Typography>
      </div>
      <p style={{ marginTop: '20px', textAlign: 'center' }}>Thank you for your business.</p>
      <Button
        ref={printButtonRef}
        onClick={handlePrint}
        style={{ display: 'block', margin: '20px auto', backgroundColor: '#4CAF50', color: 'white' }}
      >
        Print Invoice
      </Button>
    </div>
  );
};

export default PurchaseInvoice;