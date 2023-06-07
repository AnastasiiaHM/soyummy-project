import styled from '@emotion/styled';

export const ItemWraper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 24px;
  /* margin-right: 19px; */
  margin-top: 32px;
  border-bottom: 1px solid #e0e0e0;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  right: 19px;
  display: flex;
  flex-direction: row;
  gap: 46px;
`;

export const ProductImage = styled.img`
  background-color: #ebf3d4;
  border-radius: 6px;
`;

export const ProductName = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;
  color: #3e4462;
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
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
`;
