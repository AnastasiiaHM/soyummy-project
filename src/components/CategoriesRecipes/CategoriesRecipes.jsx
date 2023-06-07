import React, { useState } from 'react';
import { CategoriesNav, CategoriesWrapper } from './CategoriesRecipes.styled';
import { RecipesGallery } from 'components/RecipesGallery/RecipesGallery';

export const CategoriesRecipes = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // код для отримання рецептів з API
  const recipes = [
    { name: 'meat', description: 'BEEEEEF', category: 'Beef' },
    { name: 'leg', description: 'BEEEEEF', category: 'Beef' },
    { name: 'lungs', description: 'BEEEEEF', category: 'Beef' },
    {
      name: 'eggs',
      description: 'Description 2',
      category: 'Breakfast',
    },
    { name: 'chicken', description: 'Description 3', category: 'Chicken' },
  ];

  const handleCategorySelect = category => {
    setSelectedCategory(category);
  };

  const filteredRecipes = selectedCategory
    ? recipes.filter(recipe => recipe.category === selectedCategory)
    : recipes;
  return (
    <CategoriesWrapper>
      <h1 className="title">Categories</h1>
      <CategoriesNav>
        <li>
          <button
            className="navbat"
            type="button"
            onClick={() => handleCategorySelect('Beef')}
          >
            Beef
          </button>
        </li>
        <li>
          <button
            className="navbat"
            type="button"
            onClick={() => handleCategorySelect('Breakfast')}
          >
            Breakfast
          </button>
        </li>
        <li>
          <button
            className="navbat"
            type="button"
            onClick={() => handleCategorySelect('Chicken')}
          >
            Chicken
          </button>
        </li>
        <li>
          <button
            className="navbat"
            type="button"
            onClick={() => handleCategorySelect('Desserts')}
          >
            Desserts
          </button>
        </li>
        <li>
          <button
            className="navbat"
            type="button"
            onClick={() => handleCategorySelect('Goat')}
          >
            Goat
          </button>
        </li>
        <li>
          <button
            className="navbat"
            type="button"
            onClick={() => handleCategorySelect('Lamb')}
          >
            Lamb
          </button>
        </li>
        <li>
          <button
            className="navbat"
            type="button"
            onClick={() => handleCategorySelect('Miscellaneous')}
          >
            Miscellaneous
          </button>
        </li>
        <li>
          <button
            className="navbat"
            type="button"
            onClick={() => handleCategorySelect('Pasta')}
          >
            Pasta
          </button>
        </li>
        <li>
          <button
            className="navbat"
            type="button"
            onClick={() => handleCategorySelect('Pork')}
          >
            Pork
          </button>
        </li>
        <li>
          <button
            className="navbat"
            type="button"
            onClick={() => handleCategorySelect('Seafood')}
          >
            Seafood
          </button>
        </li>
        <li>
          <button
            className="navbat"
            type="button"
            onClick={() => handleCategorySelect('Side')}
          >
            Side
          </button>
        </li>
      </CategoriesNav>
      <RecipesGallery recipes={filteredRecipes} />
    </CategoriesWrapper>
  );
};
