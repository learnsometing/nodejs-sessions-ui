import React, { ReactElement } from 'react';

// Api
import login from '../../api/auth/login';

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

function LoginForm(): ReactElement {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={3}>
      <Typography gutterBottom variant="h2">
        Log in
      </Typography>
      <Formik
        enableReinitialize
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={async (values, { setSubmitting }) => {
          const { email, password } = values;
          try {
            const user = await login({ email, password });
            return user;
          } catch (error) {
            console.error(error);
          } finally {
            setSubmitting(false);
          }
        }}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <Form>
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
            <Button color="primary" type="submit" variant="contained">
              Log In
            </Button>
          </Form>
        )}
      </Formik>
    </Card>
  );
}

export default LoginForm;
