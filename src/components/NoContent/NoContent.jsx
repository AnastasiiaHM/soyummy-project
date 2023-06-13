import {
  Container,
  StyledText,
  StyledSpan,
  StyledImage,
} from './NoContent.styled';

export const NoContent = () => {
  return (
    <Container>
      <StyledImage />
      <StyledSpan>We are sorry,</StyledSpan>
      <StyledText>
        but the page you were looking for can’t be found..
      </StyledText>
    </Container>
  );
};
