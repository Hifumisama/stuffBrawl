import { MonsThingType } from '@/data/monsTrucs';
import styles from './TypeBadge.module.css';

interface TypeBadgeProps {
  type: MonsThingType;
}

const typeColors: Record<MonsThingType, string> = {
  feu: '#FF6B6B',
  glace: '#4ECDC4',
  électrique: '#FFD93D',
  terre: '#A67C52',
  plastique: '#95A5A6',
  acier: '#7F8C8D',
  irrégulier: '#9B59B6',
  rangement: '#3498DB',
  horrifique: '#E74C3C'
};

const typeIcons: Record<MonsThingType, string> = {
  feu: '🔥',
  glace: '❄️',
  électrique: '⚡',
  terre: '🌍',
  plastique: '🔄',
  acier: '⚙️',
  irrégulier: '🌀',
  rangement: '📦',
  horrifique: '👻'
};

export default function TypeBadge({ type }: TypeBadgeProps) {
  return (
    <span 
      className={styles.badge}
      style={{ 
        backgroundColor: typeColors[type],
        boxShadow: `0 0 10px ${typeColors[type]}`
      }}
    >
      {typeIcons[type]} {type}
    </span>
  );
} 