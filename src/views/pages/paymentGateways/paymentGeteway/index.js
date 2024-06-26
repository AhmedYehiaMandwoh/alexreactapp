import React from 'react';

// project imports
import Button from '@mui/material/Button';
import AnimateButton from 'ui-component/extended/AnimateButton';
import MainCard from 'ui-component/cards/MainCard';

import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';


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
  const { t ,i18n} = useTranslation();
  const navigate = useNavigate();





  return (
    <MainCard>
      <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} justifyContent="space-between" alignItems="center">
          <Grid>
            <Item>
              <h2 className="main_title_table">{t('Add Geteway')}</h2>
            </Item>
          </Grid>
         
        </Grid>

        {/* <Box sx={{ display: 'flex', flexWrap: 'wrap' }}> */}
    <div style={{ display: 'flex', justifyContent:'space-around' }}> 
        <FormControl fullWidth sx={{ justifyContent: i18n.language === 'ar' ? 'flex-start' : 'flex-start' ,width:'48%'}} variant="filled">
            <InputLabel htmlFor="filled-adornment-amount" sx={{ direction: i18n.language === 'ar' ? 'rtl' : 'ltr', position: 'absolute', left: i18n.language === 'ar' ? 'auto' : 0, right: i18n.language === 'ar' ? 25 : 'auto' }}>
                {t('Name')}
            </InputLabel>
            <FilledInput id="filled-adornment-name" />
        </FormControl>

        <FormControl fullWidth sx={{ justifyContent: i18n.language === 'ar' ? 'flex-start' : 'flex-start' ,width:'48%'}} variant="filled">
            <InputLabel htmlFor="filled-adornment-amount" sx={{ direction: i18n.language === 'ar' ? 'rtl' : 'ltr', position: 'absolute', left: i18n.language === 'ar' ? 'auto' : 0, right: i18n.language === 'ar' ? 25 : 'auto' }}>
                {t('api key')}
            </InputLabel>
            <FilledInput id="filled-adornment-name" />
        </FormControl>
        </div>
       
      
</Box>

        <Grid >
            <Item sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: i18n.language === 'ar' ? 'flex-end' : 'flex-end' }}>
                <AnimateButton>
          <Button variant="outlined" sx={{ margin: '0 15px' }} onClick={() =>navigate(-1)}>{t('Back')}</Button>
        </AnimateButton>
        <AnimateButton>
          <Button variant="contained">{t('Create')}</Button>
        </AnimateButton>
            </Item>
          </Grid>
      {/* </Box> */}
    </MainCard>
  );
};

export default Rooms;
