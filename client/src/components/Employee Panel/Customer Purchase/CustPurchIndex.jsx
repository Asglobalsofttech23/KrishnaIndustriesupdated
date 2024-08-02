// // import { Button, Dialog, DialogActions, DialogContent, FormControl, Grid, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
// // import React, { useEffect, useState } from 'react'
// // import axios from 'axios';
// // import Search from '../../Search Option/Search';
// // import Pagination from '@mui/material/Pagination';
// // import Stack from '@mui/material/Stack';
// // import AddCustPurch from './AddCustPurch';
// // import UpdateCustPurch from './UpdateCustPurch';
// // import config from '../../../config'

// // const formatDate = (dateStr) => {
// //   const date = new Date(dateStr);
// //   const day = date.getDate().toString().padStart(2, '0');
// //   const month = (date.getMonth() + 1).toString().padStart(2, '0');
// //   const year = date.getFullYear();

// //   let hours = date.getHours();
// //   const minutes = date.getMinutes().toString().padStart(2, '0');
// //   const ampm = hours >= 12 ? 'PM' : 'AM';
// //   hours = hours % 12;
// //   hours = hours ? hours : 12; // the hour '0' should be '12'
// //   const formattedHours = hours.toString().padStart(2, '0');

// //   return `${day}/${month}/${year} ${formattedHours}:${minutes} ${ampm}`;
// // };

// // const CustPurchIndex = () => {
// //     const [custPurchData,setCustPurchData] = useState([]);
// //     const [searchCustPurchData,setSearchCustPurchData] = useState([]);
// //     const [dataPerPage,setDataPerPage] = useState(5);
// //     const [currentPage,setCurrentPage] = useState(1);
// //     const [openNew,setOpenNew] = useState(false);
// //     const [openUpdate,setOpenUpdate] = useState(false);
// //     const [openDlt,setOpenDlt] = useState(false);
// //     const [updateData,setUpdateData] = useState([]);
// //     const [dltData,setDltData] = useState();

// //     useEffect(()=>{
// //         axios.get(`${config.apiUrl}/cust_purch/getCustPurchData/?emp_id=${sessionStorage.getItem('emp_id')}`)
// //         .then((res)=>{
// //             setCustPurchData(res.data);
// //             setSearchCustPurchData(res.data);
// //         })
// //         .catch((err)=>{
// //             console.log("Customer purchase data is not fetched.")
// //         })
// //     },[openNew,openUpdate,openDlt])

// //     const handleUpdate = (id) =>{
// //         const selectUpdate = custPurchData.find((cust_purch)=>cust_purch.cust_purch_id === id);
// //         if(selectUpdate){
// //           setUpdateData(selectUpdate);
// //           setOpenUpdate(true)
// //         }
// //       }

// //       const handleDlt = (id) => {
// //         setDltData(id);
// //         setOpenDlt(true);
// //       }
    
// //       const confirmDlt = () => {
// //         axios.delete(`${config.apiUrl}/cust_purch/deleteCustPurch/${dltData}`)
// //           .then((res) => {
// //             setOpenDlt(false);
// //           })
// //           .catch((err) => {
// //            console.log("Error deleting data. Please try again later.")
// //           });
// //       }

