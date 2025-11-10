import Badge from './badge/Badge';
import './Badges.css'

// badges riceve ingredienti e funzione per rimuoverli
// non gestisce stato proprio

interface BadgesProps {
  ingredients: string[];
  onRemoveIngredient: (ingredient: string) => void;
}

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
