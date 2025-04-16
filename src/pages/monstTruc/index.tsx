import { GetStaticProps } from 'next';
import { MonsTruc } from '@/data/monsTrucs';
import styles from './index.module.css';
import MonstrucCard from '@/components/monstruc/MonstrucCard';

interface MonstrucsListProps {
  monstrucs: MonsTruc[];
}

export default function MonstrucsList({ monstrucs }: MonstrucsListProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Liste des Monstrucs</h1>
      <div className={styles.grid}>
        {monstrucs.map(monstruc => (
          <MonstrucCard
            key={monstruc.id} 
            monstruc={monstruc} 
            compact={true}
          />
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // Dans un cas réel, on récupérerait les données depuis une API ou une base de données
  const monstrucs = require('@/data/monsTruc').default;
  
  return {
    props: {
      monstrucs,
    },
  };
}; 