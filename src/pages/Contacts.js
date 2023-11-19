import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
import { selectError, selectIsLoading } from "redux/contacts/selectors";

import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { Loader } from "components/Loader/Loader";
import { Container, SecondTitle, Title } from "styles/GlobalStyle";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contacts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    
    return (
        <>
            <ToastContainer />
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
                    <Container>
                        <Title>Add new contact:</Title>
                        <ContactForm />


                        <SecondTitle>Contacts</SecondTitle>
                        <Filter />
                        <ContactList />

                        {isLoading && !error && <Loader />}
                    </Container>
                </Grid>
            </Grid>
        </>
    );
};