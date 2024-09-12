import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';

function BnHForm() {
  const [purchasePrice, setPurchasePrice] = useState('');
  const [wholesaleFee, setWholesaleFee] = useState('');
  const [otherFees, setOtherFees] = useState('');

  const closingCosts = purchasePrice ? parseFloat(purchasePrice) * 0.08 : 0;
  const titleCosts = purchasePrice ? parseFloat(purchasePrice) * 0.0055 : 0;
  const inspectionFees = purchasePrice ? parseFloat(purchasePrice) * 0.02 : 0;
  const realtorCommissions = purchasePrice ? parseFloat(purchasePrice) * 0.03 : 0; // added
  const totalWholesaleFee = wholesaleFee ? parseFloat(wholesaleFee) : 0;
  const totalOtherFees = otherFees ? parseFloat(otherFees) : 0;

  const sellingPrice = purchasePrice ? parseFloat(purchasePrice) + closingCosts + titleCosts + inspectionFees + realtorCommissions + totalWholesaleFee + totalOtherFees : 0;

  const handlePurchasePriceChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value)) {
      setPurchasePrice(value);
    }
  };

  const handleWholesaleFeeChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value)) {
      setWholesaleFee(value);
    }
  };

  const handleOtherFeesChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value)) {
      setOtherFees(value);
    }
  };

  return (
    <Container maxWidth="md">
      <Card style={{ boxShadow: '0 3px 10px rgb(0, 0, 0)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <InputLabel id="purchase-price-label" htmlFor="purchase-price">Purchase Price (Enter Amt)</InputLabel>
              <TextField
                id="purchase-price"
                type="text"
                onChange={handlePurchasePriceChange}
                value={purchasePrice}
                placeholder="Enter Purchase Price"
                aria-labelledby="purchase-price-label"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel id="realtor-commissions-label" htmlFor="realtor-commissions">Realtor Commissions (3%)</InputLabel>
              <TextField
                id="realtor-commissions"
                type="text"
                InputProps={{
                  readOnly: true,
                }}
                value={realtorCommissions.toFixed(2)}
                aria-labelledby="realtor-commissions-label"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel id="closing-costs-label" htmlFor="closing-costs">Closing Costs (8%)</InputLabel>
              <TextField
                id="closing-costs"
                type="text"
                InputProps={{
                  readOnly: true,
                }}
                value={closingCosts.toFixed(2)}
                aria-labelledby="closing-costs-label"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel id="title-costs-label" htmlFor="title-costs">Title Costs (0.55%)</InputLabel>
              <TextField
                id="title-costs"
                type="text"
                InputProps={{
                  readOnly: true,
                }}
                value={titleCosts.toFixed(2)}
                aria-labelledby="title-costs-label"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel id="inspection-fees-label" htmlFor="inspection-fees">Inspection Fees (2%)</InputLabel>
              <TextField
                id="inspection-fees"
                type="text"
                InputProps={{
                  readOnly: true,
                }}
                value={inspectionFees.toFixed(2)}
                aria-labelledby="inspection-fees-label"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel id="wholesale-fee-label" htmlFor="wholesale-fee">Wholesale Fee (Enter Amt)</InputLabel>
              <TextField
                id="wholesale-fee"
                type="text"
                onChange={handleWholesaleFeeChange}
                value={wholesaleFee}
                placeholder="Enter Wholesale Fee if any"
                aria-labelledby="wholesale-fee-label"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel id="other-fees-label" htmlFor="other-fees">Other Fees (If Needed)</InputLabel>
              <TextField
                id="other-fees"
                type="text"
                onChange={handleOtherFeesChange}
                value={otherFees}
                placeholder="Enter Other fees if any"
                aria-labelledby="other-fees-label"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel id="selling-price-label" htmlFor="selling-price">Acquisition Cost</InputLabel>
              <TextField
                id="selling-price"
                type="text"
                InputProps={{
                  readOnly: true,
                }}
                value={sellingPrice.toFixed(2)}
                aria-labelledby="selling-price-label"
                fullWidth
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

export default BnHForm;
