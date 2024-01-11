
// material-ui
import React from 'react'

// project imports
import MainCard from 'ui-component/cards/MainCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';



import { useTranslation } from 'react-i18next';

// ==============================|| SAMPLE PAGE ||============================== //

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const data = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },

];
const Rooms = () => {
  const { t } = useTranslation();

  // Open And Close Modal 

  return (
    <MainCard>
      <Box sx={{ width: '100%' }}>
              <h2 className="main_title_table">{t('creat_room')}</h2>
        <Grid container rowSpacing={1} justifyContent="space-between" alignItems="center">
          <Grid>
            <Item>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={data}
              renderInput={(params) => <TextField {...params} label="Movie" />}
            />
            </Item>
          </Grid>
          <Grid >
            <Item>            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
</Item>
          </Grid>
        </Grid>
     
      </Box>
    </MainCard>
  )
};

export default Rooms;
