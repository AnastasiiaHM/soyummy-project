import { Link } from 'react-router-dom';
import RegisterForm from 'components/RegisterForm/RegisterForm';

const Register = () => {
  return (
    <div>
      <RegisterForm />
      <Link to={`/signin`}>Sign in</Link>
    </div>
  );
};

export default Register;
