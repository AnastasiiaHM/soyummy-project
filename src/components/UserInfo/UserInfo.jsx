import { Div, Span, Button, Wrapper, BackButton } from './UserInfo.styled';
import { ReactComponent as BackArrow } from 'images/backarrow.svg';
import { selectIsLoggedIn, selectUser } from 'redux/user/selectors';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/user/operations';
import { selectModalOpened } from 'redux/selectors';
import { setModalOpened } from 'redux/modalOpenedSlice';
import { selectAddProductModalOpened } from 'redux/ModalAddProductOpened/selectors';
import { setProductModalOpened } from 'redux/ModalAddProductOpened/slice';

const UserInfo = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const modalOpened = useSelector(selectModalOpened);
  const addProductModalOpened = useSelector(selectAddProductModalOpened);
  const user = useSelector(selectUser);
  const userName = user.username;
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(logOut());
  };

  const closeModal = () => {
    dispatch(setModalOpened(false));
    dispatch(setProductModalOpened(false));
  };

  return (
    isLoggedIn && (
      <Div>
        {(modalOpened || addProductModalOpened) && (
          <BackButton onClick={closeModal}>
            <BackArrow width="12" height="7" />
          </BackButton>
        )}
        <Wrapper>
          <Span>{userName}</Span>
          <Button onClick={clickHandler}>Exit</Button>
        </Wrapper>
      </Div>
    )
  );
};

export default UserInfo;
