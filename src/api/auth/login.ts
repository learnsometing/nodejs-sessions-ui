import { AxiosPromise } from 'axios';
import axios from '../axios';

interface Props {
  email: string;
  password: string;
}

function signup({ email, password }: Props): AxiosPromise {
  return axios.post('/auth/login', { email, password });
}

export default signup;
