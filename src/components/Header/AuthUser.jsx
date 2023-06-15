import * as React from 'react';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import { UserWrapper, UserTextsName } from './Header.styled';
import BasicModal from '../UserProfile/UserChoose';

const defaultUser = {
  name: 'Name',
};

export function UserComponent() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  
  const user = useSelector((state) => state.auth.user);

  const userChanges = useSelector((state) => state.user.user);

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
      <Avatar alt="User Avatar" src={user.avatar || user.avatarURL} onClick={handleOpenModal} />
      <UserTextsName>{user.name || defaultUser.name}</UserTextsName>
      {isModalOpen && (
        <BasicModal 
          handleCloseModal={handleCloseModal}
          handleModalClick={handleModalClick}>
        </BasicModal>
      )}
    </UserWrapper>
  );
}