import React, { useState, useEffect } from 'react';
import { Card, CardContent, Grid, TextField, Box, Typography } from '@mui/material';
import { markdownify } from "@lib/utils/textConverter";
import Head from 'next/head';

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
      <Box sx={{ flexGrow: 1 }}>

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
                <div className="grid-container">
                  <h4 className='text-center'>Direct Sale to Us</h4>
                  <h5 className='text-center'>(Estimated)</h5>
                  <div className="grid-item">
                    <label>Selling Price</label>
                    <TextField type="number" value={sellingPrice} onChange={(e) => setSellingPrice(e.target.value)} onBlur={(e) => setSellingPrice(parseFloat(e.target.value).toFixed(2))} placeholder="Enter Selling Price" fullWidth />
                  </div>
                  <div className="grid-item">
                    <label>Realtor Commissions (3%)</label>
                    <TextField type="number" value={costs.realtorCommissions} placeholder="Enter Selling Price" readOnly fullWidth />
                  </div>
                  <div className="grid-item">
                    <label>Title Costs (0.55%)</label>
                    <TextField type="number" value={costs.titleCosts} readOnly fullWidth />
                  </div>
                  <div className="grid-item">
                    <label>Closing Costs (8%)</label>
                    <TextField type="number" value={costs.closingCosts} readOnly fullWidth />
                  </div>
                  <div className="grid-item">
                    <label>Inspection (2%)</label>
                    <TextField type="number" value={costs.inspection} readOnly fullWidth />
                  </div>
                  <div className="grid-item">
                    <label>Net Sale</label>
                    <TextField type="number" value={sellingPrice} readOnly fullWidth />
                  </div>
                  <div className="grid-item">
                    <label>Mortgage</label>
                    <TextField type="number" value={mortgage} onChange={(e) => setMortgage(e.target.value)} onBlur={(e) => setMortgage(parseFloat(e.target.value).toFixed(2))} placeholder="Enter Mortgage Amount" fullWidth />
                  </div>
                  <div className="grid-item">
                    <label>Net Equity</label>
                    <TextField type="number" value={calculateNetEquity()} onBlur={(e) => setNetEquity(parseFloat(e.target.value).toFixed(2))} readOnly fullWidth />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ boxShadow: '0 0 10px black' }} className='ml-5 mr-5'>
              <CardContent>
                <div className="grid-container">
                  <h4 className='text-center'>Listing on MLS</h4>
                  <h5 className='text-center'>(Estimated)</h5>
                  <div className="grid-item">
                    <label>Selling Price</label>
                    <TextField type="number" value={sellingPrice} readOnly fullWidth />
                  </div>
                  <div className="grid-item">
                    <label>Realtor Commissions (6%)</label>
                    <TextField type="number" value={mlsCosts.realtorCommissions} readOnly fullWidth />
                  </div>
                  <div className="grid-item">
                    <label>Title Costs (0.55%)</label>
                    <TextField type="number" value={mlsCosts.titleCosts} readOnly fullWidth />
                  </div>
                  <div className="grid-item">
                    <label>Closing Costs (8%)</label>
                    <TextField type="number" value={mlsCosts.closingCosts} readOnly fullWidth />
                  </div>
                  <div className="grid-item">
                    <label>Inspection (2%)</label>
                    <TextField type="number" value={mlsCosts.inspection} readOnly fullWidth />
                  </div>
                  <div className="grid-item">
                    <label>Net Sale</label>
                    <TextField type="number" value={sellingPrice} readOnly fullWidth />
                  </div>
                  <div className="grid-item">
                    <label>Mortgage</label>
                    <TextField type="number" value={mortgage} readOnly fullWidth />
                  </div>
                  <div className="grid-item">
                    <label>Net Equity</label>
                    <TextField type="number" value={calculateMlsNetEquity()} readOnly fullWidth />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

    );

  };

export default SellerNetCalc;
