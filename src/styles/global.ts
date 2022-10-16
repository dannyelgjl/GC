import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px #000000;
    }

    body {
        background-color: #161724;
        color: #FFFFFF
    }

    body, input, textarea, button {
        font-family: 'Teko', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`; 