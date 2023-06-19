import {
  IngItem,
  IngImage,
  IngItemName,
  IngItemDeskr,
  IngInput,
  IngAmount,
} from './Recipes.styled';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecipeById } from '../../redux/id-recipes/operations';
import { selectRecipeById } from '../../redux/id-recipes/selectors';
import { Loader } from 'components/Loader/Loader';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { selectShoppingList } from '../../redux/shopping-list/selectors';

export const IngredientList = () => {
  const dispatch = useDispatch();
  const recipe = useSelector(selectRecipeById);
  const shoppingList = useSelector(selectShoppingList);
  const { recipeId } = useParams();

  const [checkedIngredients, setCheckedIngredients] = useState([]);

  useEffect(() => {
    dispatch(fetchRecipeById(recipeId));
  }, [dispatch, recipeId]);

  useEffect(() => {
    if (shoppingList && recipe) {
      const recipeIngredientIds = recipe.ingredients.map(
        (ingredient) => ingredient.id._id
      );
      const checked = recipeIngredientIds.filter((ingredientId) =>
        shoppingList.some((item) => item.ingredientId === ingredientId)
      );
      setCheckedIngredients(checked);
    }
  }, [shoppingList, recipe]);

  if (!recipe) {
    return <Loader />;
  }

  const handleCheckboxChange = async (ingredient, measure) => {
    try {
      if (checkedIngredients.includes(ingredient._id)) {
        // Remove ingredient from shopping list
        const payload = {
          ingredientId: ingredient._id,
        };
        await axios.patch('/users/shopping-list/remove', payload);
        setCheckedIngredients((prevChecked) =>
          prevChecked.filter((id) => id !== ingredient._id)
        );
      } else {
        const payload = {
          ingredientId: ingredient._id,
          recipeId: recipeId,
          measure,
        };
        await axios.patch('/users/shopping-list/add', payload);
        setCheckedIngredients((prevChecked) => [...prevChecked, ingredient._id]);
      }
    } catch (error) {
      console.log('Error executing request:', error);
    }
  };

  return (
    <>
      {recipe.ingredients &&
        recipe.ingredients.map((ingredient, index) => (
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
                  checked={checkedIngredients.includes(ingredient.id._id)}
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