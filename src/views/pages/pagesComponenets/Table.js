


import { DataGrid } from '@mui/x-data-grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {React,useState} from 'react'

const Table = ({ rows, columns, onEdit, onDelete, editIcon, deleteIcon }) => {
  const [enabledRows, setEnabledRows] = useState([]);

  const handleRowToggle = (rowId) => {
    setEnabledRows((prevRows) => {
      if (prevRows.includes(rowId)) {
        return prevRows.filter((id) => id !== rowId);
      } else {
        return [...prevRows, rowId];
      }
    });
  };

  const updatedColumns = [
    ...columns,
    {
      field: 'actionsControl',
      headerName: 'Actions',
      width: 180,
      renderCell: (params) => (
        <>
          <FormControlLabel
            control={
              <Switch
                checked={enabledRows.includes(params.id)}
                onChange={() => handleRowToggle(params.id)}
              />
            }
            style={{ marginRight: '16px' }}
          />
          {editIcon && (
            <span
              role="button"
              tabIndex={0}
              style={{ marginRight: '8px', cursor: 'pointer' }}
              onClick={() => onEdit(params.row)}
              onKeyDown={(e) => e.key === 'Enter' && onEdit(params.row)}
            >
              {editIcon}
            </span>
          )}
          {deleteIcon && (
            <span
              role="button"
              tabIndex={0}
              style={{ cursor: 'pointer' }}
              onClick={() => onDelete(params.row)}
              onKeyDown={(e) => e.key === 'Enter' && onDelete(params.row)}
            >
              {deleteIcon}
            </span>
          )}
        </>
      ),
    },
  ];

  return (
    <DataGrid
      rows={rows}
      columns={updatedColumns}
      initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
      pageSizeOptions={[5, 10, 20, 30, 40, 50, 100]}
      checkboxSelection
    />
  );
};

export default Table;
