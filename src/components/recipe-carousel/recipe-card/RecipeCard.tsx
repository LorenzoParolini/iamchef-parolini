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
            <p>Missed Ingredients</p>
            <span>{missedCount}</span>
          </div>
          <div className="info-item">
            <p>Ready in</p>
            <span>{recipe.readyInMinutes ? `${recipe.readyInMinutes} min` : 'N/A'}</span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default RecipeCard;
