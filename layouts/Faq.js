import React from 'react';
import { Container, Box, Typography } from '@mui/material';

function Faq({ data }) {
  const { frontmatter, mdxContent } = data;
  const { title, description } = frontmatter;

  return (
    <Container maxWidth="md" role="region" aria-label="FAQ">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" component="div">
          {mdxContent}
        </Typography>
      </Box>
    </Container>
  );
}

export default Faq;
