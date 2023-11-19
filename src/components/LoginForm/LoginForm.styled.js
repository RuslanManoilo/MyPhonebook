import { Field, Form } from "formik";
import { Link } from "react-router-dom";
import styled from "styled-components";


export const FormBox = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin-top: 15px;
`;

export const StyledLabel = styled.label`
    margin-top: 12px;
    margin-bottom: 4px;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.334;
    letter-spacing: 0em;
    color: #1976d2;
    text-shadow: rgba(255, 255, 255, 0.192) -1px -1px 1px, rgba(0, 0, 0, 0.192) 1px 1px 1px;
`;

export const TextField = styled(Field)`
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.23);
    border-radius: 4px;
    font: inherit;
    letter-spacing: inherit;
    color: currentcolor;
    box-sizing: content-box;
    background: none;
    height: 1.4375em;
    margin: 0px;
    -webkit-tap-highlight-color: transparent;
    display: block;
    min-width: 0px;
    animation-name: mui-auto-fill-cancel;
    animation-duration: 10ms;
    padding: 16.5px 14px;
    border-style: solid;
    border-width: 1px;
    overflow: hidden;
`;

export const HelpLink = styled(Link)`
    text-decoration: none;
    color: #000;
`