// //     const handleChangeDataPerPage = (e) => {
// //         const newDataPerPage = parseInt(e.target.value, 10);
// //         if (newDataPerPage == 1) {
// //           setDataPerPage(custPurchData.length);
// //           setCurrentPage(1);
// //         } else {
// //           setDataPerPage(newDataPerPage);
// //           setCurrentPage(1);
// //         }
// //       };
    
    
// //       const firstIndexOfData = (currentPage - 1) * dataPerPage;
// //     const lastIndexOfData = currentPage * dataPerPage;
// //     const currentData = searchCustPurchData.slice(firstIndexOfData, lastIndexOfData);
// //   return (
// //     <>
// //     <h1 className='text-center'>Customer Index</h1>
// //       <Grid container spacing={2} className='mt-3'>
// //         <Grid item xs={4} display='flex' justifyContent='center'>
// //           <Button onClick={() => setOpenNew(true)}>Purchase Product</Button>
// //         </Grid>
// //         <Grid item xs={4} display='flex' justifyContent='center'>
// //           <Search data={custPurchData} setData={setSearchCustPurchData} />
// //         </Grid>
// //         <Grid item xs={4} display='flex' justifyContent='center'>
// //         <FormControl>
// //             <Select value={dataPerPage} onChange={handleChangeDataPerPage}>
// //               <MenuItem value={5}>5 Per Page</MenuItem>
// //               <MenuItem value={10}>10 Per Page</MenuItem>
// //               <MenuItem value={15}>15 Per Page</MenuItem>
// //               <MenuItem value={1}>All Per Page</MenuItem>
// //             </Select>
// //           </FormControl>
// //         </Grid>
// //       </Grid>
// //     <TableContainer component={Paper} className='mt-4'>
// //         <Table>
// //             <TableHead>
// //                 <TableRow>
// //                     <TableCell style={{fontWeight:'bold'}}>S.No</TableCell>
// //                     <TableCell style={{fontWeight:'bold'}}>Customer Name</TableCell>
// //                     <TableCell style={{fontWeight:'bold'}}>Customer Mobile</TableCell>
// //                     <TableCell style={{fontWeight:'bold'}}>Customer Email</TableCell>
// //                     <TableCell style={{fontWeight:'bold'}}>Product Name</TableCell>
// //                     <TableCell style={{fontWeight:'bold'}}>Quantity</TableCell>
// //                     <TableCell style={{fontWeight:'bold'}}>price</TableCell>
// //                     <TableCell style={{fontWeight:'bold'}}>Payment Type</TableCell>
// //                     <TableCell style={{fontWeight:'bold'}}>payment_amount</TableCell>
// //                     <TableCell style={{fontWeight:'bold'}}>Balance</TableCell>
// //                     <TableCell style={{fontWeight:'bold'}}>Total</TableCell>
// //                     <TableCell style={{fontWeight:'bold'}}>Dispatch Date</TableCell>
// //                     <TableCell style={{fontWeight:'bold'}}>Action</TableCell>
// //                 </TableRow>
// //             </TableHead>
// //             <TableBody>
// //                 {currentData.map((cust_purch,index)=>(
// //                     <TableRow key={cust_purch.cust_purch_id}>
// //                         <TableCell>{index+1}</TableCell>
// //                         <TableCell>{cust_purch.cust_name}</TableCell>
// //                         <TableCell>{cust_purch.cust_mobile}</TableCell>
// //                         <TableCell>{cust_purch.cust_email}</TableCell>
// //                         <TableCell>{cust_purch.pro_name}</TableCell>
// //                         <TableCell>{cust_purch.quantity}</TableCell>
// //                         <TableCell>{cust_purch.price}</TableCell>
// //                         <TableCell>{cust_purch.payment_type}</TableCell>
// //                         <TableCell>{cust_purch.payment_amount}</TableCell>
// //                         <TableCell>{cust_purch.balance}</TableCell>
// //                         <TableCell>{cust_purch.total}</TableCell>
// //                         <TableCell>{formatDate(cust_purch.dispatchdate)}</TableCell>
// //                         <TableCell>
// //                             <Button onClick={()=>handleUpdate(cust_purch.cust_purch_id)}>Edit</Button>
// //                             <Button onClick={()=>handleDlt(cust_purch.cust_purch_id)}>Delete</Button>
// //                         </TableCell>
// //                     </TableRow>
// //                 ))}
// //             </TableBody>
// //         </Table>
// //     </TableContainer>

// //     <Grid container spacing={2} display='flex' justifyContent='center' className="mt-4">
// //       <Stack spacing={2}>
// //       <Pagination
// //     count={Math.ceil(custPurchData.length / dataPerPage)}
// //     page={currentPage}
// //     onChange={(e, value) => setCurrentPage(value)}
// //     size="small"
// //     style={{ cursor: 'pointer', '&:hover': { backgroundColor: 'transparent' } }}
// //   />
// //     </Stack>
// //       </Grid>


