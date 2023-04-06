import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Helvetica Neue', sans-serif;
  }
  
  body {

	background-image: url("https://transparenttextures.com/patterns/diamond-upholstery.png");
width:100vw;

height:90vh;
  }
  
  h1, h2, h3 {
    color: #867070;
    font-size:2rem;
  }
  
  p {
    margin: 0;
    padding: 0;

  }
  blockquote{
  
  }
`;

export default GlobalStyle;
