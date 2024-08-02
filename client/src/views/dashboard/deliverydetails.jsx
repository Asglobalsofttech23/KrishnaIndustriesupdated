// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import PropTypes from 'prop-types';
// import { useTheme, styled } from '@mui/material/styles';
// import Avatar from '@mui/material/Avatar';
// import Box from '@mui/material/Box';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import ListItemText from '@mui/material/ListItemText';
// import Typography from '@mui/material/Typography';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';
// import Button from '@mui/material/Button';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import MainCard from 'ui-component/cards/MainCard';
// import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';
// import config from '../../config';

// // styles
// const CardWrapper = styled(MainCard)(({ theme }) => ({
//   overflow: 'hidden',
//   position: 'relative',
//   '&:after': {
//     content: '""',
//     position: 'absolute',
//     width: 210,
//     height: 210,
//     background: `linear-gradient(210.04deg, ${theme.palette.warning.dark} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
//     borderRadius: '50%',
//     top: -30,
//     right: -180
//   },
//   '&:before': {
//     content: '""',
//     position: 'absolute',
//     width: 210,
//     height: 210,
//     background: `linear-gradient(140.9deg, ${theme.palette.warning.dark} -14.02%, rgba(144, 202, 249, 0) 70.50%)`,
//     borderRadius: '50%',
//     top: -160,
//     right: -130
//   }
// }));

// const PurchaseLogs = ({ isLoading, icon, label }) => {
//   const theme = useTheme();
//   const [purchaseLogs, setPurchaseLogs] = useState([]);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     axios.get(`${config.apiUrl}/cust_purch/purchaseLogs`)
//       .then((res) => {
//         setPurchaseLogs(res.data);
//       })
//       .catch((err) => {
//         console.log("Purchase logs data can't be fetched.", err);
//       });
//   }, []);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <>
//       {isLoading ? (
//         <TotalIncomeCard />
//       ) : (
//         <CardWrapper border={false} content={false}>
//           <Box sx={{ p: 2 }}>
//             <List sx={{ py: 0 }}>
//               <ListItem
//                 alignItems="center"
//                 disableGutters
//                 sx={{ py: 0, cursor: 'pointer' }}
//                 onClick={handleClickOpen}
//               >
//                 <ListItemAvatar>
//                   <Avatar
//                     variant="rounded"
//                     sx={{
//                       ...theme.typography.commonAvatar,
//                       ...theme.typography.largeAvatar,
//                       bgcolor: 'warning.light',
//                       color: label === 'Meeting attends' ? 'error.dark' : 'warning.dark'
//                     }}
//                   >
//                     {icon}
//                   </Avatar>
//                 </ListItemAvatar>
//                 <ListItemText
//                   sx={{ py: 0, mt: 0.45, mb: 0.45 }}
//                   primary={<Typography variant="h2">{purchaseLogs.length}</Typography>}
//                   secondary={
//                     <Typography variant="subtitle2" sx={{ color: 'grey.500', mt: 0.5 }}>
//                       Total Purchases
//                     </Typography>
//                   }
//                 />
//               </ListItem>
//             </List>
//           </Box>
//         </CardWrapper>
//       )}
//       <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
//         <DialogTitle>Purchase Logs Details</DialogTitle>
//         <DialogContent>
//           <TableContainer component={Paper}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>ID</TableCell>
//                   <TableCell>Customer ID</TableCell>
//                   <TableCell>Product ID</TableCell>
//                   <TableCell>Quantity</TableCell>
//                   <TableCell>Price</TableCell>
//                   <TableCell>Payment Type</TableCell>
//                   <TableCell>Payment Amount</TableCell>
//                   <TableCell>Balance</TableCell>
//                   <TableCell>Total</TableCell>
//                   <TableCell>Dispatch Date</TableCell>
//                   <TableCell>Delivered</TableCell>
//                   <TableCell>Status</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {purchaseLogs.map((row) => (
//                   <TableRow key={row.cust_purch_id}>
//                     <TableCell>{row.cust_purch_id}</TableCell>
//                     <TableCell>{row.cust_id}</TableCell>
//                     <TableCell>{row.pro_id}</TableCell>
//                     <TableCell>{row.quantity}</TableCell>
//                     <TableCell>{row.price}</TableCell>
//                     <TableCell>{row.payment_type}</TableCell>
//                     <TableCell>{row.payment_amount}</TableCell>
//                     <TableCell>{row.balance}</TableCell>
//                     <TableCell>{row.total}</TableCell>
//                     <TableCell>{row.dispatchdate}</TableCell>
//                     <TableCell>{row.deliveryed ? moment(row.deliveryed).format('YYYY-MM-DD HH:mm:ss') : 'Pending'}</TableCell>
//                     <TableCell>{row.status}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// };

