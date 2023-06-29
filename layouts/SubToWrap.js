import React, { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { markdownify } from "@lib/utils/textConverter";
import { useRouter } from 'next/router';

// Import Calculators
import EntryFeeForm from '@components/EntryFeeCalc';
import AcquisitionForm from '@components/AcquisitionCalc';
import DispositionForm from '@components/DispositionCalc';

function SubtoCalc({ data }) {
  const [value, setValue] = useState(0);
  const { frontmatter } = data;
  const { title, heading, dispositiontitle, acquisitiontitle, entrytitle } = frontmatter;
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
              </Box>
            </Card>
          </Grid>
        </Grid>
      </div>
    </section>
  );
  
}

export default SubtoCalc;