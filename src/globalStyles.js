import { createGlobalStyle } from "styled-components";
import SFRoundedMedium from "./assets/fonts/SFRounded-Medium.ttf";
import SFRoundedRegular from "./assets/fonts/SFRounded-Regular.ttf";
import SFRoundedBold from "./assets/fonts/SFRounded-Bold.ttf";
import SFRoundedHeavy from "./assets/fonts/SFRounded-Heavy.ttf";

const GlobalStyle = createGlobalStyle`

*{
    -moz-box-sizing: border-box; 
    -webkit-box-sizing: border-box; 
     box-sizing: border-box;
    
    
    }

@font-face {
  font-family: "SFRounded-Regular";
  src: local("SFRounded-Regular"), url(${SFRoundedRegular}) format("opentype");
}

@font-face {
  font-family: "SFRounded-Medium";
  src: local("SFRounded-Medium"), url(${SFRoundedMedium}) format("opentype");
}

@font-face {
  font-family: "SFRounded-Bold";
  src: local("SFRounded-Bold"), url(${SFRoundedBold}) format("opentype");
}

@font-face {
  font-family: "SFRounded-Heavy";
  src: local("SFRounded-Heavy"), url(${SFRoundedHeavy}) format("opentype");
}
     
  body {
    margin: 0;
    top:0;
    padding: 0;
    background: #fbf9f9;
    overflow-x: hidden;
    font-family: "SFRounded-Medium";

  }
  a{
    text-decoration: none;
    color: black;
  }
  textarea:focus, input:focus{
    outline: none;
}


::-webkit-scrollbar {
  width: 10px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #dbe9f7; 
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #5450d6; 
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}

`;

export default GlobalStyle;
