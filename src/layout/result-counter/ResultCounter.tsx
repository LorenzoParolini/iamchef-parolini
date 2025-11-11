import './ResultCounter.css'
import type { ResultCounterProps } from '../../types';

// DESIGN PATTERN: Presentational Component
// ResultCounter riceve il numero di ricette trovate tramite props
// Non calcola nulla, mostra solo il dato ricevuto

function ResultCounter({ count }: ResultCounterProps) {

  return (
    <div className="result-counter">
      <p className="result-text">Recipes Found →</p>
      <span className="counter">{count}</span>
    </div>
  );
}

export default ResultCounter;
