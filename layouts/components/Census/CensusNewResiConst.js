import { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { Container, Card, CardContent, Typography, Box, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

const columns = [
  { field: 'cell_value', headerName: 'Cell Value', width: 130 },
  { field: 'time_slot_id', headerName: 'Time Slot ID', width: 130 },
  { field: 'error_data', headerName: 'Error Data', width: 130 },
  { field: 'category_code', headerName: 'Category Code', width: 130 },
  { field: 'seasonally_adj', headerName: 'Seasonally Adjusted', width: 180 },
  { field: 'data_type_code', headerName: 'Data Type Code', width: 150 },
  { field: 'time', headerName: 'Time', width: 100 },
];

const CensusNewResiData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [sortModel, setSortModel] = useState([
    {
      field: 'cell_value',
      sort: 'asc',
    },
  ]);

  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  const handlePageChange = (params) => {
    setPage(params.page);
  };

  const handlePageSizeChange = (params) => {
    setRowsPerPage(params.pageSize);
  };

  const handleSortModelChange = (model) => {
    setSortModel(model);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.census.gov/data/timeseries/eits/resconst?get=cell_value,time_slot_id,error_data,category_code&for&seasonally_adj&data_type_code&time=${selectedYear}&key=a26111ee51e7060d8fcd2718939ddd18c2936797`);
        const formattedData = response.data.slice(1).map((item, index) => ({
          id: index,
          cell_value: item[0],
          time_slot_id: item[1],
          error_data: item[2],
          category_code: item[3],
          seasonally_adj: item[4],
          data_type_code: item[5],
          time: item[6]
        }));
        setData(formattedData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [page, rowsPerPage, sortModel, selectedYear]);

  return (
    <Container maxWidth="md">
      <Box sx={{ marginBottom: 2 }}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            views={['year']}
            label="Year"
            minDate={new Date('1959')}
            maxDate={new Date()}
            value={new Date(selectedYear, 0)}
            onChange={(date) => handleYearChange(date.getFullYear())}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Box>
      <Card>
     <CardContent>
          {loading ? (
            <Typography>Loading...</Typography>
          ) : error ? (
            <Typography>Error: {error.message}</Typography>
          ) : (
            <Box height={900} style={{ width: '100%' }}>
              <DataGrid
                rows={data}
                columns={columns}
                pageSize={rowsPerPage}
                pagination
                paginationMode="server"
                onPageChange={handlePageChange}
                onPageSizeChange={handlePageSizeChange}
                onSortModelChange={handleSortModelChange}
                sortModel={sortModel}
              />
            </Box>
          )}
        </CardContent>
      </Card>
    </Container>
  );
}

export default CensusNewResiData;
