// Yup
import * as yup from 'yup';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required.')
    .min(6, 'Password must be at least 6 characters.'),
});

export default validationSchema;
