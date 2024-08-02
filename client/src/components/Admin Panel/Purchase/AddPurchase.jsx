// import { Button, Grid, TextField } from "@mui/material";
// import React, { useState } from "react";
// import axios from "axios";
// import config from '../../../config'

// const AddPurchase = ({ onClose }) => {
//   const [formData, setFormData] = useState({
//     pro_name: "",
//     specification: "",
//     purch_address : "",
//     quantity: "",
//     price: "",
//     total: "",
//     gst : "",
//   });
//   const [errors, setErrors] = useState({
//     pro_name: "",
//     specification: "",
//     purch_address: "",
//     quantity: "",
//     price: "",
//     total: "",
//     gst : ""
//   });
//   const handleValidation = (name, value) => {
//     let errmsg = "";
//     const trimmedValue =
//       value && typeof value === "string" ? value.trim() : value;
//     switch (name) {
//       case "pro_name":
//         if (!trimmedValue) {
//           errmsg = "Product Name is Required";
//         }
//         break;
//       case "specification":
//         if (!trimmedValue) {
//           errmsg = "Specification is Required";
//         }
//         break;
//       case "purch_address":
//         if (!trimmedValue) {
//           errmsg = "Address is Required";
//         }
//         break;
//       case "quantity":
//         if (!trimmedValue) {
//           errmsg = "Quantity is Required";
//         }
//         break;
//       case "price":
//         if (!trimmedValue) {
//           errmsg = "Price is Required";
//         }
//         break;
//       case "total":
//         if (!trimmedValue) {
//           errmsg = "Total is Required";
//         }
//         break;
//       case "gst":
//         if (!trimmedValue) {
//           errmsg = "GST is Required";
//         }
//         break;
//       default:
//         break;
//     }
//     return errmsg;
//   };

//   const handleChangeInput = (e) => {
//     const { name, value } = e.target;
//     const error = handleValidation(name, value);
//     setFormData({ ...formData, [name]: value });
//     setErrors({ ...errors, [name]: error });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let formErr = {};

//     Object.keys(formData).forEach((name) => {
//       const value = formData[name];
//       const error = handleValidation(name, value);
//       if (error) {
//         formErr[name] = error;
//       }
//     });

//     if (Object.keys(formErr).length > 0) {
//       setErrors(formErr);
//       return;
//     }

//     axios
//       .post(`${config.apiUrl}/purchase/savePurchase`, formData)
//       .then((res) => {
//         onClose();
//       })
//       .catch((err) => {
//         console.log("Purchase Data is not added.", err);
//       });
//   };
//   const handleClear = () => {
//     setFormData({
//       pro_name: "",
//       specification: "",
//       purch_address: "",
//       quantity: "",
//       price: "",
//       total: "",
//       gst: "",
//     });
//     setErrors({
//       pro_name: "",
//       specification: "",
//       purch_address: "",
//       quantity: "",
//       price: "",
//       total: "",
//       gst: "",
//     });
//   };
//   return (
//     <>
//     <h1 className="text-center">Add Purchase</h1>
//       <Grid container spacing={3}>
//         <Grid item xs={6}>
//           <TextField
//           fullWidth
//             name="pro_name"
//             label="Product Name"
//             value={formData.pro_name}
//             onChange={handleChangeInput}
//             error={!!errors.pro_name}
//             helperText={errors.pro_name}
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//           fullWidth
//             name="specification"
//             label="Specification"
//             value={formData.specification}
//             onChange={handleChangeInput}
//             error={!!errors.specification}
//             helperText={errors.specification}
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//           fullWidth
//             name="purch_address"
//             label="Address"
//             value={formData.purch_address}
//             onChange={handleChangeInput}
//             error={!!errors.purch_address}
//             helperText={errors.purch_address}
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//           fullWidth
//             name="quantity"
//             label="Quantity"
//             type="number"
//             value={formData.quantity}
//             onChange={handleChangeInput}
//             error={!!errors.quantity}
//             helperText={errors.quantity}
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//           fullWidth
//             name="price"
//             label="Price"
//             type="number"
//             value={formData.price}
//             onChange={handleChangeInput}
//             error={!!errors.price}
//             helperText={errors.price}
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//           fullWidth
//             name="total"
//             label="Total"
//             type="number"
//             value={formData.total}
//             onChange={handleChangeInput}
//             error={!!errors.total}
//             helperText={errors.total}
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//           fullWidth
//             name="gst"
//             label="GST"
//             type="number"
//             value={formData.gst}
//             onChange={handleChangeInput}
//             error={!!errors.gst}
//             helperText={errors.gst}
//           />
//         </Grid>
//         <Grid item xs={12} display="flex" justifyContent="center">
//           <Button onClick={handleSubmit}>Submit</Button>
//           <Button onClick={handleClear} style={{marginLeft:'20px'}}>Clear</Button>
//         </Grid>
//       </Grid>
//     </>
//   );
// };

