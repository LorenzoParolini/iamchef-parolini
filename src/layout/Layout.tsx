import './Layout.css'
import { useState } from 'react'
import Badges from './badges/Badges'
import Header from './header/Header'
import ReadyButton from './ready-button/ReadyButton'
import Recipecarousel from './recipe-carousel/Recipecarousel'
import ResultCounter from './result-counter/ResultCounter'
import SearchBar from './search-bar/SearchBar'
import DetailsModal from './details-modal/DetailsModal'
import { useIngredients } from '../hooks/useIngredients'
import { searchRecipesByIngredients, getRecipeInformation } from '../service/utils'
import type { Recipe, RecipeByIngredients } from '../service/apiType'

// layout è il container che gestisce stato e logica
// i componenti figli sono presentational e ricevono props

function Layout() {

  // uso il custom hook per gli ingredienti
  const { selectedIngredients, addIngredient, removeIngredient } = useIngredients();

  // stato per mostrare/nascondere il carousel
  const [showCarousel, setShowCarousel] = useState(false);
  
  // stato per le ricette trovate (dal search by ingredients)
  const [recipes, setRecipes] = useState<RecipeByIngredients[]>([]);
  
  // stato per la ricetta selezionata per aprire i dettagli
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  
  // cerca ricette quando clicchi ready
  const handleSearch = () => {
    // DOAPI
    // cerca ricette con gli ingredienti selezionati
    const result = searchRecipesByIngredients(selectedIngredients);
    
    // ordina per ingredienti mancanti (già calcolati dall'API)
    const sortedRecipes = result.results.sort((a, b) => {
      // se hanno numero diverso di ingredienti mancanti ordina per quello
      if (a.missedIngredientCount !== b.missedIngredientCount) {
        return a.missedIngredientCount - b.missedIngredientCount;
      }
      
      // se hanno stesso numero di ingredienti mancanti, ordina per tempo di preparazione
      return (a.readyInMinutes || 999) - (b.readyInMinutes || 999);
    });
    
    setRecipes(sortedRecipes);
    setShowCarousel(true);
  }
  
  // apri modal dettagli
  // SIMULA: GET /recipes/{id}/information
  const openRecipeDetails = (recipe: RecipeByIngredients) => {
    // DOAPI
    const fullRecipe = getRecipeInformation(recipe.id);
    if (fullRecipe) {
      setSelectedRecipe(fullRecipe);
    }
  }
  
  // chiudi modal
  const closeRecipeDetails = () => {
    setSelectedRecipe(null);
  }

  return (
    <>
      <Header />
      
      {showCarousel && 
      <>
        <ResultCounter count={recipes.length} />
        <Recipecarousel 
          recipes={recipes} 
          onRecipeClick={openRecipeDetails}
        />
      </>
      }
      
      {!showCarousel && 
      <>
        <div className='Logo'>
          <img src="./src/assets/logo.png" alt="logo" />
          <h1>I am Chef!</h1>
        </div>

        <SearchBar onAddIngredient={addIngredient} />
        <Badges ingredients={selectedIngredients} onRemoveIngredient={removeIngredient} />
        
        {selectedIngredients.length > 0 && <ReadyButton onClick={handleSearch} />} 
      </>
      }
      
      {selectedRecipe && (
        <DetailsModal 
          recipe={selectedRecipe} 
          selectedIngredients={selectedIngredients}
          onClose={closeRecipeDetails}
        />
      )}
    </>
  )
}

export default Layout;
