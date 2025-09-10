'use client';

import React from 'react';
import { Torcida } from '@/types/torcida';

interface TorcidaCardProps {
  torcida: Torcida;
  isSelected: boolean;
  onSelect: (torcidaId: string) => void;
}

const TorcidaCard: React.FC<TorcidaCardProps> = ({ torcida, isSelected, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(torcida.id)}
      className={`bg-white rounded-2xl p-6 shadow-lg border-2 cursor-pointer transition-all duration-300 hover:shadow-xl ${
        isSelected 
          ? 'border-brand-500 bg-brand-50' 
          : 'border-gray-100 hover:border-brand-200'
      }`}
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="text-4xl">{torcida.logo}</div>
        <div>
          <h3 className="font-bold text-gray-900 text-lg">{torcida.shortName}</h3>
          <p className="text-sm text-gray-600">{torcida.name}</p>
        </div>
      </div>
      
      <p className="text-gray-600 text-sm mb-4">{torcida.description}</p>
      
      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Membros:</span>
          <span className="font-semibold">{torcida.members.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Total Staked:</span>
          <span className="font-semibold text-brand-600">{torcida.totalStaked.toLocaleString()} SPFC</span>
        </div>
      </div>
      
      <div className="space-y-1">
        <p className="text-xs font-semibold text-gray-700 mb-2">Benefícios:</p>
        {torcida.benefits.map((benefit, index) => (
          <div key={index} className="flex items-center space-x-2 text-xs text-gray-600">
            <div className="w-1 h-1 bg-brand-500 rounded-full"></div>
            <span>{benefit}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TorcidaCard;
