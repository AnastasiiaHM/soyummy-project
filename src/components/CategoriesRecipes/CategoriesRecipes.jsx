import { TitleStyled } from 'components/Styled/Title.styled';
import {
  CategoriesNav,
  CategoriesWrapper,
  CategoriesGallery,
} from './CategoriesRecipes.styled';
export const CategoriesRecipes = () => {
  return (
    <CategoriesWrapper>
      <TitleStyled>Categories</TitleStyled>
      <CategoriesNav>
        <li>
          <button className="navbat" type="button">
            Beef
          </button>
        </li>
        <li>
          <button className="navbat" type="button">
            Breakfast
          </button>
        </li>
        <li>
          <button className="navbat" type="button">
            Chicken
          </button>
        </li>
        <li>
          <button className="navbat" type="button">
            Desserts
          </button>
        </li>
        <li>
          <button className="navbat" type="button">
            Goat
          </button>
        </li>
        <li>
          <button className="navbat" type="button">
            Lamb
          </button>
        </li>
        <li>
          <button className="navbat" type="button">
            Miscellaneous
          </button>
        </li>
        <li>
          <button className="navbat" type="button">
            Pasta
          </button>
        </li>
        <li>
          <button className="navbat" type="button">
            Pork
          </button>
        </li>
        <li>
          <button className="navbat" type="button">
            Seafood
          </button>
        </li>
        <li>
          <button className="navbat" type="button">
            Side
          </button>
        </li>
      </CategoriesNav>
      <CategoriesGallery>
        <li className="catrec">
          <p>recipes...</p>
        </li>
        <li className="catrec">
          <p>recipes...</p>
        </li>
        <li className="catrec">
          <p>recipes...</p>
        </li>
        <li className="catrec">
          <p>recipes...</p>
        </li>
        <li className="catrec">
          <p>recipes...</p>
        </li>
        <li className="catrec">
          <p>recipes...</p>
        </li>
        <li className="catrec">
          <p>recipes...</p>
        </li>
        <li className="catrec">
          <p>recipes...</p>
        </li>
        <li className="catrec">
          <p>recipes...</p>
        </li>
      </CategoriesGallery>
    </CategoriesWrapper>
  );
};
