import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Select from '@mui/material/Select'; // Imported Select component
import MenuItem from '@mui/material/MenuItem'; // Imported MenuItem component


function StrMtrForm() {
  const [purchasePrice, setPurchasePrice] = useState('');
  const [wholesaleFee, setWholesaleFee] = useState('');
  const [otherFees, setOtherFees] = useState('');
  const [mortgageTerm, setMortgageTerm] = useState('');
  const [mortgageRate, setMortgageRate] = useState('');
  const [propertyTaxes, setPropertyTaxes] = useState('');
  const [propertyInsurance, setPropertyInsurance] = useState('');
  const [grossRentalIncome, setGrossRentalIncome] = useState('');
  

  const closingCosts = purchasePrice ? parseFloat(purchasePrice) * 0.08 : 0;
  const titleCosts = purchasePrice ? parseFloat(purchasePrice) * 0.0055 : 0;
  const inspectionFees = purchasePrice ? parseFloat(purchasePrice) * 0.02 : 0;
  const realtorCommissions = purchasePrice ? parseFloat(purchasePrice) * 0.03 : 0; // added
  const totalWholesaleFee = wholesaleFee ? parseFloat(wholesaleFee) : 0;
  const totalOtherFees = otherFees ? parseFloat(otherFees) : 0;
  const acquistitionCost = purchasePrice ? parseFloat(purchasePrice) + closingCosts + titleCosts + inspectionFees + realtorCommissions + totalWholesaleFee + totalOtherFees : 0;
  const monthlyInterestRate = mortgageRate ? (parseFloat(mortgageRate) / 100) / 12 : 0;
  const mortgageTermMonths = mortgageTerm ? parseInt(mortgageTerm) * 12 : 0;
  const mortgagePayment = acquistitionCost && monthlyInterestRate && mortgageTermMonths ? 
    (monthlyInterestRate * acquistitionCost) / (1 - Math.pow(1 + monthlyInterestRate, -mortgageTermMonths)) : 0;
  const mortgagePITI = mortgagePayment + parseFloat(propertyTaxes)/12 + parseFloat(propertyInsurance)/12;
  const monthlyCashFlow = grossRentalIncome ? parseFloat(grossRentalIncome) - mortgagePITI : 0;
  const yearlyCashFlow = monthlyCashFlow * 12 ;

  
  
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

  const handleMortgageTermChange = (event) => {
    setMortgageTerm(event.target.value);
  };

  const handleMortgageRateChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value)) {
      setMortgageRate(value);
    }
  };

  const handlePropertyTaxesChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value)) {
      setPropertyTaxes(value);
    }
  };

  const handlePropertyInsuranceChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value)) {
      setPropertyInsurance(value);
    }
  };

  const handleGrossRentalIncomeChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value)) {
      setGrossRentalIncome(value);
    }
  };

  return (
    <Container className="StrMtrForm" maxWidth="md">
      <Card style={{ boxShadow: '0 3px 10px rgb(0, 0, 0, 1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} >
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
              <InputLabel id="wholesale-fee-label" htmlFor="wholesale-fee">Wholesaler Fee (Enter Amt)</InputLabel>
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
              <InputLabel id="acquisition-cost-label" htmlFor="acquisition-cost">Acquistition Cost</InputLabel>
              <TextField
                id="acquisition-cost"
                type="text"
                InputProps={{
                  readOnly: true,
                }}
                value={acquistitionCost.toFixed(2)}
                aria-labelledby="acquisition-cost-label"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel id="mortgage-term-label" htmlFor="mortgage-term">Mortgage Term</InputLabel>
              <Select
                id="mortgage-term"
                value={mortgageTerm}
                onChange={handleMortgageTermChange}
                aria-labelledby="mortgage-term-label"
                fullWidth
              >
                <MenuItem value="5 year">5 year</MenuItem>
                <MenuItem value="10 year">10 year</MenuItem>
                <MenuItem value="15 year">15 year</MenuItem>
                <MenuItem value="20 year">20 year</MenuItem>
                <MenuItem value="25 year">25 year</MenuItem>
                <MenuItem value="30 year">30 year</MenuItem>
                <MenuItem value="35 year">35 year</MenuItem>
                <MenuItem value="40 year">40 year</MenuItem>
                <MenuItem value="45 year">45 year</MenuItem>
                <MenuItem value="50 year">50 year</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={6}>
              <InputLabel id="mortgage-rate-label" htmlFor="mortgage-rate">Mortgage Rate</InputLabel>
              <TextField
                id="mortgage-rate"
                type="text"
                onChange={handleMortgageRateChange}
                value={mortgageRate}
                placeholder="Enter Rate (i.e. 3.575)"
                aria-labelledby="mortgage-rate-label"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel id="mortgage-payment-label" htmlFor="mortgage-payment">Mortgage P&I (Payment & Interest)</InputLabel>
              <TextField
                id="mortgage-payment"
                type="text"
                InputProps={{
                  readOnly: true,
                }}
                value={mortgagePayment.toFixed(2)}
                aria-labelledby="mortgage-payment-label"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel id="property-taxes-label" htmlFor="property-taxes">Yearly Property Taxes</InputLabel>
              <TextField
                id="property-taxes"
                type="text"
                onChange={handlePropertyTaxesChange}
                value={propertyTaxes}
                placeholder="Enter Yearly Property Taxes"
                aria-labelledby="property-taxes-label"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel id="property-insurance-label" htmlFor="property-insurance">Yearly Property Insurance</InputLabel>
              <TextField
                id="property-insurance"
                type="text"
                onChange={handlePropertyInsuranceChange}
                value={propertyInsurance}
                placeholder="Enter Yearly Property Insurance"
                aria-labelledby="property-insurance-label"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel id="mortgage-piti-label" htmlFor="mortgage-piti">Mortgage P.I.T.I (Payment,Interest,Taxes,Insurance)</InputLabel>
              <TextField
                id="mortgage-piti"
                type="text"
                InputProps={{
                  readOnly: true,
                }}
                value={isFinite(mortgagePITI) ? mortgagePITI.toFixed(2) : ''}
                placeholder="PITI will be calculated when required fields are filled"
                aria-labelledby="mortgage-piti-label"
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <InputLabel id="gross-rental-income-label" htmlFor="gross-rental-income">Monthly Rental Income</InputLabel>
              <TextField
                id="gross-rental-income"
                type="text"
                onChange={handleGrossRentalIncomeChange}
                value={grossRentalIncome}
                placeholder="Enter Rent Amount you are charging tenant"
                aria-labelledby="gross-rental-income-label"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel id="yearly-cash-flow-label" htmlFor="yearly-cash-flow">Yearly Cash Flow</InputLabel>
              <TextField
                id="yearly-cash-flow"
                type="text"
                InputProps={{
                  readOnly: true,
                }}
                value={yearlyCashFlow.toFixed(2)}
                aria-labelledby="yearly-cash-flow-label"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel id="monthly-cash-flow-label" htmlFor="monthly-cash-flow">Monthly Cash Flow</InputLabel>
              <TextField
                id="monthly-cash-flow"
                type="text"
                InputProps={{
                  readOnly: true,
                }}
                value={monthlyCashFlow.toFixed(2)}
                aria-labelledby="monthly-cash-flow-label"
                fullWidth
              />
            </Grid>


          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

export default StrMtrForm;
