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
import { useField, useFormikContext } from 'formik';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const categories = [
  {
    _id: '6462a6cd4c3d0ddd28897f8e',
    name: 'Beef',
  },
  {
    _id: '6462a6cd4c3d0ddd28897f95',
    name: 'Breakfast',
  },
  {
    _id: '6462a6cd4c3d0ddd28897f8d',
    name: 'Chicken',
  },
  {
    _id: '6462a6cd4c3d0ddd28897f8f',
    name: 'Dessert',
  },
  {
    _id: '6462a6cd4c3d0ddd28897f97',
    name: 'Goat',
  },
  {
    _id: '6462a6cd4c3d0ddd28897f8b',
    name: 'Lamb',
  },
  {
    _id: '6462a6cd4c3d0ddd28897f93',
    name: 'Miscellaneous',
  },
  {
    _id: '6462a6cd4c3d0ddd28897f94',
    name: 'Pasta',
  },
  {
    _id: '6462a6cd4c3d0ddd28897f91',
    name: 'Pork',
  },
  {
    _id: '6462a6cd4c3d0ddd28897f8a',
    name: 'Seafood',
  },
  {
    _id: '6462a6cd4c3d0ddd28897f96',
    name: 'Side',
  },
  {
    _id: '6462a6cd4c3d0ddd28897f98',
    name: 'Soup',
  },
  {
    _id: '6462a6cd4c3d0ddd28897f8c',
    name: 'Starter',
  },
  {
    _id: '6462a6cd4c3d0ddd28897f90',
    name: 'Vegan',
  },
  {
    _id: '6462a6cd4c3d0ddd28897f92',
    name: 'Vegetarian',
  },
];

const time = [
  '5 min',
  '10 min',
  '15 min',
  '20 min',
  '25 min',
  '30 min',
  '35 min',
  '40 min',
  '45 min',
  '50 min',
  '55 min',
  '60 min',
  '65 min',
  '70 min',
  '75 min',
  '80 min',
  '85 min',
  '90 min',
  '95 min',
  '100 min',
  '105 min',
  '110 min',
  '115 min',
  '120 min',
];

export const RecipeDescriptionFields = ({ selectedValue, zIndex }) => {
  const [titleField, titleMeta] = useField('title');
  const [descriptionField, descriptionMeta] = useField('description');
  const [thumb, setThumb] = useState(null);

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
            required
            border="1px solid #e0e0e0"
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
            required
            border="1px solid #e0e0e0"
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
          />
        </StyledLabel>
        <StyledLabel zIndex="4">
          <Field type="text" placeholder="Cooking time" readOnly />
          <Select
            options={time}
            name="time"
            width="100px"
            alignText="left"
            newValue={newValueHandler}
          />
        </StyledLabel>
      </FieldsWrapper>
    </Wrapper>
  );
};
