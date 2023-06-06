import {
  LoaderContainer,
  LoaderSmallStyled,
  LoaderStyled,
  StrawberryImg,
  StyledTriangle,
} from './Loader.styled';
import Strawberry from '../../images/strawberry.png';

export const Loader = () => {
  return (
    <LoaderStyled>
      <LoaderContainer>
        <StyledTriangle
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="triangle-loading"
          visible={true}
        />

        <StrawberryImg src={Strawberry} alt="Strawberry" />
      </LoaderContainer>
    </LoaderStyled>
  );
};

export const LoaderSmall = ({ name }) => {
  return <LoaderSmallStyled className={name} />;
};
