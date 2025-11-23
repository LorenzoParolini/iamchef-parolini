import './MissedIngredients.css'
import type { MissedIngredientsProps } from '../../../types';

function MissedIngredients({ ingredients }: MissedIngredientsProps) {

  if (ingredients.length === 0) {
    return (
      <div className="missed-ingredients">
        <h3>Ingredienti Mancanti</h3>
        <p className="all-ingredients-available">✅ hai tutti gli ingredienti</p>
      </div>
    );
  }

  return (
    <div className="missed-ingredients">
      <h3>Ingredienti Mancanti ({ingredients.length})</h3>
      <ul className="ingredients-list">
        {ingredients.map((ingredient) => (
          <li key={ingredient.id} className="ingredient-item">
            <span className="ingredient-amount">
              {ingredient.amount} {ingredient.unit}
            </span>
            <span className="ingredient-name">{ingredient.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MissedIngredients;
