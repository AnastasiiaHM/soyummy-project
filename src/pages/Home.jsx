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
  Section,
} from '../components/Styled/MainPageHome.styled';
import RecipesGallery from '../components/RecipesGallery/RecipesGallery';
import { SearchBar } from '../components/SearchBar/SearchBar';
import {
  fetchRecipesByCategory,
  fetchCategory,
} from '../redux/recipes/operations';

export default function MainPageHome() {
  const dispatch = useDispatch();
  const { recipes, filter } = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchRecipesByCategory(filter));
  }, [dispatch, filter]);

  return (
    <Section>
      <Container>
        <Title>
          <TitleText>So</TitleText>Yummy
        </Title>
        <Text>
          "What to cook?" is not only a recipe app, it is, in fact,{'\n'}
          your cookbook. You can add your own recipes to{'\n'}
          save them for the future.
          <SearchBar />
        </Text>
        <TipBox>
          <BoxText>
            <DecorBoxText>Delicious and healthy</DecorBoxText> way to enjoy a
            variety of fresh ingredients in one satisfying meal
          </BoxText>
          <BoxLinkText>See recipes</BoxLinkText>
          <DecorArrowIcon />
        </TipBox>
        <RecipesGallery recipes={recipes} />
      </Container>
    </Section>
  );
}
