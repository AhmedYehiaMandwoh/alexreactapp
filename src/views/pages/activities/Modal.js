import { React, useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AnimateButton from 'ui-component/extended/AnimateButton';
const data = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },

];
// Add and Update functions
const Modal = () => {
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
                    Add New
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
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={data}
                        renderInput={(params) => <TextField {...params} label="Movie" />}
                    />
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleClose} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Modal