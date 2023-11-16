import { useDispatch } from "react-redux";

import { Formik } from 'formik';
import * as Yup from 'yup';
import { ErrorNotification, FormBtn, FormInput, FormLabel, FormWrapper } from "components/ContactForm/ContactForm.styled"; 


export const LoginForm = () => {
    
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}

            validationSchema={formSchema}

            onSubmit={(values, actions) => {
                // dispatch(addContact(values));
                
                actions.resetForm();
            }}
        >
            <FormWrapper>
                <FormLabel htmlFor="registerEmail">Email</FormLabel>
                <FormInput
                    name="email"
                    id="registerEmail"
                    type="email"
                />
                <ErrorNotification name="email" component="div" />

                <FormLabel htmlFor="registerPassword">Password</FormLabel>
                <FormInput
                    name="password"
                    id="registerPassword"
                    type="password"
                />
                <ErrorNotification name="password" component="div" />

                <FormBtn type="submit">Register</FormBtn>
            </FormWrapper>
        </Formik>
    );
};

const formSchema = Yup.object().shape({
    email: Yup.string()
        .min(4, 'Too Short!')
        .required('This field is required!'),
    password: Yup.string()
        .min(4, 'Too Short!')
        .required('This field is required!'),
});