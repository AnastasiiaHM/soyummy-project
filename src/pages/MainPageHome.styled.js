
import styled from '@emotion/styled';


export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  min-height: 100%;
  padding-left: 16px;
  padding-right: 16px;

  @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
    width: ${props => props.theme.breakpoints[0]};
  }
  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    width: ${props => props.theme.breakpoints[1]};
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    width: ${props => props.theme.breakpoints[2]};
    padding-left: 100px;
    padding-right: 100px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 14px;
  font-weight: ${props => props.theme.fontWeights.regular};
  line-height: 1;
  color: ${props => props.theme.colors.black[200]};
  font-size: 60px;

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    text-align: left;
    margin-bottom: 24px;
    font-size: 72px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    margin-bottom: 8px;
    font-size: 100px;
  }
`;

export const TitleText = styled.span`
  color: ${props => props.theme.colors.green[200]};
`;

export const Text = styled.p`
  text-align: center;
  letter-spacing: -0.02em;
  margin-bottom: 364px;
  width: 266px;
  margin-left: auto;
  margin-right: auto;

  font-weight: ${props => props.theme.fontWeights.regular};
  color: ${props => props.theme.colors.black[200]};
  font-size: ${props => props.theme.fontSizes[2]};
  line-height: 1.29;

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    text-align: left;
    margin-bottom: 32px;
    padding-left: 6px;
    width: 364px;
    margin-right: 0px;
    margin-left: 0px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    font-size: ${props => props.theme.fontSizes[4]};
    line-height: 1.33;
    margin-bottom: 50px;
    width: 467px;
    padding-left: 7px;
  }
`;

export const TipBox = styled.div`
  position: absolute;
  top: 435px;
  right: 34px;
  display: flex;
  flex-direction: column;
  row-gap: 7px;
  min-height: 92px;
  padding: 8px 8px 8px 8px;
  width: 229px;
  background-color: ${props => props.theme.colors.white[100]};
  border-radius: 8px;

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    position: absolute;
    height: 100px;
    top: 372px;
    right: 32px;
    width: 268px;
    padding: 12px 12px 12px 12px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    padding: 16px 16px 16px 16px;
    width: 298px;
    top: 472px;
    right: 122px;
    height: 114px;
  }
`;

export const BoxText = styled.p`
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes[1]};
  line-height: 1.5;

  color: ${props => props.theme.colors.gray[500]};

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    font-size: ${props => props.theme.fontSizes[2]};
    line-height: 1.29;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    line-height: 1.43;
  }
`;

export const DecorBoxText = styled.span`
  color: ${props => props.theme.colors.green[200]};
`;


export const BoxLinkText = styled.p`
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: ${props => props.theme.fontSizes[0]};
  line-height: 120%;

  letter-spacing: 0.2px;
  color: inherit;
`;

export const DecorArrowIcon = () => {
    return (
        <svg
            width="14"
            height="12"
            fill="currentColor"
            viewBox="0 0 14 12"
            xmlns=""
        >
            <path
                d="M1 6H13M13 6L8.5 1.5M13 6L8.5 10.5"
                strokeWidth="1.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};