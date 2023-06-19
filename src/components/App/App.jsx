import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { useDispatch } from 'react-redux';
import { current } from 'redux/auth/operations';

const WelcomePage = lazy(() => import('pages/WelcomePage'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));

const MainPage = lazy(() => import('pages/Home'));
const CategoriesPage = lazy(() => import('pages/Categories'));
const AddRecipePage = lazy(() => import('pages/AddRecipes/AddRecipes'));
const FavoritesPage = lazy(() => import('pages/Favorite/Favorite'));
const RecipePage = lazy(() => import('pages/Recipes'));
const MyRecipesPage = lazy(() => import('pages/MyRecipes/MyRecipes'));
const ShoppingPage = lazy(() => import('pages/Shopping'));
const NotFoundPage = lazy(() => import('pages/NotFound'));
const SearchPage = lazy(() => import('pages/Search'));
const CategoriesRecipes = lazy(() =>
  import('components/CategoriesTab/CategoriesTab')
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, []);

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/"
              index
              element={
                <RestrictedRoute
                  redirectTo="/main"
                  component={<WelcomePage />}
                />
              }
            />

            <Route
              path="/signin"
              element={
                <RestrictedRoute redirectTo="/main" component={<LoginPage />} />
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/main"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/main"
              element={<PrivateRoute redirectTo="/" component={<MainPage />} />}
            />

            <Route
              path="/categories"
              element={
                <PrivateRoute redirectTo="/" component={<CategoriesPage />} />
              }
            >
              <Route element={<CategoriesRecipes />} path=":category" />
            </Route>
            <Route
              path="/add"
              element={
                <PrivateRoute redirectTo="/" component={<AddRecipePage />} />
              }
            />
            <Route
              path="/favorite"
              element={
                <PrivateRoute redirectTo="/" component={<FavoritesPage />} />
              }
            />
            <Route
              path="/recipe/:recipeId"
              element={
                <PrivateRoute redirectTo="/" component={<RecipePage />} />
              }
            />
            <Route
              path="/own-recipes"
              element={
                <PrivateRoute redirectTo="/" component={<MyRecipesPage />} />
              }
            />
            <Route
              path="/shopping-list"
              element={
                <PrivateRoute redirectTo="/" component={<ShoppingPage />} />
              }
            />
            <Route
              path="/search"
              element={
                <PrivateRoute redirectTo="/" component={<SearchPage />} />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