// //       <Dialog open={openNew} onClose={() => setOpenNew(false)} maxWidth='lg'>
// //         <DialogContent>
// //           <AddCustPurch onClose={() => setOpenNew(false)} />
// //         </DialogContent>
// //         <DialogActions>
// //           <Button onClick={() => setOpenNew(false)}>Close</Button>
// //         </DialogActions>
// //       </Dialog>

// //       <Dialog open={openUpdate} onClose={() => setOpenUpdate(false)} maxWidth='lg'>
// //   <DialogContent>
// //     <UpdateCustPurch data={updateData} onClose={() => setOpenUpdate(false)} />
// //   </DialogContent>
// //   <DialogActions>
// //     <Button onClick={() => setOpenUpdate(false)}>Close</Button>
// //   </DialogActions>
// // </Dialog>


// //       <Dialog open={openDlt} onClose={() => setOpenDlt(false)}>
// //         <DialogContent>
// //           <p>Are you sure you want to delete this Customer data?</p>
// //         </DialogContent>
// //         <DialogActions>
// //           <Button onClick={confirmDlt} style={{ backgroundColor: 'red', color: 'white' }}>Delete</Button>
// //           <Button onClick={() => setOpenDlt(false)} style={{ backgroundColor: 'green', color: 'white' }}>Cancel</Button>
// //         </DialogActions>
// //       </Dialog>
// //     </>
// //   )
// // }

// // export default CustPurchIndex
// // =======================================================================================================================


// old run code

// import React, { useEffect, useState } from 'react';
// import { Button, Dialog, DialogActions, DialogContent, FormControl, Grid, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
// import axios from 'axios';
// import Search from '../../Search Option/Search';
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';
// import AddCustPurch from './AddCustPurch';
// import UpdateCustPurch from './UpdateCustPurch';
// import config from '../../../config';

// const formatDate = (dateStr) => {
//   const date = new Date(dateStr);
//   const day = date.getDate().toString().padStart(2, '0');
//   const month = (date.getMonth() + 1).toString().padStart(2, '0');
//   const year = date.getFullYear();

//   let hours = date.getHours();
//   const minutes = date.getMinutes().toString().padStart(2, '0');
//   const ampm = hours >= 12 ? 'PM' : 'AM';
//   hours = hours % 12;
//   hours = hours ? hours : 12; // the hour '0' should be '12'
//   const formattedHours = hours.toString().padStart(2, '0');

//   return `${day}/${month}/${year} ${formattedHours}:${minutes} ${ampm}`;
// };

// const CustPurchIndex = () => {
//     const [custPurchData, setCustPurchData] = useState([]);
//     const [searchCustPurchData, setSearchCustPurchData] = useState([]);
//     const [dataPerPage, setDataPerPage] = useState(5);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [openNew, setOpenNew] = useState(false);
//     const [openUpdate, setOpenUpdate] = useState(false);
//     const [openDlt, setOpenDlt] = useState(false);
//     const [updateData, setUpdateData] = useState([]);
//     const [dltData, setDltData] = useState();
//     const [deliveredIds, setDeliveredIds] = useState(new Set());

//     useEffect(() => {
//         axios.get(`${config.apiUrl}/cust_purch/getCustPurchData/?emp_id=${sessionStorage.getItem('emp_id')}`)
//             .then((res) => {
//                 setCustPurchData(res.data);
//                 setSearchCustPurchData(res.data);
                
//                 // Track delivered IDs
//                 const delivered = new Set(res.data.filter(item => item.deliveryed).map(item => item.cust_purch_id));
//                 setDeliveredIds(delivered);
//             })
//             .catch((err) => {
//                 console.log("Customer purchase data is not fetched.")
//             })
//     }, [openNew, openUpdate, openDlt]);

