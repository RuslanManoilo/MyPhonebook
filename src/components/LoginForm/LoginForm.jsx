import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";

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
                dispatch(logIn(values));
                actions.resetForm();
            }}
        >
            <FormWrapper>
                <FormLabel htmlFor="logInEmail">Email</FormLabel>
                <FormInput
                    name="email"
                    id="logInEmail"
                    type="email"
                />
                <ErrorNotification name="email" component="div" />

                <FormLabel htmlFor="logInPassword">Password</FormLabel>
                <FormInput
                    name="password"
                    id="logInPassword"
                    type="password"
                />
                <ErrorNotification name="password" component="div" />

                <FormBtn type="submit">Log In</FormBtn>
            </FormWrapper>
        </Formik>
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