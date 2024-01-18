
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
  { field: 'shippingLimit', headerName: 'Shipping limit', width: 130 },
  {
    field: 'image',
    headerName: 'Image',
    
    width: 130,
  },

];

const initialRows = [
  { id: 1, name: 'Snow', shippingLimit: 'Jon', image: 35 },
  { id: 2, name: 'Lannister', shippingLimit: 'Cersei', image: 42 },
  { id: 3, name: 'Lannister', shippingLimit: 'Jaime', image: 45 },
  { id: 4, name: 'Stark', shippingLimit: 'Arya', image: 16 },
  { id: 5, name: 'Targaryen', shippingLimit: 'Daenerys', image: null },
  { id: 6, name: 'Melisandre', shippingLimit: null, image: 150 },
  { id: 7, name: 'Clifford', shippingLimit: 'Ferrara', image: 44 },
  { id: 8, name: 'Frances', shippingLimit: 'Rossini', image: 36 },
  { id: 9, name: 'Roxie', shippingLimit: 'Harvey', image: 65 },
];

const Emoji = () => {
  const { t } = useTranslation();

  // Open And Close Modal 
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

  return (
    <MainCard>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} justifyContent="space-between" alignItems="center">
          <Grid>
            <Item>
              <h2 className="main_title_table">{t('Agencies')}</h2>
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
