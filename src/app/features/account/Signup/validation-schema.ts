// Yup
import * as yup from 'yup';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  firstName: yup.string().required('First Name is required.'),
  lastName: yup.string().required('Last Name is required.'),
  password: yup
    .string()
    .required('Password is required.')
    .min(6, 'Password must be at least 6 characters.'),
  confirmPassword: yup.string().when('password', {
    is: (val: string) => (val && val.length > 0 ? true : false),
    then: yup
      .string()
      .oneOf([yup.ref('password')], 'Both passwords must be the same'),
  }),
});

export default validationSchema;
