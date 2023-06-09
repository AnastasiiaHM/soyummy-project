import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { UserWrapper, UserTextsName } from './Header.styled';
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
} from '../UserProfile/UserProfile.styled';
import { BiUser, BiPlus } from 'react-icons/bi';

export function UserComponent() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <UserWrapper>
      <Avatar alt="User Avatar" onClick={handleOpenModal} />
      <UserTextsName>Name</UserTextsName>
      {isModalOpen && (
        <BackdropModal onClick={handleCloseModal}>
          <ModalHeader onClick={handleModalClick}>
            <BtnClose onClick={handleCloseModal}>
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
      )}
    </UserWrapper>
  );
}