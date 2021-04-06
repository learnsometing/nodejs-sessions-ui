import React, { ReactElement, useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import {
  getAccount,
  selectAccount,
  selectStatus,
  Statuses,
} from '../../features/account/accountSlice';

// Material UI
import { Typography } from '@material-ui/core';

function Home(): ReactElement {
  const account = useSelector(selectAccount);
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);

  useEffect(() => {
    if (account.email.length === 0 && status === Statuses.idle) {
      dispatch(getAccount());
    }
  }, [account, dispatch, status]);

  return (
    <>
      {account.email && account.email.length ? null : (
        <Typography variant="h1" component="p">
          You're logged out.
        </Typography>
      )}
    </>
  );
}

export default Home;
