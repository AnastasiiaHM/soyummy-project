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
import { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { getCategoriesList } from 'operations/addRecipe';
import { ToastContainer, toast } from 'react-toastify';

export const RecipeDescriptionFields = ({
  selectedCategory,
  selectedMeasure,
  recipeImage,
  zIndex,
  categories,
}) => {
  const [currentTitle, setCurrentTitle] = useLocalStorage('recipeTitle', null);
  const [currentDesc, setCurrentDesc] = useLocalStorage(
    'recipeDescription',
    null
  );
  const [categoriesList, setCategoriesList] = useState([]);
  const [titleField, titleMeta] = useField('title');
  const [descriptionField, descriptionMeta] = useField('description');
  const [thumb, setThumb] = useState(null);
  const { setFieldValue } = useFormikContext();
  const notify = message => toast.error(message, { autoClose: 3000 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCategoriesList();
        setCategoriesList(res);
      } catch (error) {
        notify(error.message);
      }
    };
    fetchData();
  }, []);

  const titleTypingHandler = e => {
    const { value } = e.target;
    setCurrentTitle(value);
    setFieldValue('title', value);
  };

  const selectedCategoryHandler = value => {
    selectedCategory(value);
  };

  const selectedMeasureHandler = value => {
    selectedMeasure(value);
  };

  const descTypingHandler = e => {
    const { value } = e.target;
    setCurrentDesc(value);
    setFieldValue('description', value);
  };

  const handleImageUpload = event => {
    const file = event.target.files[0];
    setThumb(file);
    recipeImage(file);
  };

  const removeThumbHandler = event => {
    event.preventDefault();
    setThumb(null);
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
            value={currentTitle || ''}
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
            value={currentDesc || ''}
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
            options={categoriesList}
            field="_id"
            secondField="name"
            name="category"
            width="150px"
            alignText="left"
            newValue={selectedCategoryHandler}
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
            newValue={selectedMeasureHandler}
            readOnly={true}
          />
        </StyledLabel>
      </FieldsWrapper>
    </Wrapper>
  );
};
