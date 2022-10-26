import { createGlobalStyle } from "styled-components";
import THEME from "./theme/theme";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    body {
        background-color: ${({ theme }) => theme.PRIMARY.PRIMARY};
        color: ${({ theme }) => theme.NEUTRAL.WHITE};
    }

    body, input, textarea, button {
        font-family: ${THEME.FONT_FAMILY.TEKO}, sans-serif;
        font-weight: 400;
        border: none;
        outline: none;
    }

    a {
        text-decoration: none;
    }
`;
