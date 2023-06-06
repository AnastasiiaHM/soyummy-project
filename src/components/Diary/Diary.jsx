import {
  DiaryStyled,
  DiaryStyledList,
  EmptyProductsMessage,
} from './Diary.styled';

import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import DatePicker from 'components/DatePicker/DatePicker';
import { deleteProduct } from 'redux/user/operations';
import { LoaderSmall } from 'components/Loader/Loader';
import { AiOutlinePlus } from 'react-icons/ai';
import { DiaryForm } from 'components/DiaryForm/DiaryForm';
import { setProductModalOpened } from 'redux/ModalAddProductOpened/slice';
import ModalAddProduct from 'components/ModalAddProduct/ModalAddProduct';
import {
  selectDiaryError,
  selectIsLoggedIn,
  selectIsProductDeleting,
  selectSelectedDate,
  selectUser,
} from 'redux/user/selectors';

export const DiaryMain = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector(selectSelectedDate);
  const user = useSelector(selectUser);
  const isProductDeleting = useSelector(selectIsProductDeleting);
  const eatenProductsFiltered =
    user.days?.filter(day => day.date === selectedDate) || [];
  const eatenProducts = eatenProductsFiltered[0]?.eatenProducts || [];
  const eatenProductsSorted = [...eatenProducts].reverse();
  const [deletingProductId, setDeletingProductId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const isLoggedin = useSelector(selectIsLoggedIn);
  const dayInfoError = useSelector(selectDiaryError);

  const handleDeleteProduct = id => {
    const dayId = user.days?.filter(day => day.date === selectedDate)[0]._id;
    setDeletingProductId(id);
    dispatch(deleteProduct([id, dayId]));
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openAddProductModal = () => {
    dispatch(setProductModalOpened(true));
  };

  return (
    <DiaryStyled>
      <div className="mobile-diary-wrap">
        <div className="Diary__header-wraper-data">
          <div className="Diary__data">{isLoggedin && <DatePicker />}</div>
        </div>

        {!isMobile && !!user.userData.dailyRate && <DiaryForm />}

        {!user.userData.dailyRate && (
          <EmptyProductsMessage>
            Please, count your daily rate first
          </EmptyProductsMessage>
        )}

        {eatenProductsSorted.length > 0 ? (
          <div className="Diarty__header-wrapper">
            <DiaryStyledList>
              {eatenProductsSorted.map(product => (
                <li key={product.id} className="Diary__list-wrapper">
                  <div className="Diarty__list">
                    <div className="Diary__list-name" title={product.title}>
                      {product.title}
                    </div>
                    <div className="Diary__list-gram">
                      {Math.ceil(product.weight)} g
                    </div>
                    <div className="Diary__list-kcal">
                      {Math.ceil(product.kcal)} <span>kcal</span>
                    </div>
                    <button
                      className="Diary__btn-delete"
                      type="button"
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      <AiOutlineClose />
                    </button>
                    {isProductDeleting && deletingProductId === product.id && (
                      <LoaderSmall name="deleteProduct" />
                    )}
                  </div>
                </li>
              ))}
            </DiaryStyledList>
          </div>
        ) : (
          !!user.userData.dailyRate && (
            <EmptyProductsMessage>
              {dayInfoError || 'You did not add any products!'}
            </EmptyProductsMessage>
          )
        )}
        <button className="Diary__btn-add" onClick={openAddProductModal}>
          <AiOutlinePlus color="white" />
        </button>
        <ModalAddProduct />
      </div>
    </DiaryStyled>
  );
};
