import './RecipeCard.css'

function RecipeCard() {

  return (
    <div className="recipe-card">

      <div className="heading">
        <h3>RecipeHeading</h3>
      </div>
      <div className="info-zone">
        <div>
          <div className="info-item">
            <p>Missed Ingredients</p>
            <span>{2}</span>
          </div>
          <div className="info-item">
            <p>RecipeLabel</p>
            <span>{0}</span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default RecipeCard;
