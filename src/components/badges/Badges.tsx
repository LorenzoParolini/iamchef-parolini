import Badge from './badge/Badge';
import './Badges.css'
import type { BadgesProps } from '../../types';

function Badges({ ingredients, onRemoveIngredient }: BadgesProps) {

  return (
    <div className="badges">
      <ul>
        {ingredients.map((ingredient, index) => (
          <Badge 
            key={index} 
            name={ingredient} 
            onRemove={() => onRemoveIngredient(ingredient)} 
          />
        ))}
      </ul>
    </div>
  );
}


export default Badges;
