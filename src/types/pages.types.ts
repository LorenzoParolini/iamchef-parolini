import type { Recipe, RecipeByIngredients } from './recipes.types';

export type Page = 'setApi' | 'search' | 'discover' | 'details';

export interface SearchPageProps {
  onSearch: (selectedIngredients: string[]) => void;
  initialIngredients: string[];
}

export interface DiscoverRecipesProps {
  recipes: RecipeByIngredients[] | null;
  loading: boolean;
  error: string | null;
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
