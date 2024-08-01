// import PropTypes from 'prop-types';

// // material-ui
// import { styled, useTheme } from '@mui/material/styles';
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

// // assets
// import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import config from '../../config';

// // styles
// const CardWrapper = styled(MainCard)(({ theme }) => ({
//   backgroundColor: theme.palette.primary.dark,
//   color: theme.palette.primary.light,
//   overflow: 'hidden',
//   position: 'relative',
//   '&:after': {
//     content: '""',
//     position: 'absolute',
//     width: 210,
//     height: 210,
//     background: `linear-gradient(210.04deg, ${theme.palette.primary[200]} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
//     borderRadius: '50%',
//     top: -30,
//     right: -180
//   },
//   '&:before': {
//     content: '""',
//     position: 'absolute',
//     width: 210,
//     height: 210,
//     background: `linear-gradient(140.9deg, ${theme.palette.primary[200]} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,
//     borderRadius: '50%',
//     top: -160,
//     right: -130
//   }
// }));

// // ==============================|| DASHBOARD - TOTAL INCOME DARK CARD ||============================== //

// const TodayFlwLeadsCount = ({ isLoading }) => {
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
//                       bgcolor: 'primary.800',
//                       color: '#fff'
//                     }}
//                   >
//                     <TableChartOutlinedIcon fontSize="inherit" />
//                   </Avatar>
//                 </ListItemAvatar>
//                 <ListItemText
//                   sx={{ py: 0, my: 0.45 }}
//                   primary={
//                     <Typography variant="h2" sx={{ color: '#fff' }}>
//                       {leadsCount.created_at_count}
//                     </Typography>
//                   }
//                   secondary={
//                     <Typography variant="subtitle2" sx={{ color: 'primary.light', mt: 0.25 }}>
//                       Today Follow Leads
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

// TodayFlwLeadsCount.propTypes = {
//   isLoading: PropTypes.bool
// };

// export default TodayFlwLeadsCount;



// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import axios from 'axios';

// // material-ui
// import { styled, useTheme } from '@mui/material/styles';
// import {
//   Avatar,
//   Box,
//   List,
//   ListItem,
//   ListItemAvatar,
//   ListItemText,
//   Typography,
//   Tooltip,
//   Modal,
//   Paper
// } from '@mui/material';

// // project imports
// import MainCard from 'ui-component/cards/MainCard';
// import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';
// import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
// import config from '../../config'; // Ensure config has the correct apiUrl

// // styles
// const CardWrapper = styled(MainCard)(({ theme }) => ({
//   backgroundColor: theme.palette.primary.dark,
//   color: theme.palette.primary.light,
//   overflow: 'hidden',
//   position: 'relative',
//   '&:after': {
//     content: '""',
//     position: 'absolute',
//     width: 210,
//     height: 210,
//     background: `linear-gradient(210.04deg, ${theme.palette.primary[200]} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
//     borderRadius: '50%',
//     top: -30,
//     right: -180,
//   },
//   '&:before': {
//     content: '""',
//     position: 'absolute',
//     width: 210,
//     height: 210,
//     background: `linear-gradient(140.9deg, ${theme.palette.primary[200]} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,
//     borderRadius: '50%',
//     top: -160,
//     right: -130,
//   },
// }));

// const StyledModal = styled(Modal)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledPaper = styled(Paper)(({ theme }) => ({
//   position: 'absolute',
//   width: 400,
//   backgroundColor: theme.palette.background.paper,
//   border: '2px solid #000',
//   boxShadow: theme.shadows[5],
//   padding: theme.spacing(4),
//   outline: 'none',
//   borderRadius: theme.shape.borderRadius,
// }));

// const TodayFlwLeadsCount = ({ isLoading }) => {
//   const theme = useTheme();
//   const [leadsCount, setLeadsCount] = useState({});
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     axios.get(`${config.apiUrl}/leadsCountForDashboard`)
//       .then((res) => {
//         setLeadsCount(res.data);
//       })
//       .catch((err) => {
//         console.log("Leads Data can't be fetched:", err);
//       });
//   }, []);

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const leadNames = leadsCount.lead_names ? leadsCount.lead_names.split(',').join(', ') : '';
//   const leadMobiles = leadsCount.lead_mobiles ? leadsCount.lead_mobiles.split(',').join(', ') : '';

