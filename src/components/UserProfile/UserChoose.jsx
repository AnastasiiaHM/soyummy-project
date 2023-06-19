import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import { colors } from '../colors';
import UserProf from './UserProfile';
import LogoutModal from './UserLogout';

const style = {
  position: 'fixed',
  top: '20%',
  left: '70%',
  transform: 'translate(-50%, -50%)',
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

const BasicModal = ({ handleCloseModal }) => {

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
      
  return (
    <div>
      <Modal
        open={!isLogoutModalOpen}
        onClose={handleBasicModalClose}
        BackdropProps={{ invisible: true }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box style={{ display: 'flex', alignItems: 'start'}}>
            <Typography onClick={handleModalClick} sx={styleFont} id="modal-modal-title" variant="h6" component="p" style={{ color: colors.blackFont }}>
              Edit profile
            </Typography>
            <ModeOutlinedIcon style={iconStyle} onClick={handleModalClick} />
          </Box>
            <button className="btn logoutbtn" onClick={() => {
            handleLogoutClick();
            }}>Log out →</button>        
        </Box>
      </Modal>
      {isUserProfOpen && (
                <UserProf 
                    handleCloseModalProfile={handleCloseModalProfile} 
                    handleModalClickProfile={handleModalClick} 
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