import {
  StyledTitle,
  StyledList,
  StyledItem,
  StyledLink,
  StyledImage,
  Wrapper,
  RecipeTitle,
  StyledDesc,
} from './PopularRecipe.styled';

const shortenText = str => {
  let words = str.split(' ');
  if (words.length <= 15) {
    return str;
  } else {
    return words.slice(0, 15).join(' ') + '...';
  }
};

export const PopularRecipe = ({ list, location }) => {
  return (
    <>
      <StyledTitle>Popular recipe</StyledTitle>
      <StyledList>
        {list.map(recipe => (
          <StyledItem key={recipe._id}>
            <StyledLink to={`/recipe/${recipe._id}`} state={{ from: location }}>
              <StyledImage src={recipe?.preview || ''} alt="recipe" />
              <Wrapper>
                <RecipeTitle>{recipe?.title || ''}</RecipeTitle>
                <StyledDesc>
                  {recipe.description ? shortenText(recipe.description) : ''}
                </StyledDesc>
              </Wrapper>
            </StyledLink>
          </StyledItem>
        ))}
      </StyledList>
    </>
  );
};
