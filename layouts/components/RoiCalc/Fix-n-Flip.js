import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import { FormControl, MenuItem, Select, FormHelperText, Typography } from '@mui/material';

const rehabLevels = [
  { label: 'Turn Key', value: 0},
  { label: 'Clean up', value: 20 },
  { label: 'Lipstick', value: 25 },
  { label: 'Moderate', value: 30 },
  { label: 'Heavy', value: 40 },
  { label: 'Rekt  ', value: 50 },
];

function FnFForm() {
  const [purchasePrice, setPurchasePrice] = useState('');
  const [wholesaleFee, setWholesaleFee] = useState('');
  const [otherFees, setOtherFees] = useState('');
  const [rehabLevel, setRehabLevel] = useState(0);
  const [squareFeet, setSquareFeet] = useState('');
  const [rehabCostSqFt, setRehabCostSqFt] = useState(0);
  const [holdTime, setHoldTime] = useState(1);
  const [holdCosts, setHoldCosts] = useState('');

  const closingCosts = purchasePrice ? parseFloat(purchasePrice) * 0.08 : 0;
  const titleCosts = purchasePrice ? parseFloat(purchasePrice) * 0.0055 : 0;
  const inspectionFees = purchasePrice ? parseFloat(purchasePrice) * 0.02 : 0;
  const realtorCommissions = purchasePrice ? parseFloat(purchasePrice) * 0.03 : 0; // added
  const totalWholesaleFee = wholesaleFee ? parseFloat(wholesaleFee) : 0;
  const totalOtherFees = otherFees ? parseFloat(otherFees) : 0;
  const rehabCost = rehabLevel * purchasePrice;
  const holdingExpenses = holdCosts ? holdTime * parseFloat(holdCosts) : 0;
  
  const AcquistionCost = purchasePrice ? parseFloat(purchasePrice) + closingCosts + titleCosts + inspectionFees + realtorCommissions + totalWholesaleFee + totalOtherFees : 0;
  const allInCost = AcquistionCost + rehabCostSqFt + holdingExpenses;

  
  useEffect(() => {
    setRehabCostSqFt(rehabLevel * squareFeet); // Update whenever rehabLevel or squareFeet changes
  }, [rehabLevel, squareFeet]);

  const handlePurchasePriceChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value)) {
      setPurchasePrice(value);
    }
  };

  const handleSquareFeetChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value)) {
      setSquareFeet(value);
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

  const handleHoldCostsChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value)) {
      setHoldCosts(value);
    }
  };
  

  return (
    <Container maxWidth="md">
      <Card style={{ boxShadow: '0 3px 10px rgb(0, 0, 0)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CardContent>
          <Grid container spacing={2}>
          
            <Grid item xs={12}>
              <InputLabel id="purchase-price-label" htmlFor="purchase-price">Purchase Price</InputLabel>
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
                placeholder="Enter Other Fees if any"
                aria-labelledby="other-fees-label"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel id="acquisition-cost-label" htmlFor="acquisition-cost">Aquisition Cost</InputLabel>
              <TextField
                id="acquisition-cost"
                type="text"
                InputProps={{
                  readOnly: true,
                }}
                value={AcquistionCost.toFixed(2)}
                aria-labelledby="acquisition-cost-label"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel id="square-feet-label" htmlFor="square-feet">Square Feet</InputLabel>
              <TextField
                id="square-feet"
                type="text"
                onChange={handleSquareFeetChange}
                value={squareFeet}
                placeholder="Enter Sq Ft"
                aria-labelledby="square-feet-label"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel id="rehab-level-label" htmlFor="rehab-level">Rehab Level</InputLabel>
              <FormControl fullWidth>
                <Select
                  id='rehab-level'
                  labelId="rehab-level-label"
                  value={rehabLevel}
                  aria-label='Rehab Level'
                  onChange={(e) => setRehabLevel(e.target.value)}
                >
                  {rehabLevels.map((level, index) => (
                    <MenuItem key={index} value={level.value}>
                      {level.label} ($ {level.value}/sqft)
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>    

            <Grid item xs={12}>
              <InputLabel id="rehab-cost-sqft-label" htmlFor="rehab-cost-sqft">Rehab Cost</InputLabel>
              <TextField
                id="rehab-cost-sqft"
                type="text"
                InputProps={{
                  readOnly: true,
                }}
                value={rehabCostSqFt.toFixed(2)} // Display the rehab cost per sqft
                aria-labelledby="rehab-cost-sqft-label"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel id="hold-costs-label" htmlFor="hold-costs">Monthly Holding Costs</InputLabel>
              <TextField
                id="hold-costs"
                type="text"
                onChange={handleHoldCostsChange}
                value={holdCosts}
                placeholder="Enter Monthly Holding Costs"
                aria-labelledby="hold-costs-label"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel id="hold-time-label" htmlFor="hold-time">Holding Duration until cash flow</InputLabel>
              <FormControl fullWidth>
                <Select
                  id="hold-time"
                  labelId="hold-time-label"
                  value={holdTime}
                  aria-label="Hold Time"
                  onChange={(e) => setHoldTime(e.target.value)}
                >
                  {Array.from({ length: 24 }, (_, i) => i + 1).map((month, index) => (
                    <MenuItem key={index} value={month}>
                      {month} month{month > 1 ? 's' : ''}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <InputLabel id="holding-expenses-label" htmlFor="holding-expenses">Holding Expenses</InputLabel>
              <TextField
                id="holding-expenses"
                type="text"
                InputProps={{
                  readOnly: true,
                }}
                value={holdingExpenses.toFixed(2)}
                aria-labelledby="holding-expenses-label"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel id="all-in-cost-label" htmlFor="all-in-cost">Cost Until Cash Flow</InputLabel>
              <TextField
                id="all-in-cost"
                type="text"
                InputProps={{
                  readOnly: true,
                }}
                value={allInCost.toFixed(2)}
                aria-labelledby="all-in-cost-label"
                fullWidth
              />
            </Grid>

          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

export default FnFForm;
