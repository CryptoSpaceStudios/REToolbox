import React, { use, useState } from 'react';
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

function DispositionForm() {
  const router = useRouter();
  const goToNextTab = () => { router.push('/subtocalc#disposition'); };
  
  const [arvEstimate, setArvEstimate] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [acquisitionCost, setAcquisitionCost] = useState('');
  const [cashOnSale, setCashOnSale] = useState('');  
  const [balanceDueSeller, setBalanceDueSeller] = useState('');
  const [buyersPayment, setBuyersPayment] = useState('');
  const [acqMortgagePayment, setAcqMortgagePayment] = useState('');
  const [cashFlow, setCashFlow] = useState('');
  const [equityGap, setEquityGap] = useState('');

  return (
    <Container maxWidth="md"  >
      <Card style={{ boxShadow: '0 3px 10px rgb(0, 0, 0)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CardContent >
          <Box marginBottom={3} marginTop={4}>
            <Typography variant="h5" component="h2" gutterBottom align="center">
              Fill in the fields below and easily get Disposition Costs
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <InputLabel className="roitablinks" id="arv-estimate-label" htmlFor="arv-estimate">ARV Estimate (Enter Amt)</InputLabel>
              <TextField
                id="arv-estimate"
                type="text"
                value={arvEstimate}
                placeholder="0.00"
                aria-labelledby="arv-estimate-label"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel className="roitablinks" id="down-payment-label" htmlFor="down-payment">Down Payment (10% of ARV)</InputLabel>
              <TextField
                id="down-payment"
                type="text"
                value={downPayment}
                placeholder="0.00"
                aria-labelledby="down-payment-label"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel className="roitablinks" id="acquisition-cost-label" htmlFor="acquisition-cost">Acquisition Cost (Entry Fee)</InputLabel>
              <TextField
                id="acquisition-cost"
                type="text"
                value={acquisitionCost}
                placeholder="0.00"
                aria-labelledby="acquisition-cost-label"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel className="roitablinks" id="cash-on-sale-label" htmlFor="cash-on-sale">Cash to You on Acquisition</InputLabel>
              <TextField
                id="cash-on-sale"
                type="text"
                value={cashOnSale}
                placeholder="0.00"
                aria-labelledby="cash-on-sale-label"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel className="roitablinks" id="balance-due-label" htmlFor="balance-due">Balance Due From Buyer</InputLabel>
              <TextField
                id="balance-due"
                type="text"
                value={balanceDueSeller}
                placeholder="0.00"
                aria-labelledby="balance-due-label"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel className="roitablinks" id="acq-mortgage-payment-label" htmlFor="acq-mortgage-payment">Acquisition Mortgage Payment</InputLabel>
              <TextField
                id="acq-mortgage-payment"
                type="text"
                value={acqMortgagePayment}
                placeholder="0.00"
                aria-labelledby="acq-mortgage-payment-label"
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <InputLabel className="roitablinks" id="buyers-payment-label" htmlFor="buyers-payment">Buyers Payment</InputLabel>
              <TextField
                id="buyers-payment"
                type="text"
                value={buyersPayment}
                placeholder="0.00"
                aria-labelledby="buyers-payment-label"
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <InputLabel className="roitablinks" id="cash-flow-label" htmlFor="cash-flow">Cash Flow</InputLabel>
              <TextField
                id="cash-flow"
                type="text"
                InputProps={{
                  readOnly: true,
                }}
                value={cashFlow}
                placeholder="0.00"
                aria-labelledby="cash-flow-label"
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <InputLabel className="roitablinks" id="equity-gap-label" htmlFor="equity-gap">Equity Gap</InputLabel>
              <TextField
                id="equity-gap"
                type="text"
                InputProps={{
                  readOnly: true,
                }}
                value={equityGap}
                placeholder="0.00"
                aria-labelledby="equity-gap-label"
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
  );
}

export default DispositionForm;
