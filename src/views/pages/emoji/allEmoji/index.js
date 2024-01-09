
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
  { field: 'emojiName', headerName: 'Emoji Name', width: 130 },
  { field: 'actions', headerName: 'Actions', width: 130 },

 
];

const rows = [
  { id: 1, actions: 'Snow', emojiName: 'Jon', age: 35 },
  { id: 2, actions: 'Lannister', emojiName: 'Cersei', age: 42 },
  { id: 3, actions: 'Lannister', emojiName: 'Jaime', age: 45 },
  { id: 4, actions: 'Stark', emojiName: 'Arya', age: 16 },
  { id: 5, actions: 'Targaryen', emojiName: 'Daenerys', age: null },
  { id: 6, actions: 'Melisandre', emojiName: null, age: 150 },
  { id: 7, actions: 'Clifford', emojiName: 'Ferrara', age: 44 },
  { id: 8, actions: 'Frances', emojiName: 'Rossini', age: 36 },
  { id: 9, actions: 'Roxie', emojiName: 'Harvey', age: 65 },
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
              <h2 className="main_title_table">{t('Emoji')}</h2>
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
