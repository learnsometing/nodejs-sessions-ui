import { AxiosPromise } from 'axios';
import axios from '../axios';

interface Props {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

function signup({ email, firstName, lastName, password }: Props): AxiosPromise {
  return axios.post('/users', { email, firstName, lastName, password });
}

export default signup;
