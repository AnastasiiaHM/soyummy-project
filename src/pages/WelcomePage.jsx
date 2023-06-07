import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {
  WelcomePageWrapper,
  Caption,
  Description,
  Buttons,
} from './WelcomePage.styled.jsx';

const WelcomePage = () => {
  const location = useLocation();
  return (
    <WelcomePageWrapper>
      <svg class="/" width="/" height="/">
        <use href="/"></use>
      </svg>
      <Caption>Welcome to the app!</Caption>
      <Description>
        This app offers more than just a collection of recipes - it is designed
        to be your very own digital cookbook. You can easily save and retrieve
        your own recipes at any time.
      </Description>
      <Buttons>
        <button className="btn categorybtn">
          <Link to={`/register`} state={{ from: location }}>
            Registration
          </Link>
        </button>
        <button className="btn blackbtn">
          <Link to={`/signin`} state={{ from: location }}>
            Sign in
          </Link>
        </button>
      </Buttons>
    </WelcomePageWrapper>
  );
};

export default WelcomePage;
