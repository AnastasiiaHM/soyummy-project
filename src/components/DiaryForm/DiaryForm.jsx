import { InputWraper } from 'components/Form/Input.styled';
import { ButtonDiary } from 'components/Styled/ButtonDiary.styled';
import { ErrorMessage, Field, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from 'redux/user/operations';
import { fetchProductsList } from 'redux/user/operations';
import { AiOutlinePlus } from 'react-icons/ai';
import * as yup from 'yup';
import {
  selectIsLoadingAddProduct,
  selectIsLoadingProducts,
  selectProducts,
  selectSelectedDate,
} from 'redux/user/selectors';
import { LoaderSmall } from 'components/Loader/Loader';
import { FormikForm, ProductsList } from './DiaryForm.styled';
import { Button } from 'components/Styled';
import { setProductModalOpened } from 'redux/ModalAddProductOpened/slice';

export const DiaryForm = ({ type }) => {
  const dispatch = useDispatch();
  const selectedDate = useSelector(selectSelectedDate);
  const [productId, setProductId] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [weight, setWeight] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const isFetchingProducts = useSelector(selectIsLoadingProducts);
  const products = useSelector(selectProducts);
  const isLoadingAddProduct = useSelector(selectIsLoadingAddProduct);
  const initialValues = { search: '', grams: '' };
  const filteredProducts = products.filter(product =>
    product.title.ua.toLowerCase().includes(searchValue.toLowerCase())
  );
  const addButtonDisabled =
    filteredProducts.length === 0 || !searchValue || weight === 0;

  const schema = yup.object().shape({
    search: yup.string().min(1).max(30).required('Please enter product name'),
    grams: yup
      .number()
      .min(1)
      .max(3000)
      .required('Required field')
      .positive()
      .integer(),
  });

  const handleSubmit = () => {
    dispatch(
      addProduct({
        date: selectedDate,
        productId: productId,
        weight: weight,
      })
    );

    setSearchValue('');
    setWeight('');

    dispatch(setProductModalOpened(false));
  };

  const handleSearchChange = value => {
    setSearchValue(value);

    dispatch(fetchProductsList(value));
    setShowDropdown(true);

    if (value.length === 0) {
      setShowDropdown(false);
    }
  };

  const handleOnChange = e => {
    if (e.target.name === 'search') {
      handleSearchChange(e.target.value);
    }
    if (e.target.name === 'grams') {
      setWeight(e.target.value);
    }
  };

  useEffect(() => {
    const closeDropdown = e => {
      if (!e.target.classList.contains('productlist')) {
        setShowDropdown(false);
      }
    };

    window.addEventListener('click', closeDropdown);

    return () => window.removeEventListener('click', closeDropdown);
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormikForm autoComplete="off" onChange={handleOnChange} className={type}>
        <InputWraper>
          <Field
            type="text"
            name="search"
            placeholder=" "
            value={searchValue}
          />
          <label htmlFor="search">Enter product name</label>
          <ErrorMessage className="error" component="div" name="search" />
        </InputWraper>

        <InputWraper>
          <Field
            type="number"
            name="grams"
            placeholder=" "
            value={weight || ''}
          />
          <label htmlFor="grams">Grams</label>
          <ErrorMessage className="error" component="div" name="grams" />
        </InputWraper>

        {type !== 'mobile' && (
          <>
            <ButtonDiary type="submit" disabled={addButtonDisabled}>
              <AiOutlinePlus color="white" />
            </ButtonDiary>
            {isLoadingAddProduct && <LoaderSmall name="addProduct" />}
          </>
        )}

        {type === 'mobile' && (
          <>
            {isLoadingAddProduct && <LoaderSmall name="addProductMobile" />}
            <Button type="submit" className="orange">
              Add
            </Button>
          </>
        )}

        {showDropdown && isFetchingProducts && (
          <ProductsList className="productlist">
            <LoaderSmall />
          </ProductsList>
        )}

        {showDropdown && !isFetchingProducts && filteredProducts.length > 1 && (
          <ProductsList className="productlist">
            {filteredProducts.map(product => (
              <li
                onClick={() => {
                  setSearchValue(product.title.ua);
                  setProductId(product._id);
                  setShowDropdown(false);
                }}
                key={product.title.ua}
              >
                {product.title.ua}
              </li>
            ))}
          </ProductsList>
        )}
        {showDropdown &&
          !isFetchingProducts &&
          filteredProducts.length === 0 && (
            <ProductsList className="productlist">
              Products not found
            </ProductsList>
          )}
      </FormikForm>
    </Formik>
  );
};
