import './Badge.css'

// DESIGN PATTERN: Presentational Component
// Badge è un componente presentazionale puro: riceve dati e funzioni tramite props
// e mostra solo l'interfaccia

interface BadgeProps {
  name: string; // Nome dell'ingrediente da mostrare
  onRemove: () => void; // Funzione chiamata quando si clicca sul bottone X
}

function Badge({ name, onRemove }: BadgeProps) {

  return (
    <span className="badge">
      {name}
      <button onClick={onRemove}>×</button>
    </span>
  );
}

export default Badge;
