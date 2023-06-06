import { CalculatorEl } from 'components/Calculator/Calculator';
import Sidebar from 'components/Sidebar/Sidebar';
import { Background } from 'components/Background/Background';
import { HomeStyled } from 'components/Styled/HomePage.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/user/selectors';

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <HomeStyled isLoggedIn={isLoggedIn}>
        <CalculatorEl />
        {isLoggedIn && <Sidebar />}
        {!isLoggedIn && <Background />}
      </HomeStyled>
    </>
  );
};

export default Home;
