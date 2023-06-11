import { Link } from 'react-router-dom';
import {
  CardBody,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  ContainerCard,
  DeleteBtn,
  DeleteIcon,
  ImageContainer,
  PrimaryBtn,
} from './FavoriteCard.styled';

const FavoriteCard = ({ card, deleteCard }) => {
  return (
    <ContainerCard>
      <ImageContainer>
        <img src={card.preview} alt="" />
      </ImageContainer>
      <CardContent>
        <CardBody>
          <CardHeader>
            <CardTitle>{card.title}</CardTitle>
            <p>{card.description}</p>
          </CardHeader>
          <DeleteBtn onClick={() => deleteCard(card._id)}>
            <DeleteIcon />
          </DeleteBtn>
        </CardBody>
        <CardFooter>
          <p>{card.time} min</p>
          <Link to={`/recipe/${card._id}`}>
            <PrimaryBtn>See recipe</PrimaryBtn>
          </Link>
        </CardFooter>
      </CardContent>
    </ContainerCard>
  );
};

export default FavoriteCard;
