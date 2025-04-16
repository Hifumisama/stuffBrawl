import { monsTrucs } from '../data/monsTrucs';
import MonsTrucCard from './MonsTrucCard';

const MonsTrucGrid = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {monsTrucs.map((monsTrucs) => (
          <MonsTrucCard key={monsTrucs.id} monsTruc={monsTrucs} />
        ))}
      </div>
    </div>
  );
};

export default MonsTrucGrid; 