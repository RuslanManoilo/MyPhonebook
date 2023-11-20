import { ErrorMessage, Field, Form } from "formik";
import styled from "styled-components";


export const FormWrapper = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 15px;
`;

export const FormLabel = styled.label`
    font-family: 'Courier New', monospace;
    font-size: ${p => p.theme.spacing(5)};
    margin-bottom: 5px;
    color: #a93a3a;
`;

export const FormInput = styled(Field)`
    font-family: 'Courier New', monospace;
    padding: 5px;
    margin-bottom: 8px;
    border: 1px solid #a93a3a;
    border-radius: ${p => p.theme.radii.sm};
`;

export const FormBtn = styled.button`
    font-family: 'Courier New', monospace;
    padding: 5px 10px;
    border: none;
    border-radius: ${p => p.theme.radii.sm};
    cursor: pointer;
    color: ${p => p.theme.colors.white};
    background-color: #a93a3a;
`;

export const ErrorNotification = styled(ErrorMessage)`
  color: red;
  font-size: 14px;
  margin-bottom: 12px;
`;