import { Background } from 'components/Background/Background';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/user/selectors';

const Register = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <RegisterForm />
      {!isLoggedIn && <Background />}
    </>
  );
};

export default Register;
