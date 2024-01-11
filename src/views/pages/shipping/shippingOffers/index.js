
// material-ui
import React from 'react'

// project imports
import MainCard from 'ui-component/cards/MainCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';


import Table from '../../pagesComponenets/Table';
import Modal from './Modal';

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
  { field: 'shippingValue', headerName: 'Shipping Value', width: 130 },
  { field: 'offerValue', headerName: 'Offer Value', width: 130 },
  {
    field: 'offerName',
    headerName: 'Offer Name',
  
    width: 130,
  },
  {
    field: 'offerDuration',
    headerName: 'Offer Duration',
   
    width: 160,
   
  },
];

const rows = [
  { id: 1, shippingValue: 'Snow', offerValue: 'Jon', offerName: 35 , offerDuration: 35},
  { id: 2, shippingValue: 'Snow', offerValue: 'Jon', offerName: 35 , offerDuration: 35},
  { id: 3, shippingValue: 'Snow', offerValue: 'Jon', offerName: 35 , offerDuration: 35},
  { id: 4, shippingValue: 'Snow', offerValue: 'Jon', offerName: 35 , offerDuration: 35},
  { id: 5, shippingValue: 'Snow', offerValue: 'Jon', offerName: 35 , offerDuration: 35},
  { id: 6, shippingValue: 'Snow', offerValue: 'Jon', offerName: 35 , offerDuration: 35},
  { id: 7, shippingValue: 'Snow', offerValue: 'Jon', offerName: 35 , offerDuration: 35},
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
              <h2 className="main_title_table">{t('Shipping Offers')}</h2>
            </Item>
          </Grid>
          <Grid >
            <Item>
              <Modal />
            </Item>
          </Grid>
        </Grid>
        <Table rows={rows} columns={columns.map(col => ({ ...col, headerName: t(col.headerName) }))} />
      </Box>
    </MainCard>
  )
};

export default Shipping;
