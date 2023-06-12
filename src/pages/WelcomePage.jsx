import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {
  WelcomePageWrapper,
  Caption,
  Description,
  Buttons,
} from 'components/Styled/WelcomePage.styled.jsx';
import { ReactComponent as LogoMain } from 'components/images/logo/logo.svg';
import { ReactComponent as LogoDesc } from 'components/images/logo/logoDesc.svg';

const WelcomePage = () => {
  const location = useLocation();
  const isMobile = window.innerWidth <= 768;

  return (
    <WelcomePageWrapper>
      {isMobile ? <LogoMain /> : <LogoDesc />}
      <Caption>Welcome to the app!</Caption>
      <Description>
        This app offers more than just a collection of recipes - it is designed
        to be your very own digital cookbook. You can easily save and retrieve
        your own recipes at any time.
      </Description>
      <Buttons>
        <button>
          <Link to={`/register`} state={{ from: location }}>
            Registration
          </Link>
        </button>
        <button className="signin">
          <Link to={`/signin`} state={{ from: location }}>
            Sign in
          </Link>
        </button>
      </Buttons>
    </WelcomePageWrapper>
  );
};

export default WelcomePage;
