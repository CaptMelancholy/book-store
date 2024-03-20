/* eslint-disable react-hooks/exhaustive-deps */
import { ThemeProvider } from 'styled-components';

import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import GlobalStyle from './styles/global';
import BaseLayout from './layouts/Base/base';
import { defaultTheme } from './styles/theme';
import DefaultRoutes from './utils/Routes/Routes';
import MainPage from './pages/MainPage';
import SignInPage from './pages/SignInPage';
import CartPage from './pages/CartPage';
import BookPage from './pages/BookPage';
import { AppDispatch } from './store';
import { fetchNewReleases } from './store/thunks/books/books.thunk';
import FavoritePage from './pages/FavoritePage';
import SearchPage from './pages/SearchPage';
import RegToActivatePage from './pages/RegToActivatePage';
import RegSuccessPage from './pages/RegSuccessPage';
import ActivationPage from './pages/ActivationPage';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import AccountPage from './pages/AccountPage';
import NewPasswordPage from './pages/NewPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const getNewReleases = async () => {
      dispatch(fetchNewReleases());
    };
    getNewReleases();
  }, []);
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BaseLayout>
        <Routes>
          <Route path={DefaultRoutes.default}>
            <Route
              index
              element={<Navigate to={DefaultRoutes.home} replace />}
            />
            <Route path={DefaultRoutes.home} element={<MainPage />} />
            <Route path={DefaultRoutes.book} element={<BookPage />} />
            <Route path={DefaultRoutes.cart} element={<CartPage />} />
            <Route path={DefaultRoutes.favorite} element={<FavoritePage />} />
            <Route path={DefaultRoutes.search} element={<SearchPage />} />
            <Route path={DefaultRoutes.reset} element={<NewPasswordPage />} />
            <Route path={DefaultRoutes.new_password} element={<ResetPasswordPage />} />
            <Route
              path={DefaultRoutes.activation_request}
              element={<RegToActivatePage />}
            />
            <Route
              path={DefaultRoutes.activation_comp}
              element={<RegSuccessPage />}
            />
            <Route
              path={DefaultRoutes.activation}
              element={<ActivationPage />}
            />
            <Route
              path={DefaultRoutes.account}
              element={(
                <ProtectedRoute>
                  <AccountPage />
                </ProtectedRoute>
              )}
            />
            <Route
              path={DefaultRoutes.authorization}
              element={<SignInPage />}
            />
          </Route>
        </Routes>
      </BaseLayout>
    </ThemeProvider>
  );
}
export default App;
