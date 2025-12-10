import type { Recipe, RecipeByIngredients, ExtendedIngredient, AnalyzedInstruction } from './recipes.types';

export interface SearchBarProps {
  onAddIngredient: (ingredient: string) => void;
}

export interface ReadyButtonProps {
  onClick: () => void;
}

export interface ResultCounterProps {
  count: number;
}

export interface RecipeCarouselProps {
  recipes: RecipeByIngredients[];
  onRecipeClick: () => void;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  selectedRecipe: Recipe;
}

export interface RecipeCardProps {
  recipe: RecipeByIngredients;
  onClick: () => void;
  selectedRecipe: Recipe;
}

export interface DetailsModalProps {
  recipe: Recipe;
  selectedIngredients: string[];
  onClose: () => void;
}

export interface BadgeProps {
  name: string;
  onRemove: () => void;
}

export interface BadgesProps {
  ingredients: string[];
  onRemoveIngredient: (ingredient: string) => void;
}

export interface MissedIngredientsProps {
  ingredients: ExtendedIngredient[];
}

export interface RecipeStepsProps {
  instructions: AnalyzedInstruction[];
  simpleInstructions?: string;
}

export interface InfoBadgeProps {
  icon: string;
  label: string;
  value: string | number;
}