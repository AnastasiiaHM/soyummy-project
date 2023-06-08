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

const FavoriteCard = ({ img, title, desc, time }) => {
  return (
    <ContainerCard>
      <ImageContainer>
        <img src={img} alt="" />
      </ImageContainer>
      <CardContent>
        <CardBody>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <p>{desc}</p>
          </CardHeader>
          <DeleteBtn>
            <DeleteIcon />
          </DeleteBtn>
        </CardBody>
        <CardFooter>
          <p>{time}</p>
          <PrimaryBtn>See recipe</PrimaryBtn>
        </CardFooter>
      </CardContent>
    </ContainerCard>
  );
};

export default FavoriteCard;
