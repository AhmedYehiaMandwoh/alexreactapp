
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
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const initialRows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
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
              <h2 className="main_title_table">{t('Shipping Activity')}</h2>
            </Item>
          </Grid>
          <Grid >
            <Item>
             
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
