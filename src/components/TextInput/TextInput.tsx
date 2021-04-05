import React, { ReactElement } from 'react';

// Formik
import { useField } from 'formik';

// Material UI
import { FormHelperText, TextField } from '@material-ui/core';

// Prop Types
import PropTypes, { InferProps } from 'prop-types';

function FormikTextInput({
  disabled,
  fullWidth,
  label,
  name,
  placeholder,
  type,
}: InferProps<typeof FormikTextInput.propTypes>): ReactElement {
  const [field, meta] = useField(name);

  return (
    <>
      <TextField
        disabled={disabled}
        fullWidth={fullWidth}
        {...field}
        label={label}
        placeholder={placeholder}
        type={type}
        variant="outlined"
      />

      <FormHelperText
        error={meta.touched && meta.error ? true : false}
        style={{ marginBottom: '1rem' }}
      >
        {meta.touched && meta.error ? meta.error : ' '}
      </FormHelperText>
    </>
  );
}

FormikTextInput.defaultProps = {
  fullWidth: true, //since mostly this is intended to be used within a Mui Grid
  placeholder: '',
  type: 'text',
};

FormikTextInput.propTypes = {
  disabled: PropTypes.bool.isRequired,
  fullWidth: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default FormikTextInput;
