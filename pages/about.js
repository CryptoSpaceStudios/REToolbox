import React, { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { markdownify } from "@lib/utils/textConverter";
import { useRouter } from 'next/router';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Base from '@layouts/Baseof';
import { useTheme } from '@mui/material/styles';

function About({ frontmatter }) {
  const [value, setValue] = useState(0);
  const { 
    title, 
    description, 
    story, 
    mission, 
    why, 
    tools, 
    touch, 
    thanks 
  } = frontmatter || {}; // Ensure frontmatter is defined

  const router = useRouter();
  const theme = useTheme();

  useEffect(() => {
    const hash = router.asPath.split('#')[1];
    const hashToIndex = {
      'story': 0,
      'mission': 1,
      'why': 2,
      'tools': 3,
      'touch': 4,
      'thanks': 5,
    };

    setValue(hashToIndex[hash] || 0);
  }, [router.asPath]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Base title={title} description={description}>
      <section className="section" role="region" aria-label="About Us">
        <div className="container">
          {markdownify(title, "h1", "text-center font-normal")}<br />
          {markdownify(description, "h3", "text-center font-normal")}
          <Grid container justifyContent="center" className='mt-6'>
            <Grid item xs={12} md={10} > {/* Adjusted the width to make the card 20% wider */}
              <Card>
                <Box sx={{ width: '100%', minHeight: '1350px', padding: '0 30px' }} className='bg-theme-light dark:bg-theme-dark'> {/* Added 30px padding on the sides */}
                  <Box role="tablist" aria-label="About Us Tabs">
                    <Tabs value={value} onChange={handleChange} centered aria-label="About Us Tabs"
                      sx={{ 
                        '.MuiTab-root': { 
                          fontSize: '1rem',  
                          color: theme.palette.mode === 'dark' ? '#fff' : '#222' 
                        },
                        '.MuiTab-root.Mui-selected': { 
                          fontSize: '1rem', 
                          fontWeight: 'bold', 
                          color: theme.palette.mode === 'dark' ? '#ffff00' : '#ff0000' 
                        },
                        '.MuiTabs-indicator': { 
                          backgroundColor: '#ff0000' 
                        },
                      }}
                    >
                      <Tab label="Our Story" role="tab" aria-selected={value === 0} id="tab-story" aria-controls="panel-story" />
                      <Tab label="Our Mission" role="tab" aria-selected={value === 1} id="tab-mission" aria-controls="panel-mission" />
                      <Tab label="Why Choose Us" role="tab" aria-selected={value === 2} id="tab-why" aria-controls="panel-why" />
                      <Tab label="Our Tools" role="tab" aria-selected={value === 3} id="tab-tools" aria-controls="panel-tools" />
                      <Tab label="Get in Touch" role="tab" aria-selected={value === 4} id="tab-touch" aria-controls="panel-touch" />
                      <Tab label="Thank You" role="tab" aria-selected={value === 5} id="tab-thanks" aria-controls="panel-thanks" />
                    </Tabs>
                    <Box sx={{ p: 3 }} />
                  </Box>

                  <div role="tabpanel" id="panel-story" aria-labelledby="tab-story" hidden={value !== 0}>
                    {markdownify(story, "h4", "text-center text-black dark:text-white font-normal")}<br />
                  </div>
                  <div role="tabpanel" id="panel-mission" aria-labelledby="tab-mission" hidden={value !== 1}>
                    {markdownify(mission, "h4", "text-center text-black dark:text-white font-normal")}<br />
                  </div>
                  <div role="tabpanel" id="panel-why" aria-labelledby="tab-why" hidden={value !== 2}>
                    {markdownify(why, "h4", "text-center text-black dark:text-white font-normal")}<br />
                  </div>
                  <div role="tabpanel" id="panel-tools" aria-labelledby="tab-tools" hidden={value !== 3}>
                    {markdownify(tools, "h4", "text-center text-black dark:text-white font-normal")}<br />
                  </div>
                  <div role="tabpanel" id="panel-touch" aria-labelledby="tab-touch" hidden={value !== 4}>
                    {markdownify(touch, "h4", "text-center text-black dark:text-white font-normal")}<br />
                  </div>
                  <div role="tabpanel" id="panel-thanks" aria-labelledby="tab-thanks" hidden={value !== 5}>
                    {markdownify(thanks, "h4", "text-center text-black dark:text-white font-normal")}<br />
                  </div>

                </Box>
              </Card>
            </Grid>
          </Grid>
        </div>
      </section>
    </Base>
  );
}

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), 'content', 'aboutus.md');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data: frontmatter } = matter(fileContent);

  return {
    props: {
      frontmatter: frontmatter || {}, // Ensure frontmatter is defined
    },
  };
};

export default About;