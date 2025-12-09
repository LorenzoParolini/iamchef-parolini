import DetailsModal from '../../components/details-modal/DetailsModal';
import type { RecipeDetailsProps } from '../../types';
import './RecipeDetails.css';

//TODO: rimuovere prop recipe, caricarla con loader react router o useApi usando useParams per prendere l'id
//TODO: leggere l'id della ricetta da useParams invece che da props
//TODO: rimuovere selectedIngredients, leggerli dalla query string o dallo state della navigazione
//TODO: rimuovere onBack, usare navigate(-1) per tornare indietro

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
