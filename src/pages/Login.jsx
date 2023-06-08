import LoginForm from 'components/LoginForm/LoginForm';
import { Link } from 'react-router-dom';
import RegisterWrapper from 'components/Styled/Register.styled.jsx';

const Login = () => {
  return (
    <RegisterWrapper>
      <img src="../../components/" alt="" />
      <LoginForm />
      <Link to={`/register`}>Registration</Link>
    </RegisterWrapper>
  );
};

export default Login;
