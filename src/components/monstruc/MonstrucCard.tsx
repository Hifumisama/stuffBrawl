import Image from 'next/image';
import { MonsThing } from '@/data/monsTrucs';
import TypeBadge from './TypeBadge';
import styles from './MonsThingCard.module.css';
import { useRouter } from 'next/router';

interface MonstrucCardProps {
  monstruc: MonsThing;
  compact?: boolean;
}

export default function MonstrucCard({ monstruc, compact = false }: MonstrucCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/monsthing/${monstruc.id}`);
  };

  return (
    <div 
      className={`${styles.card} ${compact ? styles.compact : ''}`}
      onClick={handleClick}
    >
      <div className={`${styles.imageContainer} ${compact ? styles.compact : ''}`}>
        <Image
          src={monstruc.image}
          alt={monstruc.name}
          width={compact ? 100 : 300}
          height={compact ? 100 : 300}
          className={styles.image}
        />
      </div>
      
      <div className={`${styles.content} ${compact ? styles.compact : ''}`}>
        <h2 className={`${styles.name} ${compact ? styles.compact : ''}`}>
          {monstruc.name}
        </h2>
        
        <div className={`${styles.types} ${compact ? styles.compact : ''}`}>
          {monstruc.types.map(type => (
            <TypeBadge key={type} type={type} />
          ))}
        </div>

        {!compact && (
          <p className={styles.description}>
            {monstruc.description}
          </p>
        )}
      </div>
    </div>
  );
} 