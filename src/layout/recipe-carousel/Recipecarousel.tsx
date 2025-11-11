import RecipeCard from './recipe-card/RecipeCard';
import './Recipecarousel.css'
import type { RecipeCarouselProps } from '../../types';

// carousel mostra lista di ricette
// riceve dati dal container layout

function Recipecarousel({ recipes, onRecipeClick }: RecipeCarouselProps) {

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
