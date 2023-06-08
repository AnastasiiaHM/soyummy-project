import LoginForm from 'components/LoginForm/LoginForm';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <LoginForm />
      <Link to={`/register`}>Registration</Link>
    </div>
  );
};

export default Login;
