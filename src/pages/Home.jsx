import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Section } from '../components/Styled/MainPageHome.styled';
import { SearchForm } from '../components/SearchForm/SearchForm';
import { fetchMainPageRecipes } from '../redux/recipes/operations';
import { BsArrowRight } from 'react-icons/bs';
import { MainGallery } from '../components/MainGallery/MainGallery';
import {
  MainBtn,
  HomeGallery,
} from '../components/MainGallery/MainGallery.styled';

export default function MainPageHome() {
  const location = useLocation();
  const dispatch = useDispatch();
  const recipes = useSelector(state => state.categories.recipes);
  useEffect(() => {
    dispatch(fetchMainPageRecipes());
  });

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
          Beef
        </h2>
        <MainGallery recipes={recipes} />
        <MainBtn>See all</MainBtn>

        <h2
          className="title"
          style={{ alignSelf: 'flex-start', marginLeft: '120px' }}
        >
          Miscellaneous
        </h2>
        <MainGallery recipes={recipes} />
        <MainBtn>See all</MainBtn>

        <h2
          className="title"
          style={{ alignSelf: 'flex-start', marginLeft: '120px' }}
        >
          Chicken
        </h2>
        <MainGallery recipes={recipes} />
        <MainBtn>See all</MainBtn>

        <h2
          className="title"
          style={{ alignSelf: 'flex-start', marginLeft: '120px' }}
        >
          Desserts
        </h2>
        <MainGallery recipes={recipes} />
        <MainBtn>See all</MainBtn>
      </HomeGallery>
    </Section>
  );
}
