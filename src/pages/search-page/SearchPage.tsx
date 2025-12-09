import SearchBar from '../../components/search-bar/SearchBar';
import Badges from '../../components/badges/Badges';
import ReadyButton from '../../components/ready-button/ReadyButton';
import { useIngredients } from '../../hooks/useIngredients';
import type { SearchPageProps } from '../../types';

//TODO: rimuovere la prop onSearch, usare navigate di react router
//TODO: navigare a /discover con query string degli ingredienti selezionati
//TODO: rimuovere initialIngredients, leggere dalla query string se presente

// pagina iniziale per cercare ricette
function SearchPage({ onSearch, initialIngredients }: SearchPageProps) {

  // hook per gestire gli ingredienti
  const { selectedIngredients, addIngredient, removeIngredient } = useIngredients(initialIngredients);

  // quando clicchi ready
  const handleSearch = () => {
    onSearch(selectedIngredients);
    
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
