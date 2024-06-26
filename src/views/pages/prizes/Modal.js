import { React, useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';

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
                    {"Add new"}
                </DialogTitle>
                <DialogContent>
                   <div style={{ marginBottom: '10px' }}>
                   <TextField id="outlined-basic" label="Name" variant="outlined" />
                   </div>
                   <div style={{ marginBottom: '10px' }}>
                   <TextField id="outlined-basic" label="Department" variant="outlined" />
                   </div>
                   <div style={{ marginBottom: '10px' }}>
                   <TextField id="outlined-basic" label="Price" variant="outlined" />
                   </div>
                    
                    
                    

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose} autoFocus>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Modal