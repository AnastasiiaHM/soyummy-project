import { GoX } from 'react-icons/go';
import {
  BtnClose,
  ModalHeader,
  WrapperMain,
  BackdropModal,
  TextLogOut,
  WrapperBtns,
  BtnLogOut,
  BtnCancel,
  TextBtnCancel,
  TextBtnLogOut,
} from './LogOutModal.style';

const Header = () => {
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const height = isDesktop ? 100 : 40;
  //     const isTop = window.scrollY <= height;
  //     setIsScrolled(!isTop);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [isDesktop]);

  return (
    <BackdropModal>
      <ModalHeader>
        <BtnClose>
          <GoX
            style={{
              width: '24px',
              height: '24px',
              '@media screen and (min-width: 370px)': {
                width: '40px',
                height: '40px',
              },
            }}
          />
        </BtnClose>
        <WrapperMain>
          <TextLogOut>Are you sure you want to log out?</TextLogOut>
          <WrapperBtns>
            <BtnLogOut>
              <TextBtnLogOut>Log out</TextBtnLogOut>
            </BtnLogOut>
            <BtnCancel>
              <TextBtnCancel>Cancel</TextBtnCancel>
            </BtnCancel>
          </WrapperBtns>
        </WrapperMain>
      </ModalHeader>
    </BackdropModal>
  );
};

export default Header;
