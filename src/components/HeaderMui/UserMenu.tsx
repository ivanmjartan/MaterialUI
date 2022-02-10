import React from "react";
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

import { Link } from 'react-router-dom';
import { CircularProgress } from "@mui/material";

import { useAuth } from "../../contexts/Auth";
import { AuthStatus } from "../../contexts/Auth/state";

interface IUserIcon {
  handleOpenUserMenu: (event: any) => void;
}

const UserIcon: React.FC<IUserIcon> = (props) => {
  const { handleOpenUserMenu } = props;
  return <Tooltip title="Open settings">
    <IconButton
      onClick={handleOpenUserMenu}
      sx={{ p: 0 }}
      size="large"
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      color="inherit"
    >
      <AccountCircleIcon />
    </IconButton>
  </Tooltip>
}

const UserMenu: React.FC = () => {

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { authStatus } = useAuth();

  const { AUTHORIZED, LOGGING_IN, LOGGING_OUT, AUTHORIZING } = AuthStatus;

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const isLoading = () => {
    return [LOGGING_IN, LOGGING_OUT, AUTHORIZING].includes(authStatus);
  }

  const isAuthorized = () => {
    return authStatus === AUTHORIZED;
  }

  const getUserMenuItems = () => {
    if (isAuthorized()) {
      return <MenuItem key={"Logout"} onClick={handleCloseUserMenu} component={Link} to={"/logout"} >
        <Typography textAlign="center">Logout</Typography>
      </MenuItem>;

    }

    return <MenuItem key={"Login"} onClick={handleCloseUserMenu} component={Link} to={"/login"} >
      <Typography textAlign="center">Login</Typography>
    </MenuItem>;
  }

  return <>
      {isLoading() ? <CircularProgress color="secondary" size={24} /> : <UserIcon handleOpenUserMenu={handleOpenUserMenu} />}

      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {
          getUserMenuItems()
        }
      </Menu>

  </>
};

export default UserMenu;
