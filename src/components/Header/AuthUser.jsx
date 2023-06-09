import * as React from 'react';
import Avatar from '@mui/material/Avatar';
//import Modal from '@mui/material/Modal';
//import Button from '@mui/material/Button';
import { UserWrapper, UserTextsName } from './Header.styled';
//import UserProf from 'components/UserProfile/UserProfile';

export function UserComponent() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <UserWrapper>
      <Avatar alt="User Avatar" onClick={handleOpenModal} />
      <UserTextsName>Name</UserTextsName>
      {/* <UserProf open={isModalOpen} onClose={handleCloseModal}/> */}
    </UserWrapper>
  );
}