// export default AddPurchase;




// import { Button, Grid, TextField } from "@mui/material";
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import config from '../../../config'

// const AddPurchase = ({ onClose }) => {
//   const [formData, setFormData] = useState({
//     pro_name: "",
//     specification: "",
//     purch_address: "",
//     quantity: "",
//     price: "",
//     total: "",
//     gst: "",
//     sgst: "",
//     cgst: "",
//   });
//   const [errors, setErrors] = useState({
//     pro_name: "",
//     specification: "",
//     purch_address: "",
//     quantity: "",
//     price: "",
//     total: "",
//     gst: "",
//     sgst: "",
//     cgst: "",
//   });

//   useEffect(() => {
//     const { quantity, price, gst } = formData;

//     if (quantity && price) {
//       const total = parseFloat(quantity) * parseFloat(price);
//       setFormData((prevState) => ({
//         ...prevState,
//         total: total.toFixed(2),
//       }));
//     }

//     if (gst) {
//       const gstValue = parseFloat(gst);
//       const halfGst = (gstValue / 2).toFixed(2);
//       setFormData((prevState) => ({
//         ...prevState,
//         sgst: halfGst,
//         cgst: halfGst,
//       }));
//     }
//   }, [formData.quantity, formData.price, formData.gst]);

//   const handleValidation = (name, value) => {
//     let errmsg = "";
//     const trimmedValue =
//       value && typeof value === "string" ? value.trim() : value;
//     switch (name) {
//       case "pro_name":
//         if (!trimmedValue) {
//           errmsg = "Product Name is Required";
//         }
//         break;
//       case "specification":
//         if (!trimmedValue) {
//           errmsg = "Specification is Required";
//         }
//         break;
//       case "purch_address":
//         if (!trimmedValue) {
//           errmsg = "Address is Required";
//         }
//         break;
//       case "quantity":
//         if (!trimmedValue) {
//           errmsg = "Quantity is Required";
//         } else if (isNaN(trimmedValue) || trimmedValue <= 0) {
//           errmsg = "Quantity must be a positive number";
//         }
//         break;
//       case "price":
//         if (!trimmedValue) {
//           errmsg = "Price is Required";
//         } else if (isNaN(trimmedValue) || trimmedValue <= 0) {
//           errmsg = "Price must be a positive number";
//         }
//         break;
//       case "total":
//         if (!trimmedValue) {
//           errmsg = "Total is Required";
//         }
//         break;
//       case "gst":
//         if (!trimmedValue) {
//           errmsg = "GST is Required";
//         } else if (isNaN(trimmedValue) || trimmedValue < 0) {
//           errmsg = "GST must be a non-negative number";
//         }
//         break;
//       default:
//         break;
//     }
//     return errmsg;
//   };

//   const handleChangeInput = (e) => {
//     const { name, value } = e.target;
//     const error = handleValidation(name, value);
//     setFormData({ ...formData, [name]: value });
//     setErrors({ ...errors, [name]: error });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let formErr = {};

//     Object.keys(formData).forEach((name) => {
//       const value = formData[name];
//       const error = handleValidation(name, value);
//       if (error) {
//         formErr[name] = error;
//       }
//     });

//     if (Object.keys(formErr).length > 0) {
//       setErrors(formErr);
//       return;
//     }

//     axios
//       .post(`${config.apiUrl}/purchase/savePurchase`, formData)
//       .then((res) => {
//         onClose();
//       })
//       .catch((err) => {
//         console.log("Purchase Data is not added.", err);
//       });
//   };

//   const handleClear = () => {
//     setFormData({
//       pro_name: "",
//       specification: "",
//       purch_address: "",
//       quantity: "",
//       price: "",
//       total: "",
//       gst: "",
//       sgst: "",
//       cgst: "",
//     });
//     setErrors({
//       pro_name: "",
//       specification: "",
//       purch_address: "",
//       quantity: "",
//       price: "",
//       total: "",
//       gst: "",
//       sgst: "",
//       cgst: "",
//     });
//   };

