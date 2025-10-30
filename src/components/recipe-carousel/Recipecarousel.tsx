import RecipeCard from './recipe-card/RecipeCard';
import './Recipecarousel.css'

function Recipecarousel() {

  return (
    <div className="recipe-carousel">
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
    </div>
  );
}

export default Recipecarousel;
