import {BrowserRouter} from 'react-router-dom'
import {ThemeProvider} from 'styled-components';
import {GlobalStyle} from './styles/global';
import Router from './routes'

import theme from './styles/theme/theme';

const App = () => {
  return (
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <Router />
            <GlobalStyle />
        </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;