import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import BaseLayout from './layouts/Base/base';
import { defaultTheme } from './styles/theme';
import BodyTemplate from './components/BodyTemplate/BodyTemplate';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BaseLayout>
        <BodyTemplate title="HELLO WORLD">
          <h1>HELLO WORLD</h1>
        </BodyTemplate>
      </BaseLayout>
    </ThemeProvider>
  );
}
export default App;
