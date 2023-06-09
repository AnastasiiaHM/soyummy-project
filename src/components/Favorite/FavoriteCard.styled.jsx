import styled from '@emotion/styled';
import { BiTrash } from 'react-icons/bi';
import { mediaSizes } from '../constants/media';
import { colors } from 'components/colors';

export const ContainerCard = styled.div`
  background: ${colors.whiteColor};
  border-radius: 8px;
  display: flex;
  gap: 14px;
  padding: 14px 9px;
  width: 100%;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    display: flex;
    gap: 24px;
    padding: 28px 24px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    display: flex;
    gap: 40px;
    padding: 40px;
  }
`;

export const ImageContainer = styled.div`
  min-width: 124px;
  min-height: 124px;
  width: 124px;
  height: 124px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    min-width: 228px;
    min-height: 232px;
    height: 232px;
    width: 228px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    min-width: 318px;
    min-height: 324px;
    width: 318px;
    height: 324px;
  }
  & > img {
    border-radius: 8px;
    width: 100%;
    display: block;
    height: 100%;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardHeader = styled.div`
  & > p {
    font-size: 8px;
    line-height: 1.25;
    color: ${colors.blackFont};
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      font-size: 14px;
      line-height: 1.3;
    }

    @media screen and (min-width: ${mediaSizes.desktop}) {
      font-size: 18px;
      line-height: 1.33;
      -webkit-line-clamp: 8;
    }
  }
`;

export const DeleteBtn = styled.button`
  width: 24px;
  height: 24px;
  top: 14px;
  background: ${colors.imageBC};
  border-radius: 4px;
  border: 0;
  cursor: pointer;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 38px;
    height: 38px;
    top: 28px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    width: 44px;
    height: 44px;
    top: 40px;
  }
`;

export const DeleteIcon = styled(BiTrash)`
  width: 14px;
  height: 14px;
  color: ${colors.darkButton};

  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 22px;
    height: 22px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    width: 24px;
    height: 24px;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;

  & > p {
    font-weight: 500;
    font-size: 10px;
    line-height: 1.4;
    letter-spacing: -0.24px;
    color: ${colors.recipeCardText};

    @media screen and (min-width: ${mediaSizes.tablet}) {
      font-size: 14px;
    }
  }
`;

export const CardTitle = styled.h3`
  margin-bottom: 4px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.24px;
  color: ${colors.recipeCardText};

  @media screen and (min-width: ${mediaSizes.tablet}) {
    margin-bottom: 18px;
    font-size: 24px;
    line-height: 1;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    margin-bottom: 30px;
  }
`;

export const PrimaryBtn = styled.button`
  background-color: ${colors.darkButton};
  border-radius: 24px 44px;
  border: 0;
  width: 87px;
  height: 27px;
  font-size: 10px;
  line-height: 1.5;
  color: ${colors.textGreenBtn};
  cursor: pointer;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 138px;
    height: 45px;
    font-size: 14px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    width: 160px;
    height: 54px;
    font-size: 16px;
  }

  &:hover,
  &:focus {
    background-color: ${colors.greenButton};
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-grow: 1;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    gap: 76px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    gap: 79px;
  }
`;
