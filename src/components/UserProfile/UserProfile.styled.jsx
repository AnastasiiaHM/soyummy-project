import styled from '@emotion/styled';
import { mediaSizes } from '../constants/media';
import { BiUser, BiPencil } from 'react-icons/bi';
import { colors } from '../colors';

export const BtnClose = styled.button`
  background-color: transparent;
  border: none;
  margin: 0;
  position: absolute;
  top: 18px;
  right: 18px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  @media screen and (min-width: ${mediaSizes.tablet}) {
    top: 24px;
    right: 24px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    top: 24px;
    right: 24px;
  }
`;

export const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormModal = styled.form`
  align-items: center;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  @media screen and (min-width: ${mediaSizes.tablet}) {
    margin-bottom: 32px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    margin-bottom: 32px;
  }
`;

export const WrapperInp = styled.div`
  position: relative;
`;

export const InputMod = styled.input`
  border: 1px solid #c4c4c4;
  border-radius: 6px;
  padding-top: 16px;
  padding-left: 51px;
  padding-bottom: 16px;
  width: 282px;
  height: 48px;
  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 400px;
    height: 58px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    width: 400px;
    height: 49px;
  }
  &:focus {
    outline: none;
  }
  &::placeholder {
    /* font-family: 'Poppins'; */
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    color: #23262a;
    letter-spacing: -0.02em;
    @media screen and (min-width: ${mediaSizes.tablet}) {
      font-size: 18px;
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
      font-size: 18px;
    }
  }
`;

export const IconUser = styled.div`
  width: 88px;
  height: 88px;
  background-color: #d9d9d9;
  border-radius: 50%;
  margin: auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 54px;
  margin-top: 22px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    margin-bottom: 50px;
    margin-top: 40px;
    width: 103px;
    height: 103px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    margin-bottom: 52px;
    width: 103px;
    height: 103px;
  }
`;

export const WrapperMain = styled.div`
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${mediaSizes.tablet}) {
    padding: 50px 40px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    padding: 60px 50px;
  }
`;

export const UserBtn = styled.button`
  background: #8baa36;
  border: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  right: 10px;
  position: absolute;
  margin-top: 70px;
  margin-left: 51px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    margin-top: 81px;
    margin-left: 61px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    margin-top: 81px;
    margin-left: 61px;
  }
`;

export const BtnSave = styled.button`
  background: #8baa36;
  border: none;
  border-radius: 6px;
  width: 282px;
  height: 49px;

  padding: 14px 84px;
  margin: 0;
  cursor: pointer;
  margin-bottom: 60px;
  text-align: center;

  color: #fafafa;
  font-family: 'Poppins';
  align-items: center;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.1;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 400px;
    height: 59px;
    padding: 18px 143px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    width: 400px;
    height: 59px;
    padding: 18px 143px;
  }
`;

export const InputPen = styled(BiPencil)`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 12px;
  right: 18px;
  fill: #23262a;
  cursor: pointer;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    top: 16px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    top: 16px;
  }
`;

export const UserIconInp = styled(BiUser)`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 18px;
  top: 12px;
  fill: #23262a;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    top: 16px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    top: 16px;
  }
`;

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

export const BtnLogOut = styled.button`
    width: 137px;
    height: 49px;
    background: ${colors.greenButton};
    border: none;
    border-radius: 6px;

    padding: 0;
    margin: 0;
    cursor: pointer;
    @media screen and (min-width: ${mediaSizes.tablet}) {
      width: 192px;
      height: 59px;
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
      width: 192px;
      height: 59px;
    }
`;

export const BtnCancel = styled.button`
  width: 137px;
  height: 49px;
  background: ${colors.greyButton};
  border: none;
  border-radius: 6px;

  padding: 0;
  margin: 0;
  cursor: pointer;
  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 192px;
    height: 59px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    width: 192px;
    height: 59px;
  }
`;

export const TextForBtn = styled.p`
  color: ${colors.textGreenBtn};
  font-family: 'Poppins';
  align-items: center;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.1;
`;

export const TextForCancel = styled.p`
  color: ${colors.blackFont};
  font-family: 'Poppins';
  align-items: center;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.1;
`;

export const MainText = styled.p`
  color: ${colors.blackFont};
  font-family: 'Poppins';
  align-items: center;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
`;