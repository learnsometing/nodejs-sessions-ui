import { AxiosPromise } from 'axios';
import axios from '../axios';

function logout(): AxiosPromise {
  return axios.get('/auth/logout');
}

export default logout;
