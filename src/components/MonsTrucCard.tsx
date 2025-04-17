'use client'

import { MonsTruc } from '../data/monsTrucs';
import { useState } from 'react';
import Image from 'next/image';

interface MonsTrucCardProps {
  monsTruc: MonsTruc;
}

const getRarityColor = (rarity: string) => {
  switch(rarity) {
    case 'légendaire': return 'bg-yellow-400 text-black';
    case 'épique': return 'bg-purple-500 text-white';
    case 'rare': return 'bg-blue-500 text-white';
    default: return 'bg-gray-400 text-white';
  }
};

const getTypeColor = (type: string) => {
  switch(type.toLowerCase()) {
    case 'feu': return 'bg-gradient-to-r from-red-500 to-orange-500 text-white';
    case 'glace': return 'bg-gradient-to-r from-blue-200 to-blue-300 text-black';
    case 'électrique': return 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black';
    case 'terre': return 'bg-gradient-to-r from-yellow-600 to-yellow-700 text-white';
    case 'plastique': return 'bg-gradient-to-r from-gray-300 to-gray-400 text-black';
    case 'acier': return 'bg-gradient-to-r from-gray-400 to-gray-500 text-black';
    case 'irrégulier': return 'bg-gradient-to-r from-purple-400 to-purple-500 text-white';
    case 'rangement': return 'bg-gradient-to-r from-indigo-400 to-indigo-500 text-white';
    case 'horrifique': return 'bg-gradient-to-r from-gray-800 to-black text-white';
    default: return 'bg-gradient-to-r from-gray-400 to-gray-500 text-white';
  }
};

const MonsTrucCard = ({ monsTruc }: MonsTrucCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="perspective-1000">
      <div 
        className={`relative w-72 h-[24rem] cursor-pointer transition-all duration-700 preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={handleClick}
      >
        {/* Face avant */}
        <div className={`absolute inset-0 w-full h-full bg-white text-black rounded-lg shadow-lg p-4 transition-opacity duration-700 ${
          isFlipped ? 'opacity-0' : 'opacity-100'
        }`}>
          <div className="relative w-full h-48 mb-2">
            <Image 
              src={imageError ? '/images/monstrucs/point d interrogation.jpg' : monsTruc.image}
              alt={monsTruc.name}
              className="object-contain"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={handleImageError}
              priority
            />
          </div>
          <h3 className="text-xl font-bold mb-1 text-black">{monsTruc.name}</h3>
          <div className="flex gap-2 mb-3">
            {monsTruc.types.map((type) => (
              <span 
                key={type}
                className={`
                  px-3 py-1 rounded-full text-sm font-medium
                  ${getTypeColor(type)}
                  shadow-sm hover:shadow-md transition-shadow duration-200
                  transform hover:scale-105 transition-transform duration-200
                `}
              >
                {type}
              </span>
            ))}
          </div>
          <div className="flex justify-center">
            <span className={`
              px-4 py-2 rounded-lg text-sm font-semibold
              ${getRarityColor(monsTruc.rarity)}
              shadow-md
            `}>
              {monsTruc.rarity.charAt(0).toUpperCase() + monsTruc.rarity.slice(1)}
            </span>
          </div>
        </div>

        {/* Face arrière */}
        <div className={`absolute inset-0 w-full h-full bg-white text-black rounded-lg shadow-lg p-4 [transform:rotateY(180deg)] transition-opacity duration-700 ${
          isFlipped ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-bold text-black">{monsTruc.name}</h3>
            <span className="text-sm font-semibold text-purple-600">{monsTruc.rarity}</span>
          </div>
          <p className="text-sm mb-3 text-black">{monsTruc.description}</p>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-black">❤️ HP</span>
              <div className="flex items-center">
                <div className="w-32 h-2 bg-gray-200 rounded mr-2">
                  <div 
                    className="h-full bg-red-500 rounded"
                    style={{ width: `${(monsTruc.stats.hp / 150) * 100}%` }}
                  />
                </div>
                <span className="w-8 text-right text-sm text-black">{monsTruc.stats.hp}</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-black">⚔️ Attaque</span>
              <div className="flex items-center">
                <div className="w-32 h-2 bg-gray-200 rounded mr-2">
                  <div 
                    className="h-full bg-orange-500 rounded"
                    style={{ width: `${(monsTruc.stats.attack / 100) * 100}%` }}
                  />
                </div>
                <span className="w-8 text-right text-sm text-black">{monsTruc.stats.attack}</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-black">🛡️ Défense</span>
              <div className="flex items-center">
                <div className="w-32 h-2 bg-gray-200 rounded mr-2">
                  <div 
                    className="h-full bg-blue-500 rounded"
                    style={{ width: `${(monsTruc.stats.defense / 100) * 100}%` }}
                  />
                </div>
                <span className="w-8 text-right text-sm text-black">{monsTruc.stats.defense}</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-black">💨 Vitesse</span>
              <div className="flex items-center">
                <div className="w-32 h-2 bg-gray-200 rounded mr-2">
                  <div 
                    className="h-full bg-green-500 rounded"
                    style={{ width: `${(monsTruc.stats.speed / 100) * 100}%` }}
                  />
                </div>
                <span className="w-8 text-right text-sm text-black">{monsTruc.stats.speed}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonsTrucCard; 