import { MainGalleryStyled } from './MainGallery.styled';
import { RecipeCard } from '../RecipesGallery/RecipeCard/RecipeCard';

export const MainGallery = ({ recipes }) => {
  return (
    <>
      <MainGalleryStyled>
        {recipes.map(recipe => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </MainGalleryStyled>
    </>
  );
};

export default MainGallery;