//     const handleUpdate = (id) => {
//         const selectUpdate = custPurchData.find((cust_purch) => cust_purch.cust_purch_id === id);
//         if (selectUpdate) {
//             setUpdateData(selectUpdate);
//             setOpenUpdate(true);
//         }
//     };

//     const handleDlt = (id) => {
//         setDltData(id);
//         setOpenDlt(true);
//     };

//     const confirmDlt = () => {
//         axios.delete(`${config.apiUrl}/cust_purch/deleteCustPurch/${dltData}`)
//             .then((res) => {
//                 setOpenDlt(false);
//             })
//             .catch((err) => {
//                 console.log("Error deleting data. Please try again later.");
//             });
//     };

//     const handleDelivered = (id) => {
//         axios.post(`${config.apiUrl}/cust_purch/markAsDelivered/${id}`)
//             .then((res) => {
//                 console.log(res.data.message);
//                 setDeliveredIds(prev => new Set(prev.add(id)));
//             })
//             .catch((err) => {
//                 console.log("Error marking as delivered. Please try again later.");
//             });
//     };

//     const handleChangeDataPerPage = (e) => {
//         const newDataPerPage = parseInt(e.target.value, 10);
//         if (newDataPerPage === 1) {
//             setDataPerPage(custPurchData.length);
//             setCurrentPage(1);
//         } else {
//             setDataPerPage(newDataPerPage);
//             setCurrentPage(1);
//         }
//     };

//     const firstIndexOfData = (currentPage - 1) * dataPerPage;
//     const lastIndexOfData = currentPage * dataPerPage;
//     const currentData = searchCustPurchData.slice(firstIndexOfData, lastIndexOfData);

//     return (
//         <>
//             <h1 className='text-center'>Customer Index</h1>
//             <Grid container spacing={2} className='mt-3'>
//                 <Grid item xs={4} display='flex' justifyContent='center'>
//                     <Button onClick={() => setOpenNew(true)}>Purchase Product</Button>
//                 </Grid>
//                 <Grid item xs={4} display='flex' justifyContent='center'>
//                     <Search data={custPurchData} setData={setSearchCustPurchData} />
//                 </Grid>
//                 <Grid item xs={4} display='flex' justifyContent='center'>
//                     <FormControl>
//                         <Select value={dataPerPage} onChange={handleChangeDataPerPage}>
//                             <MenuItem value={5}>5 Per Page</MenuItem>
//                             <MenuItem value={10}>10 Per Page</MenuItem>
//                             <MenuItem value={15}>15 Per Page</MenuItem>
//                             <MenuItem value={1}>All Per Page</MenuItem>
//                         </Select>
//                     </FormControl>
//                 </Grid>
//             </Grid>
//             <TableContainer component={Paper} className='mt-4'>
//                 <Table>
//                     <TableHead>
//                         <TableRow>
//                             <TableCell style={{ fontWeight: 'bold' }}>S.No</TableCell>
//                             <TableCell style={{ fontWeight: 'bold' }}>Customer Name</TableCell>
//                             <TableCell style={{ fontWeight: 'bold' }}>Customer Mobile</TableCell>
//                             <TableCell style={{ fontWeight: 'bold' }}>Customer Email</TableCell>
//                             <TableCell style={{ fontWeight: 'bold' }}>Product Name</TableCell>
//                             <TableCell style={{ fontWeight: 'bold' }}>Quantity</TableCell>
//                             <TableCell style={{ fontWeight: 'bold' }}>Price</TableCell>
//                             <TableCell style={{ fontWeight: 'bold' }}>Payment Type</TableCell>
//                             <TableCell style={{ fontWeight: 'bold' }}>Payment Amount</TableCell>
//                             <TableCell style={{ fontWeight: 'bold' }}>Balance</TableCell>
//                             <TableCell style={{ fontWeight: 'bold' }}>Total</TableCell>
//                             <TableCell style={{ fontWeight: 'bold' }}>Dispatch Date</TableCell>
//                             <TableCell style={{ fontWeight: 'bold' }}>Action</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {currentData.map((cust_purch, index) => (
//                             <TableRow key={cust_purch.cust_purch_id}>
//                                 <TableCell>{index + 1}</TableCell>
//                                 <TableCell>{cust_purch.cust_name}</TableCell>
//                                 <TableCell>{cust_purch.cust_mobile}</TableCell>
//                                 <TableCell>{cust_purch.cust_email}</TableCell>
//                                 <TableCell>{cust_purch.product_name}</TableCell>
//                                 <TableCell>{cust_purch.quantity}</TableCell>
//                                 <TableCell>{cust_purch.price}</TableCell>
//                                 <TableCell>{cust_purch.payment_type}</TableCell>
//                                 <TableCell>{cust_purch.payment_amount}</TableCell>
//                                 <TableCell>{cust_purch.balance}</TableCell>
//                                 <TableCell>{cust_purch.total}</TableCell>
//                                 <TableCell>{formatDate(cust_purch.dispatchdate)}</TableCell>
//                                 <TableCell>
//                                     <Button onClick={() => handleUpdate(cust_purch.cust_purch_id)}>Edit</Button>
//                                     <Button onClick={() => handleDlt(cust_purch.cust_purch_id)}>Delete</Button>
//                                     <Button
//                                         onClick={() => handleDelivered(cust_purch.cust_purch_id)}
//                                         disabled={deliveredIds.has(cust_purch.cust_purch_id)}
//                                     >
//                                         Delivered
//                                     </Button>
//                                 </TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>

