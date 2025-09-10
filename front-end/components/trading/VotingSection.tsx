'use client';

import React from 'react';
import { Torcida } from '@/types/torcida';

interface VotingSectionProps {
  selectedTorcida: string;
  torcidas: Torcida[];
}

const VotingSection: React.FC<VotingSectionProps> = ({ selectedTorcida, torcidas }) => {
  const torcida = selectedTorcida ? torcidas.find(t => t.id === selectedTorcida) : null;

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-black text-gray-900 mb-2">
          <span className="text-brand-500">Votação</span> da Torcida
        </h1>
        <p className="text-gray-600">
          Participe das decisões da sua torcida organizada
        </p>
      </div>
      
      {torcida ? (
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Enquetes Ativas - {torcida.shortName}
          </h3>
          
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-xl p-4">
              <h4 className="font-semibold text-gray-900 mb-2">
                Próximo evento da torcida
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                Onde devemos fazer a festa de fim de ano?
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm">Morumbi</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div className="bg-brand-500 h-2 rounded-full" style={{width: '65%'}}></div>
                    </div>
                    <span className="text-sm font-semibold">65%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm">CT do São Paulo</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div className="bg-gray-400 h-2 rounded-full" style={{width: '35%'}}></div>
                    </div>
                    <span className="text-sm font-semibold">35%</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">Termina em 2 dias</p>
            </div>
            
            <div className="border border-gray-200 rounded-xl p-4">
              <h4 className="font-semibold text-gray-900 mb-2">
                Design da nova camisa
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                Qual design você prefere para a camisa da torcida?
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm">Design Clássico</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div className="bg-brand-500 h-2 rounded-full" style={{width: '45%'}}></div>
                    </div>
                    <span className="text-sm font-semibold">45%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm">Design Moderno</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div className="bg-gray-400 h-2 rounded-full" style={{width: '55%'}}></div>
                    </div>
                    <span className="text-sm font-semibold">55%</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">Termina em 5 dias</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-6 py-4 rounded-xl text-center">
          <p className="font-medium">Selecione uma torcida para participar das votações</p>
        </div>
      )}
    </div>
  );
};

export default VotingSection;
