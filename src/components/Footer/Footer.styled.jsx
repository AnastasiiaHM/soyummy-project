import styled from '@emotion/styled';
import { mediaSizes } from '../constants/media';
// import { container } from 'helpers';
// import { colors } from 'constants/colors';
import { AiOutlineMail } from 'react-icons/ai';

export const FooterWrapper = styled.div`
  display: flex;
  padding: 64px 100px 50px 100px;
  /* width: 100%; */
  /* margin: 0;
  padding: 0; */
`;

export const WrapperName = styled.div`
  display: flex;
  margin-bottom: 32px;
  @media screen and (min-width: ${mediaSizes.tablet}) {
    margin-bottom: 24spx;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    margin-bottom: 48px;
  }
`;

export const TextName = styled.p`
  font-style: normal;
  font-weight: 700;

  /* identical to box height, or 100% */
  font-size: 18px;
  line-height: 1;
  letter-spacing: 0.015em;

  color: #fafafa;
  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 28px;
    line-height: 1;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    font-size: 28px;
    line-height: 1;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 133% */

  letter-spacing: -0.02em;

  color: #fafafa;
  /* font-family: 'Poppins'; */
  @media screen and (min-width: ${mediaSizes.tablet}) {
    line-height: 1.3;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    line-height: 1;
  }
`;

export const FooterMain = styled.div`
  background: #22252a;
  width: 1440px;
`;

export const ListTextInf = styled.ul`
  display: none;
  width: 418px;
  list-style-type: disc;
  color: #fafafa;
  @media screen and (min-width: ${mediaSizes.tablet}) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

export const WrapperFirstList = styled.div`
  @media screen and (min-width: ${mediaSizes.tablet}) {
    margin-right: 175px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    margin-right: 159px;
  }
`;

export const ListRouts = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  margin-bottom: 32px;
  @media screen and (min-width: ${mediaSizes.tablet}) {
    gap: 20px;
    margin-bottom: 0px;
    align-items: flex-start;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    gap: 24px;
    margin-bottom: 95px;
    align-items: flex-start;
  }
`;

export const TextRous = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.3;
  /* identical to box height, or 129% */

  letter-spacing: -0.02em;

  color: #fafafa;
`;

export const ListNetWork = styled.ul`
  display: flex;
  gap: 16px;
  @media screen and (min-width: ${mediaSizes.tablet}) {
    gap: 18px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    gap: 18px;
  }
`;

export const WrapperRouters = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: ${mediaSizes.desktop}) {
    margin-right: 214px;
  }
`;

export const TextSubSlet = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  /* identical to box height */

  color: #fafafa;
  display: none;
  margin-bottom: 14px;
  @media screen and (min-width: ${mediaSizes.desktop}) {
    display: flex;
  }
`;

export const TextOffers = styled.p`
  display: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.3;
  /* or 129% */

  letter-spacing: -0.02em;

  color: #fafafa;
  width: 310px;
  margin-bottom: 28px;
  @media screen and (min-width: ${mediaSizes.desktop}) {
    display: flex;
  }
`;
export const TextBtn = styled.p`
  color: #fafafa;
  display: flex;
  font-family: 'Poppins';
  align-items: center;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.1;
  padding: 14px 84px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    padding: 18px 143px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    padding: 18px 143px;
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
  width: 204px;
  /* padding: 14px 18px; */

  height: 38px;
  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 187px;
    /* padding: 21px 39px; */
    height: 50px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    width: 339px;
    /* padding: 21px 39px; */
    height: 60px;
  }
`;

export const MailInp = styled(AiOutlineMail)`
  width: 16px;
  height: 12px;
  position: absolute;
  left: 18px;
  top: 15px;
  fill: #fafafa;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    top: 16px;
    width: 20px;
    height: 16px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    top: 22px;
    width: 20px;
    height: 16px;
  }
`;
export const InputMod = styled.input`
  border: 1px solid #c4c4c4;
  border-radius: 6px;
  padding: 10px 42px;
  width: 204px;
  height: 38px;
  background: transparent;
  margin-bottom: 8px;
  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 259px;
    height: 50px;
    margin-bottom: 0;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    padding: 18px 71px 18px 51px;
    width: 339px;
    height: 59px;
    margin-bottom: 16px;
  }
  &:focus {
    outline: none;
  }
  &::placeholder {
    /* font-family: 'Poppins'; */

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 1.5;
    /* identical to box height */

    letter-spacing: -0.02em;

    color: #fafafa;
    @media screen and (min-width: ${mediaSizes.tablet}) {
      font-size: 18px;
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
      font-size: 18px;
    }
  }
`;

export const WrapperInp = styled.div`
  position: relative;
`;

export const WrapperLastFooter = styled.div`
  width: 339px;
`;
