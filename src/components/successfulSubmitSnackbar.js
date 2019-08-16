import React from 'react';
import { Snackbar } from '@material-ui/core';

const SuccessfulSubmitSnackbar = ({ open, close }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open}
      onClose={close}
      ContentProps={{
        'aria-describedby': 'message-id'
      }}
      message={<span id="message-id">Successfully Submitted. Thank you!</span>}
    />
  );
};

export default SuccessfulSubmitSnackbar;
