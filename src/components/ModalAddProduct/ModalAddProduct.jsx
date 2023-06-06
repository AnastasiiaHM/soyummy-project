import { ModalStyled } from './ModalAddProduct.styled';
import { ReactComponent as BackArrow } from 'images/backarrow.svg';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAddProductModalOpened } from 'redux/ModalAddProductOpened/selectors';
import { setProductModalOpened } from 'redux/ModalAddProductOpened/slice';
import { DiaryForm } from 'components/DiaryForm/DiaryForm';

const modalRoot = document.querySelector('#modal-root');

const ModalAddProduct = () => {
  const dispatch = useDispatch();
  const modalOpened = useSelector(selectAddProductModalOpened);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener('keydown', handleCloseModal);

    return () => {
      window.removeEventListener('keydown', handleCloseModal);
    };
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeModal = () => {
    dispatch(setProductModalOpened(false));
  };

  const handleCloseModal = e => {
    if (
      (e.type === 'click' && e.target === e.currentTarget) ||
      (e.type === 'keydown' && e.key === 'Escape')
    ) {
      closeModal();
    }
  };

  return createPortal(
    <ModalStyled
      onClick={handleCloseModal}
      className={!modalOpened || !isMobile ? 'is-hidden' : ''}
    >
      <div className="modal">
        <div className="inner">
          <button type="buttn" className="close" onClick={closeModal}>
            <BackArrow className="return__icon" />
          </button>
          <div>
            <DiaryForm type="mobile" />
          </div>
        </div>
      </div>
    </ModalStyled>,
    modalRoot
  );
};

export default ModalAddProduct;
