import { RecipeDescr, PreparationImg, RecipeIngContainer, PreparationTitle, PreparationItem, CustomNumbering, PreparationText } from './Recipes.styled';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecipeById } from '../../redux/id-recipes/operations'; 
import { selectRecipeById } from 'redux/id-recipes/selectors';
import { Loader } from 'components/Loader/Loader';
const RecipesPreparation = () => {

    const dispatch = useDispatch();
    const recipe = useSelector(selectRecipeById);
  
    const recipeId = '6462a8f74c3d0ddd28897fba';
  
    useEffect(() => {
      dispatch(fetchRecipeById(recipeId));
    }, [dispatch, recipeId]);
  
    if (!recipe) {
        return <Loader/>;
      }

    const instructions = recipe && recipe.instructions ? recipe.instructions.split('.') : [];
    return(
            <RecipeIngContainer>
                <RecipeDescr>
                    <div>
                        <PreparationTitle>Recipe Preparation</PreparationTitle>
                        <ul>
                        {instructions.map((instruction, index) => (
                                <PreparationItem key={index}>
                                    <CustomNumbering>
                                        <PreparationText>{instruction}</PreparationText>
                                    </CustomNumbering>
                            </PreparationItem>
                        ))}
                            <PreparationItem>
                                <CustomNumbering>
                                    <PreparationText>Mix the dressing ingredients together.</PreparationText>
                                </CustomNumbering>
                            </PreparationItem>
                            <PreparationItem>
                                <CustomNumbering>
                                    <PreparationText>Halve, stone, peel and slice the avocados. Halve and quarter the cucumber lengthways, then cut into slices.</PreparationText>
                                </CustomNumbering>
                            </PreparationItem>
                        </ul>
                    </div>
                    <div>
                        <PreparationImg
                            alt="ingredient_photo"
                            width="433px"
                            height="332px"
                            src={recipe.preview}
                        />
                    </div>
                </RecipeDescr>
            </RecipeIngContainer>
    )  
    
}

export default RecipesPreparation;