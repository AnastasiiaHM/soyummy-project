import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import { colors } from '../colors';
import UserProf from './UserProfile';
import LogoutModal from './UserLogout';

const style = {
  width: 177,
  bgcolor: `${colors.textGreenBtn}`,
  borderRadius: '8px',
  boxShadow: 24,
  p: 1.8,
};

const styleFont = { 
    fontWeight: 500, 
    fontSize: 14,  
    marginRight: 5.3,
    marginBottom: 3.2,
    color: `${colors.blackFont}`,
  '&:hover': {
    cursor: 'pointer',
    color: `${colors.textGreenBtn}`,
  },
  };

  const iconStyle = {
    width: 18,
    cursor: 'pointer'
  };

const BasicModal = ({ handleCloseModal, avatarRef }) => {

  const [isUserProfOpen, setIsUserProfOpen] = React.useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = React.useState(false);

  const handleModalClick = () => {
    setIsUserProfOpen(true);
  };
  const handleCloseModalProfile = () => {
    setIsUserProfOpen(false);
  };
  const handleLogoutClick = () => {
    setIsLogoutModalOpen(true);
  };
  const handleCloseLogoutModal = () => {
    setIsLogoutModalOpen(false);
  };
  const handleBasicModalClose = () => {
      setIsLogoutModalOpen(false);
      handleCloseModal();
  };
  const handleEditProfileClick = () => {
    handleModalClick();
  };

  const getModalStyle = () => {
    if (avatarRef.current) {
      const avatarRect = avatarRef.current.getBoundingClientRect();
      const avatarTop = avatarRect.bottom;
      const avatarLeft = avatarRect.left + avatarRect.width / 2;
      return {
        position: 'absolute',
        top: avatarTop,
        left: avatarLeft,
        transform: 'translate(-50%, 0)',
        zIndex: 9999,
      };
    }
    return {};
  };
   
  return (
    <div>
      <Modal
        open={!isLogoutModalOpen}
        onClose={handleBasicModalClose}
        BackdropProps={{ invisible: true }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={getModalStyle()}>
          <Box style={{ display: 'flex', alignItems: 'start'}}>
            <Typography onClick={handleEditProfileClick} sx={styleFont} id="modal-modal-title" variant="h6" component="p" style={{ color: colors.blackFont }}>
              Edit profile
            </Typography>
            <ModeOutlinedIcon style={iconStyle} onClick={handleEditProfileClick} />          
          </Box>            
          <button className="btn logoutbtn" onClick={() => {
            handleLogoutClick(); 
            }}>Log out →</button>        
        </Box>
      </Modal>
      {isUserProfOpen && (
                <UserProf 
                    handleCloseModalProfile={handleCloseModalProfile} 
                    handleCloseModal={handleCloseModal} 
                />
            )}
        {isLogoutModalOpen && (
            <LogoutModal 
                handleCloseModal={handleBasicModalClose} 
                handleLogoutClick={handleCloseLogoutModal} 
            />
        )}
    </div>
  );
}

export default BasicModal;