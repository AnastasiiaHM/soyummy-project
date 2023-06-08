

import {
  Container,
  Title,
  TitleText,
  Text,
  TipBox,
  BoxText,
  DecorBoxText,
  BoxLinkText,
  DecorArrowIcon,
} from './MainPageHome.styled';


export default function MainPageHome() {
  return (
    
      <Container>
        <Title>
          <TitleText>So</TitleText>Yummy
        </Title>
      <Text>
        "What to cook?" is not only a recipe app, it is, in fact,{"\n"}
        your cookbook. You can add your own recipes to{"\n"}
        save them for the future.
      </Text>
        <TipBox>
          <BoxText>
            <DecorBoxText>Delicious and healthy</DecorBoxText> way to
            enjoy a variety of fresh ingredients in one satisfying meal
          </BoxText>
            <BoxLinkText>See recipes</BoxLinkText>
            <DecorArrowIcon />
        </TipBox>
      </Container>
    
  );
}
