import { CalculatorEl } from 'components/Calculator/Calculator';
import Sidebar from 'components/Sidebar/Sidebar';
import { CalculatorStyled } from 'components/Styled/CalculatorPage.styled';

const Calculator = () => {
  return (
    <CalculatorStyled>
      <CalculatorEl />
      <Sidebar />
    </CalculatorStyled>
  );
};

export default Calculator;
