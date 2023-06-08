import styled from '@emotion/styled';
// import { mediaSizes } from 'constants/media';
// import { container } from 'helpers';

export const RegisterFormStyled = styled.div`
  padding: 44px 50px;
  background-color: #2a2c36;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 30px;

  width: 500px;
  margin-bottom: 18px;
`;

export const Caption = styled.p`
  font-weight: 600;
  font-size: 28px;
  line-height: 30px;
  letter-spacing: -0.02em;
  color: #fafafa;
  margin-bottom: 32px;
`;

export const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 50px;
`;

export const InputWraper = styled.div`
  width: 100%;
    position: relative;

    & svg {
        position: absolute;
        top: 15px;
        left: 18px;
    }
    

  & input {
    border: 1px solid rgba(250, 250, 250, 0.2);
    border-radius: 6px;
    width: 100%;
    height: 100%;
    background-color: transparent;
    padding: 16px 50px;
    color: #FAFAFA;
    opacity: 0.8;

    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: -0.02em;
    
    // opacity: 0.8;

    &::placeholder {
        font-weight: 400;
        color: #FAFAFA;
        opacity: 0.8;
    }


//     &:focus {
//       outline: none;
//     }

//     &:focus + label {
//       color: #dddddd;
//     }

//     &:not(:placeholder-shown) + label {
//       transform: translateY(-22px);
//       font-size: 12px;
//       font-weight: 100;
//     }
//   }

`;
