import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    button{
        outline:none;
        border:none;
        cursor:pointer;
    }
    input{
        outline:none;
    }
    a{
        text-decoration:none;
    }
`

export default GlobalStyle;