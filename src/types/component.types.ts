import type { Recipe, RecipeByIngredients, ExtendedIngredient, AnalyzedInstruction } from './api.types';

// ========================================
// Component Props Types
// ========================================

// SearchBar Component
export interface SearchBarProps {
  onAddIngredient: (ingredient: string) => void;
}

// ReadyButton Component
export interface ReadyButtonProps {
  onClick: () => void;
}

// ResultCounter Component
export interface ResultCounterProps {
  count: number;
}

// RecipeCarousel Component
export interface RecipeCarouselProps {
  recipes: RecipeByIngredients[];
  onRecipeClick: (recipe: RecipeByIngredients) => void;
}

// RecipeCard Component
export interface RecipeCardProps {
  recipe: RecipeByIngredients;
  onClick: () => void;
}

// DetailsModal Component
export interface DetailsModalProps {
  recipe: Recipe;
  selectedIngredients: string[];
  onClose: () => void;
}

// Badge Component
export interface BadgeProps {
  name: string;
  onRemove: () => void;
}

// Badges Component
export interface BadgesProps {
  ingredients: string[];
  onRemoveIngredient: (ingredient: string) => void;
}

// MissedIngredients Component
export interface MissedIngredientsProps {
  ingredients: ExtendedIngredient[];
}

// RecipeSteps Component
export interface RecipeStepsProps {
  instructions: AnalyzedInstruction[];
  simpleInstructions?: string;
}

// InfoBadge Component
export interface InfoBadgeProps {
  icon: string;
  label: string;
  value: string | number;
}
