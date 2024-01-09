
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
  { field: 'prizeName', headerName: 'Prize Name', width: 130 },
  { field: 'actions', headerName: 'Actions', width: 130 },

 
];

const rows = [
  { id: 1, actions: 'Snow', prizeName: 'Jon', age: 35 },
  { id: 2, actions: 'Lannister', prizeName: 'Cersei', age: 42 },
  { id: 3, actions: 'Lannister', prizeName: 'Jaime', age: 45 },
  { id: 4, actions: 'Stark', prizeName: 'Arya', age: 16 },
  { id: 5, actions: 'Targaryen', prizeName: 'Daenerys', age: null },
  { id: 6, actions: 'Melisandre', prizeName: null, age: 150 },
  { id: 7, actions: 'Clifford', prizeName: 'Ferrara', age: 44 },
  { id: 8, actions: 'Frances', prizeName: 'Rossini', age: 36 },
  { id: 9, actions: 'Roxie', prizeName: 'Harvey', age: 65 },
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
              <h2 className="main_title_table">{t('All Prizes')}</h2>
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
