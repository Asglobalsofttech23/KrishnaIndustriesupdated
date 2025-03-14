// import PropTypes from 'prop-types';

// // material-ui
// import { useTheme, styled } from '@mui/material/styles';
// import Avatar from '@mui/material/Avatar';
// import Box from '@mui/material/Box';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import ListItemText from '@mui/material/ListItemText';
// import Typography from '@mui/material/Typography';

// // project imports
// import MainCard from 'ui-component/cards/MainCard';
// import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
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

// // ==============================|| DASHBOARD - TOTAL INCOME LIGHT CARD ||============================== //

// const TodayRememberLeadsCount = ({ isLoading, total, icon, label }) => {
//   const theme = useTheme();
//   const [leadsCount,setLeadsCount] = useState([]);

//   useEffect(()=>{
//     axios.get(`${config.apiUrl}/leads/leadsCountForDashboard`)
//   .then((res)=>{
//     setLeadsCount(res.data);
//   })
//   .catch((err)=>{
//     console.log("Leads Data can't fetched.")
//   })
//   },[])

//   return (
//     <>
//       {isLoading ? (
//         <TotalIncomeCard />
//       ) : (
//         <CardWrapper border={false} content={false}>
//           <Box sx={{ p: 2 }}>
//             <List sx={{ py: 0 }}>
//               <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
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
//                   primary={<Typography variant="h2">{leadsCount.reminder_date_count}</Typography>}
//                   secondary={
//                     <Typography variant="subtitle2" sx={{ color: 'grey.500', mt: 0.5 }}>
//                        Today Remember Leads
//                     </Typography>
//                   }
//                 />
//               </ListItem>
//             </List>
//           </Box>
//         </CardWrapper>
//       )}
//     </>
//   );
// };

// TodayRememberLeadsCount.propTypes = {
//   icon: PropTypes.object,
//   label: PropTypes.string,
//   total: PropTypes.number,
//   isLoading: PropTypes.bool
// };

// export default TodayRememberLeadsCount;


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

