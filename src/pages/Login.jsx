import LoginForm from 'components/LoginForm/LoginForm';
import { Link } from 'react-router-dom';
import RegisterWrapper from 'components/Styled/Register.styled.jsx';

const Login = () => {
  return (
    <RegisterWrapper>
      <div className="wrapper">
        <LoginForm />
        <Link to={`/register`}>Registration</Link>
      </div>
    </RegisterWrapper>
  );
};

export default Login;
