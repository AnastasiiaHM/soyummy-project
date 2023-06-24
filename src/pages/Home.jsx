import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Section } from '../components/Styled/MainPageHome.styled';
import { WelcomeSearch } from '../components/WelcomeSearch/WelcomeSearch';
import { fetchMainPageRecipes } from '../redux/main/operations';
import { BsArrowRight } from 'react-icons/bs';
import MainGallery from '../components/MainGallery/MainGallery';
import {
  MainBtn,
  HomeGallery,
  StyledTitle,
  StyledLink,
  StyledDiv,
} from '../components/MainGallery/MainGallery.styled';
import { Loader } from 'components/Loader/Loader';
import { Motivation } from 'components/motivation/Motivation';
import { OtherCategoriesButton } from './Home.styled';

export default function MainPageHome() {
  const isOpen = useSelector(state => state.auth.isOpen);
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMainPageRecipes());
  }, [dispatch]);

  const recipes = useSelector(state => state.mainPage.recipes);

  return (
    <Section>
      <div className="wrapper">
        <div className="main">
          <h1>
            <span>So</span>Yummy
          </h1>
          <p>
            "What to cook?" is not only a recipe app, it is, in fact, your
            cookbook. You can add your own recipes to save them for the future.
          </p>
          <WelcomeSearch />
        </div>
        <div className="tips">
          {isOpen && <Motivation />}
          <p>
            <span>Delicious and healthy </span>
            way to enjoy a variety of fresh ingredients in one satisfying meal
          </p>
          <div className="link">
            <Link to={`/categories`} state={{ from: location }}>
              See recipes
            </Link>
            <BsArrowRight />
          </div>
        </div>
      </div>
      {!recipes ? (
        <Loader />
      ) : (
        <HomeGallery>
          {Object.entries(recipes).map(([recipeKey, recipeArray]) => (
            <StyledDiv key={recipeKey}>
              <StyledTitle>{recipeKey}</StyledTitle>
              <MainGallery recipes={recipeArray} />
              <StyledLink
                to={`/categories/${recipeKey}`}
                state={{ from: location }}
              >
                <MainBtn>See all</MainBtn>
              </StyledLink>
            </StyledDiv>
          ))}
          <Link to={`/categories`} state={{ from: location }}>
            <OtherCategoriesButton>Other Categories</OtherCategoriesButton>
          </Link>
        </HomeGallery>
      )}
    </Section>
  );
}
