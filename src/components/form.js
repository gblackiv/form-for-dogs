import React, { useReducer, Fragment } from 'react';
import { TextField, Grid, Button } from '@material-ui/core';

function reducer(state, action) {
  switch (action.type) {
    case 'field':
      return {
        ...state,
        [action.field]: { ...state[action.field], value: action.payload }
      };
    default:
      throw new Error();
  }
}
const cleanState = {
  firstName: {
    value: '',
    display: 'First Name'
  },
  lastName: {
    value: '',
    display: 'Last Name'
  },
  company: {
    value: '',
    display: 'Company'
  },
  title: {
    value: '',
    display: 'Title'
  },
  address1: {
    value: '',
    display: 'Address Line 1'
  },
  address2: {
    value: '',
    display: 'Address Line 2'
  },
  poBox: {
    value: '',
    display: 'P.O. Box'
  },
  city: {
    value: '',
    display: 'City'
  },
  state: {
    value: '',
    display: 'State'
  },
  providence: {
    value: '',
    display: 'Providence'
  },
  country: {
    value: '',
    display: 'Country'
  },
  zipCode: {
    value: '',
    display: 'Zip Code'
  },
  birthday: {
    value: '',
    display: 'Birthday'
  },
  phone1: {
    value: '',
    display: 'Phone Number 1'
  },
  phone2: {
    value: '',
    display: 'Phone Number 2'
  },
  email: {
    value: '',
    display: 'Email'
  },
  emailUpdates: {
    value: '',
    display: 'Consent to Email Updates?'
  },
  class: {
    value: '',
    display: 'Class'
  },
  field: {
    value: '',
    display: 'Field'
  },
  fauxPawDivision: {
    value: '',
    display: 'FauxPaw Division'
  },
  yearsInOperation: {
    value: '',
    display: 'Years in Operation '
  },
  hearAboutUs: {
    value: '',
    display: 'How did you hear about us?'
  },
  submitting: false
};

const Form = props => {
  const [state, dispatch] = useReducer(reducer, cleanState);
  const core = {
    textField: key => ({
      value: state[key].value,
      fullWidth: true,
      id: key,
      label: state[key].display,
      margin: 'normal',
      variant: 'outlined'
    }),
    textOrSelect: key => ({
      onChange: e => {
        dispatch({ type: 'field', field: key, payload: e.target.value });
      }
    }),
    submitButton: {
      color: 'primary',
      variant: 'contained',
      onClick: props.onClick,
      style: {
        width: '200px',
        margin: '30px'
      }
    }
  };
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <TextField
            {...core.textField('firstName')}
            {...core.textOrSelect('firstName')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            {...core.textField('lastName')}
            {...core.textOrSelect('lastName')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            {...core.textField('company')}
            {...core.textOrSelect('company')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            {...core.textField('title')}
            {...core.textOrSelect('title')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            {...core.textField('address1')}
            {...core.textOrSelect('address1')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            {...core.textField('address2')}
            {...core.textOrSelect('address2')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            {...core.textField('poBox')}
            {...core.textOrSelect('poBox')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            {...core.textField('city')}
            {...core.textOrSelect('city')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            {...core.textField('state')}
            {...core.textOrSelect('state')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            {...core.textField('providence')}
            {...core.textOrSelect('providence')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            {...core.textField('country')}
            {...core.textOrSelect('country')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            {...core.textField('zipCode')}
            {...core.textOrSelect('zipCode')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            {...core.textField('birthday')}
            {...core.textOrSelect('birthday')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            {...core.textField('phone1')}
            {...core.textOrSelect('phone1')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            {...core.textField('phone2')}
            {...core.textOrSelect('phone2')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            {...core.textField('email')}
            {...core.textOrSelect('email')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            {...core.textField('class')}
            {...core.textOrSelect('class')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            {...core.textField('field')}
            {...core.textOrSelect('field')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            {...core.textField('fauxPawDivision')}
            {...core.textOrSelect('fauxPawDivision')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            {...core.textField('yearsInOperation')}
            {...core.textOrSelect('yearsInOperation')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            {...core.textField('hearAboutUs')}
            {...core.textOrSelect('hearAboutUs')}
          />
        </Grid>
      </Grid>
      <Button {...core.submitButton}>Submit</Button>
    </Fragment>
  );
};

export default Form;
