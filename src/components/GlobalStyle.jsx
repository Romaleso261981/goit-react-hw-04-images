import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #f8f3f3;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }
`;



