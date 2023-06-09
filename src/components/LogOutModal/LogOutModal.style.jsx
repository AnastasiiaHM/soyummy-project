import styled from '@emotion/styled';
import { mediaSizes } from '../constants/media';

export const BackdropModal = styled.div`
  z-index: 10000;
  width: 100%;
  height: 100%;
  opacity: 1;
  background: rgba(0, 0, 0, 0.3);
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0.2s,
    visibility 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalHeader = styled.div`
  height: 179px;
  background: #fafafa;
  position: relative;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  width: 330px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 480px;
    height: 215px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    width: 500px;
    height: 215px;
  }
`;

export const BtnClose = styled.button`
  background-color: transparent;
  border: none;
  margin: 0;
  position: absolute;

  margin: 0;
  padding: 0;
  cursor: pointer;
  top: 18px;
  right: 18px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    top: 24px;
    right: 24px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    top: 24px;
    right: 24px;
  }
`;

export const TextLogOut = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  line-height: 1.3;
  /* identical to box height, or 133% */

  text-align: center;
  letter-spacing: -0.02em;

  color: #23262a;
  margin-bottom: 24px;
  font-size: 14px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 18px;
    margin-bottom: 32px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    font-size: 18px;
    margin-bottom: 32px;
  }
`;

export const WrapperMain = styled.div`
  padding: 44px 24px;
  @media screen and (min-width: ${mediaSizes.tablet}) {
    padding: 50px 40px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    padding: 50px;
  }
`;

export const BtnCancel = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 18px;

  border: none;
  background: #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  width: 137px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 192px;
    padding: 21px 39px;
    gap: 16px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    width: 192px;
    padding: 21px 39px;
  }
`;

export const BtnLogOut = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: #8baa36;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  width: 137px;
  padding: 14px 18px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 192px;
    padding: 21px 39px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    width: 192px;
    padding: 21px 39px;
  }
`;

export const WrapperBtns = styled.div`
  display: flex;
  gap: 8px;
  @media screen and (min-width: ${mediaSizes.tablet}) {
    gap: 16px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    gap: 16px;
  }
`;

export const TextBtnLogOut = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-size: 14px;
  line-height: 1.1;

  display: flex;
  align-items: center;
  text-align: center;

  color: #fafafa;
  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 16px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    font-size: 16px;
  }
`;

export const TextBtnCancel = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-size: 14px;
  line-height: 1.1;
  /* or 112% */

  display: flex;
  align-items: center;
  text-align: center;

  color: #23262a;
  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 16px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    font-size: 16px;
  }
`;
