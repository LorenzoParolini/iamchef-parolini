import './InfoBadge.css'
import type { InfoBadgeProps } from '../../../types';

// badge con icona e valore
function InfoBadge({ icon, label, value }: InfoBadgeProps) {

  return (
    <div className="info-badge">
      <div className="info-badge-icon">{icon}</div>
      <div className="info-badge-content">
        <p className="info-badge-label">{label}</p>
        <span className="info-badge-value">{value}</span>
      </div>
    </div>
  );
}

export default InfoBadge;
