import {
  Wrapper,
  ImageLoader,
  Input,
  Field,
} from './RecipeDescriptionFields.styled';

export const RecipeDescriptionFields = () => {
  return (
    <Wrapper>
      <ImageLoader>
        <Input type="file" />
      </ImageLoader>
      <Field type="text" placeholder="Enter item title" required />
      <Field type="text" placeholder="Enter about recipe" required />
      <Field type="text" placeholder="Category" required />
      <Field type="text" placeholder="Coocking time" required />
    </Wrapper>
  );
};
