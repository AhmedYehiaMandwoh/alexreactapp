import React, { useState } from 'react';

// project imports
import Button from '@mui/material/Button';
import AnimateButton from 'ui-component/extended/AnimateButton';
import MainCard from 'ui-component/cards/MainCard';
import FilledInput from '@mui/material/FilledInput';
import Box from '@mui/material/Box';

import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import Paper from '@mui/material/Paper';

import { useNavigate } from 'react-router-dom';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Rooms = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <MainCard>
      <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} justifyContent="space-between" alignItems="center">
          <Grid>
            <Item>
              <h2 className="main_title_table">{t('Create a Room')}</h2>
            </Item>
          </Grid>
          <Grid >
            <Item sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <AnimateButton>
          <Button variant="outlined" sx={{ margin: '0 15px' }} onClick={() =>navigate(-1)}>{t('Back')}</Button>
        </AnimateButton>
        <AnimateButton>
          <Button variant="contained">{t('Create')}</Button>
        </AnimateButton>
            </Item>
          </Grid>
        </Grid>
   

        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <div>
            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
              <InputLabel htmlFor="filled-adornment-amount">{t('Name')}</InputLabel>
              <FilledInput id="filled-adornment-name" />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
              <InputLabel htmlFor="filled-adornment-amount">{t('Upload Image')}</InputLabel>
              <FilledInput id="filled-adornment-image" type="file" startAdornment={<InputAdornment position="start">📷</InputAdornment>} />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
              <InputLabel htmlFor="filled-adornment-amount">{t('Room advertisement')}</InputLabel>
              <FilledInput id="filled-adornment-ad" />
            </FormControl>

            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
              <InputLabel htmlFor="filled-adornment-amount">{t('Room type')}</InputLabel>
              <FilledInput id="filled-adornment-room" />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
              <InputLabel htmlFor="filled-adornment-password">{t('Password')}</InputLabel>
              <FilledInput
                id="filled-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
        </Box>
      </Box>
    </MainCard>
  );
};

export default Rooms;
