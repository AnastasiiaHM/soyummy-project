import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Section } from '../components/Styled/MainPageHome.styled';
import { SearchForm } from '../components/SearchForm/SearchForm';
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

export default function MainPageHome() {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMainPageRecipes());
  });
  const breakfast = useSelector(state => state.mainPage.recipes.Breakfast);
  const miscellaneous = useSelector(
    state => state.mainPage.recipes.Miscellaneous
  );
  const chicken = useSelector(state => state.mainPage.recipes.Chicken);
  const dessert = useSelector(state => state.mainPage.recipes.Dessert);
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
          <SearchForm />
        </div>
        <div className="tips">
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
      <HomeGallery>
        <StyledDiv>
          <StyledTitle>Breakfast</StyledTitle>
          <MainGallery recipes={breakfast} />
          <StyledLink to={`/categories/Breakfast`} state={{ from: location }}>
            <MainBtn>See all</MainBtn>
          </StyledLink>
        </StyledDiv>
        <StyledDiv>
          <StyledTitle>Miscellaneous</StyledTitle>
          <MainGallery recipes={miscellaneous} />
          <StyledLink
            to={`/categories/Miscellaneous`}
            state={{ from: location }}
          >
            <MainBtn>See all</MainBtn>
          </StyledLink>
        </StyledDiv>
        <StyledDiv>
          <StyledTitle>Chicken</StyledTitle>
          <MainGallery recipes={chicken} />
          <StyledLink to={`/categories/Chicken`} state={{ from: location }}>
            <MainBtn>See all</MainBtn>
          </StyledLink>
        </StyledDiv>
        <StyledDiv>
          <StyledTitle>Desserts</StyledTitle>
          <MainGallery recipes={dessert} />
          <StyledLink to={`/categories/Dessert`} state={{ from: location }}>
            <MainBtn>See all</MainBtn>
          </StyledLink>
        </StyledDiv>
        <Link to={`/categories`} state={{ from: location }}>
          <button className="btn recipesbtn">Other Categories</button>
        </Link>
      </HomeGallery>
    </Section>
  );
}
