import React, { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { markdownify } from "@lib/utils/textConverter";
import { useRouter } from 'next/router';

/* Sub Forms */
import WholesaleForm from '@layouts/components/RoiCalc/Wholesale';
import StrMtrForm from '@layouts/components/RoiCalc/StrMtr';
import FnFForm from '@layouts/components/RoiCalc/Fix-n-Flip';
import BnHForm from '@layouts/components/RoiCalc/Buy-n-Hold';

function Roi({ data }) {
  const [value, setValue] = useState(0);
  const { frontmatter } = data;
  const { 
    title, 
    heading, 
    wholesaletitle,
    wholesalesubtitle,
    strmtrtitle, 
    strmtrsubtitle, 
    fnftitle, 
    fnfsubtitle, 
    bnhtitle, 
    bnhsubtitle 
  } = frontmatter;

  const router = useRouter();

  useEffect(() => {
    const hash = router.asPath.split('#')[1];
    const hashToIndex = {
      'bnh': 0,
      'fnf': 1,
      'strmtr': 2,
      'wholesale': 3,
    };

    setValue(hashToIndex[hash] || 0);
  }, [router.asPath]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="section" role="region" aria-label="Return on Investment Calculators">
      <div className="container">
        {markdownify(title, "h1", "text-center font-normal")}<br />
        {markdownify(heading, "h3", "text-center font-normal")}
        <Grid container justifyContent="center" className='mt-6'>
          <Grid item xs={12} md={9} >
            <Card>
              <Box sx={{ width: '100%', minHeight: '1350px' }} className='bg-theme-light dark:bg-theme-dark'>
                <Box role="tablist" aria-label="ROI Calculator Tabs">
                  <Tabs value={value} onChange={handleChange} centered aria-label="Return on Investment Calculators"
                    sx={{ '.MuiTab-root': { fontSize: '1rem',  color: '#222' },
                          '.MuiTab-root.Mui-selected': { fontSize: '1rem', fontWeight: 'bold', color: '#ff0000' },
                          '.MuiTabs-indicator': { backgroundColor: '#ff0000' },
                        }}
                      >
                    <Tab label="Buy N Hold" role="tab" aria-selected={value === 0} id="tab-buyAndHold" aria-controls="panel-buyAndHold" />
                    <Tab label="Fix N Flip" role="tab" aria-selected={value === 1} id="tab-fixAndFlip" aria-controls="panel-fixAndFlip" />
                    <Tab label="Rentals" role="tab" aria-selected={value === 2} id="tab-rentals" aria-controls="panel-rentals" />
                    <Tab label="Wholesale" role="tab" aria-selected={value === 3} id="tab-wholesale" aria-controls="panel-wholesale" />
                  </Tabs>
                  <Box sx={{ p: 3 }} />
                </Box>

                <div role="tabpanel" id="panel-buyAndHold" aria-labelledby="tab-buyAndHold" hidden={value !== 0}>
                  {markdownify(bnhtitle, "h3", "text-center text-black dark:text-white font-normal")}<br />
                  {markdownify(bnhsubtitle, "h5", "text-center text-black dark:text-white font-normal")}<br />
                  <div><BnHForm /></div>
                </div>
                <div role="tabpanel" id="panel-fixAndFlip" aria-labelledby="tab-fixAndFlip" hidden={value !== 1}>
                  {markdownify(fnftitle, "h3", "text-center text-black dark:text-white font-normal")}<br />
                  {markdownify(fnfsubtitle, "h5", "text-center text-black dark:text-white font-normal")}<br />
                  <div><FnFForm /></div>
                </div>
                <div role="tabpanel" id="panel-rentals" aria-labelledby="tab-rentals" hidden={value !== 2}>
                  {markdownify(strmtrtitle, "h3", "text-center text-black dark:text-white font-normal")}<br />
                  {markdownify(strmtrsubtitle, "h5", "text-center text-black dark:text-white font-normal")}<br />
                  <div><StrMtrForm/></div>
                </div>
                <div role="tabpanel" id="panel-wholesale" aria-labelledby="tab-wholesale" hidden={value !== 3}>
                  {markdownify(wholesaletitle, "h3", "text-center text-black dark:text-white font-normal")}<br />
                  {markdownify(wholesalesubtitle, "h5", "text-center text-black dark:text-white font-normal")}<br />
                  <div><WholesaleForm /></div>
                </div>

              </Box>
            </Card>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

export default Roi;
