import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';

import { RegisterForm } from "components/RegisterForm/RegisterForm";


export default function Register() {
    return (
        <Grid
            container
            component="main"
            sx={{
                height: '100vh',
                backgroundImage: `url("https://ik.imagekit.io/irinavn2011/mobile-phone-1917737.jpg?updatedAt=1684182004004")`,
                backgroundRepeat: 'no-repeat',
                backgroundColor: t =>
                    t.palette.mode === 'light'
                        ? t.palette.grey[50]
                        : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <CssBaseline />
            <Grid item xs={false} sm={6} md={7} />
            <Grid
                item
                xs={12}
                sm={6}
                md={5}
                component={Paper}
                elevation={24}
                square
                sx={{
                    height: '100vh',
                    background: '#ffffffb0',
                    backdropFilter: 'blur(7.5px)',
                }}
            >

                <RegisterForm />

            </Grid>
        </Grid>
    );
};