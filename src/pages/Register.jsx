import { Link } from 'react-router-dom';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import RegisterWrapper from 'components/Styled/Register.styled.jsx';

const Register = () => {
  return (
    <RegisterWrapper>
      <RegisterForm />
      <Link to={`/signin`}>Sign in</Link>
    </RegisterWrapper>
  );
};

export default Register;
