import {
  CardBody,
  CardContent,
  CardDescriptionPlaceholder,
  CardFooter,
  CardHeader,
  CardTitlePlaceholder,
  ContainerCard,
  CookingTimePlaceholder,
  DeleteButtonPlaceholder,
  ImagePlaceholder,
  PrimaryButtonPlaceholder,
} from './Card.styled';

const CardPlaceholder = () => {
  return (
    <ContainerCard>
      <ImagePlaceholder variant="rectangular" animation="wave" />
      <CardContent>
        <CardBody>
          <CardHeader>
            <CardTitlePlaceholder variant="text" animation="wave" />
            <CardDescriptionPlaceholder variant="text" animation="wave" />
            <CardDescriptionPlaceholder variant="text" animation="wave" />
            <CardDescriptionPlaceholder variant="text" animation="wave" />
          </CardHeader>
          <DeleteButtonPlaceholder variant="rectangular" animation="wave" />
        </CardBody>
        <CardFooter>
          <CookingTimePlaceholder variant="text" animation="wave" width={60} />
          <PrimaryButtonPlaceholder variant="rectangular" animation="wave" />
        </CardFooter>
      </CardContent>
    </ContainerCard>
  );
};

export default CardPlaceholder;
