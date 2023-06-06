import {
  ShowPasswordButton,
  ShowIcon,
  HideIcon,
} from './ShowPassword.styled.jsx';

const ShowPassword = ({ isShown, clickHandler }) => {
  return (
    <ShowPasswordButton type="button" onClick={clickHandler}>
      {isShown ? <ShowIcon /> : <HideIcon />}
    </ShowPasswordButton>
  );
};

export default ShowPassword;
