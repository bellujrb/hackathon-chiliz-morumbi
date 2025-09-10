'use client';

import React from 'react';

const EventsSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-black text-gray-900 mb-2">
          <span className="text-brand-500">Eventos</span> Exclusivos
        </h1>
        <p className="text-gray-600">
          Participe de eventos especiais das torcidas organizadas
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="text-center mb-4">
            <div className="w-16 h-16 bg-brand-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl text-white">🎉</span>
            </div>
            <h3 className="font-bold text-gray-900">Festa de Fim de Ano</h3>
            <p className="text-sm text-gray-600">Morumbi</p>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Data:</span>
              <span className="font-semibold">28/12/2024</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Horário:</span>
              <span className="font-semibold">20:00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Participantes:</span>
              <span className="font-semibold">500 pessoas</span>
            </div>
          </div>
          <button className="w-full mt-4 bg-brand-500 text-white py-2 px-4 rounded-xl font-semibold hover:bg-brand-600 transition-colors">
            Participar
          </button>
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="text-center mb-4">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl text-white">⚽</span>
            </div>
            <h3 className="font-bold text-gray-900">Encontro com Jogadores</h3>
            <p className="text-sm text-gray-600">CT do São Paulo</p>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Data:</span>
              <span className="font-semibold">20/12/2024</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Horário:</span>
              <span className="font-semibold">14:00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Vagas:</span>
              <span className="font-semibold">50 pessoas</span>
            </div>
          </div>
          <button className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-xl font-semibold hover:bg-blue-600 transition-colors">
            Participar
          </button>
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="text-center mb-4">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl text-white">🎨</span>
            </div>
            <h3 className="font-bold text-gray-900">Workshop de Bandeiras</h3>
            <p className="text-sm text-gray-600">Sede da Torcida</p>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Data:</span>
              <span className="font-semibold">18/12/2024</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Horário:</span>
              <span className="font-semibold">10:00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Vagas:</span>
              <span className="font-semibold">30 pessoas</span>
            </div>
          </div>
          <button className="w-full mt-4 bg-green-500 text-white py-2 px-4 rounded-xl font-semibold hover:bg-green-600 transition-colors">
            Participar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventsSection;
