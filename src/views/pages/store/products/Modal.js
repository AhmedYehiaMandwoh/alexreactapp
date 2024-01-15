import { React, useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

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
    const { t ,i18n} = useTranslation();
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
                <DialogTitle id="alert-dialog-title">
                {t('Add new')}
                </DialogTitle>
                <DialogContent>
               
                  
            <div style={{ marginBottom: '10px', width: '500px',display:'flex' ,justifyContent:'space-between' }}>
                      
                      <FormControl fullWidth sx={{width: '50%'}} variant="outlined">
                      <InputLabel htmlFor="outlined-adornment-name" sx={{
                                  direction: direction,
                                  position: 'absolute',
                                  left: direction === 'rtl' ? 'auto' : 0,
                                  right: direction === 'rtl' ? 25 : 'auto',
                                  width: '48%',
                                  
                              }}>
                          {t('Product Name')}
                      </InputLabel>
                      <FilledInput id="outlined-adornment-name" />
                  </FormControl>
                  <FormControl fullWidth sx={{width: '48%' }} variant="outlined">
                      <InputLabel htmlFor="outlined-adornment-name" sx={{
                                  direction: direction,
                                  position: 'absolute',
                                  left: direction === 'rtl' ? 'auto' : 0,
                                  right: direction === 'rtl' ? 25 : 'auto',
                                  
                              }}>
                          {t('Product Price')}
                      </InputLabel>
                      <FilledInput id="outlined-adornment-link" />
                  </FormControl>
                     
                  </div>
                  <div style={{ marginBottom: '10px', width: '500px',display:'flex' ,justifyContent:'space-between' }}>
                      
                      <FormControl fullWidth sx={{width: '50%'}} variant="outlined">
                      <InputLabel htmlFor="outlined-adornment-name" sx={{
                                  direction: direction,
                                  position: 'absolute',
                                  left: direction === 'rtl' ? 'auto' : 0,
                                  right: direction === 'rtl' ? 25 : 'auto',
                                  width: '48%',
                                  
                              }}>
                          {t('Department')}
                      </InputLabel>
                      <FilledInput id="outlined-adornment-name" />
                  </FormControl>
                  <FormControl fullWidth sx={{width: '48%' }} variant="outlined">
                      <InputLabel htmlFor="outlined-adornment-name" sx={{
                                  direction: direction,
                                  position: 'absolute',
                                  left: direction === 'rtl' ? 'auto' : 0,
                                  right: direction === 'rtl' ? 25 : 'auto',
                                  
                              }}>
                          {t('Membership Type')}
                      </InputLabel>
                      <FilledInput id="outlined-adornment-link" />
                  </FormControl>
                     
                  </div>
                  <div style={{ marginBottom: '10px', width: '500px',display:'flex' ,justifyContent:'space-between' }}>
                      
                      <FormControl fullWidth sx={{width: '50%'}} variant="outlined">
                      <InputLabel htmlFor="outlined-adornment-name" sx={{
                                  direction: direction,
                                  position: 'absolute',
                                  left: direction === 'rtl' ? 'auto' : 0,
                                  right: direction === 'rtl' ? 25 : 'auto',
                                  width: '48%',
                                  
                              }}>
                          {t('Offer Value')}
                      </InputLabel>
                      <FilledInput id="outlined-adornment-name" />
                  </FormControl>
                  <FormControl
                            fullWidth
                            sx={{
                               width:'48%',
                                justifyContent: i18n.language === 'ar' ? 'flex-start' : 'flex-start',
                            }}
                            variant="filled"
                        >
                            <InputLabel
                                htmlFor="filled-adornment-amount"
                                sx={{
                                    direction: direction,
                                    position: 'absolute',
                                    left: direction === 'rtl' ? 'auto' : 0,
                                    right: direction === 'rtl' ? 25 : 'auto',
                                }}
                            >
                                {t('Product Image')}
                            </InputLabel>
                            <FilledInput
                                id="filled-adornment-image"
                                type="file"
                                startAdornment={<InputAdornment position="start">📷</InputAdornment>}
                            />
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