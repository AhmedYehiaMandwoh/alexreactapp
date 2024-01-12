import { React, useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { useTranslation } from 'react-i18next';

// Add and Update functions
const Modal = () => {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);

    // open = false
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <AnimateButton>
                <Button variant="contained" onClick={handleClickOpen}>
                {t('Add New')}
                </Button>
            </AnimateButton>

            <Dialog
                open={open}
                maxWidth='sm'
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                {t('Add new')}
                </DialogTitle>
                <DialogContent>
                 <div style={{ marginBottom: '10px' , width: '500px' }}>
                 <TextField id="outlined-basic" label={t('Product Name')} variant="outlined"sx={{ width: '100%' }}/>
                 </div>
                 <div style={{ marginBottom: '10px' , width: '500px' }}>
                 <TextField id="outlined-basic" label={t('Product Price')} variant="outlined"sx={{ width: '100%' }}/>
                 </div>
                 <div style={{ marginBottom: '10px' , width: '500px' }}>
                 <TextField id="outlined-basic" label={t('Department')} variant="outlined"sx={{ width: '100%' }}/>
                 </div>
                 <div style={{ marginBottom: '10px' , width: '500px' }}>
                 <TextField id="outlined-basic" label={t('Membership Type')} variant="outlined"sx={{ width: '100%' }}/>
                 </div>
                 <div style={{ marginBottom: '10px' , width: '500px' }}>
                 <TextField id="outlined-basic" label={t('Offer Value')} variant="outlined"sx={{ width: '100%' }}/>
                 </div>
                 <div style={{ marginBottom: '10px' , width: '500px' }}>
                 <FormControl  sx={{ width: '100%'}} variant="outlined" >
              <InputLabel htmlFor="outlined-adornment-amount">{t('Product Image')}</InputLabel>
              <FilledInput id="outlined-adornment-image" type="file" startAdornment={<InputAdornment position="end">📷</InputAdornment>} />
            </FormControl>
            </div>
                  
                   

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>{t('Cancel')}</Button>
                    <Button onClick={handleClose} autoFocus>
                    {t('Submit')}
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Modal