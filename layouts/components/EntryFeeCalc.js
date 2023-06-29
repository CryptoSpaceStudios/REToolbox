import React, { useState, createContext, useContext } from 'react';
import { useRouter } from 'next/router'; 
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export const EntryFeeContext = createContext();

function EntryFeeForm() {
  const router = useRouter();
  const goToNextTab = () => { router.push('/subtocalc#acquisition'); };
  const [sellerPayment, setSellerPayment] = useState('');
  const [closingTitleCosts, setClosingTitleCosts] = useState('');
  const [leadCosts, setLeadCosts] = useState('');
  const [paymentsOwed, setPaymentsOwed] = useState('');
  const [prepCosts, setPrepCosts] = useState('');
  const [holdTimeCosts, setHoldTimeCosts] = useState('');
  const [marketingFees, setMarketingFees] = useState('');

  const entryFee = 
    (sellerPayment ? parseFloat(sellerPayment) : 0) + 
    (closingTitleCosts ? parseFloat(closingTitleCosts) : 0) + 
    (leadCosts ? parseFloat(leadCosts) : 0) + 
    (paymentsOwed ? parseFloat(paymentsOwed) : 0) + 
    (prepCosts ? parseFloat(prepCosts) : 0) + 
    (holdTimeCosts ? parseFloat(holdTimeCosts) : 0) + 
    (marketingFees ? parseFloat(marketingFees) : 0);

  const handleInputChange = (event, setter) => {
    const value = event.target.value;
    if (value === '' || !isNaN(value)) {
      setter(value);
    }
  };

  return (
    <EntryFeeContext.Provider value={{entryFee}}>
      <Container maxWidth="md">
        <Card style={{ boxShadow: '0 3px 10px rgb(0, 0, 0)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <CardContent>
            <Box marginBottom={3} marginTop={4}>
              <Typography variant="h5" component="h2" gutterBottom align="center">
                Fill in the fields below and easily get your entry fee
              </Typography>
            </Box>
            <Grid container spacing={2}> <Grid item xs={12}>
              <InputLabel className="roitablinks" id="seller-payment-label" htmlFor="seller-payment">Seller Payment (Enter Amt)</InputLabel>
              <TextField
                id="seller-payment"
                type="text"
                onChange={(e) => handleInputChange(e, setSellerPayment)}
                value={sellerPayment}
                placeholder="0.00"
                aria-labelledby="seller-payment-label"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel className="roitablinks" id="payments-owed-label" htmlFor="payments-owed">Payments Owed (Enter Amt if any)</InputLabel>
              <TextField
                id="payments-owed"
                type="text"
                onChange={(e) => handleInputChange(e, setPaymentsOwed)}
                value={paymentsOwed}
                placeholder="0.00"
                aria-labelledby="payments-owed-label"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel className="roitablinks" id="lead-costs-label" htmlFor="lead-costs">Lead Costs (Enter Amt if any)</InputLabel>
              <TextField
                id="lead-costs"
                type="text"
                onChange={(e) => handleInputChange(e, setLeadCosts)}
                value={leadCosts}
                placeholder="0.00"
                aria-labelledby="lead-costs-label"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel className="roitablinks" id="closing-title-costs-label" htmlFor="closing-title-costs">Closing / Title Costs (Enter Amt)</InputLabel>
              <TextField
                id="closing-title-costs"
                type="text"
                onChange={(e) => handleInputChange(e, setClosingTitleCosts)}
                value={closingTitleCosts}
                placeholder="0.00"
                aria-labelledby="closing-title-costs-label"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel className="roitablinks" id="prep-costs-label" htmlFor="prep-costs">Prep Costs (Cleaning, etc)</InputLabel>
              <TextField
                id="prep-costs"
                type="text"
                onChange={(e) => handleInputChange(e, setPrepCosts)}
                value={prepCosts}
                placeholder="0.00"
                aria-labelledby="prep-costs-label"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel className="roitablinks" id="hold-time-label" htmlFor="hold-time">Hold Time Costs (Enter Amt)</InputLabel>
              <TextField
                id="hold-time"
                type="text"
                onChange={(e) => handleInputChange(e, setHoldTimeCosts)}
                value={holdTimeCosts}
                placeholder="0.00"
                aria-labelledby="hold-time-label"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel className="roitablinks" id="marketing-fees-label" htmlFor="marketing-fees">Marketing Fees (Enter Amt)</InputLabel>
              <TextField
                id="marketing-fees"
                type="text"
                onChange={(e) => handleInputChange(e, setMarketingFees)}
                value={marketingFees}
                placeholder="0.00"
                aria-labelledby="marketing-fees-label"
                fullWidth
              />
            </Grid>

              <Grid item xs={12}>
                <InputLabel className="roitablinks" id="entry-fee-label" htmlFor="entry-fee">Entry Fee</InputLabel>
                <TextField
                  id="entry-fee"
                  type="text"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={entryFee.toFixed(2)}
                  aria-labelledby="entry-fee-label"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Button onClick={goToNextTab} variant="outlined" color="error" className="roitablinks my-2 px-4" endIcon={<SendIcon />} style={{display: 'flex', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto'}}>
                  &nbsp;Next
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </EntryFeeContext.Provider>
  );
}

export default EntryFeeForm;
