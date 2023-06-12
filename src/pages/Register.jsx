import { Link } from 'react-router-dom';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import RegisterWrapper from 'components/Styled/Register.styled.jsx';

const Register = () => {
  return (
    <RegisterWrapper>
      <div className="wrapper">
        <RegisterForm />
        <Link to={`/signin`}>Sign in</Link>
      </div>
    </RegisterWrapper>
  );
};

export default Register;