//   return (
//     <>
//       {isLoading ? (
//         <TotalIncomeCard />
//       ) : (
//         <CardWrapper border={false} content={false}>
//           <Tooltip title={`Leads: ${leadNames} | Mobile Numbers: ${leadMobiles}`}>
//             <Box sx={{ p: 2 }} onClick={handleOpen}>
//               <List sx={{ py: 0 }}>
//                 <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
//                   <ListItemAvatar>
//                     <Avatar
//                       variant="rounded"
//                       sx={{
//                         ...theme.typography.commonAvatar,
//                         ...theme.typography.largeAvatar,
//                         bgcolor: 'primary.800',
//                         color: '#fff',
//                       }}
//                     >
//                       <TableChartOutlinedIcon fontSize="inherit" />
//                     </Avatar>
//                   </ListItemAvatar>
//                   <ListItemText
//                     sx={{ py: 0, my: 0.45 }}
//                     primary={
//                       <Typography variant="h2" sx={{ color: '#fff' }}>
//                         {leadsCount.created_at_count}
//                       </Typography>
//                     }
//                     secondary={
//                       <Typography
//                         variant="subtitle2"
//                         sx={{ color: 'primary.light', mt: 0.25 }}
//                       >
//                         Today Follow Leads
//                       </Typography>
//                     }
//                   />
//                 </ListItem>
//               </List>
//             </Box>
//           </Tooltip>

//           <StyledModal open={open} onClose={handleClose}>
//             <StyledPaper>
//               <Typography variant="h6" component="h2">
//                 Today Following Leads
//               </Typography>
//               <Typography sx={{ mt: 2 }}>
//                 <strong>Lead Count:</strong> {leadsCount.created_at_count}
//               </Typography>
//               <Typography sx={{ mt: 2 }}>
//                 <strong>Leads:</strong> {leadNames}
//               </Typography>
//               <Typography sx={{ mt: 2 }}>
//                 <strong>Mobile Numbers:</strong> {leadMobiles}
//               </Typography>
//             </StyledPaper>
//           </StyledModal>
//         </CardWrapper>
//       )}
//     </>
//   );
// };

// TodayFlwLeadsCount.propTypes = {
//   isLoading: PropTypes.bool,
// };

// export default TodayFlwLeadsCount;



















// import PropTypes from 'prop-types';
// import { styled, useTheme } from '@mui/material/styles';
// import Avatar from '@mui/material/Avatar';
// import Box from '@mui/material/Box';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import ListItemText from '@mui/material/ListItemText';
// import Typography from '@mui/material/Typography';
// import Tooltip from '@mui/material/Tooltip';
// import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import config from '../../config';
// import MainCard from 'ui-component/cards/MainCard';
// import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';

// // Styles
// const CardWrapper = styled(MainCard)(({ theme }) => ({
//   backgroundColor: theme.palette.primary.dark,
//   color: theme.palette.primary.light,
//   overflow: 'hidden',
//   position: 'relative',
//   '&:after': {
//     content: '""',
//     position: 'absolute',
//     width: 210,
//     height: 210,
//     background: `linear-gradient(210.04deg, ${theme.palette.primary[200]} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
//     borderRadius: '50%',
//     top: -30,
//     right: -180
//   },
//   '&:before': {
//     content: '""',
//     position: 'absolute',
//     width: 210,
//     height: 210,
//     background: `linear-gradient(140.9deg, ${theme.palette.primary[200]} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,
//     borderRadius: '50%',
//     top: -160,
//     right: -130
//   }
// }));

// const TodayFlwLeadsCount = ({ isLoading }) => {
//   const theme = useTheme();
//   const [leadsCount, setLeadsCount] = useState({});
//   const [hovered, setHovered] = useState(false);

