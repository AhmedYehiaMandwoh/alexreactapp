
// material-ui
import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
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

const initialRows = [
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
  const [selectedRow, setSelectedRow] = useState(null);
  const [rows, setRows] = useState(initialRows);
  
  const handleEdit = (rowData) => {
    // Handle edit action here, e.g., open a modal for editing
     console.log('Edit:', rowData);
    navigate("/dashboard/createARoom");
  };

  const handleDelete = (rowData) => {
    // Handle delete action here, e.g., show a confirmation dialog
    console.log('Delete:', rowData);

    // Update the state to remove the deleted item
    setRows((prevRows) => prevRows.filter((row) => row.id !== rowData.id));
  };

  const handleRowSelect = (rowId) => {
    setSelectedRow(rowId);
  };

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
        <Table
          rows={rows}
          columns={columns.map(col => ({ ...col, headerName: t(col.headerName) }))}
          selectedRow={selectedRow}
          onRowSelect={handleRowSelect}
          onEdit={handleEdit}
          onDelete={handleDelete}
          editIcon={<EditIcon />}
          deleteIcon={<DeleteIcon />}
        />
      </Box>
    </MainCard>
  )
};

export default Shipping;
