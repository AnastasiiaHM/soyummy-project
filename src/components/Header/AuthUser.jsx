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
  const avatarRef = React.useRef();

  const user = useSelector(state => state.auth.user);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleModalClick = e => {
    e.stopPropagation();
  };

  const getModalStyle = () => {
    if (avatarRef.current) {
      const avatarRect = avatarRef.current.getBoundingClientRect();
      const avatarTop = avatarRect.bottom + window.scrollY;
      const avatarLeft = avatarRect.left + avatarRect.width / 2 + window.scrollX;
      return {
        position: 'fixed',
        top: avatarTop,
        left: avatarLeft,
        transform: 'translate(-50%, 0)',
        zIndex: 9999,
      };
    }
    return {};
  };

  return (
    <UserWrapper>
      <Avatar
        style={{ cursor: 'pointer' }}
        alt="User Avatar"
        src={user.avatar || user.avatarURL}
        onClick={handleOpenModal}
        ref={avatarRef}
      />
      <UserTextsName style={{ cursor: 'pointer' }} onClick={handleOpenModal}>
        {user.name || defaultUser.name}
      </UserTextsName>
      {isModalOpen && (
        <div id="basic-modal" style={getModalStyle()}>
          <BasicModal
            handleCloseModal={handleCloseModal}
            handleModalClick={handleModalClick}
            avatarRef={avatarRef}
          />
        </div>
      )}
    </UserWrapper>
  );
}