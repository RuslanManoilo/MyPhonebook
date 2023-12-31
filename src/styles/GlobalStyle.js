import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'
import "modern-normalize";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 90%;
    text-align: center;
    padding: 20px;
    margin: 0 auto;
    margin-top: 50px;
    border: 2px solid #ccc;
    border-radius: ${p => p.theme.radii.lg};
    background-color: inherit;
`;

export const Title = styled.h1`
    color: ${p => p.theme.colors.blue};
`;

export const SecondTitle = styled.h2`
    color: ${p => p.theme.colors.blue};
`;

export const HomeText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 36px;
    gap: ${p => p.theme.spacing(4)};
`;

export const HomeInfo = styled.p`
    width: 86%;
`

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
    }

    ul,
    ol {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
    }
`;