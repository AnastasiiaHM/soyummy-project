import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AddRecipeForm } from 'components/AddRecipeForm/AddRecipeForm';
import { PopularRecipe } from 'components/PopularRecipe/PopularRecipe';
import { FollowUs } from 'components/FollowUs/FollowUs';
import { Loader } from 'components/Loader/Loader';
import { getPopularRecipes } from 'operations/addRecipe';
import { Container, Wrapper } from './AddRecipes.styled';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLoading } from 'redux/auth/slice';
import { useSelector } from 'react-redux';

const AddRecipes = () => {
  const [popularRecipes, setPopularRecipes] = useState([]);

  const notify = message => toast.error(message, { autoClose: 3000 });
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.auth);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setLoading(true));
        const res = await getPopularRecipes();
        setPopularRecipes(res);
        dispatch(setLoading(false));
      } catch (error) {
        dispatch(setLoading(false));
        notify(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {loading && <Loader />}
      <Container>
        <AddRecipeForm />
        <Wrapper>
          <FollowUs />
          {popularRecipes.length > 0 && <PopularRecipe list={popularRecipes} />}
        </Wrapper>
        <ToastContainer />
      </Container>
    </>
  );
};

export default AddRecipes;
