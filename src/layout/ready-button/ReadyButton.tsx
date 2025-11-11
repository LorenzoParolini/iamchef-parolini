import './ReadyButton.css'
import type { ReadyButtonProps } from '../../types';

// DESIGN PATTERN: Presentational Component
// ReadyButton riceve la funzione onClick dal padre e la esegue quando viene cliccato

function ReadyButton({ onClick }: ReadyButtonProps) {

  return (
    <button className="ready-button" onClick={onClick}>
      <img src="./src/assets/ready-icon.svg" alt="icon" />
      <img src="./src/assets/ready-text.svg" alt="text" />
    </button>
  );
}

export default ReadyButton;
