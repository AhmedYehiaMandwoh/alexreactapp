

import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const Table = ({ rows, columns, onEdit, onDelete, editIcon, deleteIcon }) => {
  const updatedColumns = [
    ...columns,
    {
      field: 'action',
      headerName: '',
      width: 120,
      renderCell: (params) => (
        <>
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
