import React, { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { markdownify } from "@lib/utils/textConverter";
import { useRouter } from 'next/router';

import CensusNewResiData from '@components/CensusNewResiConst';
import CensusNewHomeSales from './components/CensusNewHomeSales';
import CensusConstSpending from './components/Census/CensusConstSpending';


function CensusData({ data }) {
  const [value, setValue] = useState(0);
  const { frontmatter } = data;
  const { title, heading } = frontmatter;
  const router = useRouter();

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
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "text-center font-normal")}<br />
        {markdownify(heading, "h3", "text-center font-normal")}
        <Grid container justifyContent="center" className='mt-6'>
          <Grid item xs={12} md={9} >
            <Card>
              <Box sx={{ width: '100%', height: '100%', minHeight: '1150px' }} className='bg-theme-light'>
                <Box  >
                  <Tabs textColor="dark" value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="Return on Investment Calculators"
                    sx={{ '.MuiTab-root': { fontSize: '12px', fontFamily: "Lato, sans-serif", fontWeight: '700' },
                          '.MuiTab-root.Mui-selected': { color: '#ff0000' },
                          '.MuiTabs-indicator': { backgroundColor: '#ff0000' },
                        }}
                      >
                    <Tab wrapped label="New Residential Construction" />
                    <Tab wrapped label="New Home Sales" />
                    <Tab wrapped label="Construction Spending" />
                    <Tab wrapped label="Housing Vacancies and Homeownership" />
                  </Tabs>
                  <Box sx={{ p: 3 }} />
                </Box>
                {value === 0 && (
                  <>{/* {markdownify(entrytitle, "h3", "text-center font-normal")}<br /> */}
                  <div><CensusNewResiData /></div>
                  </>                  
                )}
                {value === 1 && (
                  <>{/* {markdownify(acquisitiontitle, "h3", "text-center font-normal")}<br /> */}
                  <div><CensusNewHomeSales /></div>
                  </>                  
                )}
                {value === 2 && (
                  <>{/* {markdownify(dispositiontitle, "h3", "text-center font-normal")}<br /> */}
                  <div><CensusConstSpending /></div>
                  </>
                )}
                {value === 3 && (
                  <>{/* {markdownify(dispositiontitle, "h3", "text-center font-normal")}<br /> */}
                  <div>page 4</div>
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

export default CensusData;