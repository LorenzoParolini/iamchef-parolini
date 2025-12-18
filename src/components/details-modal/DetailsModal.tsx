import './DetailsModal.css'
import type { DetailsModalProps } from '../../types';
import InfoBadge from './info-badge/InfoBadge';
import MissedIngredients from './missed-ingredients/MissedIngredients';
import { getDifficulty, formatPrice } from '../../utils/recipe-details-utils';
function DetailsModal({ recipe, selectedIngredients, onClose }: DetailsModalProps) {

  // ingredienti che mancano
  const missedIngredients = recipe.extendedIngredients.filter(ingredient => 
    !selectedIngredients.some(selected => 
      ingredient.name.toLowerCase().includes(selected.toLowerCase())
    )
  );

  const difficulty = getDifficulty(recipe.readyInMinutes);
  const priceFormatted = formatPrice(recipe.pricePerServing);

  // chiudi se clicchi fuori
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
              value={recipe.readyInMinutes ? `${recipe.readyInMinutes} min` : 'N/A'} 
            />
            <InfoBadge 
              icon="🍽️" 
              label="Servings" 
              value={`x${recipe.servings}`} 
            />
            <InfoBadge 
              icon="💵" 
              label="Cost" 
              value={priceFormatted}
            />
            <InfoBadge 
              icon="📊" 
              label="Difficulty" 
              value={difficulty}
            />
          </div>

          <div className="recipe-tags">
            {recipe.dishTypes.map((type, idx) => (
              <span key={idx} className="tag">{type}</span>
            ))}
            {recipe.vegetarian && <span className="tag">Vegetarian</span>}
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
