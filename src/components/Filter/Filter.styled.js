import styled from "styled-components";


export const FilterLabel = styled.label`
    font-family: 'Courier New', monospace;
    color: ${p => p.theme.colors.blue};
`;

export const FilterInput = styled.input`
    width: 50%;
    height: 8px;
    border: 1px solid rgba(0, 0, 0, 0.23);
    border-radius: ${p => p.theme.radii.sm};
    font: inherit;
    letter-spacing: inherit;
    color: currentcolor;
    box-sizing: content-box;
    background: none;
    margin-top: 8px;
    margin-bottom: 8px;
    -webkit-tap-highlight-color: transparent;
    display: block;
    animation-name: mui-auto-fill-cancel;
    animation-duration: 10ms;
    padding: 16.5px 14px;
    border-style: solid;
    border-width: 1px;
    overflow: hidden;
`;