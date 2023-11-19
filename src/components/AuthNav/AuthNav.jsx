import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { NavAuth } from './AuthNav.styled';

export const AuthNav = () => {
    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'flex' }, justifyContent: 'flex-end', gap: '16px' }}>

            <NavAuth to="/register">
                <Button variant="contained">
                    Register
                </Button>
            </NavAuth>

            <NavAuth to="/login">
                <Button variant="contained">
                    Log In
                </Button>
            </NavAuth>
  
        </Box>
    );
};