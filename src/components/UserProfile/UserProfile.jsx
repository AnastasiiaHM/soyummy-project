import React from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Box } from '@mui/material';
import { GoX } from 'react-icons/go';
import {
  BtnClose, 
  UserBtn, 
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

const UserProf = ({ handleCloseModalProfile }) => {

  const dispatch = useDispatch();
  const [name, setName] = React.useState('');
  const [avatar, setAvatar] = React.useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  const handleSaveChanges = () => {
    // Створіть об'єкт з оновленими даними користувача
    const userData = {};
    if (name) {
      userData.name = name;
      console.log(name)
    }
    if (avatar) {
      userData.avatar = avatar;
    }
  
    // Викличте функцію `updateUser` з оновленими даними
    dispatch(updateUser(userData))
      .unwrap()
      .then((response) => {
        // Оновіть стан компонента або виконайте необхідні дії
        // після успішного оновлення користувача
        console.log(response); // Виведіть відповідь сервера для перевірки
        setName(userData);
        console.log(userData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const style = {
    position: 'absolute', 
    top: '50%', 
    left: '50%', 
    transform: 'translate(-50%, -50%)', 
    boxShadow: 24, p: 4, 
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
      <BiUser
        style={{
          width: '47px',
          height: '47px',
          fill: '#C4C4C4',
        }}
      />
        <UserBtn
          type="file" 
          onChange={handleAvatarChange}
        >
           <BiPlus
              style={{
                fill: '#FAFAFA',
                display: 'flex',
                position: 'absolute',
              }}
          />
        </UserBtn>
      </IconUser>
      <CenteredContainer>
        <FormModal>
          <WrapperInp>
            <UserIconInp />
            <InputPen />
            <InputMod
              type="text"
              placeholder="Your name"
              value={name}
              onChange={handleNameChange}
            />
          </WrapperInp>
        </FormModal>    
        <BtnSave onClick={handleSaveChanges}>
          Save changes
        </BtnSave>
      </CenteredContainer>
      </Box>
    </Modal>
  );
};

export default UserProf;