// PurchaseLogs.propTypes = {
//   icon: PropTypes.node,
//   label: PropTypes.string,
//   isLoading: PropTypes.bool
// };

// export default PurchaseLogs;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import PropTypes from 'prop-types';
// import { useTheme, styled } from '@mui/material/styles';
// import Avatar from '@mui/material/Avatar';
// import Box from '@mui/material/Box';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import ListItemText from '@mui/material/ListItemText';
// import Typography from '@mui/material/Typography';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';
// import Button from '@mui/material/Button';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import MainCard from 'ui-component/cards/MainCard';
// import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';
// import moment from 'moment';
// import config from '../../config';

// // styles
// const CardWrapper = styled(MainCard)(({ theme }) => ({
//   overflow: 'hidden',
//   position: 'relative',
//   '&:after': {
//     content: '""',
//     position: 'absolute',
//     width: 210,
//     height: 210,
//     background: `linear-gradient(210.04deg, ${theme.palette.warning.dark} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
//     borderRadius: '50%',
//     top: -30,
//     right: -180
//   },
//   '&:before': {
//     content: '""',
//     position: 'absolute',
//     width: 210,
//     height: 210,
//     background: `linear-gradient(140.9deg, ${theme.palette.warning.dark} -14.02%, rgba(144, 202, 249, 0) 70.50%)`,
//     borderRadius: '50%',
//     top: -160,
//     right: -130
//   }
// }));

// const PurchaseLogs = ({ isLoading, icon, label }) => {
//   const theme = useTheme();
//   const [purchaseLogs, setPurchaseLogs] = useState([]);
//   const [pendingLogs, setPendingLogs] = useState([]);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     axios.get(`${config.apiUrl}/cust_purch/purchaseLogs`)
//       .then((res) => {
//         const data = Array.isArray(res.data) ? res.data : [];
//         setPurchaseLogs(data);
//         setPendingLogs(data.filter((log) => !log.deliveryed)); // Filter pending logs
//       })
//       .catch((err) => {
//         console.log("Purchase logs data can't be fetched.", err);
//         setPurchaseLogs([]); // Ensure it is an array even on error
//         setPendingLogs([]);
//       });
//   }, []);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <>
//       {isLoading ? (
//         <TotalIncomeCard />
//       ) : (
//         <CardWrapper border={false} content={false}>
//           <Box sx={{ p: 2 }}>
//             <List sx={{ py: 0 }}>
//               <ListItem
//                 alignItems="center"
//                 disableGutters
//                 sx={{ py: 0, cursor: 'pointer' }}
//                 onClick={handleClickOpen}
//               >
//                 <ListItemAvatar>
//                   <Avatar
//                     variant="rounded"
//                     sx={{
//                       ...theme.typography.commonAvatar,
//                       ...theme.typography.largeAvatar,
//                       bgcolor: 'warning.light',
//                       color: label === 'Meeting attends' ? 'error.dark' : 'warning.dark'
//                     }}
//                   >
//                     {icon}
//                   </Avatar>
//                 </ListItemAvatar>
//                 <ListItemText
//                   sx={{ py: 0, mt: 0.45, mb: 0.45 }}
//                   primary={<Typography variant="h2">{pendingLogs.length}</Typography>}
//                   secondary={
//                     <Typography variant="subtitle2" sx={{ color: 'grey.500', mt: 0.5 }}>
//                       Pending Purchases
//                     </Typography>
//                   }
//                 />
//               </ListItem>
//             </List>
//           </Box>
//         </CardWrapper>
//       )}
//       <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
//         <DialogTitle>Pending Purchase Logs Details</DialogTitle>
//         <DialogContent>
//           <TableContainer component={Paper}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>ID</TableCell>
//                   <TableCell>Customer ID</TableCell>
//                   <TableCell>Product ID</TableCell>
//                   <TableCell>Quantity</TableCell>
//                   <TableCell>Price</TableCell>
//                   <TableCell>Payment Type</TableCell>
//                   <TableCell>Payment Amount</TableCell>
//                   <TableCell>Balance</TableCell>
//                   <TableCell>Total</TableCell>
//                   <TableCell>Dispatch Date</TableCell>
//                   <TableCell>Delivered</TableCell>
//                   <TableCell>Status</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {pendingLogs.map((row) => (
//                   <TableRow key={row.cust_purch_id}>
//                     <TableCell>{row.cust_purch_id}</TableCell>
//                     <TableCell>{row.cust_name}</TableCell>
//                     <TableCell>{row.pro_name}</TableCell>
//                     <TableCell>{row.quantity}</TableCell>
//                     <TableCell>{row.price}</TableCell>
//                     <TableCell>{row.payment_type}</TableCell>
//                     <TableCell>{row.payment_amount}</TableCell>
//                     <TableCell>{row.balance}</TableCell>
//                     <TableCell>{row.total}</TableCell>
//                     <TableCell>{row.dispatchdate}</TableCell>
//                     <TableCell>{row.deliveryed ? moment(row.deliveryed).format('YYYY-MM-DD HH:mm:ss') : 'Pending'}</TableCell>
//                     <TableCell>{row.status}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// };

