import * as React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";
import { Nav, WelcomeText } from './UserMenu.styled';

export const UserMenu = () => {
    const { user } = useAuth();
    const dispatch = useDispatch();

    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const clickLogOut = () => { dispatch(logOut()) }

    return (

        <Box sx={{ flexGrow: 0, display: { xs: 'flex' }, alignItems: 'center', gap: '16px' }}>
                        
            <WelcomeText>Welcome, {user.name}</WelcomeText>

            <Tooltip title="Open menu">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar src="/broken-image.jpg" />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '55px' }}
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

                <MenuItem onClick={handleCloseUserMenu}>
                    <Button variant="contained" onClick={clickLogOut}>
                        <Nav to="/login">
                            Logout
                        </Nav>
                    </Button>
                </MenuItem>
            </Menu>
        </Box>
    );
};