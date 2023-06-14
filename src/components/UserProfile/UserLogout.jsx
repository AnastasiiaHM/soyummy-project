import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { colors } from '../colors';
import { GoX } from 'react-icons/go';
import {
    BtnLogOut,
    BtnCancel,
    BtnClose,
    TextForBtn,
    TextForCancel,
} from './UserProfile.styled';
import { mediaSizes } from '../constants/media';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';

const style = {
  position: 'fixed',
  top: '20%',
  left: '55%',
  transform: 'translate(-50%, -50%)',
  bgcolor: `${colors.textGreenBtn}`,
  borderRadius: '8px',
  boxShadow: 24,
  p: 1.8,
};

const styleFont = {
    fontStyle: 'Poppins', 
    fontWeight: 400, 
    fontSize: 18, 
    marginRight: 5.3,
    marginBottom: 3.2,
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 1.3,
};

const LogoutModal = ({ handleCloseModal, handleLogoutClick }) => {
  
  const dispatch = useDispatch();

  const handleLogoutAccClick = () => {
    dispatch(logout());
    handleCloseModal();
  };

  return (
    <Modal
        open={true}
        onClose={handleLogoutClick}
        BackdropProps={{ invisible: true }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={{
          ...style,          
          [`@media screen and (min-width: ${mediaSizes.mobile})`]: {
            width: 330,
          },
          [`@media screen and (min-width: ${mediaSizes.tablet})`]: {
            width: 480,
          },
          [`@media screen and (min-width: ${mediaSizes.desktop})`]: {
            width: 500,
          },          
        }}>
            <BtnClose onClick={handleCloseModal}>
                <GoX style={{ width: '24px', height: '24px' }} />
            </BtnClose>
            <Typography sx={styleFont} id="modal-modal-title" variant="h6" component="p" style={{ color: colors.blackFont }}>
                Are you sure you want to log out?
            </Typography>
            <Box style={{ display: 'flex', justifyContent: 'center'}}>  
                <BtnLogOut style={{ marginRight: '16px' }} onClick={handleLogoutAccClick}>
                    <TextForBtn>Log out</TextForBtn>
                </BtnLogOut>
                <BtnCancel onClick={handleCloseModal}>
                    <TextForCancel>Cancel</TextForCancel>
                </BtnCancel>
            </Box>
        </Box>
    </Modal>
  );
}

export default LogoutModal;