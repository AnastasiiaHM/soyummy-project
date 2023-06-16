import { MainGalleryStyled } from './MainGallery.styled';
import { RecipeCard } from '../RecipesGallery/RecipeCard/RecipeCard';
import { useMediaQuery } from 'react-responsive';

export const MainGallery = ({ recipes }) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1439px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  let itemsPerPage = 4;

  if (isTabletOrMobile) {
    itemsPerPage = isMobile ? 1 : 2;
  }
  const slicedItems = recipes.slice(0, itemsPerPage);

  return (
    <>
      <MainGalleryStyled>
        {slicedItems?.map(recipe => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </MainGalleryStyled>
    </>
  );
};

export default MainGallery;