//             <Grid container spacing={2} display='flex' justifyContent='center' className="mt-4">
//                 <Stack spacing={2}>
//                     <Pagination
//                         count={Math.ceil(custPurchData.length / dataPerPage)}
//                         page={currentPage}
//                         onChange={(e, value) => setCurrentPage(value)}
//                         size="small"
//                         style={{ cursor: 'pointer', '&:hover': { backgroundColor: 'transparent' } }}
//                     />
//                 </Stack>
//             </Grid>

//             <Dialog open={openNew} onClose={() => setOpenNew(false)} maxWidth='lg'>
//                 <DialogContent>
//                     <AddCustPurch onClose={() => setOpenNew(false)} />
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={() => setOpenNew(false)}>Close</Button>
//                 </DialogActions>
//             </Dialog>

//             <Dialog open={openUpdate} onClose={() => setOpenUpdate(false)} maxWidth='lg'>
//                 <DialogContent>
//                     <UpdateCustPurch data={updateData} onClose={() => setOpenUpdate(false)} />
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={() => setOpenUpdate(false)}>Close</Button>
//                 </DialogActions>
//             </Dialog>

//             <Dialog open={openDlt} onClose={() => setOpenDlt(false)}>
//                 <DialogContent>
//                     <p>Are you sure you want to delete this Customer data?</p>
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={confirmDlt} style={{ backgroundColor: 'red', color: 'white' }}>Delete</Button>
//                     <Button onClick={() => setOpenDlt(false)} style={{ backgroundColor: 'green', color: 'white' }}>Cancel</Button>
//                 </DialogActions>
//             </Dialog>
//         </>
//     );
// };

// export default CustPurchIndex;



