import RecipesHero from "components/Recipes/RecipesHero";
import RecipesIngredients from "components/Recipes/RecipesIngred";
import RecipesPreparation from "components/Recipes/RecipesPreparation";
import { Background } from "components/Background/Background";

const Recipes = () => {
  return (
    <>
      <Background />
      <RecipesHero />
      <RecipesIngredients />
      <RecipesPreparation />
    </>
    
  )
};

export default Recipes;
