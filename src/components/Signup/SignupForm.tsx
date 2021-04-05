import React, { ReactElement } from 'react';

// Components
import TextInput from '../TextInput';

// Formik
import { Formik, Form } from 'formik';

// Material UI
import { Button, Card, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Validation
import validationSchema from './validation-schema';

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    padding: '1rem',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function SignupForm(): ReactElement {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={3}>
      <Typography gutterBottom variant="h2">
        Sign up
      </Typography>
      <Formik
        enableReinitialize
        initialValues={{
          confirmPassword: '',
          email: '',
          firstName: '',
          lastName: '',
          password: '',
        }}
        onSubmit={(values, { setSubmitting }) => {
          const { confirmPassword, ...formValues } = values;
          console.log(formValues);
          setSubmitting(false);
        }}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <TextInput
              disabled={isSubmitting}
              label="First Name"
              name="firstName"
              placeholder="Foo"
            />
            <TextInput
              disabled={isSubmitting}
              label="Last Name"
              name="lastName"
              placeholder="Bar"
            />
            <TextInput
              disabled={isSubmitting}
              label="Email Address"
              name="email"
              placeholder="foo@bar.com"
            />
            <TextInput
              disabled={isSubmitting}
              label="Password"
              name="password"
            />
            <TextInput
              disabled={isSubmitting}
              label="Confirm Password"
              name="confirmPassword"
            />
            <Button color="primary" type="submit" variant="contained">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Card>
  );
}

export default SignupForm;