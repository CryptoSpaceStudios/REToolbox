import { useState, useEffect } from 'react';
import axios from 'axios';
import { Head } from 'next/head';
import {
  Container,
  Box,
  Typography,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Card,
  CardContent,
  FormHelperText,
  Grid
} from '@mui/material';

function Zillowfsbo({ data }) {
  const { frontmatter } = data;
  const { title, zillowfsbo } = frontmatter;

  const [zillowData, setZillowData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('YOUR_ZILLOW_API_ENDPOINT');
        setZillowData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    
    <Container maxWidth="sm">
        
      <Typography variant="h4" component="h1" gutterBottom>
        Zillow For Sale by Owner
      </Typography>
      <Card>
        <CardContent>
          {loading ? (
            <Typography>Loading...</Typography>
          ) : error ? (
            <Typography>Error: {error.message}</Typography>
          ) : (
            <Box>
              {/* Display zillowData using MUI components */}
              {/* Modify the code based on the structure of the response from Zillow API */}
            </Box>
          )}
        </CardContent>
      </Card>
    </Container>
  );
}

export default Zillowfsbo;
