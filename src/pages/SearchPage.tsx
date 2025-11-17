import SearchBar from '../layout/search-bar/SearchBar';
import Badges from '../layout/badges/Badges';
import ReadyButton from '../layout/ready-button/ReadyButton';
import { useIngredients } from '../hooks/useIngredients';
import { searchRecipesByIngredients } from '../service/utils';
import type { SearchPageProps } from '../types';

// pagina iniziale per cercare ricette
function SearchPage({ onSearch }: SearchPageProps) {

  // hook per gestire gli ingredienti
  const { selectedIngredients, addIngredient, removeIngredient } = useIngredients();

  // quando clicchi ready
  const handleSearch = () => {
    // todo: qui andrà chiamata api
    const result = searchRecipesByIngredients(selectedIngredients);
    
    // ordina per ingredienti mancanti e tempo
    const sortedRecipes = result.results.sort((a, b) => {
      if (a.missedIngredientCount !== b.missedIngredientCount) {
        return a.missedIngredientCount - b.missedIngredientCount;
      }
      return (a.readyInMinutes || 999) - (b.readyInMinutes || 999);
    });
    
    onSearch(sortedRecipes, selectedIngredients);
  };

  return (
    <>
      <div className='Logo'>
        <img src="./src/assets/logo.png" alt="logo" />
        <h1>I am Chef!</h1>
      </div>

      <SearchBar onAddIngredient={addIngredient} />
      
      <Badges 
        ingredients={selectedIngredients} 
        onRemoveIngredient={removeIngredient} 
      />
      
      {selectedIngredients.length > 0 && (
        <ReadyButton onClick={handleSearch} />
      )}
    </>
  );
}

export default SearchPage;
