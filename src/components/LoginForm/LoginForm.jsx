import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";

import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";

import { Formik } from 'formik';
import * as Yup from 'yup';
import { ErrorNotification } from "components/ContactForm/ContactForm.styled"; 
import { FormBox, HelpLink, StyledLabel, TextField } from './LoginForm.styled';


export const LoginForm = () => {
    
    const dispatch = useDispatch();

    return (
        <>
            <Box
                sx={{
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar
                    sx={{
                        m: 1,
                        bgcolor: 'primary.main',
                        boxShadow: 3,
                        color: '#00000031',
                    }}
                >
                    <LockOutlinedIcon />
                </Avatar>
                <Typography
                    component="h1"
                    variant="h5"
                    sx={{
                        color: '#000',
                        textShadow: '-1px -1px 1px #ffffff31, 1px 1px 1px #00000031',
                    }}
                >
                    SignIn
                </Typography>
            
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}

                    validationSchema={formSchema}

                    onSubmit={(values, actions) => {
                        dispatch(logIn(values));
                        actions.resetForm();
                    }}
                >
                    <FormBox>
                        <StyledLabel htmlFor="logInEmail">Email</StyledLabel>
                        <TextField
                            name="email"
                            id="logInEmail"
                            type="email"
                        />
                        <ErrorNotification name="email" component="div" />

                        <StyledLabel htmlFor="logInPassword">Password</StyledLabel>
                        <TextField
                            name="password"
                            id="logInPassword"
                            type="password"
                        />
                        <ErrorNotification name="password" component="div" />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, boxShadow: 3 }}
                        >
                            Sign In
                        </Button>

                    </FormBox>
                </Formik>

                <HelpLink to={`/register`} variant="body2">
                    {"Don't have an account? Sign Up"}
                </HelpLink>
            </Box>
        </>
    );
};

const formSchema = Yup.object().shape({
    email: Yup.string()
        .email()
        .required('This field is required!'),
    password: Yup.string()
        .min(8, 'Too Short!')
        .required('This field is required!'),
});