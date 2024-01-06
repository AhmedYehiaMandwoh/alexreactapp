import React from 'react'

import Button from '@mui/material/Button';

import AnimateButton from 'ui-component/extended/AnimateButton';






const MyButton = ({ButtonName, Color }) => {
    return (
        <AnimateButton>
            <Button variant="contained" color={Color} sx={{ boxShadow: 'none' }} >
                {ButtonName}
            </Button>
        </AnimateButton>
    )
}

export default MyButton