// PurchaseLogs.propTypes = {
//   icon: PropTypes.node,
//   label: PropTypes.string,
//   isLoading: PropTypes.bool
// };

// export default PurchaseLogs;








// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import PropTypes from 'prop-types';
// import { useTheme, styled } from '@mui/material/styles';
// import Avatar from '@mui/material/Avatar';
// import Box from '@mui/material/Box';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import ListItemText from '@mui/material/ListItemText';
// import Typography from '@mui/material/Typography';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';
// import Button from '@mui/material/Button';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import MainCard from 'ui-component/cards/MainCard';
// import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';
// import moment from 'moment';
// import config from '../../config';

// const PurchaseLogs = ({ isLoading, icon, label }) => {
//     const [open, setOpen] = useState(false);
//     const [purchaseLogs, setPurchaseLogs] = useState([]);

//     useEffect(() => {
//         if (open) {
//             axios.get(`${config.apiUrl}/cust_purch/purchaseLogs`)
//                 .then(response => {
//                     // Log the response data for debugging
//                     console.log('API Response:', response.data);

//                     // Ensure response.data is an array
//                     if (Array.isArray(response.data)) {
//                         setPurchaseLogs(response.data);
//                     } else {
//                         console.error('Unexpected response format:', response.data);
//                         setPurchaseLogs([]); // Set to empty array to avoid errors
//                     }
//                 })
//                 .catch(error => {
//                     console.error('Error fetching purchase logs:', error);
//                     setPurchaseLogs([]); // Set to empty array in case of error
//                 });
//         }
//     }, [open]);

//     const handleClickOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);

