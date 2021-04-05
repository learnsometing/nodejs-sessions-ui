import React, { ReactElement } from 'react';

// Material UI
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

// React Router Dom
import { Link } from 'react-router-dom';

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
        <MenuItem>
          <Link to="/login">Log In</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/signup">Sign Up</Link>
        </MenuItem>
      </Menu>
    </>
  );
}

export default AccountMenu;
