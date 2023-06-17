import { RecipeDescr, PreparationImg, RecipeIngContainer, PreparationTitle, PreparationItem, CustomNumbering, PreparationText, ScrollContainer } from './Recipes.styled';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecipeById } from '../../redux/id-recipes/operations'; 
import { selectRecipeById } from 'redux/id-recipes/selectors';
import { Loader } from 'components/Loader/Loader';
import { useParams } from 'react-router-dom';

const RecipesPreparation = () => {

    const dispatch = useDispatch();
    const recipe = useSelector(selectRecipeById);
  
    const { recipeId } = useParams();
  
    useEffect(() => {
      dispatch(fetchRecipeById(recipeId));
    }, [dispatch, recipeId]);
  
    if (!recipe) {
        return <Loader/>;
    }

    const instructions = recipe.instructions ? recipe.instructions.split('\r\n') : [];

    //const instructions = recipe && recipe.instructions ? recipe.instructions.split('.') : [];
    return(
            <RecipeIngContainer>
                <RecipeDescr>
                    <div>
                        <PreparationTitle>Recipe Preparation</PreparationTitle>
                            <ScrollContainer>
                                <ul>
                                    {instructions.map((instruction, index) => (
                                            <PreparationItem key={index}>
                                                <CustomNumbering>
                                                    <PreparationText>{instruction}</PreparationText>
                                                </CustomNumbering>
                                            </PreparationItem>
                                    ))}
                                </ul>
                            </ScrollContainer>
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