//     return (
//         <>
//             <Button variant="outlined" onClick={handleClickOpen} startIcon={icon}>
//                 {label}
//             </Button>
//             <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
//                 <DialogContent>
//                     <Typography variant="h6" gutterBottom>Purchase Logs</Typography>
//                     <TableContainer component={Paper}>
//                         <Table>
//                             <TableHead>
//                                 <TableRow>
//                                     <TableCell>ID</TableCell>
//                                     <TableCell>Customer Name</TableCell>
//                                     <TableCell>Product Name</TableCell>
//                                     <TableCell>Quantity</TableCell>
//                                     <TableCell>Price</TableCell>
//                                     <TableCell>Payment Type</TableCell>
//                                     <TableCell>Payment Amount</TableCell>
//                                     <TableCell>Balance</TableCell>
//                                     <TableCell>Total</TableCell>
//                                     <TableCell>Dispatch Date</TableCell>
//                                     <TableCell>Delivered</TableCell>
//                                     <TableCell>Status</TableCell>
//                                 </TableRow>
//                             </TableHead>
//                             <TableBody>
//                                 {purchaseLogs.map((row) => (
//                                     <TableRow key={row.cust_purch_id} sx={{ 
//                                         backgroundColor: row.status === 'Overdue' ? '#f8d7da' : 
//                                                           row.status === 'Delivered' ? '#d4edda' : 
//                                                           '#fff'
//                                     }}>
//                                         <TableCell>{row.cust_purch_id}</TableCell>
//                                         <TableCell>{row.cust_name}</TableCell>
//                                         <TableCell>{row.pro_name}</TableCell>
//                                         <TableCell>{row.quantity}</TableCell>
//                                         <TableCell>{row.price}</TableCell>
//                                         <TableCell>{row.payment_type}</TableCell>
//                                         <TableCell>{row.payment_amount}</TableCell>
//                                         <TableCell>{row.balance}</TableCell>
//                                         <TableCell>{row.total}</TableCell>
//                                         <TableCell>{row.dispatchdate ? moment(row.dispatchdate).format('YYYY-MM-DD') : 'N/A'}</TableCell>
//                                         <TableCell>{row.deliveryed ? moment(row.deliveryed).format('YYYY-MM-DD HH:mm:ss') : 'Pending'}</TableCell>
//                                         <TableCell>{row.status}</TableCell>
//                                     </TableRow>
//                                 ))}
//                             </TableBody>
//                         </Table>
//                     </TableContainer>
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={handleClose}>Close</Button>
//                 </DialogActions>
//             </Dialog>
//         </>
//     );
// };

// PurchaseLogs.propTypes = {
//     isLoading: PropTypes.bool,
//     icon: PropTypes.node,
//     label: PropTypes.string
// };

// export default PurchaseLogs;


// import PropTypes from 'prop-types';
// import { useTheme, styled } from '@mui/material/styles';
// import Avatar from '@mui/material/Avatar';
// import Box from '@mui/material/Box';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import ListItemText from '@mui/material/ListItemText';
// import Typography from '@mui/material/Typography';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';
// import Button from '@mui/material/Button';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import config from '../../config';
// import MainCard from 'ui-component/cards/MainCard';
// import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';

// // styles
// const CardWrapper = styled(MainCard)(({ theme }) => ({
//   overflow: 'hidden',
//   position: 'relative',
//   '&:after': {
//     content: '""',
//     position: 'absolute',
//     width: 210,
//     height: 210,
//     background: `linear-gradient(210.04deg, ${theme.palette.warning.dark} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
//     borderRadius: '50%',
//     top: -30,
//     right: -180
//   },
//   '&:before': {
//     content: '""',
//     position: 'absolute',
//     width: 210,
//     height: 210,
//     background: `linear-gradient(140.9deg, ${theme.palette.warning.dark} -14.02%, rgba(144, 202, 249, 0) 70.50%)`,
//     borderRadius: '50%',
//     top: -160,
//     right: -130
//   }
// }));

