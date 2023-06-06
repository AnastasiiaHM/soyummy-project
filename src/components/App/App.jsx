import { useSelector } from 'react-redux';
import { MainContainer } from './App.styled';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { Loader } from 'components/Loader/Loader';
import { selectIsLoggedIn } from 'redux/user/selectors';
import { selectIsLoading } from 'redux/loader/selectors';

const WelcomePage = lazy(() => import('pages/WelcomePage'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));

const MainPage = lazy(() => import('pages/Home'));
const CategoriesPage = lazy(() => import('pages/Categories'));
const AddRecipePage = lazy(() => import('pages/AddRecepis'));
const FavoritesPage = lazy(() => import('pages/Favourite'));
const RecipePage = lazy(() => import('pages/AddResepis'));
const MyRecipesPage = lazy(() => import('pages/MyRecepes'));
const ShoppingPage = lazy(() => import('pages/Shopping'));
const NotFoundPage = lazy(() => import('pages/NotFound'));
const SearchPage = lazy(() => import('pages/Search'));
const CategoriesRecipes = lazy(() =>
  import('components/CategoriesRecipes/CategoriesRecipes')
);

const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      {isLoading && <Loader />}(
      <MainContainer>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/"
              index
              element={
                <RestrictedRoute component={WelcomePage} redirectTo="/main" />
              }
            />
            <Route
              path="/main"
              element={<PrivateRoute component={MainPage} redirectTo="/" />}
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  component={RegisterPage}
                  redirectTo="/main"
                  replace={true}
                />
              }
            />
            <Route
              path="/signin"
              element={
                <RestrictedRoute
                  component={LoginPage}
                  redirectTo="/main"
                  replace={true}
                />
              }
            />
            <Route
              path="/categories"
              element={
                <PrivateRoute component={CategoriesPage} redirectTo="/" />
              }
            >
              <Route path=":categoryName" element={<CategoriesRecipes />} />
            </Route>
            <Route
              path="/add"
              element={
                <PrivateRoute component={AddRecipePage} redirectTo="/" />
              }
            />
            <Route
              path="/favorite"
              element={
                <PrivateRoute component={FavoritesPage} redirectTo="/" />
              }
            />
            <Route
              path="/recipe/:recipeId"
              element={<PrivateRoute component={RecipePage} redirectTo="/" />}
            />
            <Route
              path="/my"
              element={
                <PrivateRoute component={MyRecipesPage} redirectTo="/" />
              }
            />
            <Route
              path="/shopping-list"
              element={<PrivateRoute component={ShoppingPage} redirectTo="/" />}
            />
            <Route
              path="/search"
              element={<PrivateRoute component={SearchPage} redirectTo="/" />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </MainContainer>
      )
    </>
  );
};

export default App;
