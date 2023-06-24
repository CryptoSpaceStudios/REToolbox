import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, TextField, MenuItem, Select, InputLabel, FormControl, Card, CardContent, FormHelperText, Grid } from '@mui/material';

const rehabLevels = [
  { label: 'Clean up', value: 20 },
  { label: 'Lipstick', value: 25 },
  { label: 'Moderate', value: 30 },
  { label: 'Heavy', value: 40 },
  { label: 'Rekt', value: 50 },
];

function MaoCalculator() {
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

    // If there are no errors, the form is valid
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // If the form is valid, you can submit the form or perform other actions here
    }
  };

  

  return (
    
    <Container maxWidth="md">  {/* Increase maxWidth to "lg" */}
      <Typography variant="h4" component="h1" gutterBottom style={{ textAlign: 'center' }}>
        Maximum Allowable Offer
      </Typography>

      <Box>
        {mao > 0 ? (
          <Typography variant="h5" component="h1" gutterBottom style={{ textAlign: 'center', color: 'red', fontWeight: 'bold' }}>
            MAO for this property is ${mao.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </Typography>
        ) : (
          <Typography variant="h5" component="h1" gutterBottom style={{ textAlign: 'center', color: 'red', fontWeight: 'bold' }}>
            It will cost you ${Math.abs(mao).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} out of pocket to do this deal
          </Typography>
        )}
      </Box>





      <Box mt={5} mb={8} boxShadow={8} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Card sx={{ width: '85%' }}>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3} mt={5} mb={5}  direction="column">
                
              {/* Top of MAO Form grid */}

                
                <Grid item>
                <InputLabel id="sqft-label">Square Footage</InputLabel>
                  <TextField
                    fullWidth
                    required
                    error={!!errors.sqft}
                    helperText={errors.sqft}
                    value={sqft}
                    type="number"
                    onChange={(e) => setSqft(e.target.value)}
                    aria-label='Square Footage'
                    alt='Square Footage'
                    title='Square Footage'
                  />
                </Grid>
                <Grid item>
                <InputLabel id="arv-label">After Repair Value</InputLabel>
                  <TextField
                    fullWidth
                    required
                    error={!!errors.arv}
                    helperText={errors.arv}
                    value={arv}
                    type="number"
                    onChange={(e) => setArv(e.target.value)}
                    aria-label='After Repair Value (ARV)'
                    alt='After Repair Value (ARV)'
                    title='After Repair Value (ARV)'
                  />
                </Grid>
                <Grid item>
                <InputLabel id="rehab-label">Rehab Level</InputLabel>
                  <FormControl fullWidth error={!!errors.rehabLevel}>
                    <Select
                      labelId="rehab-level-label"
                      value={rehabLevel}
                      aria-label='Rehab Level'
                      alt='Rehab Level'
                      title='Rehab Level'
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
                <Grid item>
                <InputLabel id="rcomm-label">Realtor Commission</InputLabel>
                  <TextField
                    fullWidth
                    required
                    disabled
                    value={realtorCommissions.toFixed(2)}
                    aria-label='Realtor Commission'
                    alt='Realtor Commission'
                    title='Realtor Commission'
                  />
                </Grid>
                <Grid item>
                <InputLabel id="tcost-label">Title Costs</InputLabel>
                  <TextField
                    fullWidth
                    required
                    disabled
                    value={titleCost.toFixed(2)}
                    aria-label='Title Costs'
                    alt='Title Costs'
                    title='Title Costs'
                  />
                </Grid>
                <Grid item>
                <InputLabel id="ccost-label">Closing Costs</InputLabel>
                  <TextField
                    fullWidth
                    required
                    disabled
                    value={closingCosts.toFixed(2)}
                    aria-label='Closing Costs'
                    alt='Closing Costs'
                    title='Closing Costs'
                  />
                </Grid>
                <Grid item>
                <InputLabel id="rehabcost-label">Rehab Cost</InputLabel>
                  <TextField
                    fullWidth
                    required
                    disabled
                    value={rehabCost.toFixed(2)}
                    aria-label='Rehab Cost'
                    alt='Rehab Cost'
                    title='Rehab Cost'
                  />
                </Grid>
                <Grid item>
                <InputLabel id="wholesale-label">Wholesale Fee</InputLabel>
                  <TextField
                    fullWidth
                    required
                    error={!!errors.wholesaleFee}
                    helperText={errors.wholesaleFee}
                    value={wholesaleFee.toFixed(2)}
                    type="number"
                    onChange={(e) => setWholesaleFee(e.target.value)}
                    aria-label='Wholesale Fee'
                    alt='Wholesale Fee'
                    title='Wholesale Fee'
                  />
                </Grid>
                <Grid item>
                <InputLabel id="mao-label">Maximum Allowable Offer</InputLabel>
                  <TextField
                    fullWidth
                    required
                    disabled
                    value={mao === 0 ? '' : mao.toFixed(2)}
                    aria-label='Maximum Allowable Offer'
                    alt='Maximum Allowable Offer'
                    title='Maximum Allowable Offer'
                  />
                </Grid>

              {/* Bottom of MAO Form grid */}

  
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Box>
    </Container>
    
  );
  
}




export default MaoCalculator;
