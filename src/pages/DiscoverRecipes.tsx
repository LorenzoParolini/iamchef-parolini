import { useState, useEffect } from 'react';
import ResultCounter from '../layout/result-counter/ResultCounter';
import RecipeCarousel from '../layout/recipe-carousel/Recipecarousel';
import { useApi, getRecipesByIngredientsURL } from '../hooks/useApi';
import useAPIStore from '../store/useAPIStore';
import type { DiscoverRecipesProps, RecipeByIngredients } from '../types';
import './DiscoverRecipes.css';

// pagina con i risultati della ricerca
function DiscoverRecipes({ selectedIngredients, onRecipeClick, onBack, id }: DiscoverRecipesProps) {
  // Ottieni l'API key dallo store
  const apiKey = useAPIStore((state) => state.ApiKey);
  
  // mantiene la posizione corrente nel carousel
  const [currentIndex, setCurrentIndex] = useState<number>(id || 0);
  
  // chiamata API per ricette
  const { data: recipes, loading, error } = useApi<RecipeByIngredients[]>(getRecipesByIngredientsURL(selectedIngredients, apiKey));
  
  // ricette ordinate
  const [sortedRecipes, setSortedRecipes] = useState<RecipeByIngredients[]>([]);
  
  // quando arrivano i risultati, ordina
  useEffect(() => {
    if (recipes && recipes.length > 0) {
      const sorted = [...recipes].sort((a, b) => {
        if (a.missedIngredientCount !== b.missedIngredientCount) {
          return a.missedIngredientCount - b.missedIngredientCount;
        }
        return (a.readyInMinutes || 999) - (b.readyInMinutes || 999);
      });
      setSortedRecipes(sorted);
    }
  }, [recipes]);
  
  return (
    <>
      {/* Mostra loading durante il caricamento */}
      {loading && <div className="loading-text">Cercando ricette...</div>}
      
      {/* Mostra errore se presente */}
      {error && <div className="error-text">Errore: {error}</div>}
      
      {/* Mostra risultati quando disponibili */}
      {!loading && !error && sortedRecipes.length > 0 && (
        <>
          <ResultCounter count={sortedRecipes.length} />
          
          <RecipeCarousel 
            recipes={sortedRecipes} 
            onRecipeClick={onRecipeClick}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        </>
      )}
      
      {/* Mostra messaggio se nessun risultato */}
      {!loading && !error && sortedRecipes.length === 0 && (
        <div>Nessuna ricetta trovata</div>
      )}
      
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
