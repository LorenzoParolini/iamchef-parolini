import type { Recipe, RecipeSearchResponse, Ingredient } from "./mockData";
import { mockRecipes, mockIngredients } from "./mockData";


export function searchRecipesByIngredients(ingredients: string[]): RecipeSearchResponse {
  const filtered = mockRecipes.filter((recipe: Recipe) => {
    const recipeIngredients = recipe.extendedIngredients.map(ing => ing.name.toLowerCase());
    return ingredients.some(ing => recipeIngredients.some(recipeIng => recipeIng.includes(ing.toLowerCase())));
  });
  return {
    results: filtered.length > 0 ? filtered : mockRecipes,
    offset: 0,
    number: filtered.length > 0 ? filtered.length : mockRecipes.length,
    totalResults: filtered.length > 0 ? filtered.length : mockRecipes.length
  };
}


export function searchRecipesByName(query: string): RecipeSearchResponse {
  const filtered = mockRecipes.filter((recipe: Recipe) => 
    recipe.title.toLowerCase().includes(query.toLowerCase())
  );
  return {
    results: filtered,
    offset: 0,
    number: filtered.length,
    totalResults: filtered.length
  };
}


export function getRecipeById(id: number): Recipe | undefined {
  return mockRecipes.find((recipe: Recipe) => recipe.id === id);
}


export function autocompleteIngredients(query: string): Ingredient[] {
  return mockIngredients.filter((ingredient: Ingredient) =>
    ingredient.name.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 5);
}


export function getIngredientById(id: number): Ingredient | undefined {
  return mockIngredients.find((ingredient: Ingredient) => ingredient.id === id);
}


export function searchIngredientbyName(query: string): Ingredient[] {
  return mockIngredients.filter((ingredient: Ingredient) =>
    ingredient.name.toLowerCase().includes(query.toLowerCase())
  );
  //esempio di dato di return: 
  // return [{ id: 20420, name: "pasta", image: "fusilli.jpg" }];
}
