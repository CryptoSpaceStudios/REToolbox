import React, { useState, useEffect, useContext } from 'react';
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
import { EntryFeeContext } from '@layouts/components/SubToCalc/SubToCalcStates';

function EntryFeeForm() {
  const router = useRouter();
  const goToNextTab = () => { router.push('/subtocalc#acquisition'); };

  // Use context for entryFee
  const { entryFee, setEntryFee } = useContext(EntryFeeContext);

  const [sellerPayment, setSellerPayment] = useState('');
  const [closingTitleCosts, setClosingTitleCosts] = useState('');
  const [leadCosts, setLeadCosts] = useState('');
  const [paymentsOwed, setPaymentsOwed] = useState('');
  const [prepCosts, setPrepCosts] = useState('');
  const [holdTimeCosts, setHoldTimeCosts] = useState('');
  const [marketingFees, setMarketingFees] = useState('');

  useEffect(() => {
    setEntryFee(
      (sellerPayment ? parseFloat(sellerPayment) : 0) + 
      (closingTitleCosts ? parseFloat(closingTitleCosts) : 0) + 
      (leadCosts ? parseFloat(leadCosts) : 0) + 
      (paymentsOwed ? parseFloat(paymentsOwed) : 0) + 
      (prepCosts ? parseFloat(prepCosts) : 0) + 
      (holdTimeCosts ? parseFloat(holdTimeCosts) : 0) + 
      (marketingFees ? parseFloat(marketingFees) : 0)
    );
  }, [sellerPayment, closingTitleCosts, leadCosts, paymentsOwed, prepCosts, holdTimeCosts, marketingFees]);

  const handleInputChange = (event, setter) => {
    const value = event.target.value;
    if (value === '' || !isNaN(value)) {
      setter(value);
    }
  };

  return (
    <Container maxWidth="md">
      <Card style={{ boxShadow: '0 3px 10px rgb(0, 0, 0)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CardContent>
          <Box marginBottom={3} marginTop={4}>
            <Typography variant="h5" component="h3" gutterBottom align="center">
              Fill in the fields below to get your entry fee,<br />then click the `Next` Button to continue
            </Typography>
          </Box>
          <Grid item xs={12}>
                <InputLabel className="roitablinks" id="seller-payment-label" htmlFor="seller-payment">Payment to Seller (Enter Amt)</InputLabel>
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
              <InputLabel className="roitablinks" id="payments-owed-label" htmlFor="payments-owed">Payments / Leins / Etc (Enter Amt)</InputLabel>
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
              <InputLabel className="roitablinks" id="lead-costs-label" htmlFor="lead-costs">Lead Costs (Enter Amt)</InputLabel>
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
                <InputLabel className="roitablinks" id="entry-fee-label" htmlFor="entry-fee">Your Entry Fee is</InputLabel>
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
		
        </CardContent>
      </Card>
    </Container>
  );
}

export default EntryFeeForm;
