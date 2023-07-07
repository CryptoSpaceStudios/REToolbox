// Part 1
import React, { useEffect, useState, useContext } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { markdownify } from "@lib/utils/textConverter";
import { useRouter } from 'next/router';

// Import Calculators
import { EntryFeeContext, PurchasePriceContext, MortgageBalanceContext, MortgagePiContext, MortgageInterestContext, SellerPaymentContext, ClosingTitleCostsContext, LeadCostsContext, PaymentsOwedContext, PrepCostsContext, HoldTimeCostsContext, MarketingFeesContext } from '@layouts/components/SubToCalc/SubToCalcStates'

import AcquisitionForm from '@layouts/components/SubToCalc/AcquisitionCalc';
import DispositionForm from '@layouts/components/SubToCalc/DispositionCalc';
import EntryFeeForm from '@layouts/components/SubToCalc/EntryFeeCalc';

function SubtoCalc({ data }) {
  const [value, setValue] = useState(0);
  const { frontmatter } = data;
  const { title, heading, dispositiontitle, acquisitiontitle, entrytitle } = frontmatter;
  const router = useRouter();

  // Create a state for entryFee
  const [entryFee, setEntryFee] = useState(0);
  
  // Create states for AcquisitionForm fields
  const [purchasePrice, setPurchasePrice] = useState('');
  const [mortgageBalance, setMortgageBalance] = useState('');
  const [mortgagePi, setMortgagePi] = useState('');
  const [mortgageInterest, setMortgageInterest] = useState('');
  const [acqMortgagePayment, setAcqMortgagePayment] = useState('');


  useEffect(() => {
    const hash = router.asPath.split('#')[1];
    const hashToIndex = {
      'entryfee': 0,
      'acquisition': 1,
      'disposition': 2,
    };

    setValue(hashToIndex[hash] || 0);
  }, [router.asPath]);

  const handleChange = (event, newValue) => { setValue(newValue); };

  return (
    // Part 2
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "text-center font-normal")}<br />
        {markdownify(heading, "h3", "text-center font-normal")}
        <Grid container justifyContent="center" className='mt-6'>
          <Grid item xs={12} md={9} >
            <Card >
              <Box sx={{ width: '100%', height: '100%', minHeight: '1150px' }} className='bg-theme-light dark:bg-theme-dark'>
                <Box  >
                  <Tabs value={value} onChange={handleChange} centered aria-label="Return on Investment Calculators"
                    sx={{ '.MuiTab-root': {   color: '#222' },
                          '.MuiTab-root.Mui-selected': { fontWeight: 'bold', color: '#ff0000' },
                          '.MuiTabs-indicator': { backgroundColor: '#ff0000' },
                        }}
                      >
                    <Tab label="Entry Fee" />
                    <Tab label="Acquisition" />
                    <Tab label="Disposition" />
                  </Tabs>
                  <Box sx={{ p: 3 }} />
                </Box>
                <EntryFeeContext.Provider value={{ entryFee, setEntryFee }}>
                  <PurchasePriceContext.Provider value={{ purchasePrice, setPurchasePrice }}>
                    <MortgageBalanceContext.Provider value={{ mortgageBalance, setMortgageBalance }}>
                      <MortgagePiContext.Provider value={{ mortgagePi, setMortgagePi }}>
                        <MortgageInterestContext.Provider value={{ mortgageInterest, setMortgageInterest }}>
                          {value === 0 && (
                            <>{markdownify(entrytitle, "h3", "text-center font-normal")}<br />
                            <div><EntryFeeForm /></div>
                            </>                  
                          )}
                          {value === 1 && (
                            <>{markdownify(acquisitiontitle, "h3", "text-center font-normal")}<br />
                            <div><AcquisitionForm /></div>
                            </>                  
                          )}
                          {value === 2 && (
                            <>{markdownify(dispositiontitle, "h3", "text-center font-normal")}<br />
                            <div><DispositionForm /></div>
                            </>
                          )}
                        </MortgageInterestContext.Provider>
                      </MortgagePiContext.Provider>
                    </MortgageBalanceContext.Provider>
                  </PurchasePriceContext.Provider>
                </EntryFeeContext.Provider>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </div>
    </section>
  );
  
}

export default SubtoCalc;
