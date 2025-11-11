import './RecipeSteps.css'
import type { RecipeStepsProps } from '../../../types';

// mostra passi di preparazione ricetta

function RecipeSteps({ instructions, simpleInstructions }: RecipeStepsProps) {

  // se ci sono istruzioni strutturate
  if (instructions && instructions.length > 0) {
    return (
      <div className="recipe-steps">
        <h3>Preparazione</h3>
        {instructions.map((instruction, idx) => (
          <div key={idx} className="instruction-group">
            {instruction.name && <h4>{instruction.name}</h4>}
            <ol className="steps-list">
              {instruction.steps.map((step) => (
                <li key={step.number} className="step-item">
                  <span className="step-number">{step.number}</span>
                  <p className="step-text">{step.step}</p>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    );
  }

  // altrimenti se ci sono istruzioni semplici
  if (simpleInstructions) {
    return (
      <div className="recipe-steps">
        <h3>Preparazione</h3>
        <p className="simple-instructions">{simpleInstructions}</p>
      </div>
    );
  }

  // se non ci sono istruzioni
  return (
    <div className="recipe-steps">
      <h3>Preparazione</h3>
      <p>istruzioni non disponibili</p>
    </div>
  );
}

export default RecipeSteps;
