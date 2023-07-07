import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, TextField, MenuItem, Select, InputLabel, FormControl, Card, CardContent, FormHelperText, Grid } from '@mui/material';

const rehabLevels = [
  { label: 'Turn Key', value: 1},
  { label: 'Clean up', value: 20 },
  { label: 'Lipstick', value: 25 },
  { label: 'Moderate', value: 30 },
  { label: 'Heavy', value: 40 },
  { label: 'Rekt  ', value: 50 },
];

function MaoCalculator({ data }) {
	const { frontmatter } = data;
  const { title, heading, maos } = frontmatter;
  const [address, setAddress] = useState("");
  const [sqft, setSqft] = useState(0);
  const [arv, setArv] = useState(0);
  const [rehabLevel, setRehabLevel] = useState(0);
  const [realtorCommissions, setRealtorCommissions] = useState(0);
  const [titleCost, setTitleCost] = useState(0);
  const [closingCosts, setClosingCosts] = useState(0);
  const [inspectionFees, setInspectionFees] = useState(0);
  const [rehabCost, setRehabCost] = useState(0);
  const [wholesaleFee, setWholesaleFee] = useState(10000);
  const [mao, setMao] = useState(0);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (arv > 0 && sqft > 0 && rehabLevel > 0) {
      setRealtorCommissions(arv * 0.03);
      setTitleCost(arv * 0.0055);
      setClosingCosts(arv * 0.08);
      setInspectionFees(arv * 0.02);
      setRehabCost(sqft * rehabLevel);
    }
  }, [arv, sqft, rehabLevel]);

  useEffect(() => {
    if (arv > 0 && realtorCommissions > 0 && titleCost > 0 && closingCosts > 0 && inspectionFees > 0 && rehabCost > 0 && wholesaleFee > 0) {
      setMao(arv - realtorCommissions - titleCost - closingCosts - inspectionFees - rehabCost - wholesaleFee);
    }
  }, [arv, realtorCommissions, titleCost, closingCosts, inspectionFees, rehabCost, wholesaleFee]);
  const validateForm = () => {
    let newErrors = {};

    if (address.trim() === '') {
      newErrors.address = 'Address is required.';
    }

    if (sqft <= 0) {
      newErrors.sqft = 'Square footage should be greater than 0.';
    }

    if (arv <= 0) {
      newErrors.arv = 'ARV should be greater than 0.';
    }

    if (rehabLevel <= 0) {
      newErrors.rehabLevel = 'Please select a rehab level.';
    }

    if (wholesaleFee <= 0) {
      newErrors.wholesaleFee = 'Wholesale fee should be greater than 0.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
    }
  };

  return (
    <Grid container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} mb={5}>
      <Container maxWidth="md" role='region' aria-label='MAO'>
        <Typography variant="h2" component="h2" gutterBottom style={{ textAlign: 'center' }}>{frontmatter.title}</Typography>

        <Box>
          {mao > 0 ? (
            <Typography variant="h4" component="h2" gutterBottom style={{ textAlign: 'center', color: 'blue', fontWeight: 'bold' }}>
              The MAO for this property is ${mao.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </Typography>
          ) : (
            <Typography variant="h5" component="h5" gutterBottom style={{ textAlign: 'center' }}>{frontmatter.heading}</Typography>
          )}
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center' }} >
          <Card sx={{ width: '100%', maxWidth: '800px', boxShadow: '0 0 10px rgba(0, 0, 0, 1)', borderRadius: '16px', margin: 'auto' }} role='region' aria-label='MAO'>
            <CardContent role='region' aria-label='MAO'>
              <form onSubmit={handleSubmit} role='form' aria-label='MAO'>
                <Grid container spacing={3} mt={5} mb={5}  direction="column" role='grid' aria-label='MAO'>


                  {/* Top of MAO Form grid */}
                <Grid item
                    role='gridcell'
                    aria-label='Square Footage'>
                <InputLabel 
                    htmlFor='sqftage'
                    id="sqft-label">Square Footage</InputLabel>
                  <TextField
                    id='sqftage'
                    fullWidth
                    required
                    error={!!errors.sqft}
                    helperText={errors.sqft}
                    value={sqft}
                    type="number"
                    onChange={(e) => setSqft(e.target.value)}
                    aria-label='Square Footage'
                  />
                </Grid>
                <Grid item
                    role='gridcell'
                    aria-label='After Repair Value (ARV)'>
                <InputLabel 
                    htmlFor='arrrvvv'
                    id="arv-label">After Repair Value (ARV)</InputLabel>
                  <TextField
                    id='arrrvvv'
                    fullWidth
                    required
                    error={!!errors.arv}
                    helperText={errors.arv}
                    value={arv}
                    type="number"
                    onChange={(e) => setArv(e.target.value)}
                    aria-label='After Repair Value (ARV)'
                  />
                </Grid>
                <Grid item
                  role='gridcell'
                  aria-label='Rehab Level'>
                <InputLabel 
                      htmlFor='rehabamount'
                      id="rehab-label">Rehab Level</InputLabel>
                  <FormControl fullWidth error={!!errors.rehabLevel}>
                    <Select
                      id='rehabamount'
                      labelId="rehab-level-label"
                      value={rehabLevel}
                      aria-label='Rehab Level'
                      onChange={(e) => setRehabLevel(e.target.value)}
                    >
                      {rehabLevels.map((level, index) => (
                        <MenuItem key={index} value={level.value}>
                          {level.label} ($ {level.value}/sqft)
                        </MenuItem>
                      ))}
                    </Select>
                    {errors.rehabLevel && <FormHelperText>{errors.rehabLevel}</FormHelperText>}
                  </FormControl>
                </Grid>
                <Grid item
                  role='gridcell'
                  aria-label='Realtor Commission'>
                <InputLabel htmlFor='realtorcommissions' id="rcomm-label">Realtor Commission (3%)</InputLabel>
                  <TextField
                    id='realtorcommissions'
                    fullWidth
                    required
                    disabled
                    value={realtorCommissions.toFixed(2)}
                    aria-label='Realtor Commission'
                  />
                </Grid>
                <Grid item
                    role='gridcell'
                    aria-label='Title Costs'>
                <InputLabel htmlFor='titlecosts' id="tcost-label">Title Costs (0.55%)</InputLabel>
                  <TextField
                    id='titlecosts'
                    fullWidth
                    required
                    disabled
                    value={titleCost.toFixed(2)}
                    aria-label='Title Costs'
                  />
                </Grid>
                <Grid item
                  role='gridcell'
                  aria-label='Closing Costs'>
                <InputLabel htmlFor='closingcosts' id="ccost-label">Closing Costs (8%)</InputLabel>
                  <TextField
                    id='closingcosts'
                    fullWidth
                    required
                    disabled
                    value={closingCosts.toFixed(2)}
                    aria-label='Closing Costs'
                  />
                </Grid>
                <Grid item
                  role='gridcell'
                  aria-label='Rehab Cost'>
                <InputLabel htmlFor='rehabcost' id="rehabcost-label">Rehab Cost</InputLabel>
                  <TextField
                    id='rehabcost'
                    fullWidth
                    required
                    disabled
                    value={rehabCost.toFixed(2)}
                    aria-label='Rehab Cost'
                  />
                </Grid>
                <Grid item
                  role='gridcell'
                  aria-label='Wholesale Fee'>
                <InputLabel htmlFor='wholesale' id="wholesale-label">Wholesale Fee (Change if Needed)</InputLabel>
                  <TextField
                    id='wholesale'
                    fullWidth
                    required
                    error={!!errors.wholesaleFee}
                    helperText={errors.wholesaleFee}
                    value={wholesaleFee.toFixed(2)}
                    type="number"
                    onChange={(e) => setWholesaleFee(e.target.value)}
                    aria-label='Wholesale Fee'
                  />
                </Grid>
                <Grid item
                  role='gridcell'
                  aria-label='Maximum Allowable Offer'>
                <InputLabel htmlFor='maototal' id="mao-label">Maximum Allowable Offer</InputLabel>
                  <TextField
                    id='maototal'
                    fullWidth
                    required
                    disabled
                    value={mao === 0 ? '' : mao.toFixed(2)}
                    aria-label='Maximum Allowable Offer'
                  />
                </Grid>

                </Grid>
              </form>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Grid>
  );
}

export default MaoCalculator;
