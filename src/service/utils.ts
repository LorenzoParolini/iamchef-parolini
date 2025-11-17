import type { Recipe, RecipeSearchResponse, Ingredient, RecipeByIngredients } from "../types";
import { mockRecipes, mockIngredients, mockRecipeDetails } from "./mockData";

// converte ricetta in formato search
function recipeToByIngredients(recipe: Recipe, selectedIngredients: string[]): RecipeByIngredients {
  const used: any[] = [];
  const missed: any[] = [];
  
  recipe.extendedIngredients.forEach(ing => {
    const ingredient = {
      aisle: ing.aisle,
      amount: ing.amount,
      id: ing.id,
      image: ing.image,
      meta: ing.meta,
      name: ing.name,
      original: ing.original,
      originalName: ing.originalName,
      unit: ing.unit,
      unitLong: ing.measures.us.unitLong,
      unitShort: ing.measures.us.unitShort
    };
    
    const isUsed = selectedIngredients.some(selected => 
      ing.name.toLowerCase().includes(selected.toLowerCase())
    );
    
    if (isUsed) {
      used.push(ingredient);
    } else {
      missed.push(ingredient);
    }
  });
  
  return {
    id: recipe.id,
    image: recipe.image,
    imageType: recipe.imageType,
    likes: recipe.aggregateLikes,
    missedIngredientCount: missed.length,
    missedIngredients: missed,
    title: recipe.title,
    unusedIngredients: [],
    usedIngredientCount: used.length,
    usedIngredients: used,
    readyInMinutes: recipe.readyInMinutes
  };
}

// cerca ricette per ingredienti
// todo: sostituire con chiamata api vera
export function searchRecipesByIngredients(ingredients: string[]): RecipeSearchResponse {
  const filtered = mockRecipes.filter((recipe: Recipe) => {
    const recipeIngredients = recipe.extendedIngredients.map(ing => ing.name.toLowerCase());
    return ingredients.some(ing => recipeIngredients.some(recipeIng => recipeIng.includes(ing.toLowerCase())));
  });
  const recipesToUse = filtered.length > 0 ? filtered : mockRecipes;
  const results = recipesToUse.map(recipe => recipeToByIngredients(recipe, ingredients));
  
  return {
    results,
    offset: 0,
    number: results.length,
    totalResults: results.length
  };
}

// prende dettagli ricetta
// todo: sostituire con chiamata api vera
export function getRecipeInformation(id: number): Recipe | undefined {
  return mockRecipeDetails.find((recipe: Recipe) => recipe.id === id);
}

// cerca ingredienti
// todo: sostituire con chiamata api vera
export function searchIngredients(query: string): Ingredient[] {
  return mockIngredients.filter((ingredient: Ingredient) =>
    ingredient.name.toLowerCase().includes(query.toLowerCase())
  );
}

export function autocompleteIngredients(query: string): Ingredient[] {
  return searchIngredients(query).slice(0, 5);
}
