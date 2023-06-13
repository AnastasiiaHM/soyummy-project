import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AddRecipeForm } from 'components/AddRecipeForm/AddRecipeForm';
import { PopularRecipe } from 'components/PopularRecipe/PopularRecipe';
import { FollowUs } from 'components/FollowUs/FollowUs';
import { getPopularRecipes } from 'operations/addRecipe';
import { Container, Wrapper } from './AddRecipes.styled';
import { useState, useEffect } from 'react';

const AddRecipes = () => {
  const [popularRecipes, setPopularRecipes] = useState([]);

  const notify = message => toast.error(message, { autoClose: 3000 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getPopularRecipes();
        setPopularRecipes(res);
      } catch (error) {
        notify(error.message);
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
      <ToastContainer />
    </Container>
  );
};

export default AddRecipes;