//   useEffect(() => {
//     axios.get(`${config.apiUrl}/leads/leadsCountForDashboard`)
//       .then((res) => {
//         setLeadsCount(res.data);
//       })
//       .catch((err) => {
//         console.log("Leads Data can't be fetched.");
//       });
//   }, []);

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
//                 sx={{ py: 0, '&:hover': { backgroundColor: theme.palette.primary.light } }}
//                 onMouseEnter={() => setHovered(true)}
//                 onMouseLeave={() => setHovered(false)}
//                 onClick={() => alert(`Details: ${leadsCount.leads_details}`)}
//               >
//                 <ListItemAvatar>
//                   <Avatar
//                     variant="rounded"
//                     sx={{
//                       ...theme.typography.commonAvatar,
//                       ...theme.typography.largeAvatar,
//                       bgcolor: 'primary.800',
//                       color: '#fff'
//                     }}
//                   >
//                     <TableChartOutlinedIcon fontSize="inherit" />
//                   </Avatar>
//                 </ListItemAvatar>
//                 <ListItemText
//                   sx={{ py: 0, my: 0.45 }}
//                   primary={
//                     <Typography variant="h2" sx={{ color: '#fff' }}>
//                       {leadsCount.created_at_count}
//                     </Typography>
//                   }
//                   secondary={
//                     <Typography variant="subtitle2" sx={{ color: 'primary.light', mt: 0.25 }}>
//                       Today Follow Leads
//                     </Typography>
//                   }
//                 />
//               </ListItem>
//             </List>
//           </Box>
//           {hovered && (
//             <Box sx={{ p: 2, backgroundColor: theme.palette.primary.main, color: '#fff', borderRadius: '4px' }}>
//               <Typography variant="subtitle2">
//                 {leadsCount.leads_details}
//               </Typography>
//             </Box>
//           )}
//         </CardWrapper>
//       )}
//     </>
//   );
// };

// TodayFlwLeadsCount.propTypes = {
//   isLoading: PropTypes.bool
// };

// export default TodayFlwLeadsCount;



import PropTypes from 'prop-types';
import { styled, useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../../config';
import MainCard from 'ui-component/cards/MainCard';
import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';
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

// Styles
const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.primary.light,
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(210.04deg, ${theme.palette.primary[200]} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
    borderRadius: '50%',
    top: -30,
    right: -180
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(140.9deg, ${theme.palette.primary[200]} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,
    borderRadius: '50%',
    top: -160,
    right: -130
  }
}));

