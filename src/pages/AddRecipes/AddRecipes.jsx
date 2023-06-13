import { AddRecipeForm } from 'components/AddRecipeForm/AddRecipeForm';
import { PopularRecipe } from 'components/PopularRecipe/PopularRecipe';
import { FollowUs } from 'components/FollowUs/FollowUs';
import { getPopularRecipes } from 'operations/addRecipe';
import { Container, Wrapper } from './AddRecipes.styled';
import { useState, useEffect } from 'react';

const recipes = [
  {
    _id: '6462a8f74c3d0ddd2ty7fba',
    title: 'Cream Cheese Tart',
    category: 'Starter',
    area: 'Unknown',
    instructions:
      'Crust: make a dough from 250g flour (I like mixing different flours like plain and wholegrain spelt flour), 125g butter, 1 egg and a pinch of salt, press it into a tart form and place it in the fridge. Filling: stir 300g cream cheese and 100ml milk until smooth, add in 3 eggs, 100g grated parmesan cheese and season with salt, pepper and nutmeg. Take the crust out of the fridge and prick the bottom with a fork. Pour in the filling and bake at 175 degrees C for about 25 minutes. Cover the tart with some aluminium foil after half the time. In the mean time, slice about 350g mini tomatoes. In a small pan heat 3tbsp olive oil, 3tbsp white vinegar, 1 tbsp honey, salt and pepper and combine well. Pour over the tomato slices and mix well. With a spoon, place the tomato slices on the tart, avoiding too much liquid on it. Decorate with basil leaves and enjoy',
    description:
      'A tart made with a sweet shortcrust pastry shell and a filling made with cream cheese, sugar, eggs, and vanilla extract.',
    thumb: 'https://www.themealdb.com/images/media/meals/wurrux1468416624.jpg',
    preview:
      'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560403/ldjhhe56jmuhvmsqsvqp.jpg',
    time: '50',
    youtube: 'https://www.youtube.com/watch?v=UhQPwO4uymo',
    tags: ['Tart', 'Savory'],
    ingredients: [
      {
        id: '640c2dd963a319wfeeg71e36d7',
        measure: '250g',
      },
    ],
  },
  {
    _id: '6462a8f74cfegrhddd28897fba',
    title: 'Cream Cheese Tart',
    category: 'Starter',
    area: 'Unknown',
    instructions:
      'Crust: make a dough from 250g flour (I like mixing different flours like plain and wholegrain spelt flour), 125g butter, 1 egg and a pinch of salt, press it into a tart form and place it in the fridge. Filling: stir 300g cream cheese and 100ml milk until smooth, add in 3 eggs, 100g grated parmesan cheese and season with salt, pepper and nutmeg. Take the crust out of the fridge and prick the bottom with a fork. Pour in the filling and bake at 175 degrees C for about 25 minutes. Cover the tart with some aluminium foil after half the time. In the mean time, slice about 350g mini tomatoes. In a small pan heat 3tbsp olive oil, 3tbsp white vinegar, 1 tbsp honey, salt and pepper and combine well. Pour over the tomato slices and mix well. With a spoon, place the tomato slices on the tart, avoiding too much liquid on it. Decorate with basil leaves and enjoy',
    description:
      'A tart made with a sweet shortcrust pastry shell and a filling made with cream cheese, sugar, eggs, and vanilla extract.',
    thumb: 'https://www.themealdb.com/images/media/meals/wurrux1468416624.jpg',
    preview:
      'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560403/ldjhhe56jmuhvmsqsvqp.jpg',
    time: '50',
    youtube: 'https://www.youtube.com/watch?v=UhQPwO4uymo',
    tags: ['Tart', 'Savory'],
    ingredients: [
      {
        id: '640c2dd963a3wehrea671e36d7',
        measure: '250g',
      },
    ],
  },
  {
    _id: '6462a8f74c3d0ddd28897fba',
    title: 'Cream Cheese Tart',
    category: 'Starter',
    area: 'Unknown',
    instructions:
      'Crust: make a dough from 250g flour (I like mixing different flours like plain and wholegrain spelt flour), 125g butter, 1 egg and a pinch of salt, press it into a tart form and place it in the fridge. Filling: stir 300g cream cheese and 100ml milk until smooth, add in 3 eggs, 100g grated parmesan cheese and season with salt, pepper and nutmeg. Take the crust out of the fridge and prick the bottom with a fork. Pour in the filling and bake at 175 degrees C for about 25 minutes. Cover the tart with some aluminium foil after half the time. In the mean time, slice about 350g mini tomatoes. In a small pan heat 3tbsp olive oil, 3tbsp white vinegar, 1 tbsp honey, salt and pepper and combine well. Pour over the tomato slices and mix well. With a spoon, place the tomato slices on the tart, avoiding too much liquid on it. Decorate with basil leaves and enjoy',
    description:
      'A tart made with a sweet shortcrust pastry shell and a filling made with cream cheese, sugar, eggs, and vanilla extract.',
    thumb: 'https://www.themealdb.com/images/media/meals/wurrux1468416624.jpg',
    preview:
      'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560403/ldjhhe56jmuhvmsqsvqp.jpg',
    time: '50',
    youtube: 'https://www.youtube.com/watch?v=UhQPwO4uymo',
    tags: ['Tart', 'Savory'],
    ingredients: [
      {
        id: '640c2dd963a319ea671e36d7',
        measure: '250g',
      },
    ],
  },
  {
    _id: '6462a8f74c3d0ddd28897fba',
    title: 'Cream Cheese Tart',
    category: 'Starter',
    area: 'Unknown',
    instructions:
      'Crust: make a dough from 250g flour (I like mixing different flours like plain and wholegrain spelt flour), 125g butter, 1 egg and a pinch of salt, press it into a tart form and place it in the fridge. Filling: stir 300g cream cheese and 100ml milk until smooth, add in 3 eggs, 100g grated parmesan cheese and season with salt, pepper and nutmeg. Take the crust out of the fridge and prick the bottom with a fork. Pour in the filling and bake at 175 degrees C for about 25 minutes. Cover the tart with some aluminium foil after half the time. In the mean time, slice about 350g mini tomatoes. In a small pan heat 3tbsp olive oil, 3tbsp white vinegar, 1 tbsp honey, salt and pepper and combine well. Pour over the tomato slices and mix well. With a spoon, place the tomato slices on the tart, avoiding too much liquid on it. Decorate with basil leaves and enjoy',
    description:
      'A tart made with a sweet shortcrust pastry shell and a filling made with cream cheese, sugar, eggs, and vanilla extract.',
    thumb: 'https://www.themealdb.com/images/media/meals/wurrux1468416624.jpg',
    preview:
      'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560403/ldjhhe56jmuhvmsqsvqp.jpg',
    time: '50',
    youtube: 'https://www.youtube.com/watch?v=UhQPwO4uymo',
    tags: ['Tart', 'Savory'],
    ingredients: [
      {
        id: '640c2dd963a319ea671e36d7',
        measure: '250g',
      },
    ],
  },
];

const AddRecipes = () => {
  const [popularRecipes, setPopularRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getPopularRecipes();
        setPopularRecipes(res);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <AddRecipeForm />
      <Wrapper>
        <FollowUs />
        {popularRecipes.length > 0 && <PopularRecipe list={popularRecipes} />}
      </Wrapper>
    </Container>
  );
};

export default AddRecipes;
