import {
  Wrapper,
  FieldsWrapper,
  ImageLoader,
  Input,
  Field,
} from './RecipeDescriptionFields.styled';
import { ReactComponent as Add } from '../images/addIngredient/add.svg';
export const RecipeDescriptionFields = () => {
  return (
    <Wrapper>
      <ImageLoader>
        <Add />
        <Input type="file" />
      </ImageLoader>
      <FieldsWrapper>
        <Field type="text" placeholder="Enter item title" required />
        <Field type="text" placeholder="Enter about recipe" required />
        <Field type="text" placeholder="Category" required />
        <Field type="text" placeholder="Coocking time" required />
      </FieldsWrapper>
    </Wrapper>
  );
};
