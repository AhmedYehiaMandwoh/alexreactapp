
import { React, useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { useTranslation } from 'react-i18next';

// Add and Update functions
const Modal = () => {
    const { t,i18n } = useTranslation();
    const [open, setOpen] = useState(false);

    // open = false
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const direction = i18n.language === 'ar' ? 'rtl' : 'ltr';

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
                dir={direction}
            >
                <DialogTitle id="alert-dialog-title" sx={{marginBottom:'10px'}}>
                {t('Add new')}
                </DialogTitle>
                <DialogContent>
                 {/* <div style={{ marginBottom: '10px' , width: '500px' }}>
                 <TextField id="outlined-basic" label={t('Department Name')} variant="outlined"sx={{ width: '100%' }}/>
                 </div> */}
                  
                 <div style={{ marginBottom: '10px',marginTop:'10px', width: '500px',display:'flex' ,justifyContent:'space-between' }}>
                      
                      <FormControl fullWidth sx={{width: '100%'}} variant="outlined">
                      <InputLabel htmlFor="outlined-adornment-name" sx={{
                                  direction: direction,
                                  position: 'absolute',
                                  left: direction === 'rtl' ? 'auto' : 0,
                                  right: direction === 'rtl' ? 25 : 'auto',
                                 
                                  
                              }}>
                          {t('Shipping Values')}
                      </InputLabel>
                      <FilledInput id="outlined-adornment-name" />
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