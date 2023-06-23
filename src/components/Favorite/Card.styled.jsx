import styled from '@emotion/styled';
import { BiTrash } from 'react-icons/bi';
import { mediaSizes } from '../constants/media';
import { Skeleton } from '@mui/material';


export const ContainerCard = styled.div`
  background: ${props => props.theme.recipesBackgroundCard};
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

const ImageContainerPattern = element => styled(element)`
  border-radius: 8px;
  overflow: hidden;
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
    width: 100%;
    display: block;
    height: 100%;
  }
`;

export const ImageContainer = ImageContainerPattern('div');
export const ImagePlaceholder = ImageContainerPattern(Skeleton);

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const CardHeader = styled.div`
  flex-grow: 1;
`;

const CardDescriptionPattern = element => styled(element)`
  font-size: 8px;
  line-height: 1.25;
  color: ${props => props.theme.descriptionCard};
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
`;

export const CardDescription = CardDescriptionPattern('p');
export const CardDescriptionPlaceholder = CardDescriptionPattern(Skeleton);

const DeleteButtonPattern = element => styled(element)`
  width: 24px;
  height: 24px;
  background: ${props => props.theme.deleteBackgroundBtn};
  border-radius: 4px;
  border: 0;
  cursor: pointer;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 38px;
    height: 38px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    width: 44px;
    height: 44px;
  }
`;

export const DeleteButton = DeleteButtonPattern('button');
export const DeleteButtonPlaceholder = DeleteButtonPattern(Skeleton);

export const DeleteIcon = styled(BiTrash)`
  width: 14px;
  height: 14px;
  color: ${props => props.theme.textPrimaryDark};

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
`;

const CookingTimePattern = element => styled(element)`
  font-weight: 500;
  font-size: 10px;
  line-height: 1.4;
  letter-spacing: -0.24px;
  color: ${props => props.theme.textPrimaryDark};

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 14px;
  }
`;

export const CookingTime = CookingTimePattern('p');
export const CookingTimePlaceholder = CookingTimePattern(Skeleton);

const CardTitlePattern = element => styled(element)`
  margin-bottom: 4px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.24px;
  display: inline-block;
  width: 100%;
 color: ${props => props.theme.textPrimaryDark};

  @media screen and (min-width: ${mediaSizes.tablet}) {
    margin-bottom: 18px;
    font-size: 24px;
    line-height: 1;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    margin-bottom: 30px;
  }
`;

export const CardTitle = CardTitlePattern('h3');
export const CardTitlePlaceholder = CardTitlePattern(Skeleton);

const PrimaryButtonPattern = element => styled(element)`
  border-radius: 24px 44px;
  border: 0;
  width: 87px;
  height: 27px;
  font-size: 10px;
  line-height: 1.5;
  color: ${props => props.theme.constWhiteColor};

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
`;

export const PrimaryButton = styled(PrimaryButtonPattern('button'))`
  background-color: ${props => props.theme.darkButtonBackground};
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.greenButtonBackground};
  }
`;
export const PrimaryButtonPlaceholder = PrimaryButtonPattern(Skeleton);

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
