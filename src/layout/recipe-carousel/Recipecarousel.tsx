import RecipeCard from './recipe-card/RecipeCard';
import './Recipecarousel.css'
import type { RecipeByIngredients } from '../../service/apiType';

// carousel mostra lista di ricette
// riceve dati dal container layout

interface RecipecarouselProps {
  recipes: RecipeByIngredients[];
  onRecipeClick: (recipe: RecipeByIngredients) => void;
}

function Recipecarousel({ recipes, onRecipeClick }: RecipecarouselProps) {

  // mostra messaggio se non ci sono ricette
  if (recipes.length === 0) {
    return (
      <div className="recipe-carousel">
        <div className="no-recipes">
          <p>nessuna ricetta trovata con questi ingredienti</p>
          <p>prova con altri ingredienti</p>
        </div>
      </div>
    );
  }

  return (
    <div className="recipe-carousel">
      {recipes.map((recipe) => (
        <RecipeCard 
          key={recipe.id}
          recipe={recipe}
          onClick={() => onRecipeClick(recipe)}
        />
      ))}
    </div>
  );
}

export default Recipecarousel;
