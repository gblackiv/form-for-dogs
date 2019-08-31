import React, { useReducer, Fragment } from 'react';
import {
  TextField,
  Grid,
  Button,
  MenuItem,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel
} from '@material-ui/core';
import {
  states,
  fauxPawDivisions,
  classes,
  references,
  fields
} from './constants/constants.js';
import SuccessfulSubmitSnackbar from './successfulSubmitSnackbar';
import { Firestore } from '../config.js';

function reducer(state, action) {
  switch (action.type) {
    case 'field':
      return {
        ...state,
        [action.field]: { ...state[action.field], value: action.payload }
      };
    case 'clearState':
      return { ...cleanState };
    case 'snackbarOpen':
      return { ...state, snackbarOpen: action.payload };
    default:
      throw new Error();
  }
}
const cleanState = {
  snackbarOpen: false,
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
    value: true,
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
  fieldOther: {
    value: '',
    display: 'Other?'
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
  hearAboutUsOther: {
    value: '',
    display: 'Other?'
  },
  submitting: false
};

const Form = props => {
  const [state, dispatch] = useReducer(reducer, cleanState);
  const snackbarHandler = open => {
    dispatch({ type: 'snackbarOpen', payload: open });
  };

  const submitToFirestore = () => {
    const docRef = Firestore.collection('Faux-Paw-Forms').doc();
    return docRef.set({
      firstName: state.firstName.value.trim(),
      lastName: state.lastName.value.trim(),
      company: state.company.value.trim(),
      title: state.title.value.trim(),
      address1: state.address1.value.trim(),
      address2: state.address2.value.trim(),
      poBox: state.poBox.value.trim(),
      city: state.city.value.trim(),
      state: state.state.value.trim(),
      providence: state.providence.value.trim(),
      country: state.country.value.trim(),
      zipCode: state.zipCode.value.trim(),
      birthday: state.birthday.value.trim(),
      phone1: state.phone1.value.trim(),
      phone2: state.phone2.value.trim(),
      email: state.email.value.trim(),
      emailUpdates: state.emailUpdates.value,
      class: state.class.value,
      field: state.field.value,
      fieldOther: state.fieldOther.value.trim(),
      fauxPawDivision: state.fauxPawDivision.value,
      yearsInOperation: state.yearsInOperation.value.trim(),
      hearAboutUs: state.hearAboutUs.value,
      hearAboutUsOther: state.hearAboutUsOther.value.trim()
    });
  };

  const core = {
    textField: key => ({
      value: state[key].value,
      fullWidth: true,
      id: key,
      label: state[key].display,
      margin: 'normal',
      variant: 'outlined',
      autoComplete: 'new-password'
    }),
    textOrSelect: key => ({
      onChange: e => {
        dispatch({ type: 'field', field: key, payload: e.target.value });
      }
    }),
    submitButton: {
      color: 'primary',
      variant: 'contained',
      onClick: () => {
        submitToFirestore().then(() => {
          dispatch({ type: 'clearState' });
          snackbarHandler(true);
        });
      },
      style: {
        width: '200px',
        margin: '30px'
      }
    },
    radioGroup: {
      row: true,
      onChange: e => {
        dispatch({
          type: 'field',
          field: 'emailUpdates',
          payload: e.target.value
        });
      }
    },
    snackbarProps: {
      open: state.snackbarOpen,
      close: () => {
        snackbarHandler(false);
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
            select
            {...core.textField('state')}
            {...core.textOrSelect('state')}>
            {states.map((state, index) => (
              <MenuItem key={index} value={state}>
                {state}
              </MenuItem>
            ))}
          </TextField>
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
            type="date"
            InputLabelProps={{ shrink: true }}
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
          <TextField
            select
            {...core.textField('class')}
            {...core.textOrSelect('class')}>
            {classes.map((className, index) => (
              <MenuItem key={index} value={className}>
                {className}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid
          item
          xs={state.field.value === 'Other' ? 6 : 12}
          sm={state.field.value === 'Other' ? 3 : 6}>
          <TextField
            select
            {...core.textField('field')}
            {...core.textOrSelect('field')}>
            {fields.map((field, index) => (
              <MenuItem key={index} value={field}>
                {field}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        {state.field.value === 'Other' && (
          <Grid item xs={6} sm={3}>
            <TextField
              required
              {...core.textField('fieldOther')}
              {...core.textOrSelect('fieldOther')}
            />
          </Grid>
        )}
        <Grid item xs={12} sm={6}>
          <TextField
            select
            {...core.textField('fauxPawDivision')}
            {...core.textOrSelect('fauxPawDivision')}>
            {fauxPawDivisions.map((division, index) => (
              <MenuItem key={index} value={division}>
                {division}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            {...core.textField('yearsInOperation')}
            {...core.textOrSelect('yearsInOperation')}
          />
        </Grid>
        <Grid
          item
          xs={state.hearAboutUs.value === 'Other' ? 6 : 12}
          sm={state.hearAboutUs.value === 'Other' ? 3 : 6}>
          <TextField
            select
            {...core.textField('hearAboutUs')}
            {...core.textOrSelect('hearAboutUs')}>
            {references.map((reference, index) => (
              <MenuItem key={index} value={reference}>
                {reference}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        {state.hearAboutUs.value === 'Other' && (
          <Grid item xs={6} sm={3}>
            <TextField
              required
              {...core.textField('hearAboutUsOther')}
              {...core.textOrSelect('hearAboutUsOther')}
            />
          </Grid>
        )}
        <Grid item xs={12} sm={6} container justify="flex-start">
          <FormControl component="fieldset">
            <FormLabel component="legend">Consent to Email Updates?</FormLabel>
            <RadioGroup {...core.radioGroup}>
              <FormControlLabel
                value="true"
                control={<Radio color="primary" />}
                label="Yes"
              />
              <FormControlLabel
                value="false"
                control={<Radio color="primary" />}
                label="No"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
      <Button {...core.submitButton}>Submit</Button>
      <SuccessfulSubmitSnackbar {...core.snackbarProps} />
    </Fragment>
  );
};

export default Form;
