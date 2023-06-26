import React, { useState, useEffect } from 'react';
import { Card, CardContent, Grid, TextField, Box, Typography } from '@mui/material';

  function MyComponent() {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => { setIsMounted(true); }, []);
    return ( <>{isMounted && ( console.log("WTF") )} </> );
  }

  function SellerNetCalc({ data }) {
    const { frontmatter } = data;
    const { title, heading, netcalc } = frontmatter;
    const [sellingPrice, setSellingPrice] = useState('');
    const [mortgage, setMortgage] = useState('');

    function youSave() {
      const difference = calculateDifference();
      if (difference < 100) {
          return null; // Don't render the box if the difference is less than 100.
      }
      return (
        <Box 
          sx={{ 
            mt: 2, 
            mb: 6, 
            width: '100%', 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}
        >
          <Typography variant="h4">
            You save roughly 
          </Typography>
          <Typography variant="h4" color="error" sx={{ fontWeight: 'bold', ml: 1, mr: 1 }}>
            ${difference}
          </Typography>
          <Typography variant="h4">
            by selling to us directly
          </Typography>
        </Box>
      );
  }

    const calculateCosts = () => {
      const realtorCommissions = parseFloat((0.03 * sellingPrice)).toFixed(2);
      const titleCosts = parseFloat((0.0055 * sellingPrice)).toFixed(2);
      const closingCosts = parseFloat((0.08 * sellingPrice)).toFixed(2);
      const inspection = parseFloat((0.02 * sellingPrice)).toFixed(2);
      return { realtorCommissions, titleCosts, closingCosts, inspection };
    };
    
    const calculateNetEquity = () => {
      const netEquity = parseFloat((sellingPrice - mortgage).toFixed(2));
      return netEquity;
    };
    
    const calculateMlsCosts = () => {
      const realtorCommissions = Number((parseFloat(0.06 * sellingPrice)).toFixed(2));
      const titleCosts = Number((parseFloat(0.0055 * sellingPrice)).toFixed(2));
      const closingCosts = Number((parseFloat(0.08 * sellingPrice)).toFixed(2));
      const inspection = Number((parseFloat(0.02 * sellingPrice)).toFixed(2));
      return { realtorCommissions, titleCosts, closingCosts, inspection };
    };
    
    const calculateMlsNetEquity = () => {
      const mlsCosts = calculateMlsCosts();
      const netEquity = parseFloat((sellingPrice - mortgage - mlsCosts.realtorCommissions).toFixed(2));
      return netEquity;
    };
    
    const calculateDifference = () => {
      const netEquity = calculateNetEquity();
      const mlsNetEquity = calculateMlsNetEquity();
      const difference = Math.abs(netEquity - mlsNetEquity);
      return parseFloat(difference.toFixed(2));
    };
    
    const costs = calculateCosts();
    const mlsCosts = calculateMlsCosts();
    const [netEquityColor, setNetEquityColor] = useState('');
    const [mlsNetEquityColor, setMlsNetEquityColor] = useState('');
    useEffect(() => {
        const netEquity = calculateNetEquity();
        const mlsNetEquity = calculateMlsNetEquity();
        if (netEquity > mlsNetEquity) {
            setNetEquityColor('bg-green-200');
            setMlsNetEquityColor('bg-red-200');
        } else if (mlsNetEquity > netEquity) {
            setMlsNetEquityColor('bg-green-200');
            setNetEquityColor('bg-red-200');
        } else {
            setNetEquityColor('');
            setMlsNetEquityColor('');
        }
    }, [sellingPrice, mortgage]);  

    return (
      <Box sx={{ flexGrow: 1 } } mb={8} >
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Grid item xs={10} sm={7} md={5} lg={9}>
            <Box 
              className="section" 
              sx={{
                height: { xs: '35vh', sm: '30vh', md: '30vh', lg: '20vh'  },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h1" gutterBottom>{frontmatter.title}</Typography>
            </Box>
          </Grid>

          <Grid item xs={9} sm={7} md={10} lg={8}>
            <Box 
              className="section" 
              sx={{
                height: { xs: '10vh', sm: '5vh', md: '0vh', lg: '5vh' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h5" gutterBottom>{frontmatter.heading}</Typography>
            </Box>
          </Grid>
        </Grid>

        <Box>
          {youSave()}
        </Box>
          
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card sx={{ boxShadow: '0 0 10px black' }} className='ml-5 mr-5'>
              <CardContent>
                <div className="grid-container" alt="Direct Sale to Us" aria-description='Direct Sale to Us'>
                  <h4 className='text-center' alt="Direct Sale to Us" aria-label='Direct Sale to Us'>Direct Sale to Us</h4>
                  <h5 className='text-center' alt="Estimated" aria-label='Estimated'>(Estimated)</h5>
                  <div className="grid-item" alt="Selling Price" aria-description='Selling Price'>
                    <label alt="Selling Price" aria-description='Selling Price'>Selling Price</label>
                    <TextField type="number" value={sellingPrice} alt="Selling Price" aria-label='Selling Price' aria-description='Selling Price' onChange={(e) => setSellingPrice(e.target.value)} onBlur={(e) => setSellingPrice(parseFloat(e.target.value).toFixed(2))} placeholder="Enter Selling Price" fullWidth />
                  </div>
                  <div className="grid-item" alt="Realtor Commissions" aria-description='Realtor Commissions'>
                    <label alt="Realtor Commissions" aria-label='Realtor Commissions' aria-description='Realtor Commissions'>Realtor Commissions (3%)</label>
                    <TextField type="number" value={costs.realtorCommissions} alt="Realtor Commissions" aria-label='Realtor Commissions' aria-description='Realtor Commissions' placeholder="Enter Selling Price" readOnly fullWidth />
                  </div>
                  <div className="grid-item" alt="Title Costs" aria-description='Title Costs'>
                    <label for="dtstitlecost" alt="Title Costs" aria-label='Title Costs' aria-description='Title Costs'>Title Costs (0.55%)</label>
                    <TextField id='dtstitlecost' type="number" value={costs.titleCosts} alt="Title Costs" aria-label='Title Costs' aria-description='Title Costs'readOnly fullWidth />
                  </div>
                  <div className="grid-item" alt="Closing Costs" aria-description='Closing Costs'>
                    <label for='dtsclosingcosts' alt="Closing Costs" aria-label='Closing Costs' aria-description='Closing Costs'>Closing Costs (8%)</label>
                    <TextField id='dtsclosingcosts' type="number" value={costs.closingCosts} alt="Closing Costs" aria-label='Closing Costs' aria-description='Closing Costs' readOnly fullWidth />
                  </div>
                  <div className="grid-item" alt="Inspection Costs" aria-description='Inspection Costs'>
                    <label alt="Inspection Costs" aria-label='Inspection Costs' aria-description='Inspection Costs'>Inspection (2%)</label>
                    <TextField type="number" value={costs.inspection} alt="Inspection Costs" aria-label='Inspection Costs' aria-description='Inspection Costs' placeholder="Inspection Costs" readOnly fullWidth />
                  </div>
                  <div className="grid-item" alt="Net Sale" aria-description='Net Sale'>
                    <label alt="Net Sale" aria-description='Net Sale'>Net Sale</label>
                    <TextField type="number" value={sellingPrice} alt="Net Sale" readOnly fullWidth />
                  </div>
                  <div className="grid-item" alt="Mortgage" aria-description='Mortgage'>
                    <label alt="Mortgage" aria-description='Mortgage'>Mortgage</label>
                    <TextField type="number" value={mortgage} alt="Mortgage" aria-label='Mortgage' aria-description='Mortgage' onChange={(e) => setMortgage(e.target.value)} onBlur={(e) => setMortgage(parseFloat(e.target.value).toFixed(2))} placeholder="Enter Mortgage Amount" fullWidth />
                  </div>
                  <div className="grid-item" alt="Net Equity" aria-description='Net Equity'>
                    <label alt="Net Equity" aria-label='Net Equity' aria-description='Net Equity'>Net Equity</label>
                    <TextField type="number" value={calculateNetEquity()} alt="Net Equity" aria-label='Net Equity' aria-description='Net Equity' onBlur={(e) => setNetEquity(parseFloat(e.target.value).toFixed(2))} readOnly fullWidth />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ boxShadow: '0 0 10px black' }} className='ml-5 mr-5'>
              <CardContent>
                <div className="grid-container" alt="Listing on MLS" aria-description='Listing on MLS'>
                  <h4 className='text-center' alt="Listing on MLS" aria-label='Listing on MLS'>Listing on MLS</h4>
                  <h5 className='text-center' alt="Listing on MLS" aria-label='Listing on MLS'>(Estimated)</h5>
                  <div className="grid-item" alt="Listing on MLS" aria-description='Listing on MLS'>
                    <label alt="Selling Price"  aria-description='Selling Price'>Selling Price</label>
                    <TextField type="number" value={sellingPrice}  alt="Selling Price on MLS" aria-label='Selling Price on MLS' aria-description='Selling Price on MLS' readOnly fullWidth />
                  </div>
                  <div className="grid-item" alt="Realtor Commissions" aria-description='Realtor Commissions'>
                    <label alt="Realtor Commissions" aria-label='Realtor Commissions' aria-description='Realtor Commissions'>Realtor Commissions (6%)</label>
                    <TextField type="number" value={mlsCosts.realtorCommissions} alt="Realtor Commissions" aria-label='Realtor Commissions' aria-description='Realtor Commissions' readOnly fullWidth />
                  </div>
                  <div className="grid-item" alt="Title Costs" aria-description='Title Costs'>
                    <label alt="Title Costs" aria-label='Title Costs' aria-description='Title Costs'>Title Costs (0.55%)</label>
                    <TextField type="number" value={mlsCosts.titleCosts} alt="Title Costs" aria-label='Title Costs' aria-description='Title Costs' readOnly fullWidth />
                  </div>
                  <div className="grid-item" alt="Closing Costs" aria-description='Closing Costs'>
                    <label alt="Closing Costs" aria-label='Closing Costs' aria-description='Closing Costs'>Closing Costs (8%)</label>
                    <TextField type="number" value={mlsCosts.closingCosts} alt="Closing Costs" aria-label='Closing Costs' aria-description='Closing Costs' readOnly fullWidth />
                  </div>
                  <div className="grid-item" alt="Inspection Costs" aria-description='Inspection Costs'>
                    <label alt="Inspection Costs" aria-label='Inspection Costs' aria-description='Inspection Costs'>Inspection (2%)</label>
                    <TextField type="number" value={mlsCosts.inspection} alt="Inspection Costs" aria-label='Inspection Costs' aria-description='Inspection Costs' readOnly fullWidth />
                  </div>
                  <div className="grid-item" alt="Net Sale on MLS" aria-description='Net Sale on MLS'>
                    <label alt="Net Sale on MLS" aria-description='Net Sale on MLS'>Net Sale</label>
                    <TextField type="number" value={sellingPrice} alt="Net Sale on MLS" aria-label='Net Sale on MLS' aria-description='Net Sale on MLS' readOnly fullWidth />
                  </div>
                  <div className="grid-item" alt="Mortgage"  aria-description='Mortgage'>
                    <label alt="Mortgage" aria-description='Mortgage'>Mortgage</label>
                    <TextField type="number" value={mortgage} alt="Mortgage" aria-label='Mortgage' aria-description='Mortgage' readOnly fullWidth />
                  </div>
                  <div className="grid-item" alt="Net Equity" aria-description='Net Equity'>
                    <label alt="Net Equity" aria-label='Net Equity' aria-description='Net Equity'>Net Equity</label>
                    <TextField type="number" value={calculateMlsNetEquity()} alt="Net Equity" aria-label='Net Equity' aria-description='Net Equity' readOnly fullWidth />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

    );


// EOF
};
export default SellerNetCalc;
