import * as React from 'react';
import { GoX } from 'react-icons/go';
import {
  BtnClose,
  ModalHeader,
  FormModal,
  WrapperInp,
  InputMod,
  IconUser,
  WrapperMain,
  UserBtn,
  BtnSave,
  TextBtn,
  BackdropModal,
  UserIconInp,
  InputPen,
} from './UserProfile.styled';
import { BiUser, BiPlus } from 'react-icons/bi';

const UserProf = ({ handleCloseModalProfile, handleModalClickProfile }) => {
  
  return (
    <BackdropModal onClick={handleCloseModalProfile}>
      <ModalHeader onClick={handleModalClickProfile}>
        <BtnClose onClick={handleCloseModalProfile}>
          <GoX style={{ width: '24px', height: '24px' }} />
        </BtnClose>
        <WrapperMain>
          <IconUser>
            <BiUser
              style={{
                width: '47px',
                height: '47px',
                fill: '#C4C4C4',
              }}
            />
            <UserBtn>
              <BiPlus
                style={{
                  fill: '#FAFAFA',
                  display: 'flex',
                  position: 'absolute',
                }}
              />
            </UserBtn>
          </IconUser>
          <FormModal>
            <WrapperInp>
              <UserIconInp />
              <InputPen />
              <InputMod type="text" placeholder="Your name" />
            </WrapperInp>
          </FormModal>
          <BtnSave>
            <TextBtn>Save changes</TextBtn>
          </BtnSave>
        </WrapperMain>
      </ModalHeader>
    </BackdropModal>
  );
};

export default UserProf;