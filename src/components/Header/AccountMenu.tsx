import React, { ReactElement } from 'react';

// Material UI
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function AccountMenu(): ReactElement {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
        <MenuItem>Login</MenuItem>
        <MenuItem>Sign Up</MenuItem>
      </Menu>
    </>
  );
}

export default AccountMenu;
