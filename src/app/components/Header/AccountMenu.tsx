import React, { ReactElement } from 'react';

// Material UI
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

// React Router Dom
import { Link } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectAccount } from '../../features/account/accountSlice';

function AccountMenu(): ReactElement {
  const account = useSelector(selectAccount);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    dispatch(logout());
  };

  return (
    <>
      <IconButton aria-label="account" onClick={handleClick}>
        <AccountCircleIcon fontSize="large" />
      </IconButton>
      <Menu
        id="account"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {account.email.length ? (
          <MenuItem onClick={handleLogout}>Log Out</MenuItem>
        ) : (
          [
            <MenuItem key="login" onClick={handleClose}>
              <Link to="/login">Log In</Link>
            </MenuItem>,
            <MenuItem key="signup" onClick={handleClose}>
              <Link to="/signup">Sign Up</Link>
            </MenuItem>,
          ]
        )}
      </Menu>
    </>
  );
}

export default AccountMenu;
