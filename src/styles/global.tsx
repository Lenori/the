import { createGlobalStyle } from 'styled-components';

import colors from './colors.styles';
import spacing from './spacing.styles';

export default createGlobalStyle`
    *:focus {
        outline: 0;
    }
    
    :root {
        ${colors}
        ${spacing}
    }

    html {
        font-size: 18px;
    }

    body {
        font-family: 'Ubuntu', sans-serif;
        background-color: var(--main-cream);
        border: none;
        background-repeat: no-repeat;
        margin: 0;
        color: var(--dark-grey);
    }

    p {        
        line-height: 22px;
    }

    a {        
        text-decoration: none;
    }

    section {
        box-sizing: border-box;
    }

    button {
        border: none;
        cursor: pointer;        
        transition: filter 0.3s;       
        background-color: var(--main-green); 
        color: var(--main-cream);
        padding: var(--spacing-xs) var(--spacing-s);
        border-radius: 20px;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 12px;

        &:hover {
            filter: brightness(90%);
        }

        :disabled {
            opacity: 0.4;
        }
    }
`;
