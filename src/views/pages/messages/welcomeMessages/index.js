
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
  { field: 'messageName', headerName: 'Message Name', width: 130 },
  { field: 'messageHistory', headerName: 'Message History', width: 130 },

 
];

const initialRows = [
  { id: 1, messageName: 'Snow', messageHistory: 'Jon' },
  { id: 2, messageName: 'Lannister', messageHistory: 'Cersei' },
  { id: 3, messageName: 'Lannister', messageHistory: 'Jaime' },
  { id: 4, messageName: 'Stark', messageHistory: 'Arya' },
  { id: 5, messageName: 'Targaryen', messageHistory: 'Daenerys' },
  { id: 6, messageName: 'Melisandre', messageHistory: null },
  { id: 7, messageName: 'Clifford', messageHistory: 'Ferrara' },
  { id: 8, messageName: 'Frances', messageHistory: 'Rossini' },
  { id: 9, messageName: 'Roxie', messageHistory: 'Harvey' },
];

const Departments = () => {
  const { t } = useTranslation();
  const [selectedRow, setSelectedRow] = useState(null);
  const [rows, setRows] = useState(initialRows);
  const handleEdit = (rowData) => {
    // Handle edit action here, e.g., open a modal for editing
     console.log('Edit:', rowData);
   
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
  // Open And Close Modal 

  return (
    <MainCard>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} justifyContent="space-between" alignItems="center">
          <Grid>
            <Item>
              <h2 className="main_title_table">{t('Welcome Messages')}</h2>
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

export default Departments;
