
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
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'department', headerName: 'Department', width: 130 },
  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    width: 90,
  },

];

const rows = [
  { id: 1, name: 'Snow', department: 'Jon', price: 35 },
  { id: 2, name: 'Lannister', department: 'Cersei', price: 42 },
  { id: 3, name: 'Lannister', department: 'Jaime', price: 45 },
  { id: 4, name: 'Stark', department: 'Arya', price: 16 },
  { id: 5, name: 'Targaryen', department: 'Daenerys', price: null },
  { id: 6, name: 'Melisandre', department: null, price: 150 },
  { id: 7, name: 'Clifford', department: 'Ferrara', price: 44 },
  { id: 8, name: 'Frances', department: 'Rossini', price: 36 },
  { id: 9, name: 'Roxie', department: 'Harvey', price: 65 },
];

const Emoji = () => {
  const { t } = useTranslation();

  // Open And Close Modal 

  return (
    <MainCard>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} justifyContent="space-between" alignItems="center">
          <Grid>
            <Item>
              <h2 className="main_title_table">{t('Prizes')}</h2>
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

export default Emoji;
