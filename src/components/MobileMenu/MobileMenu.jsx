import { Menu, Link, List } from './MobileMenu.styled.jsx';

const MobileMenu = ({ handleClick }) => {
  return (
    <Menu>
      <List>
        <Link to="/diary" onClick={handleClick}>
          diary
        </Link>
        <Link to="/calculator" onClick={handleClick}>
          calculator
        </Link>
      </List>
    </Menu>
  );
};

export default MobileMenu;
