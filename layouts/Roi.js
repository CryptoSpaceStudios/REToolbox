import React, { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { markdownify } from "@lib/utils/textConverter";
import { useRouter } from 'next/router';
import WholesaleForm from '@components/Wholesale';


function Roi({ data }) {
  const [value, setValue] = useState(0);
  const { frontmatter } = data;
  const { title, heading, wholesaletitle, strmtrtitle, fnftitle, bnhtitle } = frontmatter;
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
              <Box sx={{ width: '100%', minHeight: '900px' }} className='bg-theme-light'>
                <Box  >
                  <Tabs value={value} onChange={handleChange} centered aria-label="Return on Investment Calculators"
                    sx={{ '.MuiTab-root': { fontSize: '1rem',  color: '#222' },
                          '.MuiTab-root.Mui-selected': { fontSize: '1rem', fontWeight: 'bold', color: '#ff0000' },
                          '.MuiTabs-indicator': { backgroundColor: '#ff0000' },
                        }}
                      >
                    <Tab label="Buy N Hold" />
                    <Tab label="Fix N Flip" />
                    <Tab label="STR / MTR" />
                    <Tab label="Wholesale" />
                  </Tabs>
                  <Box sx={{ p: 3 }} />
                </Box>
                {value === 0 && (
                  <>{markdownify(bnhtitle, "h3", "text-center font-normal")}<br />
                  <div>Content for BnH helper</div>
                  </>
                  
                )}
                {value === 1 && (
                  <>{markdownify(fnftitle, "h3", "text-center font-normal")}<br />
                  <div>Content for FnF helper</div>
                  </>
                  
                )}
                {value === 2 && (
                  <>{markdownify(strmtrtitle, "h3", "text-center font-normal")}<br />
                  <div>Content for STR / MTR helper</div>
                  </>
                )}
                {value === 3 && (
                  <>{markdownify(wholesaletitle, "h3", "text-center font-normal")}<br />
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
