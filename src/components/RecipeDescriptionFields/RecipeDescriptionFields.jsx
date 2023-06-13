import {
  Wrapper,
  FieldsWrapper,
  ImageLoader,
  Input,
  Field,
  StyledLabel,
  ValidationInfo,
  Thumb,
  CloseBtn,
} from './RecipeDescriptionFields.styled';
import { ReactComponent as Add } from '../images/addIngredient/add.svg';
import { Select } from 'components/Select/Select';
import { timeRange } from 'components/constants/timeRange';
import { useField, useFormikContext } from 'formik';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useLocalStorage } from 'hooks/useLocalStorage';

export const RecipeDescriptionFields = ({
  selectedValue,
  zIndex,
  categories,
}) => {
  const [currentTitle, setCurrentTitle] = useLocalStorage('recipeTitle', null);
  const [currentDesc, setCurrentDesc] = useLocalStorage(
    'recipeDescription',
    null
  );
  const [titleField, titleMeta] = useField('title');
  const [descriptionField, descriptionMeta] = useField('description');
  const [thumb, setThumb] = useState(null);
  const { setFieldValue } = useFormikContext();

  const titleTypingHandler = e => {
    const { value } = e.target;
    setCurrentTitle(value);
    setFieldValue('title', value);
  };

  const descTypingHandler = e => {
    const { value } = e.target;
    setCurrentDesc(value);
    setFieldValue('description', value);
  };

  const handleImageUpload = event => {
    const file = event.target.files[0];
    setThumb(file);
  };

  const removeThumbHandler = event => {
    event.preventDefault();
    setThumb(null);
  };

  const newValueHandler = value => {
    selectedValue(value);
  };

  return (
    <Wrapper>
      <ImageLoader>
        <Add />
        <Input type="file" accept="image/*" onChange={handleImageUpload} />
        {thumb && <Thumb src={URL.createObjectURL(thumb)} alt="thumb" />}
        {thumb && (
          <CloseBtn type="button" onClick={removeThumbHandler}>
            <AiOutlineClose />
          </CloseBtn>
        )}
      </ImageLoader>
      <FieldsWrapper>
        <StyledLabel>
          <Field
            {...titleField}
            type="text"
            placeholder="Enter item title"
            value={currentTitle}
            name="title"
            required
            border="1px solid #e0e0e0"
            onChange={titleTypingHandler}
          />
          {titleMeta.error && titleMeta.touched ? (
            <ValidationInfo>{titleMeta.error}</ValidationInfo>
          ) : null}
        </StyledLabel>
        <StyledLabel>
          <Field
            {...descriptionField}
            type="text"
            placeholder="Enter about recipe"
            value={currentDesc}
            name="description"
            required
            border="1px solid #e0e0e0"
            onChange={descTypingHandler}
          />
          {descriptionMeta.error && descriptionMeta.touched ? (
            <ValidationInfo>{descriptionMeta.error}</ValidationInfo>
          ) : null}
        </StyledLabel>
        <StyledLabel zIndex="5">
          <Field type="text" placeholder="Category" readOnly />
          <Select
            options={categories}
            field="_id"
            secondField="name"
            name="category"
            width="150px"
            alignText="left"
            newValue={newValueHandler}
            readOnly={true}
          />
        </StyledLabel>
        <StyledLabel zIndex="4">
          <Field type="text" placeholder="Cooking time" readOnly />
          <Select
            options={timeRange}
            name="time"
            width="100px"
            alignText="left"
            newValue={newValueHandler}
            readOnly={true}
          />
        </StyledLabel>
      </FieldsWrapper>
    </Wrapper>
  );
};