// const PurchaseStatus = ({ isLoading, icon, label }) => {
//   const theme = useTheme();
//   const [purchaseCount, setPurchaseCount] = useState(0);
//   const [purchaseDetails, setPurchaseDetails] = useState([]);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     axios.get(`${config.apiUrl}/cust_purch/purchases/status`)
//       .then((res) => {
//         // Count the number of pending and overdue purchases
//         const overdueCount = res.data.filter(purchase => purchase.status === 'Overdue').length;
//         setPurchaseCount(overdueCount);
//         setPurchaseDetails(res.data);
//       })
//       .catch((err) => {
//         console.log("Purchase Data can't be fetched.", err);
//       });
//   }, []);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <>
//       {isLoading ? (
//         <TotalIncomeCard />
//       ) : (
//         <CardWrapper border={false} content={false}>
//           <Box sx={{ p: 2 }}>
//             <List sx={{ py: 0 }}>
//               <ListItem
//                 alignItems="center"
//                 disableGutters
//                 sx={{ py: 0, cursor: 'pointer' }}
//                 onClick={handleClickOpen}
//               >
//                 <ListItemAvatar>
//                   <Avatar
//                     variant="rounded"
//                     sx={{
//                       ...theme.typography.commonAvatar,
//                       ...theme.typography.largeAvatar,
//                       bgcolor: 'warning.light',
//                       color: label === 'Purchase Status' ? 'error.dark' : 'warning.dark'
//                     }}
//                   >
//                     {icon}
//                   </Avatar>
//                 </ListItemAvatar>
//                 <ListItemText
//                   sx={{ py: 0, mt: 0.45, mb: 0.45 }}
//                   primary={<Typography variant="h2">{purchaseCount}</Typography>}
//                   secondary={
//                     <Typography variant="subtitle2" sx={{ color: 'grey.500', mt: 0.5 }}>
//                       Overdue Purchases
//                     </Typography>
//                   }
//                 />
//               </ListItem>
//             </List>
//           </Box>
//         </CardWrapper>
//       )}
//       <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
//         <DialogTitle>Details of Purchases</DialogTitle>
//         <DialogContent>
//           <TableContainer component={Paper}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>Customer Name</TableCell>
//                   <TableCell>Mobile</TableCell>
//                   <TableCell>Email</TableCell>
//                   <TableCell>Product</TableCell>
//                   <TableCell>Status</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {purchaseDetails.map((row) => (
//                   <TableRow key={row.cust_purch_id}>
//                     <TableCell>{row.cust_name}</TableCell>
//                     <TableCell>{row.cust_mobile}</TableCell>
//                     <TableCell>{row.cust_email}</TableCell>
//                     <TableCell>{row.pro_name}</TableCell>
//                     <TableCell>{row.status}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// };

// PurchaseStatus.propTypes = {
//   icon: PropTypes.node,
//   label: PropTypes.string,
//   isLoading: PropTypes.bool
// };

// export default PurchaseStatus;



// import PropTypes from 'prop-types';
// import { useTheme, styled } from '@mui/material/styles';
// import Avatar from '@mui/material/Avatar';
// import Box from '@mui/material/Box';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import ListItemText from '@mui/material/ListItemText';
// import Typography from '@mui/material/Typography';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';
// import Button from '@mui/material/Button';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import config from '../../config';
// import MainCard from 'ui-component/cards/MainCard';
// import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';

// // styles
// const CardWrapper = styled(MainCard)(({ theme }) => ({
//   overflow: 'hidden',
//   position: 'relative',
//   '&:after': {
//     content: '""',
//     position: 'absolute',
//     width: 210,
//     height: 210,
//     background: `linear-gradient(210.04deg, ${theme.palette.warning.dark} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
//     borderRadius: '50%',
//     top: -30,
//     right: -180
//   },
//   '&:before': {
//     content: '""',
//     position: 'absolute',
//     width: 210,
//     height: 210,
//     background: `linear-gradient(140.9deg, ${theme.palette.warning.dark} -14.02%, rgba(144, 202, 249, 0) 70.50%)`,
//     borderRadius: '50%',
//     top: -160,
//     right: -130
//   }
// }));

