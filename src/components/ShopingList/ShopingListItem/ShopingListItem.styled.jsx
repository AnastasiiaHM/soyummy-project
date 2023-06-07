import styled from '@emotion/styled';

export const ItemWraper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border-bottom: 1px solid #e0e0e0;

  padding-bottom: 24px;

  @media (min-width: 768px) {
    padding-bottom: 43px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  @media (min-width: 768px) {
    gap: 16px;
  }
`;

export const ButtonContainer = styled.div`
  position: absolute;
  right: 19px;

  display: flex;
  flex-direction: row;
  gap: 46px;

  @media (min-width: 768px) and (max-width: 1439px) {
    right: 45px;

    gap: 110px;
  }

  @media (min-width: 1440px) {
    right: 28px;

    gap: 174px;
  }
`;

export const ProductImage = styled.img`
  height: 60px;

  background-color: #ebf3d4;
  border-radius: 6px;

  @media (min-width: 768px) {
    width: 93px;
    height: 97px;
  }
`;

export const ProductName = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;
  color: #3e4462;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const ProductWeight = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 600;
  font-size: 10px;
  color: #fafafa;

  width: 37px;
  height: 23px;

  background-color: #8baa36;
  border-radius: 4px;

  @media (min-width: 768px) {
    width: 68px;
    height: 35px;

    font-weight: 600;
    font-size: 18px;
  }
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 14px;
  height: 14px;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