//   return (
//     <>
//       <h1 className="text-center">Add Purchase</h1>
//       <Grid container spacing={3}>
//         <Grid item xs={6}>
//           <TextField
//             fullWidth
//             name="pro_name"
//             label="Product Name"
//             value={formData.pro_name}
//             onChange={handleChangeInput}
//             error={!!errors.pro_name}
//             helperText={errors.pro_name}
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             fullWidth
//             name="specification"
//             label="Specification"
//             value={formData.specification}
//             onChange={handleChangeInput}
//             error={!!errors.specification}
//             helperText={errors.specification}
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             fullWidth
//             name="purch_address"
//             label="Address"
//             value={formData.purch_address}
//             onChange={handleChangeInput}
//             error={!!errors.purch_address}
//             helperText={errors.purch_address}
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             fullWidth
//             name="quantity"
//             label="Quantity"
//             type="number"
//             value={formData.quantity}
//             onChange={handleChangeInput}
//             error={!!errors.quantity}
//             helperText={errors.quantity}
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             fullWidth
//             name="price"
//             label="Price"
//             type="number"
//             value={formData.price}
//             onChange={handleChangeInput}
//             error={!!errors.price}
//             helperText={errors.price}
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             fullWidth
//             name="total"
//             label="Total"
//             type="number"
//             value={formData.total}
//             InputProps={{ readOnly: true }}
//             error={!!errors.total}
//             helperText={errors.total}
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             fullWidth
//             name="gst"
//             label="GST"
//             type="number"
//             value={formData.gst}
//             onChange={handleChangeInput}
//             error={!!errors.gst}
//             helperText={errors.gst}
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             fullWidth
//             name="sgst"
//             label="SGST"
//             type="number"
//             value={formData.sgst}
//             InputProps={{ readOnly: true }}
//             error={!!errors.sgst}
//             helperText={errors.sgst}
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             fullWidth
//             name="cgst"
//             label="CGST"
//             type="number"
//             value={formData.cgst}
//             InputProps={{ readOnly: true }}
//             error={!!errors.cgst}
//             helperText={errors.cgst}
//           />
//         </Grid>
//         <Grid item xs={12} display="flex" justifyContent="center">
//           <Button onClick={handleSubmit}>Submit</Button>
//           <Button onClick={handleClear} style={{ marginLeft: '20px' }}>Clear</Button>
//         </Grid>
//       </Grid>
//     </>
//   );
// };

// export default AddPurchase;


// new





// import { Button, Grid, TextField } from '@mui/material';
// import axios from 'axios';
// import React, { useState } from 'react';
// import config from '../../../config';

// const AddPurchase = ({ onClose }) => {
//   const [purchaseData, setPurchaseData] = useState({
//     pro_name: '',
//     specification: '',
//     purch_address: '',
//     quantity: '',
//     price: '',
//     total: '',
//     gst: '',
//     cgst: '',
//     sgst: ''
//   });

//   const handleChangeInput = (e) => {
//     const { name, value } = e.target;
//     setPurchaseData({ ...purchaseData, [name]: value });
//     if (name === 'price' || name === 'quantity' || name === 'gst') {
//       calculateTotal({ ...purchaseData, [name]: value });
//     }
//   };

//   // const calculateTotal = (data) => {
//   //   const quantity = parseFloat(data.quantity) || 0;
//   //   const price = parseFloat(data.price) || 0;
//   //   const gst = parseFloat(data.gst) || 0;
//   //   const total = quantity * price;
//   //   const cgst = (total * gst) / 200; // 50% of GST
//   //   const sgst = (total * gst) / 200; // 50% of GST
//   //   setPurchaseData({ ...data, total: total + cgst + sgst, cgst, sgst });
//   // };
//   const calculateTotal = (data) => {
//     const quantity = parseFloat(data.quantity) || 0;
//     const price = parseFloat(data.price) || 0;
//     const gst = parseFloat(data.gst) || 0;
  
//     // Calculate total before GST
//     const totalBeforeGst = quantity * price;
  
//     // Calculate CGST and SGST
//     const cgst = Math.round((totalBeforeGst * gst) / 200); // 50% of GST
//     const sgst = Math.round((totalBeforeGst * gst) / 200); // 50% of GST
  
//     // Calculate total including GST
//     const total = Math.round(totalBeforeGst + cgst + sgst);
  
//     // Update the state with whole numbers
//     setPurchaseData({ ...data, total, cgst, sgst });
//   };
//   const handleAddPurchase = (e) => {
//     e.preventDefault();
//     axios.post(`${config.apiUrl}/purchase/savePurchase`, purchaseData)
//       .then((res) => {
//         onClose();
//       })
//       .catch((err) => {
//         console.log('Purchase Data is not added.', err);
//       });
//   };

