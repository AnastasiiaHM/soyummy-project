import React from 'react';
import picture from '../images/заглушки/products/заглушка-products-big-white-2x.png'
import { RecipeDescr, PreparationImg, RecipeIngContainer, PreparationTitle, PreparationItem, CustomNumbering, PreparationText } from './Recipes.styled';

const RecipesPreparation = () => {
    return(
            <RecipeIngContainer>
                <RecipeDescr>
                    <div>
                        <PreparationTitle>Recipe Preparation</PreparationTitle>
                        <ul>
                            <PreparationItem>
                                <CustomNumbering>
                                    <PreparationText>Season the salmon, then rub with oil.</PreparationText>
                                </CustomNumbering>
                            </PreparationItem>
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
                            src={picture}
                        />
                    </div>
                </RecipeDescr>
            </RecipeIngContainer>
    )  
    
}

export default RecipesPreparation;