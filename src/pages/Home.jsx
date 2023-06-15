import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Section } from '../components/Styled/MainPageHome.styled';
import { SearchForm } from '../components/SearchForm/SearchForm';
import { fetchMainPageRecipes } from '../redux/main/operations';
import { BsArrowRight } from 'react-icons/bs';
import RecipesGallery from '../components/RecipesGallery/RecipesGallery';
import {
  MainBtn,
  HomeGallery,
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
        <h2
          className="title"
          style={{ alignSelf: 'flex-start', marginLeft: '120px' }}
        >
          Breakfast
        </h2>
        <RecipesGallery recipes={breakfast} />
        <Link
          style={{
            display: 'flex',
            width: '94px',
            height: '38px',
            alignSelf: 'flex-end',
            marginRight: '120px',
          }}
          to={`/categories`}
          state={{ from: location }}
        >
          <MainBtn>See all</MainBtn>
        </Link>
        <h2
          className="title"
          style={{ alignSelf: 'flex-start', marginLeft: '120px' }}
        >
          Miscellaneous
        </h2>
        <RecipesGallery recipes={miscellaneous} />
        <Link
          style={{
            display: 'flex',
            width: '94px',
            height: '38px',
            alignSelf: 'flex-end',
            marginRight: '120px',
          }}
          to={`/categories`}
          state={{ from: location }}
        >
          <MainBtn>See all</MainBtn>
        </Link>
        <h2
          className="title"
          style={{ alignSelf: 'flex-start', marginLeft: '120px' }}
        >
          Chiken
        </h2>
        <RecipesGallery recipes={chicken} />
        <Link
          style={{
            display: 'flex',
            width: '94px',
            height: '38px',
            alignSelf: 'flex-end',
            marginRight: '120px',
          }}
          to={`/categories`}
          state={{ from: location }}
        >
          <MainBtn>See all</MainBtn>
        </Link>
        <h2
          className="title"
          style={{ alignSelf: 'flex-start', marginLeft: '120px' }}
        >
          Desserts
        </h2>
        <RecipesGallery recipes={dessert} />
        <Link
          style={{
            display: 'flex',
            width: '94px',
            height: '38px',
            alignSelf: 'flex-end',
            marginRight: '120px',
          }}
          to={`/categories`}
          state={{ from: location }}
        >
          <MainBtn>See all</MainBtn>
        </Link>
      </HomeGallery>
    </Section>
  );
}
