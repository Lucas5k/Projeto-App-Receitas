import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 :root {
   --red: #C31E1E;
   --lightRed: #C65858;
   --black: #0E0D0E;   
   --white: #FFF8F1;
   --gray: #CBCBCB;
   --orange: #F37315;
   background-color: var(--white);
 }

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
  }  
  
`;

export default GlobalStyle;
