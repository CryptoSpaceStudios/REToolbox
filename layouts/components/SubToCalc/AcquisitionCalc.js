import React, { useContext, useState } from 'react';
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
import { EntryFeeContext, PurchasePriceContext, MortgageBalanceContext, MortgagePiContext, MortgageInterestContext, SellerPaymentContext, ClosingTitleCostsContext, LeadCostsContext, PaymentsOwedContext, PrepCostsContext, HoldTimeCostsContext, MarketingFeesContext } from '@layouts/components/SubToCalc/SubToCalcStates'


function AcquisitionForm() {
  const router = useRouter();
  const goToNextTab = () => { router.push('/subtocalc#disposition'); };
  const { entryFee } = useContext(EntryFeeContext);
  
  const { purchasePrice, setPurchasePrice } = useContext(PurchasePriceContext);
  const { mortgageBalance, setMortgageBalance } = useContext(MortgageBalanceContext);
  const { mortgagePi, setMortgagePi } = useContext(MortgagePiContext);
  const { mortgageInterest, setMortgageInterest } = useContext(MortgageInterestContext);

  const [entryFeeCost, setEntryFeeCost] = useState(entryFee);

  return (
    <Container maxWidth="md">
      <Card style={{ boxShadow: '0 3px 10px rgb(0, 0, 0)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CardContent>
          <Box marginBottom={3} marginTop={4}>
            <Typography variant="h5" component="h2" gutterBottom align="center">
              Fill in the fields below and easily get Acquisition Costs
            </Typography>
          </Box>
          <Grid container spacing={2}>
	<Grid item xs={12}>
              <InputLabel className="roitablinks" id="purchase-price-label" htmlFor="purchase-price">Purchase Price (Enter Amt)</InputLabel>
              <TextField
                id="purchase-price"
                type="text"
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(e.target.value)}
                placeholder="0.00"
                aria-labelledby="purchase-price-label"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel className="roitablinks" id="entry-fee-costs-label" htmlFor="entry-fee-costs">Entry Fee</InputLabel>
              <TextField
                id="entry-fee-costs"
                type="text"
                InputProps={{ readOnly: true, }}
                value={entryFeeCost}
                placeholder="0.00"
                aria-labelledby="entry-fee-costs-label"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel className="roitablinks" id="mortgage-balance-label" htmlFor="mortgage-balance">Existing Mortgage Balance (Enter Amt)</InputLabel>
              <TextField
                id="mortgage-balance"
                type="text"
                value={mortgageBalance}
                onChange={(e) => setMortgageBalance(e.target.value)}
                placeholder="0.00"
                aria-labelledby="mortgage-balance-label"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel className="roitablinks" id="mortgage-pi-label" htmlFor="mortgage-pi">Existing Mortgage P&I (Enter Amt)</InputLabel>
              <TextField
                id="mortgage-pi"
                type="text"
                value={mortgagePi}
                onChange={(e) => { setMortgagePi(e.target.value); }}
                placeholder="0.00"
                aria-labelledby="mortgage-pi-label"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel className="roitablinks" id="mortgage-interest-label" htmlFor="mortgage-interest">Existing Mortgage Interest Rate</InputLabel>
              <TextField
                id="mortgage-interest"
                type="text"
                value={mortgageInterest}
                onChange={(e) => setMortgageInterest(e.target.value)}
                placeholder="0.00 %"
                aria-labelledby="mortgage-interest-label"
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

export default AcquisitionForm;
