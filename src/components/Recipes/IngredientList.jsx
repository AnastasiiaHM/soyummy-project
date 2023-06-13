import { IngItem, IngImage, IngItemName, IngItemDeskr, IngInput, IngAmount } from './Recipes.styled';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecipeById } from '../../redux/id-recipes/operations';
import { selectRecipeById } from '../../redux/id-recipes/selectors';
import { Loader } from 'components/Loader/Loader';

export const IngredientList = () => {
  const dispatch = useDispatch();
    const recipe = useSelector(selectRecipeById);
  
    const recipeId = '6462a8f74c3d0ddd28897fba';
  
    useEffect(() => {
      dispatch(fetchRecipeById(recipeId));
    }, [dispatch, recipeId]);
  
    if (!recipe) {
      return <Loader/>;
    }

  return (
    <>
      {recipe.ingredients && recipe.ingredients.map((ingredient) => (
        <IngItem key={ingredient.id._id}>
          <IngItemName>
            <IngImage alt="ingredient_photo" src={ingredient.id.img} />
            <p>{ingredient.id.name}</p>
          </IngItemName>
          <IngItemDeskr>
            <IngAmount>
              <p>{ingredient.measure}</p>
            </IngAmount>
            <div>
              <IngInput type="checkbox" />
            </div>
          </IngItemDeskr>
        </IngItem>
      ))}
  </>
  );
};