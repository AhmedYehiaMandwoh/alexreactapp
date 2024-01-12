
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
  { field: 'departmentName', headerName: 'Department Name', width: 130 },

 
];

const rows = [
  { id: 1, departmentName: 35 },
  { id: 2,  departmentName: 42 },
  { id: 3, departmentName: 'Lannister' },
  { id: 4, departmentName: 'Stark' },
  { id: 5, departmentName: 'Targaryen' },
  { id: 6, departmentName: 'Melisandre'},
  { id: 7, departmentName: 'Clifford'},
  { id: 8, departmentName: 'Frances' },
  { id: 9, departmentName: 'Roxie' },
];

const Store = () => {
  const { t } = useTranslation();

  // Open And Close Modal 

  return (
    <MainCard>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} justifyContent="space-between" alignItems="center">
          <Grid>
            <Item>
              <h2 className="main_title_table">{t('Add and Edit Store Departments' )}</h2>
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

export default Store;
