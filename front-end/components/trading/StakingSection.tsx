'use client';

import React from 'react';
import { Torcida } from '@/types/torcida';

interface StakingSectionProps {
  selectedTorcida: string;
  torcidas: Torcida[];
}

const StakingSection: React.FC<StakingSectionProps> = ({ selectedTorcida, torcidas }) => {
  if (!selectedTorcida) return null;

  const torcida = torcidas.find(t => t.id === selectedTorcida);

  if (!torcida) return null;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        Staking - {torcida.name}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Seus Benefícios</h4>
          <div className="space-y-2">
            {torcida.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Valor do Staking</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantidade (CHZ)
              </label>
              <input
                type="number"
                placeholder="Ex: 100"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              />
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex justify-between text-sm mb-2">
                <span>Financiamento para torcida:</span>
                <span className="font-semibold text-brand-600">85%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Taxa da plataforma:</span>
                <span className="font-semibold text-gray-600">15%</span>
              </div>
            </div>
            <button className="w-full bg-brand-500 text-white py-3 px-6 rounded-xl font-semibold hover:bg-brand-600 transition-colors">
              Fazer Staking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StakingSection;
