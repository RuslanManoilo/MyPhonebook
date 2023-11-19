import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/contacts/operations";
import { selectContacts } from "redux/contacts/selectors";

import { Button } from "@mui/material";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { ErrorNotification } from "components/ContactForm/ContactForm.styled"; 
import { FormBox, StyledLabel, TextField } from "components/LoginForm/LoginForm.styled";


export const ContactForm = () => {

    const contacts = useSelector(selectContacts);
    
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{
                name: '',
                number: '',
            }}

            validationSchema={formSchema}

            onSubmit={(values, actions) => {
                contacts.some(contact => contact.name.toLowerCase() === values.name.toLowerCase()) ?
                    toast.error(`${values.name} is already in contacts.`, {
                        position: toast.POSITION.TOP_CENTER
                    })
                    :
                    dispatch(addContact(values));
                
                actions.resetForm();
            }}
        >
            <FormBox>
                <StyledLabel htmlFor="contactFormikInput">Name</StyledLabel>
                <TextField
                    name="name"
                    id="contactFormikInput"
                    type="text"
                    
                />
                <ErrorNotification name="name" component="div" />

                <StyledLabel htmlFor="contactFormikPhone">Phone number</StyledLabel>
                <TextField
                    name="number"
                    id="contactFormikPhone"
                    type="tel"
                />
                <ErrorNotification name="number" component="div" />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, boxShadow: 3 }}
                >
                    Add contact
                </Button>

            </FormBox>
        </Formik>
    );
};

const formSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .required('This field is required!'),
    number: Yup.string()
        .min(4, 'Too Short!')
        .required('This field is required!'),
});