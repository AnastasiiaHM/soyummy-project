import {
  IngItem,
  IngImage,
  IngItemName,
  IngItemDeskr,
  IngInput,
  IngAmount,
} from './Recipes.styled';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecipeById } from '../../redux/id-recipes/operations';
import { selectRecipeById } from '../../redux/id-recipes/selectors';
import { Loader } from 'components/Loader/Loader';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const IngredientList = () => {
  const dispatch = useDispatch();
  const recipe = useSelector(selectRecipeById);

  const { recipeId } = useParams();

  useEffect(() => {
    dispatch(fetchRecipeById(recipeId));
  }, [dispatch, recipeId]);

  if (!recipe) {
    return <Loader />;
  }

  const handleCheckboxChange = async (ingredient, measure) => {
    try {
      const payload = {
        ingredientId: ingredient._id,
        recipeId: recipeId,
        measure,
      };

      await axios.patch('/users/shopping-list/add', payload);
    } catch (error) {
      console.log('Помилка під час виконання запиту:', error);
    }
  };

  if (!recipe.ingredients) {
    return <Loader />;
  }

  return (
    <>
      {recipe.ingredients &&
        recipe.ingredients?.map((ingredient, index) => (
          <IngItem key={index}>
            <IngItemName>
              <IngImage alt="ingredient_photo" src={ingredient.id.img} />
              <p>{ingredient.id.name}</p>
            </IngItemName>
            <IngItemDeskr>
              <IngAmount>
                <p>{ingredient.measure}</p>
              </IngAmount>
              <div>
                <IngInput
                  type="checkbox"
                  onChange={() =>
                    handleCheckboxChange(ingredient.id, ingredient.measure)
                  }
                />
              </div>
            </IngItemDeskr>
          </IngItem>
        ))}
    </>
  );
};
