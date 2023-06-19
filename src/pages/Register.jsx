import { Link } from 'react-router-dom';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import RegisterWrapper from 'components/Styled/Register.styled.jsx';
import { Motivation } from 'components/motivation/Motivation';
import { useSelector } from 'react-redux';

const Register = () => {
  const isOpen=useSelector(state=>state.auth.isOpen)
  return (
    <RegisterWrapper>
      {isOpen&&<Motivation/>}
      <div className="wrapper">
        <RegisterForm />
        <Link to={`/signin`}>Sign in</Link>
      </div>
    </RegisterWrapper>
  );
};

export default Register;
