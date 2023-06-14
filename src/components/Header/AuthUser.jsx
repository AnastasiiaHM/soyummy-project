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

  const user = useSelector((state) => state.auth.user || defaultUser);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  if (!user) {
    return null; 
  }
  

  return (
    <UserWrapper>
      <Avatar alt="User Avatar" src={user.avatarURL} onClick={handleOpenModal} />
      {user.name ? (
        <UserTextsName>{user.name}</UserTextsName>
      ) : (
        <UserTextsName>{defaultUser.name}</UserTextsName>
      )}
      {isModalOpen && (
        <BasicModal 
          handleCloseModal={handleCloseModal}
          handleModalClick={handleModalClick}>
        </BasicModal>
      )}
    </UserWrapper>
  );
}