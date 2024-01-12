
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
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'image', headerName: 'Image', width: 130 },
  {
    field: 'referralLink',
    headerName: 'Referral Link',

    width: 130,
  },

];

const rows = [
  { id: 1, image: 'Snow', name: 'Jon', referralLink: 35 },
  { id: 2, image: 'Lannister', name: 'Cersei', referralLink: 42 },
  { id: 3, image: 'Lannister', name: 'Jaime', referralLink: 45 },
  { id: 4, image: 'Stark', name: 'Arya', referralLink: 16 },
  { id: 5, image: 'Targaryen', name: 'Daenerys', referralLink: null },
  { id: 6, image: 'Melisandre', name: null, referralLink: 150 },
  { id: 7, image: 'Clifford', name: 'Ferrara', referralLink: 44 },
  { id: 8, image: 'Frances', name: 'Rossini', referralLink: 36 },
  { id: 9, image: 'Roxie', name: 'Harvey', referralLink: 65 },
];

const AdvertisingUnits = () => {
  const { t } = useTranslation();

  // Open And Close Modal 

  return (
    <MainCard>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} justifyContent="space-between" alignItems="center">
          <Grid>
            <Item>
              <h2 className="main_title_table">{t('Create and Modify Unit')}</h2>
            </Item>
          </Grid>
          <Grid >
           
          </Grid>
        </Grid>
        <Table rows={rows}   columns={columns.map(col => ({ ...col, headerName: t(col.headerName) }))}/>

      </Box>
    </MainCard>
  )
};

export default AdvertisingUnits;
