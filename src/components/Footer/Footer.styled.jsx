import styled from '@emotion/styled';
import { mediaSizes } from '../constants/media';
import { AiOutlineMail } from 'react-icons/ai';
import spinach from 'components/images/spinach/footer.png';
import { NavLink } from 'react-router-dom';
import { colors } from '../colors';
import { BsFacebook, BsInstagram, BsYoutube, BsTwitter } from 'react-icons/bs';

export const FooterWrapper = styled.div`
  background: ${colors.darkButton};
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-block: 28px 21px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: baseline;

    padding-block: 50px 26px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    display: flex;
    flex-direction: row;
    align-items: baseline;
  }
`;

export const WrapperName = styled.div`
  display: flex;
  align-items: center;
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

  color: ${colors.textGreenBtn};
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

  color: ${colors.textGreenBtn};
  /* font-family: 'Poppins'; */
  @media screen and (min-width: ${mediaSizes.tablet}) {
    line-height: 1.3;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    line-height: 1;
  }
`;

export const FooterMain = styled.footer`
  width: 100%;

  & .light-footer {
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 14px;

    background-image: url(${spinach});
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: auto 300%;

    padding-block: 28px;

    font-size: 10px;
    line-height: 10px;
    letter-spacing: -0.01em;
    color: ${colors.darkButton};
    opacity: 0.5;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      font-size: 14px;
      line-height: 14px;
      gap: 28px;
      padding-block: 32px;
    }

    @media screen and (min-width: ${mediaSizes.desktop}) {
      gap: 40px;
      padding-block: 50px;
    }
  }

  & .light-year {
    font-weight: 500;
  }

  & .light-text {
    font-weight: 400;
  }
`;

export const ListTextInf = styled.ul`
  display: none;
  width: 418px;
  list-style-type: disc;
  color: ${colors.textGreenBtn};

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

export const TextRous = styled(NavLink)`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.3;
  /* identical to box height, or 129% */

  letter-spacing: -0.02em;

  color: ${colors.textGreenBtn};
`;

export const SocialMediaFace = styled(BsFacebook)`
  fill: ${colors.greenButton};
  width: '20px';
  height: '20px';
  &:hover {
    fill: ${colors.whiteColor};
  }
`;
export const SocialMediaInst = styled(BsInstagram)`
  fill: ${colors.greenButton};
  width: '20px';
  height: '20px';
  &:hover {
    fill: ${colors.whiteColor};
  }
`;
export const SocialMediaYout = styled(BsYoutube)`
  fill: ${colors.greenButton};
  width: '20px';
  height: '20px';
  &:hover {
    fill: ${colors.whiteColor};
  }
`;

export const SocialMediaTwit = styled(BsTwitter)`
  fill: ${colors.greenButton};
  width: '20px';
  height: '20px';
  &:hover {
    fill: ${colors.whiteColor};
  }
`;

export const ListNetWork = styled.ul`
  display: none;
  /* display: flex; */
  gap: 16px;
  @media screen and (min-width: ${mediaSizes.tablet}) {
    display: none;
    gap: 18px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    gap: 18px;
    display: flex;
  }
`;

export const ListNetWorkLast = styled.ul`
  display: flex;
  /* display: flex; */
  gap: 16px;
  @media screen and (min-width: ${mediaSizes.tablet}) {
    display: flex;
    gap: 18px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    gap: 18px;
    display: none;
  }
`;

export const WrapperRouters = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0px;
  margin-bottom: 32px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    margin-bottom: 72px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    margin-right: 190px;
    margin-bottom: 0px;
  }
`;

export const TextSubSlet = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  /* identical to box height */

  color: ${colors.textGreenBtn};
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

  color: ${colors.textGreenBtn};
  width: 310px;
  margin-bottom: 28px;
  @media screen and (min-width: ${mediaSizes.desktop}) {
    display: flex;
  }
`;
export const TextBtn = styled.p`
  color: ${colors.textGreenBtn};
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

  background: ${colors.greenButton};
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
  &:hover {
    background-color: transparent;
    border: 1px solid ${colors.textGreenBtn};
  }
`;

export const MailInp = styled(AiOutlineMail)`
  width: 16px;
  height: 12px;
  position: absolute;
  left: 18px;
  top: 15px;
  fill: ${colors.textGreenBtn};

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
  margin-right: 0px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 259px;
    height: 50px;
    margin-bottom: 0;
    margin-right: 12px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    padding: 18px 71px 18px 51px;
    width: 339px;
    height: 59px;
    margin-bottom: 16px;
    margin-right: 0px;
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

    color: ${colors.textGreenBtn};
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
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 100vw;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    align-items: flex-start;
    padding: 0;
    width: 338px;
  }
`;
export const WrapperInpBtn = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 44px;
  @media screen and (min-width: ${mediaSizes.tablet}) {
    flex-direction: row;
    margin-bottom: 38px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    flex-direction: column;
    margin-bottom: 0px;
  }
`;
