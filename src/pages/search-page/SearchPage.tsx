import { useNavigate, useSearchParams } from 'react-router';
import SearchBar from '../../components/search-bar/SearchBar';
import Badges from '../../components/badges/Badges';
import ReadyButton from '../../components/ready-button/ReadyButton';
import { useIngredients } from '../../hooks/useIngredients';

// pagina iniziale per cercare ricette
function SearchPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // leggi ingredienti dalla query string se presenti
  const initialIngredients = searchParams.get('ingredients')?.split(',') || [];

  // hook per gestire gli ingredienti
  const { selectedIngredients, addIngredient, removeIngredient } = useIngredients(initialIngredients);

  // quando clicchi ready naviga alla pagina discover con gli ingredienti
  const handleSearch = () => {
    const ingredientsQuery = selectedIngredients.join(',');
    navigate(`/discover?ingredients=${encodeURIComponent(ingredientsQuery)}`);
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
