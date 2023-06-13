import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
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
  HomeGallery,
  MainBtn,
} from '../components/Styled/MainPageHome.styled';
import { MainGallery } from '../components/MainGallery/MainGallery';
import { fetchMainPageRecipes } from '../redux/recipes/operations';

export default function MainPageHome() {
  const dispatch = useDispatch();
  const recipes = useSelector(state => state.categories.recipes);
  useEffect(() => {
    dispatch(fetchMainPageRecipes());
  });

  return (
    <>
      <Container>
        <Title>
          <TitleText>So</TitleText>Yummy
        </Title>
        <Text>
          "What to cook?" is not only a recipe app, it is, in fact,{'\n'}
          your cookbook. You can add your own recipes to{'\n'}
          save them for the future.
        </Text>
        <TipBox>
          <BoxText>
            <DecorBoxText>Delicious and healthy</DecorBoxText> way to enjoy a
            variety of fresh ingredients in one satisfying meal
          </BoxText>
          <BoxLinkText>See recipes</BoxLinkText>
          <DecorArrowIcon />
        </TipBox>
      </Container>
      <HomeGallery>
        <h2
          className="title"
          style={{
            display: 'flex',
            alignSelf: 'start',
            marginLeft: '100px',
          }}
        >
          Lamb
        </h2>
        <MainGallery recipes={recipes} />
        <MainBtn>See all</MainBtn>
        <h2
          className="title"
          style={{
            display: 'flex',
            alignSelf: 'start',
            marginLeft: '100px',
          }}
        >
          Beef
        </h2>
        <MainGallery recipes={recipes} />
        <MainBtn>See all</MainBtn>
        <h2
          className="title"
          style={{
            display: 'flex',
            alignSelf: 'start',
            marginLeft: '100px',
          }}
        >
          Chiken
        </h2>
        <MainGallery recipes={recipes} />
        <MainBtn>See all</MainBtn>
        <h2
          className="title"
          style={{
            display: 'flex',
            alignSelf: 'start',
            marginLeft: '100px',
          }}
        >
          Dessert
        </h2>
        <MainGallery recipes={recipes} />
        <MainBtn>See all</MainBtn>
      </HomeGallery>
    </>
  );
}
