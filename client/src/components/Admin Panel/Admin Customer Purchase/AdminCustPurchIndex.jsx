import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  FormControl,
  Grid,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "../../Search Option/Search";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import AdminAddCustPurch from "./AdminAddCustPurch";
import AdminUpdateCustPurch from "./AdminUpdateCustPurch";
import AdminPurchaseInvoice from "./AdminPurchaseInvoice"; //
import config from "../../../config";

const AdminCustPurchIndex = () => {
  const [custPurchData, setCustPurchData] = useState([]);
  const [searchCustPurchData, setSearchCustPurchData] = useState([]);
  const [dataPerPage, setDataPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [openNew, setOpenNew] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [openDlt, setOpenDlt] = useState(false);
  const [openInvoice, setOpenInvoice] = useState(false); // State for invoice dialog
  const [updateData, setUpdateData] = useState([]);
  const [dltData, setDltData] = useState();
  const [invoiceData, setInvoiceData] = useState(); // State for selected invoice data

  useEffect(() => {
    axios
      .get(`${config.apiUrl}/cust_purch/getCustPurchDataForAdmin`)
      .then((res) => {
        setCustPurchData(res.data);
        setSearchCustPurchData(res.data);
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
    axios
      .delete(`${config.apiUrl}/cust_purch/deleteCustPurch/${dltData}`)
      .then((res) => {
        setOpenDlt(false);
      })
      .catch((err) => {
        console.log("Error deleting data. Please try again later.");
      });
  };

  const handleInvoice = (id) => {
    const selectInvoiceData = custPurchData.find((cust_purch) => cust_purch.cust_purch_id === id);
    if (selectInvoiceData) {
      setInvoiceData(selectInvoiceData);
      setOpenInvoice(true);
    }
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

  const firstIndexOfData = (currentPage - 1) * dataPerPage;
  const lastIndexOfData = currentPage * dataPerPage;
  const currentData = searchCustPurchData.slice(firstIndexOfData, lastIndexOfData);

  return (
    <>
      <h1 className="text-center">Customer Index</h1>
      <Grid container spacing={2} className="mt-3">
        <Grid item xs={4} display="flex" justifyContent="center">
          <Button onClick={() => setOpenNew(true)}>Purchase Product</Button>
        </Grid>
        <Grid item xs={4} display="flex" justifyContent="center">
          <Search data={custPurchData} setData={setSearchCustPurchData} />
        </Grid>
        <Grid item xs={4} display="flex" justifyContent="center">
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
      <TableContainer component={Paper} className="mt-4">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}>S.No</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Customer Name</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Customer Mobile</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Customer Email</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Product Name</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Quantity</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Price</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Payment Type</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>payment_amount</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Balance</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Total</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentData.map((cust_purch, index) => (
              <TableRow key={cust_purch.cust_purch_id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{cust_purch.cust_name}</TableCell>
                <TableCell>{cust_purch.cust_mobile}</TableCell>
                <TableCell>{cust_purch.cust_email}</TableCell>
                <TableCell>{cust_purch.pro_name}</TableCell>
                <TableCell>{cust_purch.quantity}</TableCell>
                <TableCell>{cust_purch.price}</TableCell>
                <TableCell>{cust_purch.payment_type}</TableCell>
                <TableCell>{cust_purch.payment_amount}</TableCell>
                <TableCell>{cust_purch.balance}</TableCell>
                <TableCell>{cust_purch.total}</TableCell>
                <TableCell>
                  <Button onClick={() => handleInvoice(cust_purch.cust_purch_id)}>Invoice</Button>
                  <Button onClick={() => handleUpdate(cust_purch.cust_purch_id)}>Edit</Button>
                  <Button onClick={() => handleDlt(cust_purch.cust_purch_id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Grid container spacing={2} display="flex" justifyContent="center" className="mt-4">
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(custPurchData.length / dataPerPage)}
            page={currentPage}
            onChange={(e, value) => setCurrentPage(value)}
            size="small"
            style={{ cursor: "pointer", "&:hover": { backgroundColor: "transparent" } }}
          />
        </Stack>
      </Grid>

      <Dialog open={openNew} onClose={() => setOpenNew(false)}>
        <DialogContent>
          <AdminAddCustPurch onClose={() => setOpenNew(false)} />
        </DialogContent>
      </Dialog>

      <Dialog open={openUpdate} onClose={() => setOpenUpdate(false)}>
        <DialogContent>
          <AdminUpdateCustPurch data={updateData} onClose={() => setOpenUpdate(false)} />
        </DialogContent>
      </Dialog>

      <Dialog open={openDlt} onClose={() => setOpenDlt(false)}>
        <DialogContent>
          <h4>Are you sure you want to delete?</h4>
        </DialogContent>
        <DialogActions>
          <Button onClick={confirmDlt}>Yes</Button>
          <Button onClick={() => setOpenDlt(false)}>No</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openInvoice} onClose={() => setOpenInvoice(false)}>
        <DialogContent>
          <AdminPurchaseInvoice data={invoiceData} onClose={() => setOpenInvoice(false)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => window.print()}>Print</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AdminCustPurchIndex;