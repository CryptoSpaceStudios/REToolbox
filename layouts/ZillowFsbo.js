import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Box,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Card,
  CardContent
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

function Zillowfsbo({ data }) {
  const { frontmatter } = data;
  const { title, zillowfsbo } = frontmatter;

  const [zillowData, setZillowData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [propertyType, setPropertyType] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.bridgedataoutput.com/api/v2/test/listings`, {
          params: {
            access_token: process.env.NEXT_PUBLIC_ZILLOW_API_KEY,
            order: 'desc',
            fields: 'Ownership,OwnershipType,OwnerName,OwnerPhone,PostalCity,PostalCode,BridgeModificationTimestamp,DaysOnMarket',
            'PropertyType.in': propertyType
          }
        });
    
        // Assuming the data returned from the API is an array
        if(response.data && response.data.bundle) {
          const dataWithId = response.data.bundle.map((item, index) => {
            return {...item, id: index}; // Add an 'id' field for DataGrid to use
          });
    
          setZillowData(dataWithId);
        } else {
          setZillowData([]);
        }
    
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
        console.error(error);
      }
    };

    fetchData();
  }, [propertyType]);

  console.log(`Zillow API Key is ${process.env.NEXT_PUBLIC_ZILLOW_API_KEY}`);
  console.log(`Zillow Property Type is ${propertyType}`);
  console.log(`Zillow Data: ${JSON.stringify(zillowData)}`);

  const handlePropertyTypeChange = (event) => {
    setPropertyType(event.target.value);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 20 },
    { field: 'DaysOnMarket', headerName: 'DOM', width: 40 },
    { field: 'Ownership', headerName: 'Ownership', width: 100 },
    { field: 'OwnerName', headerName: 'Owner Name', width: 100 },
    { field: 'OwnerPhone', headerName: 'Owner Phone', width: 100 },
    { field: 'PostalCode', headerName: 'Zip Code', width: 100 },
    { field: 'PostalCity', headerName: 'City', width: 100 },
    { field: 'BridgeModificationTimestamp', headerName: 'Time Stamp', width: 200 },
    { field: 'url', headerName: 'URL', width: 350 },
    // Add more columns based on the data you want to display
  ];

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Zillow For Sale by Owner
      </Typography>

      <FormControl fullWidth>
        <InputLabel id="propertyTypeLabel">Property Type</InputLabel>
        <Select
          labelId="propertyTypeLabel"
          id="propertyTypeSelect"
          value={propertyType}
          label="Property Type"
          onChange={handlePropertyTypeChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Residential">Residential</MenuItem>
          <MenuItem value="Lease">Lease</MenuItem>
          <MenuItem value="Income">Income</MenuItem>
          <MenuItem value="Land">Land</MenuItem>
          <MenuItem value="Mobile">Mobile</MenuItem>
          <MenuItem value="Commercial Sale">Commercial Sale</MenuItem>
        </Select>
      </FormControl>

      <Card>
        <CardContent>
          {loading ? (
            <Typography>Loading...</Typography>
          ) : error ? (
            <Typography>Error: {error.message}</Typography>
          ) : (
            <Box sx={{ height: 400, width: '100%' }}>
              {zillowData && (
                <DataGrid rows={zillowData} columns={columns} pageSize={5} />
              )}
            </Box>
          )}
        </CardContent>
      </Card>
    </Container>
  );
}

export default Zillowfsbo;
