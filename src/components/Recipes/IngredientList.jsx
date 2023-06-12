import picture from '../images/заглушки/no-foto/gray-plug-image-2x.jpg';
import { IngItem, IngImage, IngItemName, IngItemDeskr, IngInput, IngAmount } from './Recipes.styled';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecipeById, fetchIngredientById } from '../../redux/id-recipes/operations';
import { selectRecipeById } from 'redux/id-recipes/selectors';
import { Loader } from 'components/Loader/Loader';

export const IngredientList = () => {
  const dispatch = useDispatch();
  const recipe = useSelector(selectRecipeById);

  const recipeId = '6462a8f74c3d0ddd28897fba';

  useEffect(() => {
    dispatch(fetchRecipeById(recipeId));
  }, [dispatch, recipeId]);

  const [ingredientsData, setIngredientsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchIngredientsData = async () => {
      if (recipe.ingredients && recipe.ingredients.length > 0) {
        const ingredientIds = recipe.ingredients.map((ingredient) => ingredient.id);
        const ingredientPromises = ingredientIds.map((id) => dispatch(fetchIngredientById(id)));
        const ingredientsData = await Promise.all(ingredientPromises);
        setIngredientsData(ingredientsData);
        setIsLoading(false);
      }
    };

    fetchIngredientsData();
  }, [recipe, dispatch]);

  if (!recipe || isLoading) {
    return <Loader />;
  }

  if (!recipe.ingredients || recipe.ingredients.length === 0) {
    return <Loader />;
  }

  return (
    <ul>
      {recipe.ingredients.map((ingredient, index) => {
        const ingredientData = ingredientsData[index];
        if (!ingredientData) {
          return null;
        }
  
        const ingredientName = ingredientData.payload.name || 'Unknown';
        const ingredientImage = ingredientData.payload.img || picture;
  
        return (
          <IngItem key={ingredient._id}>
            <IngItemName>
              <IngImage alt="ingredient_photo" src={ingredientImage} />
              <p>{ingredientName}</p>
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
        );
      })}
    </ul>
  );
};