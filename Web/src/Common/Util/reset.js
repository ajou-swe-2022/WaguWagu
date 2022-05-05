import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`

  ${reset}
  * {
    font-size : 100%;
    box-sizing : border-box;
    text-decoration : none;
    color : #000000;
  }

  *::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

`;

export default GlobalStyle;
