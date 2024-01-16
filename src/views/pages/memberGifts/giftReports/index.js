
// material-ui
import {React,useState} from 'react'
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
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'department', headerName: 'Departments', width: 130 },
  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    width: 90,
  },

];

const initialRows = [
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
              <h2 className="main_title_table">{t('Gift Reports')}</h2>
            </Item>
          </Grid>
          <Grid >
            
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

export default Emoji;