import {
    Button, Dialog, DialogActions, DialogContent, FormControl, Grid, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow
  } from '@mui/material';
  import React, { useEffect, useState } from 'react';
  import axios from 'axios';
  import Search from '../../Search Option/Search';
  import Pagination from '@mui/material/Pagination';
  import Stack from '@mui/material/Stack';
  import AddCustPurch from './AddCustPurch';
  import UpdateCustPurch from './UpdateCustPurch';
  import PurchaseInvoice from '../../Admin Panel/Admin Customer Purchase/AdminPurchaseInvoice'; 
  import config from '../../../config';
  import { format } from 'date-fns';
  import DateFilter from 'components/Admin Panel/Purchase/DateFilter';

  
  const CustPurchIndex = () => {
    const [custPurchData, setCustPurchData] = useState([]);
    const [searchCustPurchData, setSearchCustPurchData] = useState([]);
    const [dataPerPage, setDataPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [openNew, setOpenNew] = useState(false);
    const [openUpdate, setOpenUpdate] = useState(false);
    const [openDlt, setOpenDlt] = useState(false);
    const [openInvoice, setOpenInvoice] = useState(false);
    const [updateData, setUpdateData] = useState([]);
    const [dltData, setDltData] = useState();
    const [invoiceData, setInvoiceData] = useState(null);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [deliveredIds, setDeliveredIds] = useState(new Set())
  
    // Fetch customer purchase data
    useEffect(() => {
      axios.get(`${config.apiUrl}/cust_purch/getCustPurchData/?emp_id=${sessionStorage.getItem('emp_id')}`)
        .then((res) => {
          setCustPurchData(res.data);
          setSearchCustPurchData(res.data);
          
          // Track delivered IDs
          const delivered = new Set(res.data.filter(item => item.deliveryed).map(item => item.cust_purch_id));
          setDeliveredIds(delivered);
        
     })
  
        .catch((err) => {
          console.log("Customer purchase data is not fetched.");
        });
    }, [openNew, openUpdate, openDlt]);
  
    const handleUpdate = (id) => {
      const selectUpdate = custPurchData.find((cust_purch) => cust_purch.cust_purch_id === id);
      if (selectUpdate) {
        setUpdateData(selectUpdate);
        setOpenUpdate(true);
      }
    };
  
    const handleDlt = (id) => {
      setDltData(id);
      setOpenDlt(true);
    };
  
    const confirmDlt = () => {
      axios.delete(`${config.apiUrl}/cust_purch/deleteCustPurch/${dltData}`)
        .then((res) => {
          setOpenDlt(false);
        })
        .catch((err) => {
          console.log("Error deleting data. Please try again later.");
        });
    };
  
    const handleChangeDataPerPage = (e) => {
      const newDataPerPage = parseInt(e.target.value, 10);
      if (newDataPerPage === 1) {
        setDataPerPage(custPurchData.length);
        setCurrentPage(1);
      } else {
        setDataPerPage(newDataPerPage);
        setCurrentPage(1);
      }
    };
  
    const handleInvoice = (data) => {
      setInvoiceData(data);
      setOpenInvoice(true);
    };
  
    const handleFilter = () => {
      if (startDate && endDate) {
        const filteredData = custPurchData.filter((cust_purch) => {
          const custDate = new Date(cust_purch.created_at);
          return custDate >= new Date(startDate) && custDate <= new Date(endDate);
        });
        setSearchCustPurchData(filteredData);
        setCurrentPage(1);
      } else {
        setSearchCustPurchData(custPurchData);
      }
    };
  
    const firstIndexOfData = (currentPage - 1) * dataPerPage;
    const lastIndexOfData = currentPage * dataPerPage;
    const currentData = searchCustPurchData.slice(firstIndexOfData, lastIndexOfData);
  
    const handleDelivered = (id) => {
      axios.post(`${config.apiUrl}/cust_purch/markAsDelivered/${id}`)
          .then((res) => {
              console.log(res.data.message);
              setDeliveredIds(prev => new Set(prev.add(id)));
          })
          .catch((err) => {
              console.log("Error marking as delivered. Please try again later.");
          });
  };
  
  
    return (
      <>
        
        <h1 className='text-center'>Customer Purchase Index</h1>
        <Grid container spacing={2} className='mt-3'>
          <Grid item xs={4} display='flex' justifyContent='center'>
            <Button onClick={() => setOpenNew(true)} variant="contained">Purchase Product</Button>
          </Grid>
          <Grid item xs={4} display='flex' justifyContent='center'>
            <Search data={custPurchData} setData={setSearchCustPurchData} />
          </Grid>
          <Grid item xs={4} display='flex' justifyContent='center'>
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
        <DateFilter
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          onFilter={handleFilter}
        />
        <TableContainer component={Paper} className='mt-4'>
          <Table>
            <TableHead>
              <TableRow>
                {["S.No", "Customer Name", "Customer Mobile", "Customer Email", "Product Name", "Quantity", "Price","Date/time", "Payment Type", "payment_amount","Balance", "Total", "Action"].map((heading) => (
                  <TableCell key={heading} style={{ fontWeight: 'bold', textAlign: 'center' }}>{heading}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {currentData.map((cust_purch, index) => (
                <TableRow key={cust_purch.cust_purch_id}>
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell align="center">{cust_purch.cust_name}</TableCell>
                  <TableCell align="center">{cust_purch.cust_mobile}</TableCell>
                  <TableCell align="center">{cust_purch.cust_email}</TableCell>
                  <TableCell align="center">{cust_purch.pro_name}</TableCell>
                  <TableCell align="center">{cust_purch.quantity}</TableCell>
                  <TableCell align="center">{cust_purch.price}</TableCell>
                  <TableCell>
                                      {(() => {
                                          const formattedDate = format(new Date(cust_purch.created_at), 'dd/MM/yyyy HH:mm:ss');
                                          const [datePart, timePart] = formattedDate.split(' ');
                                          return (
                                              <>
                                                  {datePart}{" "}
                                                  <span style={{ color: 'red' }}>{timePart}</span>
                                              </>
                                          );
                                      })()}
                                  </TableCell>
                  <TableCell align="center">{cust_purch.payment_type}</TableCell>
                  <TableCell align="center">{cust_purch.payment_amount}</TableCell>
                  <TableCell align="center">{cust_purch.balance}</TableCell>
                  <TableCell align="center">{cust_purch.total}</TableCell>
                  
                  <TableCell align="center">
                    <Button onClick={() => handleUpdate(cust_purch.cust_purch_id)} variant="contained" color="primary">Edit</Button>
                    <Button onClick={() => handleDlt(cust_purch.cust_purch_id)} variant="contained" color="secondary">Delete</Button>
                    <Button onClick={() => handleInvoice(cust_purch)} variant="contained" color="success">Invoice</Button>
                    <Button
                                          onClick={() => handleDelivered(cust_purch.cust_purch_id)}
                                          disabled={deliveredIds.has(cust_purch.cust_purch_id)}
                                      >
                                          Delivered
                                      </Button>
  
                  </TableCell>
  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
  
        <Grid container spacing={2} display='flex' justifyContent='center' className="mt-4">
          <Stack spacing={2}>
            <Pagination
              count={Math.ceil(searchCustPurchData.length / dataPerPage)}
              page={currentPage}
              onChange={(e, value) => setCurrentPage(value)}
              size="small"
            />
          </Stack>
        </Grid>
  
        <Dialog open={openNew} onClose={() => setOpenNew(false)} maxWidth='lg'>
          <DialogContent>
            <AddCustPurch onClose={() => setOpenNew(false)} />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenNew(false)}>Close</Button>
          </DialogActions>
        </Dialog>
  
        <Dialog open={openUpdate} onClose={() => setOpenUpdate(false)} maxWidth='lg'>
          <DialogContent>
            <UpdateCustPurch data={updateData} onClose={() => setOpenUpdate(false)} />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenUpdate(false)}>Close</Button>
          </DialogActions>
        </Dialog>
  
        <Dialog open={openDlt} onClose={() => setOpenDlt(false)}>
          <DialogContent>
            <p>Are you sure you want to delete this Customer data?</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={confirmDlt} variant="contained" color="error">Delete</Button>
            <Button onClick={() => setOpenDlt(false)} variant="contained" color="success">Cancel</Button>
          </DialogActions>
        </Dialog>
  
        <Dialog open={openInvoice} onClose={() => setOpenInvoice(false)} maxWidth='lg'>
          <DialogContent>
            {invoiceData && <PurchaseInvoice data={invoiceData} />}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenInvoice(false)}>Close</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  };
  
  export default CustPurchIndex;