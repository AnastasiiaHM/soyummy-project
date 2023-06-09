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
import { useDispatch, useSelector } from 'react-redux';
import { changeMotivation, cleanMotivation } from 'redux/auth/slice';

export const Motivation = () => {
  const dispatch = useDispatch();
  const motivation = useSelector(state => state.auth.motivation);

  const handleCloseMotivation = () => {
    dispatch(cleanMotivation(''));
    dispatch(changeMotivation(false));
  };

  return (
    <ModalMotivation>
      <WrapperMotivation>
        <ImgMotivation src={FotoMotivation} alt="" />
        <WrapperBlure>
          <BlureFon src={BlureFons} alt="" />
          <TextBlureFon>
            <WowText>Wow!</WowText>
            {motivation}
          </TextBlureFon>
          <BtnBlure onClick={handleCloseMotivation}>
            <CloseInp />
          </BtnBlure>
        </WrapperBlure>
      </WrapperMotivation>
    </ModalMotivation>
  );
};
