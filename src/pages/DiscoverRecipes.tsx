import { useState } from 'react';
import ResultCounter from '../layout/result-counter/ResultCounter';
import RecipeCarousel from '../layout/recipe-carousel/Recipecarousel';
import type { DiscoverRecipesProps } from '../types';
import './DiscoverRecipes.css';

// pagina con i risultati della ricerca
function DiscoverRecipes({ recipes, onRecipeClick, onBack, id }: DiscoverRecipesProps) {
  // mantiene la posizione corrente nel carousel
  const [currentIndex, setCurrentIndex] = useState<number>(id || 0);
  
  return (
    <>
      <ResultCounter count={recipes.length} />
      
      <RecipeCarousel 
        recipes={recipes} 
        onRecipeClick={onRecipeClick}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      
      <div className="back-button-container">
        <button 
          onClick={onBack}
          className="back-button"
        >
          ← Nuova Ricerca
        </button>
      </div>
    </>
  );
}

export default DiscoverRecipes;
