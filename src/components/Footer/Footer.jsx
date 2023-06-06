import { FooterStyled, Team } from './Footer.styled';
import { GiBee } from 'react-icons/gi';
import beeCodeTeam from 'images/Team/BeeCodeTeam.png';
import { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';

const Footer = () => {
  const [teamOpened, setTeamOpened] = useState(false);

  const toggleTeam = () => {
    setTeamOpened(!teamOpened);
  };

  const closeModal = e => {
    setTeamOpened(false);
  };

  const handleCloseModal = e => {
    if (
      (e.type === 'click' && e.target === e.currentTarget) ||
      (e.type === 'keydown' && e.key === 'Escape')
    ) {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleCloseModal);

    return () => {
      window.removeEventListener('keydown', handleCloseModal);
    };
  });

  return (
    <FooterStyled>
      <ul>
        <li>© 2023</li>
        <li>
          <p>
            Made by{' '}
            <span className="teamname" onClick={toggleTeam}>
              BeeCode
            </span>
          </p>
          <GiBee className="icon" />
        </li>
      </ul>

      <Team onClick={closeModal} className={teamOpened ? 'opened' : ''}>
        <div className="wrapper">
          <img src={beeCodeTeam} alt="Bee Code Tem" />
          <IoMdClose />
        </div>
      </Team>
    </FooterStyled>
  );
};

export default Footer;
