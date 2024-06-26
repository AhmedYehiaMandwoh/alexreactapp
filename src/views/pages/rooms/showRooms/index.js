

import React, { useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Paper';
import Table from '../../pagesComponenets/Table';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'image', headerName: 'Image', width: 130 },
  { field: 'roomAdvertisement', headerName: 'Room advertisement', width: 160 },
  { field: 'roomType', headerName: 'Room Type', width: 130 },
  { field: 'password', headerName: 'Password', width: 130 },
];

const initialRows = [
  { id: 1, name: 'Room 1', image: 'Image 1', roomAdvertisement: 'Ad 1', roomType: 'Type 1', password: 'Pass 1' },
  { id: 2, name: 'Room 2', image: 'Image 2', roomAdvertisement: 'Ad 2', roomType: 'Type 2', password: 'Pass 2' },
  { id: 3, name: 'Room 3', image: 'Image 3', roomAdvertisement: 'Ad 3', roomType: 'Type 3', password: 'Pass 3' },
];

const Rooms = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
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

  return (
    <MainCard>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} justifyContent="space-between" alignItems="center">
          <Grid>
            <Item>
              <h2 className="main_title_table">{t('All Rooms')}</h2>
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
  );
};

export default Rooms;
