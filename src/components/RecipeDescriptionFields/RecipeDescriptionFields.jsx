import { Wrapper, ImageLoader, Input } from './RecipeDescriptionFields.styled';

export const RecipeDescriptionFields = () => {
  return (
    <Wrapper>
      <ImageLoader>
        <Input type="file" />
      </ImageLoader>
    </Wrapper>
  );
};
