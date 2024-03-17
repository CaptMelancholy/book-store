import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import BaseLayout from './layouts/Base/base';
import { defaultTheme } from './styles/theme';
import AuthorizationTemplate from './components/AuthorizationTemplate/AuthorizationTemplate';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BaseLayout>
        <AuthorizationTemplate />
      </BaseLayout>
    </ThemeProvider>
  );
}
export default App;
