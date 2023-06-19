import { Link } from 'react-router-dom';
import {
  CardBody,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  ContainerCard,
  CookingTime,
  DeleteButton,
  DeleteIcon,
  ImageContainer,
  PrimaryButton,
} from './Card.styled';

const uppPageHandler = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const Card = ({ card, deleteCard }) => {

  return (
    <ContainerCard>
      <ImageContainer>
        <img src={card.preview} alt="" />
      </ImageContainer>
      <CardContent>
        <CardBody>
          <CardHeader>
            <CardTitle>{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
          </CardHeader>
          <DeleteButton onClick={() => deleteCard(card._id)}>
            <DeleteIcon />
          </DeleteButton>
        </CardBody>
        <CardFooter>
          <CookingTime>{card.time} min</CookingTime>
          <Link to={`/recipe/${card._id}`} onClick={uppPageHandler}>
            <PrimaryButton>See recipe</PrimaryButton>
          </Link>
        </CardFooter>
      </CardContent>
    </ContainerCard>
  );
};

export default Card;
