import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { UserWrapper, UserTextsName } from './Header.styled';
import BasicModal from '../UserProfile/UserChoose';

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
        <BasicModal 
          handleCloseModal={handleCloseModal}
          handleModalClick={handleModalClick}>
        </BasicModal>
      )}
    </UserWrapper>
  );
}