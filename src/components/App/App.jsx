import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';

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
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" index element={<WelcomePage />} />
            <Route
              path="/signin"
              // element={<LoginPage />}
              element={
                <RestrictedRoute
                  redirectTo="/main"
                  component={<LoginPage />}
                  replace={true}
                />
              }
            />
            <Route
              path="/register"
              // element={<RegisterPage />}
              element={
                <RestrictedRoute
                  redirectTo="/main"
                  component={<RegisterPage />}
                  replace={true}
                />
              }
            />
            <Route
              path="/main"
              // element={<MainPage />}
              element={<PrivateRoute redirectTo="/" component={<MainPage />} />}
            />

            <Route
              path="/categories"
              // element={<CategoriesPage />}
              element={
                <PrivateRoute redirectTo="/" component={<CategoriesPage />} />
              }
            >
              <Route element={<CategoriesRecipes />} path=":categoryName" />
            </Route>
            <Route
              path="/add"
              // element={<AddRecipePage />}
              element={
                <PrivateRoute redirectTo="/" component={<AddRecipePage />} />
              }
            />
            <Route
              path="/favorite"
              // element={<FavoritesPage />}
              element={
                <PrivateRoute redirectTo="/" component={<FavoritesPage />} />
              }
            />
            <Route
              path="/recipe/:recipeId"
              // element={<RecipePage />}
              element={
                <PrivateRoute redirectTo="/" component={<RecipePage />} />
              }
            />
            <Route
              path="/own-recipes"
              // element={<MyRecipesPage />}
              element={
                <PrivateRoute redirectTo="/" component={<MyRecipesPage />} />
              }
            />
            <Route
              path="/shopping-list"
              // element={<ShoppingPage />}
              element={
                <PrivateRoute redirectTo="/" component={<ShoppingPage />} />
              }
            />
            <Route
              path="/search"
              // element={<SearchPage />}
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
