import { MainContainer } from './App.styled';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
// import { RestrictedRoute } from 'components/RestrictedRoute';
// import { PrivateRoute } from 'components/PrivateRoute';

const WelcomePage = lazy(() => import('pages/WelcomePage'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));

const MainPage = lazy(() => import('pages/Home'));
const CategoriesPage = lazy(() => import('pages/Categories'));
const AddRecipePage = lazy(() => import('pages/AddRecepis'));
const FavoritesPage = lazy(() => import('pages/Favourite'));
const RecipePage = lazy(() => import('pages/AddRecepis'));
const MyRecipesPage = lazy(() => import('pages/MyRecepes'));
const ShoppingPage = lazy(() => import('pages/Shopping'));
const NotFoundPage = lazy(() => import('pages/NotFound'));
const SearchPage = lazy(() => import('pages/Search'));
const CategoriesRecipes = lazy(() =>
  import('components/CategoriesRecipes/CategoriesRecipes')
);

const App = () => {
  return (
    <>
      <MainContainer>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/"
              index
              element={<WelcomePage />}
              // element={
              //   <RestrictedRoute component={WelcomePage} redirectTo="/main" />
              // }
            />
            <Route
              path="/main"
              element={<MainPage />}
              // element={<PrivateRoute component={MainPage} redirectTo="/" />}
            />
            <Route
              path="/register"
              element={<RegisterPage />}
              // element={
              //   <RestrictedRoute
              //     component={RegisterPage}
              //     redirectTo="/main"
              //     replace={true}
              //   />
              // }
            />
            <Route
              path="/signin"
              element={<LoginPage />}
              // element={
              //   <RestrictedRoute
              //     component={LoginPage}
              //     redirectTo="/main"
              //     replace={true}
              //   />
              // }
            />
            <Route
              path="/categories"
              element={<CategoriesPage />}
              // element={
              //   <PrivateRoute component={CategoriesPage} redirectTo="/" />
              // }
            >
              <Route path=":categoryName" element={<CategoriesRecipes />} />
            </Route>
            <Route
              path="/add"
              element={<AddRecipePage />}
              // element={
              //   <PrivateRoute component={AddRecipePage} redirectTo="/" />
              // }
            />
            <Route
              path="/favorite"
              element={<FavoritesPage />}
              // element={
              //   <PrivateRoute component={FavoritesPage} redirectTo="/" />
              // }
            />
            <Route
              path="/recipe/:recipeId"
              element={<RecipePage />}
              // element={<PrivateRoute component={RecipePage} redirectTo="/" />}
            />
            <Route
              path="/my"
              element={<MyRecipesPage />}
              // element={
              //   <PrivateRoute component={MyRecipesPage} redirectTo="/" />
              // }
            />
            <Route
              path="/shopping-list"
              element={<ShoppingPage />}
              // element={<PrivateRoute component={ShoppingPage} redirectTo="/" />}
            />
            <Route
              path="/search"
              element={<SearchPage />}
              // element={<PrivateRoute component={SearchPage} redirectTo="/" />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </MainContainer>
    </>
  );
};

export default App;
