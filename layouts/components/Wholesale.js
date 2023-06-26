import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';

function WholesaleForm() {
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [otherFees, setOtherFees] = useState(0);

  const closingCosts = parseFloat(purchasePrice) * 0.08;
  const titleCosts = parseFloat(purchasePrice) * 0.55;
  const inspectionFees = parseFloat(purchasePrice) * 0.02;
  const wholesaleFee = 10000;
  const sellingPrice = parseFloat(purchasePrice) + closingCosts + titleCosts + inspectionFees + wholesaleFee + parseFloat(otherFees);

  const handlePurchasePriceChange = (event) => {
    setPurchasePrice(event.target.value);
  };

  const handleOtherFeesChange = (event) => {
    setOtherFees(event.target.value);
  };

  return (
    <Container maxWidth="sm">
      <Card style={{ boxShadow: '0 3px 10px rgb(0, 0, 0)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <InputLabel id="purchase-price-label" htmlFor="purchase-price">Purchase Price</InputLabel>
              <TextField
                id="purchase-price"
                type="number"
                onChange={handlePurchasePriceChange}
                value={parseFloat(purchasePrice).toFixed(2)}
                aria-labelledby="purchase-price-label"
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel id="closing-costs-label" htmlFor="closing-costs">Closing Costs</InputLabel>
              <TextField
                id="closing-costs"
                type="number"
                InputProps={{
                  readOnly: true,
                }}
                value={closingCosts.toFixed(2)}
                aria-labelledby="closing-costs-label"
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel id="title-costs-label" htmlFor="title-costs">Title Costs</InputLabel>
              <TextField
                id="title-costs"
                type="number"
                InputProps={{
                  readOnly: true,
                }}
                value={titleCosts.toFixed(2)}
                aria-labelledby="title-costs-label"
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel id="inspection-fees-label" htmlFor="inspection-fees">Inspection Fees</InputLabel>
              <TextField
                id="inspection-fees"
                type="number"
                InputProps={{
                  readOnly: true,
                }}
                value={inspectionFees.toFixed(2)}
                aria-labelledby="inspection-fees-label"
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel id="wholesale-fee-label" htmlFor="wholesale-fee">Wholesale Fee</InputLabel>
              <TextField
                id="wholesale-fee"
                type="number"
                InputProps={{
                  readOnly: true,
                }}
                value={wholesaleFee.toFixed(2)}
                aria-labelledby="wholesale-fee-label"
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel id="other-fees-label" htmlFor="other-fees">Other Fees</InputLabel>
              <TextField
                id="other-fees"
                type="number"
                onChange={handleOtherFeesChange}
                value={parseFloat(otherFees).toFixed(2)}
                aria-labelledby="other-fees-label"
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel id="selling-price-label" htmlFor="selling-price">Selling Price</InputLabel>
              <TextField
                id="selling-price"
                type="number"
                InputProps={{
                  readOnly: true,
                }}
                value={sellingPrice.toFixed(2)}
                aria-labelledby="selling-price-label"
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

export default WholesaleForm;
