import LoginForm from 'components/LoginForm/LoginForm';
import { Link } from 'react-router-dom';
import RegisterWrapper from 'components/Styled/Register.styled.jsx';
import { useSelector } from 'react-redux';
import { Motivation } from 'components/motivation/Motivation';

const Login = () => {
  const isOpen = useSelector(state => state.auth.isOpen);
  return (
    <RegisterWrapper>
      {isOpen && <Motivation />}
      <div className="wrapper">
        <LoginForm />
        <Link to={`/register`}>Registration</Link>
      </div>
    </RegisterWrapper>
  );
};

export default Login;
