
// material-ui
import React from 'react'

// project imports
import MainCard from 'ui-component/cards/MainCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';


import Table from '../../pagesComponenets/Table';


import { useTranslation } from 'react-i18next';

// ==============================|| SAMPLE PAGE ||============================== //

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'shippingvalues', headerName: 'Shipping Values', width: 130 },

];

const rows = [
  { id: 1, shippingvalues: 'Snow' },
  { id: 2, shippingvalues: 'Lannister'},
  { id: 3, shippingvalues: 'Lannister'},
  { id: 4, shippingvalues: 'Stark'},
  { id: 5, shippingvalues: 'Targaryen'},
  
];

const Shipping = () => {
  const { t } = useTranslation();

  // Open And Close Modal 

  return (
    <MainCard>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} justifyContent="space-between" alignItems="center">
          <Grid>
            <Item>
              <h2 className="main_title_table">{t('Edit and add shipping Value')}</h2>
            </Item>
          </Grid>
          <Grid >
            
          </Grid>
        </Grid>
        <Table rows={rows} columns={columns.map(col => ({ ...col, headerName: t(col.headerName) }))} />

      </Box>
    </MainCard>
  )
};

export default Shipping;
