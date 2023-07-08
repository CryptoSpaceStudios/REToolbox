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
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "text-center font-normal")}<br />
        {markdownify(heading, "h3", "text-center font-normal")}
        <Grid container justifyContent="center" className='mt-6'>
          <Grid item xs={12} md={9} >
            <Card>
              <Box sx={{ width: '100%', minHeight: '1230px' }} className='bg-theme-light dark:bg-theme-dark'>
                <Box  >
                  <Tabs value={value} onChange={handleChange} centered aria-label="Return on Investment Calculators"
                    sx={{ '.MuiTab-root': { fontSize: '1rem',  color: '#222' },
                          '.MuiTab-root.Mui-selected': { fontSize: '1rem', fontWeight: 'bold', color: '#ff0000' },
                          '.MuiTabs-indicator': { backgroundColor: '#ff0000' },
                        }}
                      >
                    <Tab label="Buy N Hold" />
                    <Tab label="Fix N Flip" />
                    <Tab label="Rentals" />
                    <Tab label="Wholesale" />
                  </Tabs>
                  <Box sx={{ p: 3 }} />
                </Box>

                {value === 0 && (
                  <>{markdownify(bnhtitle, "h3", "text-center text-black dark:text-white font-normal")}<br />
                  {markdownify(bnhsubtitle, "h5", "text-center text-black dark:text-white font-normal")}<br />
                  <div><BnHForm /></div>
                  </>
                  
                )}
                {value === 1 && (
                  <>{markdownify(fnftitle, "h3", "text-center text-black dark:text-white font-normal")}<br />
                  {markdownify(fnfsubtitle, "h5", "text-center text-black dark:text-white font-normal")}<br />
                  <div><FnFForm /></div>
                  </>
                  
                )}
                {value === 2 && (
                  <>{markdownify(strmtrtitle, "h3", "text-center text-black dark:text-white font-normal")}<br />
                  {markdownify(strmtrsubtitle, "h5", "text-center text-black dark:text-white font-normal")}<br />
                  <div><StrMtrForm/></div>
                  </>
                )}
                {value === 3 && (
                  <>{markdownify(wholesaletitle, "h3", "text-center text-black dark:text-white font-normal")}<br />
                  {markdownify(wholesalesubtitle, "h5", "text-center text-black dark:text-white font-normal")}<br />
                  <div><WholesaleForm /></div>
                  </>
                )}

              </Box>
            </Card>
          </Grid>
        </Grid>
      </div>
    </section>
  );
  
}

export default Roi;
