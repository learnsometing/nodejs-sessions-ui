// Axios
import axios from '../../../api/axios';

// Interfaces
import LoginProps from './interfaces/LoginProps';
import SignupProps from './interfaces/SignupProps';

// Redux Toolkit
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Store
import { RootState } from '../../store';

export enum Statuses {
  idle = 'IDLE',
  loading = 'LOADING',
  succeeded = 'SUCCEEDED',
  failed = 'FAILED',
}

const initialState = {
  account: {
    email: '',
    firstName: '',
    lastName: '',
  },
  status: Statuses.idle,
  error: null,
};

export const getAccount = createAsyncThunk('account/getAccount', async () => {
  try {
    const accountDetails = await axios.get('/auth/account');
    return accountDetails.data;
  } catch (error) {
    // TODO: improve error handling
    console.error(error);
    return { email: '', firstName: '', lastName: '' };
  }
});

export const login = createAsyncThunk(
  'account/login',
  async ({ email, password }: LoginProps) => {
    try {
      const accountDetails = await axios.post('/auth/login', {
        email,
        password,
      });

      return accountDetails.data;
    } catch (error) {
      // TODO: Improve error handling
      console.error(error);
    }
  },
);

export const logout = createAsyncThunk('account/logout', async () => {
  try {
    await axios.get('/auth/logout');
  } catch (error) {
    // TODO: Improve error handling
    console.error(error);
  }
  return { email: '', firstName: '', lastName: '' };
});

export const signup = createAsyncThunk(
  'account/signup',
  async ({ email, firstName, lastName, password }: SignupProps) => {
    try {
      // 1) Sign the new user up by creating their account in the db
      const accountDetails = await axios.post('/users', {
        email,
        firstName,
        lastName,
        password,
      });

      // 2) Log the user in to create a new session
      await axios.post('/auth/login', { email, password });
      return accountDetails.data;
    } catch (error) {
      // TODO: Improve error handling
      console.error(error);
    }
  },
);

/**
 * Govern's user's account state
 */
const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAccount.pending, (state) => {
      state.status = Statuses.loading;
    });
    builder.addCase(getAccount.fulfilled, (state, action) => {
      const { email, firstName, lastName } = action.payload;
      state.account = { email, firstName, lastName };
      state.status = Statuses.succeeded;
    });
    builder.addCase(login.pending, (state) => {
      state.status = Statuses.loading;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      const { email, firstName, lastName } = action.payload;
      state.account = { email, firstName, lastName };
      state.status = Statuses.succeeded;
    });
    builder.addCase(logout.pending, (state) => {
      state.status = Statuses.loading;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      const { email, firstName, lastName } = action.payload;
      state.account = { email, firstName, lastName };
      state.status = Statuses.succeeded;
    });
    builder.addCase(signup.pending, (state) => {
      state.status = Statuses.loading;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      const { email, firstName, lastName } = action.payload;
      state.account = { email, firstName, lastName };
      state.status = Statuses.succeeded;
    });
  },
});

export default accountSlice.reducer;

interface AccountDetails {
  email: string;
  firstName: string;
  lastName: string;
}

// interface AccountSlice {
//   account: AccountDetails;
//   error: null | string;
//   status: string;
// }

export function selectAccount(state: RootState): AccountDetails {
  return state.account.account;
}

export function selectStatus(state: RootState): string {
  return state.account.status;
}
