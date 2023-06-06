import styled from '@emotion/styled';
import { BsFillEyeFill } from 'react-icons/bs';
import { BsFillEyeSlashFill } from 'react-icons/bs';

export const ShowPasswordButton = styled.button`
  position: absolute;
  top: 19px;
  right: 5px;
  border: none;
  background-color: transparent;
  padding: 5px;
  cursor: pointer;
`;

export const ShowIcon = styled(BsFillEyeFill)`
  width: 18px;
  fill: rgba(0, 0, 0, 1);
`;

export const HideIcon = styled(BsFillEyeSlashFill)`
  width: 18px;
  fill: rgba(0, 0, 0, 0.3);
`;
