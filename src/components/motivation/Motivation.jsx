import {
  ImgMotivation,
  WrapperMotivation,
  ModalMotivation,
  BlureFon,
  WrapperBlure,
  BtnBlure,
  CloseInp,
  TextBlureFon,
  WowText,
} from './Motivation.styled';
import FotoMotivation from '../images/using-foto/foto-for-using-desc.jpg';
import BlureFons from '../images/blurefon/blure fon.png';

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
    <ModalMotivation>
      <WrapperMotivation>
        <ImgMotivation src={FotoMotivation} alt="" />
        <WrapperBlure>
          <BlureFon src={BlureFons} alt="" />
          <TextBlureFon>
            <WowText>Wow!</WowText>
            You have created your first shopping list!
          </TextBlureFon>
          <BtnBlure>
            <CloseInp />
          </BtnBlure>
        </WrapperBlure>
      </WrapperMotivation>
    </ModalMotivation>
  );
};

export default Header;
