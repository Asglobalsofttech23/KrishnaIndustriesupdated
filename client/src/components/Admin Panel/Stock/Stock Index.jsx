import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, CircularProgress, Box } from '@mui/material';
import config from '../../../config';

const StockManegement = () => {
  const [products, setProducts] = useState([]);
  const [purchases, setPurchases] = useState([]);
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const productResponse = await axios.get(`${config.apiUrl}/stock/api/products`);
        // console.log('Products:', productResponse.data);
        setProducts(productResponse.data);
  
        const purchaseResponse = await axios.get(`${config.apiUrl}/stock/api/purchase`);
        // console.log('Purchases:', purchaseResponse.data);
        setPurchases(purchaseResponse.data);
  
        const salesResponse = await axios.get(`${config.apiUrl}/stock/api/sales`);
        // console.log('Sales:', salesResponse.data);
        setSales(salesResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);

  // Calculate quantities and remaining stock
  const calculateStock = () => {
    const purchaseQuantities = purchases.reduce((acc, purchase) => {
      acc[purchase.pro_name] = (acc[purchase.pro_name] || 0) + purchase.quantity;
      return acc;
    }, {});

    const saleQuantities = sales.reduce((acc, sale) => {
      acc[sale.pro_id] = (acc[sale.pro_id] || 0) + sale.quantity;
      return acc;
    }, {});

    return products.map(product => {
      const purchaseQty = purchaseQuantities[product.pro_name] || 0;
      const saleQty = saleQuantities[product.pro_id] || 0;
      const remainingStock = purchaseQty - saleQty;
     

      return {
        ...product,
        purchaseQty,
        saleQty,
        remainingStock,
      };
    });
  };

  const stockData = calculateStock();

  return (
    <Box sx={{ padding: 3 }}>
      {loading && <CircularProgress />}
      {error && <Typography color="error">{error}</Typography>}

      <Typography variant="h1" gutterBottom>
        Stock Management
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow >
              <TableCell style={{ fontWeight:"bolder" }}>S.No</TableCell>
              <TableCell style={{ fontWeight: "bolder" }}>Product Name</TableCell>
              <TableCell style={{ fontWeight: "bolder" }}>Purchase Quantity</TableCell>
              <TableCell style={{ fontWeight: "bolder" }}>Sale Quantity</TableCell>
              <TableCell style={{ fontWeight: "bolder" }}>Remaining Stock</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stockData.map((item, index) => (
              <TableRow key={item.pro_id} style={{ fontWeight: "bold" }}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.pro_name}</TableCell>
                <TableCell>{item.purchaseQty}</TableCell>
                <TableCell>{item.saleQty}</TableCell>
                <TableCell>{item.remainingStock}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default StockManegement;
