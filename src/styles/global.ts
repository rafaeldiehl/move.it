import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media(max-width: 1000px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  @media(max-height: 750px) {
    html {
      font-size: 92.75%;
    }
  }

  @media(max-height: 600px) {
    html {
      font-size: 86.75%;
    }
  }

  body {
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
  }

  body, input, textarea, button {
    font: 400 1rem "Inter", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;