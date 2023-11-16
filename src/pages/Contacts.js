// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchContacts } from "redux/contacts/operations";
// import { selectError, selectIsLoading } from "redux/contacts/selectors";

import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
// import { Loader } from "components/Loader/Loader";
import { Container, SecondTitle, Title } from "components/GlobalStyle";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contacts() {
    // const dispatch = useDispatch();
    // const isLoading = useSelector(selectIsLoading);
    // const error = useSelector(selectError);

    // useEffect(() => {
    //     dispatch(fetchContacts());
    // }, [dispatch]);
    
    return (
        <Container>
            <Title>Add new contact:</Title>
            <ContactForm />
            <ToastContainer />

            <SecondTitle>Contacts</SecondTitle>
            <Filter />
            <ContactList />

            {/* {isLoading && !error && <Loader />} */}
        </Container>
    );
};