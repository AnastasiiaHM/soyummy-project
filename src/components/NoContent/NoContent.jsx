import { Container, StyledText, StyledSpan } from './NoContent.styled';
// import { mediaSizes } from 'components/constants';
import { ReactComponent as Image } from '../images/not-found/notFound2x-mobile.svg';

export const NoContent = () => {
  return (
    <Container>
      <Image />
      <StyledSpan>We are sorry,</StyledSpan>
      <StyledText>
        but the page you were looking for can’t be found..
      </StyledText>
    </Container>
  );
};
