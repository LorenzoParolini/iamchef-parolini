import DetailsModal from '../../components/details-modal/DetailsModal';
import type { RecipeDetailsProps } from '../../types';
import './RecipeDetails.css';

// pagina con i dettagli della ricetta
function RecipeDetails({ recipe, selectedIngredients, onBack, id }: RecipeDetailsProps) {
  
  return (
    <div className="recipe-details-page">
      <DetailsModal 
        recipe={recipe}
        selectedIngredients={selectedIngredients}
        onClose={() => onBack(id)}
      />
    </div>
  );
}

export default RecipeDetails;
