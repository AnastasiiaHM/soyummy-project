import { UserMenuStyled } from './UserMenu.styled';
import { Button } from 'components/Styled';

const UserMenu = () => {
  return (
    <UserMenuStyled>
      <Button>Logout</Button>
    </UserMenuStyled>
  );
};

export default UserMenu;
