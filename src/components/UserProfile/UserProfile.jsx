import React from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Box } from '@mui/material';
import { GoX } from 'react-icons/go';
import {
  BtnClose,
  IconUser,
  BtnSave,
  InputMod,
  InputPen,
  UserIconInp,
  WrapperInp,
  FormModal,
  CenteredContainer,
} from './UserProfile.styled';
import { BiPlus, BiUser } from 'react-icons/bi';
import { colors } from 'components/colors';
import { mediaSizes } from 'components/constants';
import { updateUser } from '../../redux/user/operations';
import { useSelector } from 'react-redux';

const UserProf = ({ handleCloseModalProfile, handleCloseModal }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const [name, setName] = React.useState(user.name || '');
  const [avatar, setAvatar] = React.useState(null);
  const [avatarURL, setAvatarURL] = React.useState(user.avatarURL || '');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleAvatarChange = e => {
    const file = e.target.files[0];
    setAvatar(file);
    setAvatarURL(URL.createObjectURL(file));
  };

  const handleSaveChanges = () => {
    if (name.trim() === '') {
      return;
    }
    const userData = {};
    if (name) {
      userData.newName = name;
    }
    if (avatar) {
      userData.avatar = avatar;
    }

    dispatch(updateUser(userData))
      .unwrap()
      .then(response => {
        console.log(response);
        console.log(userData);
      })
      .catch(error => {
        console.error(error);
      });
    handleCloseModalProfile();
    handleCloseModal();
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 24,

    bgcolor: `${colors.textGreenBtn}`,
    borderRadius: '8px',
    p: 1.8,
  };

  return (
    <Modal open={true} onClose={handleCloseModalProfile}>
      <Box
        sx={{
          ...style,
          [`@media screen and (min-width: ${mediaSizes.mobile})`]: {
            width: 330,
            height: 327,
          },
          [`@media screen and (min-width: ${mediaSizes.tablet})`]: {
            width: 480,
            height: 402,
          },
          [`@media screen and (min-width: ${mediaSizes.desktop})`]: {
            width: 500,
            height: 425,
          },
        }}
      >
        <BtnClose onClick={handleCloseModalProfile}>
          <GoX style={{ width: '20px', height: '20px' }} />
        </BtnClose>
        <IconUser>
          <label htmlFor="avatar-upload" onChange={handleAvatarChange}>
                {avatarURL ? (
              <img
                src={avatarURL}
                alt="Avatar"
                placeholder={user.avatarURL}
                style={{
                  width: '100px',
                  height: '100px',
                  objectFit: 'cover',
                  borderRadius: '50%',
                }}
              />
            ) : (
                <BiUser
                  style={{
                    width: '47px',
                    height: '47px',
                    fill: '#C4C4C4',
                  }}
                />
            )}
            <BiPlus
                  style={{
                    fill: '#FAFAFA',
                    position: 'absolute',
                    top: '80%',
                    left: '85%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: '#8BAA36',
                    borderRadius: '50%',
                    width: '24px',
                    height: '24px',
                    visibility: 'visible',
                  }}
              />
            <input
              id="avatar-upload"
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              style={{
                position: 'absolute',
                opacity: 0,
                width: '100%',
                height: '100%',
                cursor: 'pointer',
              }}
            />
            
          </label>
        </IconUser>
        <CenteredContainer>
          <FormModal>
            <WrapperInp>
              <UserIconInp />
              <InputPen />
              <InputMod
                type="text"
                placeholder={user.name}
                pattern="[A-Za-z\s']{1,20}"
                required
                value={name}
                onChange={handleNameChange}
              />
            </WrapperInp>
          </FormModal>
          <BtnSave type="submit" onClick={handleSaveChanges}>
            Save changes
          </BtnSave>
        </CenteredContainer>
      </Box>
    </Modal>
  );
};

export default UserProf;
