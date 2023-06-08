import { GoX } from 'react-icons/go';
import {
  BtnClose,
  ModalHeader,
  FormModal,
  WrapperInp,
  InputMod,
  IconUser,
  WrapperMain,
  UserBtn,
  BtnSave,
  TextBtn,
  BackdropModal,
  UserIconInp,
  InputPen,
} from './Header.styled';
import { BiUser, BiPlus } from 'react-icons/bi';

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
    // <h1>Header</h1>
    <BackdropModal>
      <ModalHeader>
        <BtnClose>
          <GoX style={{ width: '24px', height: '24px' }} />
        </BtnClose>
        <WrapperMain>
          <IconUser>
            <BiUser
              style={{
                width: '47px',
                height: '47px',
                fill: '#C4C4C4',
              }}
            />
            <UserBtn>
              <BiPlus
                style={{
                  fill: '#FAFAFA',
                  display: 'flex',
                  position: 'absolute',
                }}
              />
            </UserBtn>
          </IconUser>
          <FormModal>
            <WrapperInp>
              <UserIconInp />
              <InputPen />
              <InputMod type="text" placeholder="Your name" />
            </WrapperInp>
          </FormModal>
          <BtnSave>
            <TextBtn>Save changes</TextBtn>
          </BtnSave>
        </WrapperMain>
      </ModalHeader>
    </BackdropModal>
    // <BackdropModal>
    //   <ModalHeader>
    //     <BtnClose>
    //       <GoX
    //         style={{
    //           width: '24px',
    //           height: '24px',
    //           '@media screen and (min-width: 370px)': {
    //             width: '40px',
    //             height: '40px',
    //           },
    //         }}
    //       />
    //     </BtnClose>
    //     <WrapperMain>
    //       <TextLogOut>Are you sure you want to log out?</TextLogOut>
    //       <WrapperBtns>
    //         <BtnLogOut>
    //           <TextBtnLogOut>Log out</TextBtnLogOut>
    //         </BtnLogOut>
    //         <BtnCancel>
    //           <TextBtnCancel>Cancel</TextBtnCancel>
    //         </BtnCancel>
    //       </WrapperBtns>
    //     </WrapperMain>
    //   </ModalHeader>
    // </BackdropModal>
  );
};

export default Header;
