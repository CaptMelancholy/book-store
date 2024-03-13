import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import BaseLayout from './layouts/Base/base';
import { defaultTheme } from './styles/theme';
import BodyTemplate from './components/BodyTemplate/BodyTemplate';
import SubscribeTemplate from './components/SubscribeTemplate/SubscribeTemplate';
import BookList from './components/BookList/BookList';
import Book from './components/Book/Book';
import CartElement from './components/CartElement/CartElement';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BaseLayout>
        <BodyTemplate title="HELLO WORLD">
          <SubscribeTemplate />
          <CartElement />
          <BookList>
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
          </BookList>
        </BodyTemplate>
      </BaseLayout>
    </ThemeProvider>
  );
}
export default App;
