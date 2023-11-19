import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Nav } from 'components/UserMenu/UserMenu.styled';

export const AuthNav = () => {
    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'flex' }, justifyContent: 'flex-end', gap: '16px'}}>

            <Button variant="contained">
                <Nav to="/register">
                    Register
                </Nav>
            </Button>

            <Button variant="contained">
                <Nav to="/login">
                    Log In
                </Nav>
            </Button>
  
        </Box>
    );
};