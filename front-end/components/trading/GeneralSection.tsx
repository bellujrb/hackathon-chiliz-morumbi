'use client';

import React from 'react';
import { Torcida } from '@/types/torcida';
import TorcidaCard from './TorcidaCard';
import StakingSection from './StakingSection';

interface GeneralSectionProps {
  torcidas: Torcida[];
  selectedTorcida: string;
  onTorcidaSelect: (torcidaId: string) => void;
}

const GeneralSection: React.FC<GeneralSectionProps> = ({ 
  torcidas, 
  selectedTorcida, 
  onTorcidaSelect 
}) => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-black text-gray-900 mb-2">
          Torcidas Organizadas do <span className="text-brand-500">São Paulo</span>
        </h1>
        <p className="text-gray-600">
          Escolha uma torcida para fazer staking e apoiar sua comunidade
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {torcidas.map((torcida) => (
          <TorcidaCard
            key={torcida.id}
            torcida={torcida}
            isSelected={selectedTorcida === torcida.id}
            onSelect={onTorcidaSelect}
          />
        ))}
      </div>
      
      <StakingSection
        selectedTorcida={selectedTorcida}
        torcidas={torcidas}
      />
    </div>
  );
};

export default GeneralSection;