// const PurchaseStatus = ({ isLoading, icon, label }) => {
//   const theme = useTheme();
//   const [purchaseCount, setPurchaseCount] = useState(0);
//   const [purchaseDetails, setPurchaseDetails] = useState([]);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     axios.get(`${config.apiUrl}/cust_purch/purchases/status`)
//       .then((res) => {
//         setPurchaseCount(res.data.count);
//         setPurchaseDetails(res.data.details);
//       })
//       .catch((err) => {
//         console.log("Purchase Data can't be fetched.", err);
//       });
//   }, []);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <>
//       {isLoading ? (
//         <TotalIncomeCard />
//       ) : (
//         <CardWrapper border={false} content={false}>
//           <Box sx={{ p: 2 }}>
//             <List sx={{ py: 0 }}>
//               <ListItem
//                 alignItems="center"
//                 disableGutters
//                 sx={{ py: 0, cursor: 'pointer' }}
//                 onClick={handleClickOpen}
//               >
//                 <ListItemAvatar>
//                   <Avatar
//                     variant="rounded"
//                     sx={{
//                       ...theme.typography.commonAvatar,
//                       ...theme.typography.largeAvatar,
//                       bgcolor: 'warning.light',
//                       color: label === 'Purchase Status' ? 'error.dark' : 'warning.dark'
//                     }}
//                   >
//                     {icon}
//                   </Avatar>
//                 </ListItemAvatar>
//                 <ListItemText
//                   sx={{ py: 0, mt: 0.45, mb: 0.45 }}
//                   primary={<Typography variant="h2">{purchaseCount}</Typography>}
//                   secondary={
//                     <Typography variant="subtitle2" sx={{ color: 'grey.500', mt: 0.5 }}>
//                       Overdue Purchases
//                     </Typography>
//                   }
//                 />
//               </ListItem>
//             </List>
//           </Box>
//         </CardWrapper>
//       )}
//       <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
//         <DialogTitle>Details of Purchases</DialogTitle>
//         <DialogContent>
//           <TableContainer component={Paper}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>Customer Name</TableCell>
//                   <TableCell>Mobile</TableCell>
//                   <TableCell>Email</TableCell>
//                   <TableCell>Company</TableCell>
//                   <TableCell>Products</TableCell>
//                   <TableCell>Total Purchases</TableCell>
//                   <TableCell>Total Amount</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {purchaseDetails.map((row) => (
//                   <TableRow key={row.cust_id}>
//                     <TableCell>{row.cust_name}</TableCell>
//                     <TableCell>{row.cust_mobile}</TableCell>
//                     <TableCell>{row.cust_email}</TableCell>
//                     <TableCell>{row.cust_company}</TableCell>
//                     <TableCell>{row.products}</TableCell>
//                     <TableCell>{row.purchase_count}</TableCell>
//                     <TableCell>{row.total_amount}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// };

// PurchaseStatus.propTypes = {
//   icon: PropTypes.node,
//   label: PropTypes.string,
//   isLoading: PropTypes.bool
// };

// export default PurchaseStatus;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTheme, styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MainCard from 'ui-component/cards/MainCard';
import config from "../../config"


const CardWrapper = styled(MainCard)(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 310,
    background: `linear-gradient(210.04deg, ${theme.palette.warning.dark} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
    borderRadius: '50%',
    top: -30,
    right: -150
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(140.9deg, ${theme.palette.warning.dark} -14.02%, rgba(144, 202, 249, 0) 70.50%)`,
    borderRadius: '50%',
    top: -160,
    right: -100
  }
}));

const PurchaseStatus = () => {
  const theme = useTheme();
  const [orders, setOrders] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios.get(`${config.apiUrl}/cust_purch/api/orders`)
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.log("Orders Data can't be fetched.", err);
      });
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <><CardWrapper>
<Box sx={{ p: 0.5 }}>
        <List sx={{ py: 0 }}>
          <ListItem
            alignItems="center"
            disableGutters
            sx={{ py: 0, cursor: 'pointer' }}
            onClick={handleClickOpen}
          >
            <ListItemAvatar>
              <Avatar
                variant="rounded"
                sx={{
                  ...theme.typography.commonAvatar,
                  ...theme.typography.largeAvatar,
                  bgcolor: 'warning.light',
                  color: 'warning.dark'
                }}
              >
                O
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              sx={{ py: 0, mt: 0.45, mb: 0.45 }}
              primary={<Typography variant="h2">{orders.length}</Typography>}
              secondary={
                <Typography variant="subtitle2" sx={{ color: 'grey.500', mt: 0.5 }}>
                  Total Orders
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Box>
    </CardWrapper>
      
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>Details of Orders</DialogTitle>
        <DialogContent>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Customer Name</TableCell>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((row) => (
                  <TableRow key={row.cust_purch_id}>
                    <TableCell>{row.cust_name}</TableCell>
                    <TableCell>{row.pro_name}</TableCell>
                    <TableCell>{row.quantity}</TableCell>
                    <TableCell>{row.price}</TableCell>
                    <TableCell>{row.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PurchaseStatus;