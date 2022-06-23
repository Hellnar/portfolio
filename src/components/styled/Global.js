import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto Slab', serif;
        color: #1e293b;
        scroll-behavior: smooth;
    }

    html {
        font-size: 16px;
    }

    a {
        text-decoration: none;
    }

    button {
        outline: none;
        border: 1px solid #475569;
        border-radius: 4px;
        font-family: 'Roboto Slab', serif;
        padding: 7px 12px;
        background-color: transparent;
        font-size: 1rem;
        transition: 0.2ms;
    }

    button:hover {
        cursor: pointer;
        transition: 0.2ms;
    }

    ul {
        list-style-type: none;
    }

    h2 {
        font-size: 2.4rem;
    }

    h3 {
        font-size: 1rem;
        font-weight: 400;
        color: #64748b;
    }
`