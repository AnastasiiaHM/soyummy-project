import { TitleStyled } from 'components/Styled/Title.styled';
export const CategoriesRecipes = () => {
  return (
    <div>
      <TitleStyled>Categories</TitleStyled>
      <ul>
        <li>
          <button type="button">Beef</button>
        </li>
        <li>
          <button type="button">Breakfast</button>
        </li>
        <li>
          <button type="button">Chicken</button>
        </li>
        <li>
          <button type="button">Desserts</button>
        </li>
        <li>
          <button type="button">Goat</button>
        </li>
        <li>
          <button type="button">Lamb</button>
        </li>
        <li>
          <button type="button">Miscellaneous</button>
        </li>
        <li>
          <button type="button">Pasta</button>
        </li>
        <li>
          <button type="button">Pork</button>
        </li>
        <li>
          <button type="button">Seafood</button>
        </li>
        <li>
          <button type="button">Side</button>
        </li>
      </ul>
      <ul>
        <li>
          <p>recipes...</p>
        </li>
      </ul>
    </div>
  );
};
