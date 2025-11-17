import type { Recipe, RecipeByIngredients } from './recipes.types';

export type Page = 'search' | 'discover' | 'details';

export interface SearchPageProps {
  onSearch: (recipes: RecipeByIngredients[], selectedIngredients: string[]) => void;
}

export interface DiscoverRecipesProps {
  recipes: RecipeByIngredients[];
  onRecipeClick: (recipe: RecipeByIngredients, currentIndex: number) => void;
  onBack: () => void;
  id?: number;
}

export interface RecipeDetailsProps {
  recipe: Recipe;
  selectedIngredients: string[];
  onBack: (currentIndex: number) => void;
  id: number;
}
