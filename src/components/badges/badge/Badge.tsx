import './Badge.css'
import type { BadgeProps } from '../../../types';

// DESIGN PATTERN: Presentational Component
// Badge è un componente presentazionale puro: riceve dati e funzioni tramite props
// e mostra solo l'interfaccia

function Badge({ name, onRemove }: BadgeProps) {

  return (
    <span className="badge">
      {name}
      <button onClick={onRemove}>×</button>
    </span>
  );
}

export default Badge;
