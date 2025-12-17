import { useParams, useNavigate, useSearchParams } from 'react-router';
import DetailsModal from '../../components/details-modal/DetailsModal';
import { useApi, getRecipeInformationURL } from '../../hooks/useApi';
import useAPIStore from '../../store/useAPIStore';
import type { Recipe } from '../../types';
import './RecipeDetails.css';

// pagina con i dettagli della ricetta
function RecipeDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { ApiKey } = useAPIStore();

  // leggi ingredienti e index dalla query string
  const ingredientsParam = searchParams.get('ingredients');
  const indexParam = searchParams.get('index');
  const selectedIngredients = ingredientsParam ? ingredientsParam.split(',') : [];

  // carica dettagli ricetta
  const apiUrl = id ? getRecipeInformationURL(parseInt(id, 10), ApiKey) : '';
  const { data: recipe, loading, error } = useApi<Recipe>(apiUrl);

  // torna a discover mantenendo ingredienti e index
  const handleBack = () => {
    if (ingredientsParam) {
      const params = new URLSearchParams();
      params.set('ingredients', ingredientsParam);
      if (indexParam) {
        params.set('index', indexParam);
      }
      navigate(`/discover?${params.toString()}`);
    } else {
      navigate(-1);
    }
  };

  if (loading) {
    return <div className="loading-text">Caricamento dettagli...</div>;
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-text">Errore: {error}</p>
        <button onClick={handleBack}>Torna indietro</button>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="error-container">
        <p>Ricetta non trovata</p>
        <button onClick={handleBack}>Torna indietro</button>
      </div>
    );
  }

  return (
    <div className="recipe-details-page">
      <DetailsModal 
        recipe={recipe}
        selectedIngredients={selectedIngredients}
        onClose={handleBack}
      />
    </div>
  );
}

export default RecipeDetails;
