import './DetailsModal.css'
import type { Recipe } from '../../service/apiType';
import InfoBadge from './info-badge/InfoBadge';
import MissedIngredients from './missed-ingredients/MissedIngredients';

// modal per dettagli completi ricetta
// appare quando clicchi su una card

interface DetailsModalProps {
  recipe: Recipe;
  selectedIngredients: string[];
  onClose: () => void;
}

function DetailsModal({ recipe, selectedIngredients, onClose }: DetailsModalProps) {

  // calcoliamo ingredienti mancanti
  const missedIngredients = recipe.extendedIngredients.filter(ingredient => 
    !selectedIngredients.some(selected => 
      ingredient.name.toLowerCase().includes(selected.toLowerCase())
    )
  );

  

  // chiudi modal se clicchi sullo sfondo
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <div 
          className="modal-image"
          style={{
            backgroundImage: `url(${recipe.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="modal-image-overlay">
            <h2>{recipe.title}</h2>
          </div>
        </div>

        <div className="modal-body">
          
          <div className="info-badges-grid">
            <InfoBadge 
              icon="⏱️" 
              label="Ready in" 
              value={`${recipe.readyInMinutes} min`} 
            />
            <InfoBadge 
              icon="🍽️" 
              label="Servings" 
              value={`x${recipe.servings}`} 
            />
            <InfoBadge 
              icon="💵" 
              label="Cost" 
              value={`${recipe.pricePerServing.toFixed(2)} $`}
            />
            <InfoBadge 
              icon="🔥" 
              label="Calories" 
              value={recipe.nutrition?.nutrients.find(n => n.name === 'Calories')?.amount || '650 kcal'} 
            />
          </div>

          <div className="recipe-tags">
            {recipe.dishTypes.map((type, idx) => (
              <span key={idx} className="tag">{type}</span>
            ))}
            {recipe.vegetarian && <span className="tag">Primo</span>}
            {recipe.cuisines.map((cuisine, idx) => (
              <span key={idx} className="tag">{cuisine}</span>
            ))}
          </div>

          <MissedIngredients ingredients={missedIngredients} />

        </div>

      </div>
    </div>
  );
}

export default DetailsModal;
