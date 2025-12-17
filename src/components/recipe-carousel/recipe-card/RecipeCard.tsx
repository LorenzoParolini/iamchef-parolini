import './RecipeCard.css'
import type { RecipeCardProps } from '../../../types';

function RecipeCard({ recipe, onClick }: RecipeCardProps) {

  const missedCount = recipe.missedIngredientCount;

  return (
    <div 
      className="recipe-card"
      onClick={onClick}
      style={{
        backgroundImage: `url(${recipe.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >

      <div className="heading">
        <h3>{recipe.title}</h3>
      </div>
      
      <div className="info-zone">
        <div>
          <div className="info-item">
            <div className="missed-ingredients">
              <span className="count-circle">{missedCount}</span>
              <p>Missed Ingredients</p>
            </div>
            <div className="ready-in-minutes">
              <span className="count-circle">
                {recipe.readyInMinutes || 'N/A'}
              </span>
              <p>minutes</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default RecipeCard;