// const TodayRememberLeadsCount = ({ isLoading, icon, label }) => {
//   const theme = useTheme();
//   const [leadsCount, setLeadsCount] = useState(0);
//   const [leadsDetails, setLeadsDetails] = useState([]);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     axios.get(`${config.apiUrl}/leads/callNotAttendedDashBoard`)
//       .then((res) => {
//         setLeadsCount(res.data.count);
//         setLeadsDetails(res.data.details);
//       })
//       .catch((err) => {
//         console.log("Leads Data can't be fetched.", err);
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
//                   primary={<Typography variant="h2">{leadsCount}</Typography>}
//                   secondary={
//                     <Typography variant="subtitle2" sx={{ color: 'grey.500', mt: 0.5 }}>
//                       Total Call Not Attended  Leads 
//                     </Typography>
//                   }
//                 />
//               </ListItem>
//             </List>
//           </Box>
//         </CardWrapper>
//       )}
//       <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
//         <DialogTitle>Details of Leads Not Attended</DialogTitle>
//         <DialogContent>
//           <TableContainer component={Paper}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   {/* <TableCell>Employee ID</TableCell> */}
//                   <TableCell>Leads Name</TableCell>
//                   <TableCell>Mobile</TableCell>
//                   <TableCell>Email</TableCell>
//                   <TableCell>Product</TableCell>
//                   {/* <TableCell>Company</TableCell>
//                   <TableCell>Address</TableCell>
//                   <TableCell>State</TableCell>
//                   <TableCell>City</TableCell>
//                   <TableCell>Reminder Date</TableCell> */}
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {leadsDetails.map((row) => (
//                   <TableRow key={row.follow_id}>
//                     {/* <TableCell>{row.emp_id}</TableCell> */}
//                     <TableCell>{row.leads_name}</TableCell>
//                     <TableCell>{row.leads_mobile}</TableCell>
//                     <TableCell>{row.leads_email}</TableCell>
//                     <TableCell>{row.product_name}</TableCell>
//                     {/* <TableCell>{row.leads_company}</TableCell>
//                     <TableCell>{row.leads_address}</TableCell>
//                     <TableCell>{row.leads_state}</TableCell>
//                     <TableCell>{row.leads_city}</TableCell>
//                     <TableCell>{row.reminder_date}</TableCell> */}
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

// TodayRememberLeadsCount.propTypes = {
//   icon: PropTypes.node,
//   label: PropTypes.string,
//   isLoading: PropTypes.bool
// };

// export default TodayRememberLeadsCount;


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

// const TodayRememberLeadsCount = ({ isLoading, icon, label }) => {
//   const theme = useTheme();
//   const [leadsCount, setLeadsCount] = useState(0); // State for count of leads not attended
//   const [leadsDetails, setLeadsDetails] = useState([]); // State for details of leads not attended
//   const [open, setOpen] = useState(false); // State for dialog open/close

//   // Fetch leads data on component mount
//   useEffect(() => {
//     axios.get(`${config.apiUrl}/leads/callNotAttendedDashBoard`)
//       .then((res) => {
//         setLeadsCount(res.data.count); // Set the count of leads
//         setLeadsDetails(res.data.details); // Set the details of leads
//       })
//       .catch((err) => {
//         console.log("Leads Data can't be fetched.", err); // Log error if fetch fails
//       });
//   }, []);

//   // Handle opening of the dialog
//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   // Handle closing of the dialog
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
//                   primary={<Typography variant="h2">{leadsCount}</Typography>}
//                   secondary={
//                     <Typography variant="subtitle2" sx={{ color: 'grey.500', mt: 0.5 }}>
//                       Total Call Not Attended Leads
//                     </Typography>
//                   }
//                 />
//               </ListItem>
//             </List>
//           </Box>
//         </CardWrapper>
//       )}
//       <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
//         <DialogTitle>Details of Leads Not Attended</DialogTitle>
//         <DialogContent>
//           <TableContainer component={Paper}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>Leads Name</TableCell>
//                   <TableCell>Mobile</TableCell>
//                   <TableCell>Email</TableCell>
//                   <TableCell>Product</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {leadsDetails.map((row) => (
//                   <TableRow key={row.follow_id}>
//                     <TableCell>{row.leads_name}</TableCell>
//                     <TableCell>{row.leads_mobile}</TableCell>
//                     <TableCell>{row.leads_email}</TableCell>
//                     <TableCell>{row.product_name}</TableCell>
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

// // PropTypes validation
// TodayRememberLeadsCount.propTypes = {
//   icon: PropTypes.node,
//   label: PropTypes.string,
//   isLoading: PropTypes.bool
// };

// export default TodayRememberLeadsCount;


import PropTypes from 'prop-types';
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
import { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../../config';
import MainCard from 'ui-component/cards/MainCard';
import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';

// styles
const CardWrapper = styled(MainCard)(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(210.04deg, ${theme.palette.warning.dark} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
    borderRadius: '50%',
    top: -30,
    right: -180
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(140.9deg, ${theme.palette.warning.dark} -14.02%, rgba(144, 202, 249, 0) 70.50%)`,
    borderRadius: '50%',
    top: -160,
    right: -130
  }
}));

const TodayRememberLeadsCount = ({ isLoading, icon, label }) => {
  const theme = useTheme();
  const [leadsCount, setLeadsCount] = useState(0);
  const [leadsDetails, setLeadsDetails] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios.get(`${config.apiUrl}/leads/callNotAttendedDashBoard`)
      .then((res) => {
        setLeadsCount(res.data.count);
        setLeadsDetails(res.data.details);
      })
      .catch((err) => {
        console.log("Leads Data can't be fetched.", err);
      });
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {isLoading ? (
        <TotalIncomeCard />
      ) : (
        <CardWrapper border={false} content={false}>
          <Box sx={{ p: 2 }}>
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
                      color: label === 'Meeting attends' ? 'error.dark' : 'warning.dark'
                    }}
                  >
                    {icon}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  sx={{ py: 0, mt: 0.45, mb: 0.45 }}
                  primary={<Typography variant="h2">{leadsCount}</Typography>}
                  secondary={
                    <Typography variant="subtitle2" sx={{ color: 'grey.500', mt: 0.5 }}>
                      Total Call Not Attended Leads
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </Box>
        </CardWrapper>
      )}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>Details of Leads Not Attended</DialogTitle>
        <DialogContent>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Leads Name</TableCell>
                  <TableCell>Mobile</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Product</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {leadsDetails.map((row) => (
                  <TableRow key={row.follow_id}>
                    <TableCell>{row.leads_name}</TableCell>
                    <TableCell>{row.leads_mobile}</TableCell>
                    <TableCell>{row.leads_email}</TableCell>
                    <TableCell>{row.product_name}</TableCell>
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

TodayRememberLeadsCount.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string,
  isLoading: PropTypes.bool
};

export default TodayRememberLeadsCount;
