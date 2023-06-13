import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Section } from '../components/Styled/MainPageHome.styled';
import RecipesGallery from '../components/RecipesGallery/RecipesGallery';
import { SearchForm } from '../components/SearchForm/SearchForm';
import { fetchMainPageRecipes } from '../redux/recipes/operations';
import { BsArrowRight } from 'react-icons/bs';

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

      <RecipesGallery recipes={recipes} />
    </Section>
  );
}
