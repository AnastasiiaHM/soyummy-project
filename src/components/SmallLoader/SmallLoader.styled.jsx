import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

export const DNAAnimation = styled.div`
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  user-select: none;
  pointer-events: none;
`;

export const wave = keyframes`
  0% {
    top: 0;
  }
  50% {
    top: 20px;
  }
  100% {
    top: 0;
  }
`;

export const Circle = styled.div`
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.constWhiteColor};
  color: ${props => props.theme.constDarkColor};
  animation: ${wave} 1s infinite;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  position: relative;
`;

export const Circle1 = styled(Circle)`
  color: ${props => props.theme.constantGreenColor};
  animation-delay: 0.1s;
`;

export const Circle2 = styled(Circle)`
  color: ${props => props.theme.constantGreenColor};
  animation-delay: 0.2s;
`;

export const Circle3 = styled(Circle)`
  animation-delay: 0.3s;
`;

export const Circle4 = styled(Circle)`
  animation-delay: 0.4s;
`;

export const Circle5 = styled(Circle)`
  animation-delay: 0.5s;
`;

export const Circle6 = styled(Circle)`
  animation-delay: 0.6s;
`;

export const Circle7 = styled(Circle)`
  animation-delay: 0.7s;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
`;
