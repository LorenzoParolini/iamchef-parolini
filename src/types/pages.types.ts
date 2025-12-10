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
  onRecipeClick: () => void;
  onBack: () => void;
  id?: number;
  onIndexChange?: (index: number) => void;
  selectedRecipe: Recipe;
}

export interface RecipeDetailsProps {
  recipe: Recipe;
  selectedIngredients: string[];
  onBack: (currentIndex: number) => void;
  id: number;
}
