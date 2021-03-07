import { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../styles/themes/light';
import { darkTheme } from '../styles/themes/dark';
import GlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Component {...pageProps} themeToggler={themeToggler}/>
    </ThemeProvider>
  );
}

export default MyApp;