//   return (
//     <div>
//       <h1 className='text-center'>Add Purchase</h1>
//       <Grid container spacing={3} className='mt-3'>
//         <Grid item xs={6}>
//           <TextField
//             fullWidth
//             name='pro_name'
//             label='Product Name'
//             onChange={handleChangeInput}
//             value={purchaseData.pro_name}
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             fullWidth
//             name='specification'
//             label='Specification'
//             onChange={handleChangeInput}
//             value={purchaseData.specification}
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             fullWidth
//             name='purch_address'
//             label='Address'
//             onChange={handleChangeInput}
//             value={purchaseData.purch_address}
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             fullWidth
//             name='quantity'
//             label='Quantity'
//             onChange={handleChangeInput}
//             value={purchaseData.quantity}
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             fullWidth
//             name='price'
//             label='Price'
//             onChange={handleChangeInput}
//             value={purchaseData.price}
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             fullWidth
//             name='gst'
//             label='GST'
//             onChange={handleChangeInput}
//             value={purchaseData.gst}
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             fullWidth
//             name='total'
//             label='Total'
//             value={purchaseData.total}
//             disabled
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             fullWidth
//             name='cgst'
//             label='CGST'
//             value={purchaseData.cgst}
//             disabled
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             fullWidth
//             name='sgst'
//             label='SGST'
//             value={purchaseData.sgst}
//             disabled
//           />
//         </Grid>
//         <Grid item xs={12} display='flex' justifyContent='center'>
//           <Button onClick={handleAddPurchase}>Submit</Button>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default AddPurchase;




// new


import { Button, Grid, TextField, InputAdornment } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import config from '../../../config';

const AddPurchase = ({ onClose }) => {
  const [purchaseData, setPurchaseData] = useState({
    pro_name: '',
    specification: '',
    purch_address: '',
    quantity: '',
    price: '',
    total: '',
    gst: 16,  // Default GST is set to 16
    cgst: 8,
    sgst: 8
  });

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    const newData = { ...purchaseData, [name]: value };
    setPurchaseData(newData);

    if (name === 'price' || name === 'quantity' || name === 'gst') {
      calculateTotal(newData);
    }
  };

  const calculateTotal = (data) => {
    const quantity = parseFloat(data.quantity) || 0;
    const price = parseFloat(data.price) || 0;
    const gst = parseFloat(data.gst) || 0;

    const totalBeforeGst = quantity * price;

    const cgst = Math.round((totalBeforeGst * gst) / 200);
    const sgst = Math.round((totalBeforeGst * gst) / 200);

    const total = Math.round(totalBeforeGst + cgst + sgst);

    setPurchaseData({ ...data, total, cgst, sgst });
  };

  const handleAddPurchase = (e) => {
    e.preventDefault();
    axios.post(`${config.apiUrl}/purchase/savePurchase`, purchaseData)
      .then((res) => {
        onClose();
      })
      .catch((err) => {
        console.log('Purchase Data is not added.', err);
      });
  };

  return (
    <div>
      <h1 className='text-center'>Add Purchase</h1>
      <Grid container spacing={3} className='mt-3'>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name='pro_name'
            label='Product Name'
            onChange={handleChangeInput}
            value={purchaseData.pro_name}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name='specification'
            label='Specification'
            onChange={handleChangeInput}
            value={purchaseData.specification}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name='purch_address'
            label='Address'
            onChange={handleChangeInput}
            value={purchaseData.purch_address}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name='quantity'
            label='Quantity'
            type='number'
            onChange={handleChangeInput}
            value={purchaseData.quantity}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name='price'
            label='Price'
            type='number'
            onChange={handleChangeInput}
            value={purchaseData.price}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name='gst'
            label='GST'
            type='number'
            onChange={handleChangeInput}
            value={purchaseData.gst}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name='total'
            label='Total'
            type='number'
            value={purchaseData.total}
            disabled
            InputProps={{
              startAdornment: <InputAdornment position="start">₹</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name='cgst'
            label='CGST'
            type='number'
            value={purchaseData.cgst}
            disabled
            InputProps={{
              startAdornment: <InputAdornment position="start">₹</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name='sgst'
            label='SGST'
            type='number'
            value={purchaseData.sgst}
            disabled
            InputProps={{
              startAdornment: <InputAdornment position="start">₹</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={12} display='flex' justifyContent='center'>
          <Button onClick={handleAddPurchase}>Submit</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddPurchase;