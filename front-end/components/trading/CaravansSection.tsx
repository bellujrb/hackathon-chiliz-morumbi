'use client';

import React from 'react';
import { Torcida } from '@/types/torcida';

interface CaravansSectionProps {
  selectedTorcida: string;
  torcidas: Torcida[];
}

const CaravansSection: React.FC<CaravansSectionProps> = ({ selectedTorcida, torcidas }) => {
  const torcida = selectedTorcida ? torcidas.find(t => t.id === selectedTorcida) : null;

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-black text-gray-900 mb-2">
          <span className="text-brand-500">Caravanas</span> para Jogos
        </h1>
        <p className="text-gray-600">
          Acompanhe as caravanas organizadas pelas torcidas
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Próximas Caravanas</h3>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-900">São Paulo x Palmeiras</h4>
                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">Confirmada</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">15/12/2024 - 16:00</p>
              <p className="text-sm text-gray-600 mb-3">Allianz Parque</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Participantes:</span>
                <span className="font-semibold">247 pessoas</span>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-900">São Paulo x Santos</h4>
                <span className="text-xs bg-yellow-100 text-yellow-600 px-2 py-1 rounded">Aguardando</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">22/12/2024 - 20:00</p>
              <p className="text-sm text-gray-600 mb-3">Morumbi</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Interessados:</span>
                <span className="font-semibold">89 pessoas</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Minhas Caravanas</h3>
          {torcida ? (
            <div className="space-y-4">
              <div className="bg-brand-50 rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-2">São Paulo x Palmeiras</h4>
                <p className="text-sm text-gray-600 mb-2">15/12/2024 - 16:00</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Status:</span>
                  <span className="font-semibold text-green-600">Confirmado</span>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">
              Conecte-se a uma torcida para ver suas caravanas
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaravansSection;
