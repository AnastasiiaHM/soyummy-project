import picture from '../images/заглушки/products/заглушка-products-middle-white-2x.png'
import {IngItem, IngImage, IngItemName, IngItemDeskr, IngInput, IngAmount} from './Recipes.styled'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecipeById } from '../../redux/id-recipes/operations'; 
import { selectRecipeById } from 'redux/id-recipes/selectors';

export const IngredientList = () => {

    const dispatch = useDispatch();
    const recipe = useSelector(selectRecipeById);
  
    const recipeId = '6462a8f74c3d0ddd28897fba';
  
    useEffect(() => {
      dispatch(fetchRecipeById(recipeId));
    }, [dispatch, recipeId]);
  
    if (!recipe) {
      return <div>Loading...</div>;
    }
   
    if (!recipe.ingredients || recipe.ingredients.length === 0) {
        return <div>No ingredients available</div>;
      }

    return (
        <ul>
            {recipe.ingredients.map((ingredient) => (
                <IngItem key={ingredient._id}>
                <IngItemName>
                    <IngImage alt="ingredient_photo" src={picture} />
                    <p>Ingredient's name</p>
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
        </ul>
    );
};
  