const TodayFlwLeadsCount = ({ isLoading }) => {
  const theme = useTheme();
  const [leadsCount, setLeadsCount] = useState({});
  const [open, setOpen] = useState(false);
  const [leadsDetails, setLeadsDetails] = useState([]);

  useEffect(() => {
    axios.get(`${config.apiUrl}/leads/leadsCountForDashboard`)
      .then((res) => {
        setLeadsCount(res.data);
        // Parse leads details string into an array of objects
        if (res.data.leads_details) {
          const detailsArray = res.data.leads_details.split('; ').map(detail => {
            const [emp_id, leads_name, leads_mobile] = detail.split(':');
            return { emp_id, leads_name, leads_mobile };
          });
          setLeadsDetails(detailsArray);
        }
      })
      .catch((err) => {
        console.log("Leads Data can't be fetched.");
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
                sx={{ py: 0, '&:hover': { backgroundColor: theme.palette.primary200 } }}
                onClick={handleClickOpen}
              >
                <ListItemAvatar>
                  <Avatar
                    variant="rounded"
                    sx={{
                      ...theme.typography.commonAvatar,
                      ...theme.typography.largeAvatar,
                      bgcolor: 'primary.800',
                      color: '#fff'
                    }}
                  >
                    <TableChartOutlinedIcon fontSize="inherit" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  sx={{ py: 0, my: 0.45 }}
                  primary={
                    <Typography variant="h2" sx={{ color: '#fff' }}>
                      {leadsCount.created_at_count}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="subtitle2" sx={{ color: 'primary.light', mt: 0.25 }}>
                      Today Follow Leads
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </Box>
        </CardWrapper>
      )}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>Today's Follow Leads</DialogTitle>
        <DialogContent>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Employeee</TableCell>
                  <TableCell>Leads Name</TableCell>
                  <TableCell>Mobile</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {leadsDetails.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.emp_id}</TableCell>
                    <TableCell>{row.leads_name}</TableCell>
                    <TableCell>{row.leads_mobile}</TableCell>
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

TodayFlwLeadsCount.propTypes = {
  isLoading: PropTypes.bool
};

export default TodayFlwLeadsCount;
// import PropTypes from 'prop-types';
// import { styled, useTheme } from '@mui/material/styles';
// import Avatar from '@mui/material/Avatar';
// import Box from '@mui/material/Box';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import ListItemText from '@mui/material/ListItemText';
// import Typography from '@mui/material/Typography';
// import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import config from '../../config';
// import MainCard from 'ui-component/cards/MainCard';
// import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';
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

// // Styles
// const CardWrapper = styled(MainCard)(({ theme }) => ({
//   backgroundColor: theme.palette.primary.dark,
//   color: theme.palette.primary.light,
//   overflow: 'hidden',
//   position: 'relative',
//   '&:after': {
//     content: '""',
//     position: 'absolute',
//     width: 210,
//     height: 210,
//     background: `linear-gradient(210.04deg, ${theme.palette.primary[200]} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
//     borderRadius: '50%',
//     top: -30,
//     right: -180
//   },
//   '&:before': {
//     content: '""',
//     position: 'absolute',
//     width: 210,
//     height: 210,
//     background: `linear-gradient(140.9deg, ${theme.palette.primary[200]} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,
//     borderRadius: '50%',
//     top: -160,
//     right: -130
//   }
// }));

// const TodayFlwLeadsCount = ({ isLoading }) => {
//   const theme = useTheme();
//   const [leadsCount, setLeadsCount] = useState({});
//   const [open, setOpen] = useState(false);
//   const [leadsDetails, setLeadsDetails] = useState([]);
//   const [employees, setEmployees] = useState({});

//   useEffect(() => {
//     // Fetch leads count and details
//     axios.get(`${config.apiUrl}/leads/leadsCountForDashboard`)
//       .then((res) => {
//         setLeadsCount(res.data);

//         // Fetch employee details based on emp_ids
//         if (res.data.leads_details) {
//           const detailsArray = JSON.parse(res.data.leads_details);
//           setLeadsDetails(detailsArray);
//         }
//       })
//       .catch((err) => {
//         console.log("Leads Data can't be fetched.", err);
//       });
//   }, []);

//   useEffect(() => {
//     if (Object.keys(leadsCount).length > 0) {
//       // Fetch employee data only if leadsCount is not empty
//       axios.get(`${config.apiUrl}/leads/employees`)
//         .then(empRes => {
//           const empMap = empRes.data.reduce((acc, emp) => {
//             acc[emp.emp_id] = emp.emp_name;
//             return acc;
//           }, {});
//           setEmployees(empMap);
//         })
//         .catch((err) => {
//           console.log("Employee Data can't be fetched.", err);
//         });
//     }
//   }, [leadsCount]);

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
//                 sx={{ py: 0, '&:hover': { backgroundColor: theme.palette.primary200 } }}
//                 onClick={handleClickOpen}
//               >
//                 <ListItemAvatar>
//                   <Avatar
//                     variant="rounded"
//                     sx={{
//                       ...theme.typography.commonAvatar,
//                       ...theme.typography.largeAvatar,
//                       bgcolor: 'primary.800',
//                       color: '#fff'
//                     }}
//                   >
//                     <TableChartOutlinedIcon fontSize="inherit" />
//                   </Avatar>
//                 </ListItemAvatar>
//                 <ListItemText
//                   sx={{ py: 0, my: 0.45 }}
//                   primary={
//                     <Typography variant="h2" sx={{ color: '#fff' }}>
//                       {leadsCount.created_at_count}
//                     </Typography>
//                   }
//                   secondary={
//                     <Typography variant="subtitle2" sx={{ color: 'primary.light', mt: 0.25 }}>
//                       Today Follow Leads
//                     </Typography>
//                   }
//                 />
//               </ListItem>
//             </List>
//           </Box>
//         </CardWrapper>
//       )}
//       <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
//         <DialogTitle>Today's Follow Leads</DialogTitle>
//         <DialogContent>
//           <TableContainer component={Paper}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>Employee Name</TableCell>
//                   <TableCell>Leads Name</TableCell>
//                   <TableCell>Mobile</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {leadsDetails.map((row, index) => (
//                   <TableRow key={index}>
//                     <TableCell>{employees[row.emp_id] || 'Unknown'}</TableCell>
//                     <TableCell>{row.leads_name}</TableCell>
//                     <TableCell>{row.leads_mobile}</TableCell>
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

// TodayFlwLeadsCount.propTypes = {
//   isLoading: PropTypes.bool
// };

// export default TodayFlwLeadsCount;
