import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";

import { Formik } from 'formik';
import * as Yup from 'yup';
import { ErrorNotification, FormBtn, FormInput, FormLabel, FormWrapper } from "components/ContactForm/ContactForm.styled"; 


export const RegisterForm = () => {
    
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                password: '',
            }}

            validationSchema={formSchema}

            onSubmit={(values, actions) => {
                console.log(values);
                dispatch(register(values));
                actions.resetForm();
            }}
        >
            <FormWrapper>
                <FormLabel htmlFor="registerUserName">Username</FormLabel>
                <FormInput
                    name="name"
                    id="registerUserName"
                    type="text"
                    
                />
                <ErrorNotification name="name" component="div" />

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
    name: Yup.string()
        .min(7, 'Too Short!')
        .required('This field is required!'),
    email: Yup.string()
        .email()
        .required('This field is required!'),
    password: Yup.string()
        .min(8, 'Too Short!')
        .required('This field is required!'),
});