import React from 'react';
import { RecipeTitle, RecipeText, RecipeTiming, RecipeWrapper } from './Recipes.styled';

const RecipesHero = () => {
    return(
            <RecipeWrapper>
                <div>
                    <RecipeTitle>Salmon Avocado Salad</RecipeTitle>
                    <RecipeText>Is a healthy salad recipe that’s big on nutrients and flavor. A moist, pan seared salmon is layered on top of spinach, avocado, tomatoes, and red onions. Then drizzled with a homemade lemon vinaigrette.</RecipeText>
                </div>
                <div>
                    <button className="btn recipesbtn">Add to favorite recipes</button>
                    <RecipeTiming>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1 w-3.5 h-3.5">
                            <g clipPath="url(#clip0_264_756)">
                            <path d="M6.99935 12.8334C10.221 12.8334 12.8327 10.2217 12.8327 7.00002C12.8327 3.77836 10.221 1.16669 6.99935 1.16669C3.77769 1.16669 1.16602 3.77836 1.16602 7.00002C1.16602 10.2217 3.77769 12.8334 6.99935 12.8334Z" stroke="#23262A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M7 3.5V7L9.33333 8.16667" stroke="#23262A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path>
                            </g>
                            <defs>
                            <clipPath id="clip0_264_756">
                                <rect width="14" height="14" fill="white"></rect>
                            </clipPath>
                            </defs>
                        </svg>
                        <p>20 min</p>
                    </RecipeTiming>
                </div>
            </RecipeWrapper>
    )  
    
}

export default RecipesHero;