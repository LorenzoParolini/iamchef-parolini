import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import ResultCounter from '../../components/result-counter/ResultCounter';
import RecipeCarousel from '../../components/recipe-carousel/Recipecarousel';
import { useApi, getRecipesByIngredientsURL, getRecipeInformationURL } from '../../hooks/useApi';
import useAPIStore from '../../store/useAPIStore';
import type { RecipeByIngredients, Recipe } from '../../types';
import './DiscoverRecipes.css';

// pagina con i risultati della ricerca
function DiscoverRecipes() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { ApiKey } = useAPIStore();

  // leggi ingredienti dalla query string
  const ingredientsParam = searchParams.get('ingredients');
  const ingredients = ingredientsParam ? ingredientsParam.split(',') : [];

  // chiama api con gli ingredienti
  const apiUrl = getRecipesByIngredientsURL(ingredients, ApiKey);
  const { data: recipes, loading, error } = useApi<RecipeByIngredients[]>(apiUrl);

  // ricette ordinate
  const [sortedRecipes, setSortedRecipes] = useState<RecipeByIngredients[]>([]);
  
  // cache dei dettagli delle ricette (id -> Recipe)
  const [recipeDetailsCache, setRecipeDetailsCache] = useState<Record<number, Recipe>>({});

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

  // stato locale per il carousel - leggi da query string se presente
  const indexParam = searchParams.get('index');
  const [currentIndex, setCurrentIndex] = useState<number>(indexParam ? parseInt(indexParam, 10) : 0);
  
  // carica i dettagli della ricetta corrente
  const currentRecipeId = sortedRecipes[currentIndex]?.id;
  const detailsUrl = currentRecipeId && !recipeDetailsCache[currentRecipeId] 
    ? getRecipeInformationURL(currentRecipeId, ApiKey)
    : '';
  const { data: currentRecipeDetails } = useApi<Recipe>(detailsUrl);
  
  // salva i dettagli nella cache quando arrivano
  useEffect(() => {
    if (currentRecipeDetails && currentRecipeId) {
      setRecipeDetailsCache(prev => ({
        ...prev,
        [currentRecipeId]: currentRecipeDetails
      }));
    }
  }, [currentRecipeDetails, currentRecipeId]);

  // naviga ai dettagli della ricetta salvando index e ingredienti
  const handleRecipeClick = (recipeId: number) => {
    const params = new URLSearchParams();
    params.set('ingredients', ingredients.join(','));
    params.set('index', currentIndex.toString());
    navigate(`/recipe/${recipeId}?${params.toString()}`);
  };

  // torna indietro mantenendo gli ingredienti
  const handleBack = () => {
    navigate(`/?ingredients=${encodeURIComponent(ingredients.join(','))}`);
  };

  return (
    <>
      {loading && <div className="loading-text">Searching recipes...</div>}

      {error && <div className="error-text">Error: {error}</div>}

      {!loading && !error && sortedRecipes.length > 0 && (
        <>
          <ResultCounter count={sortedRecipes.length} />

          <RecipeCarousel
            recipes={sortedRecipes.map(recipe => ({
              ...recipe,
              readyInMinutes: recipeDetailsCache[recipe.id]?.readyInMinutes ?? recipe.readyInMinutes
            }))}
            onRecipeClick={handleRecipeClick}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        </>
      )}

      {!loading && !error && recipes && sortedRecipes.length === 0 && (
        <div className="no-results-container">
          <div className="no-results-message">
            No recipes found 🙁. Please check that you've entered all ingredients correctly, or try removing some ingredients.
          </div>
          <button
            onClick={handleBack}
            className="back-button"
          >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <g clip-path="url(#clip0_192_127)">
                <rect width="60" height="60" fill="black" />
                <rect width="60" height="60" fill="url(#pattern0_192_127)" />
              </g>
              <defs>
                <pattern id="pattern0_192_127" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlinkHref="#image0_192_127" transform="scale(0.01)" />
                </pattern>
                <clipPath id="clip0_192_127">
                  <rect width="60" height="60" fill="white" />
                </clipPath>
                <image id="image0_192_127" width="100" height="100" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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" />
              </defs>
            </svg>

            Go Back
          </button>
        </div>
      )}

    </>
  );
}

export default DiscoverRecipes;
