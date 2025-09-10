'use client';

import React, { useState } from 'react';
import NavigationTabs from '@/components/app/NavigationTabs';
import TradingHeader from '@/components/trading/TradingHeader';
import GeneralSection from '@/components/trading/GeneralSection';
import VotingSection from '@/components/trading/VotingSection';
import CaravansSection from '@/components/trading/CaravansSection';
import EventsSection from '@/components/trading/EventsSection';
import { useAccount } from 'wagmi';
import { Torcida } from '@/types/torcida';

export default function TradingApp() {
  const [selectedTorcida, setSelectedTorcida] = useState('');
  const [activeSection, setActiveSection] = useState('geral');
  const { isConnected } = useAccount();

  // Torcidas Organizadas do SPFC
  const torcidas: Torcida[] = [
    {
      id: 'tusp',
      name: 'Torcida Uniformizada do São Paulo',
      shortName: 'TUSP',
      description: 'A maior torcida organizada do São Paulo',
      members: 15000,
      totalStaked: 125000,
      benefits: ['Chat exclusivo', 'Descontos 20%', 'Caravanas VIP', 'Eventos especiais'],
      logo: '🔴'
    },
    {
      id: 'tti',
      name: 'Torcida Tricolor Independente',
      shortName: 'TTI',
      description: 'Torcida Independente do São Paulo',
      members: 8500,
      totalStaked: 75000,
      benefits: ['Chat exclusivo', 'Descontos 15%', 'Caravanas', 'Direito de voto'],
      logo: '⚪'
    },
    {
      id: 'real-tricolor',
      name: 'Torcida Real Tricolor',
      shortName: 'Real Tricolor',
      description: 'Torcida tradicional do São Paulo',
      members: 6200,
      totalStaked: 45000,
      benefits: ['Chat exclusivo', 'Descontos 10%', 'Eventos'],
      logo: '👑'
    },
    {
      id: 'dragao-real',
      name: 'Dragões da Real',
      shortName: 'Dragões',
      description: 'Torcida jovem e vibrante',
      members: 4200,
      totalStaked: 32000,
      benefits: ['Chat exclusivo', 'Descontos 10%', 'Eventos'],
      logo: '🐉'
    },
    {
      id: 'falange',
      name: 'Falange Tricolor',
      shortName: 'Falange',
      description: 'Torcida organizada tradicional',
      members: 3800,
      totalStaked: 28000,
      benefits: ['Chat exclusivo', 'Descontos 10%'],
      logo: '⚔️'
    },
    {
      id: 'implacaveis',
      name: 'Assoc. Torcida Organizada Os Implacáveis',
      shortName: 'Implacáveis',
      description: 'Torcida de Guarulhos',
      members: 2500,
      totalStaked: 18000,
      benefits: ['Chat exclusivo', 'Descontos 10%'],
      logo: '💪'
    }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'geral':
        return (
          <GeneralSection
            torcidas={torcidas}
            selectedTorcida={selectedTorcida}
            onTorcidaSelect={setSelectedTorcida}
          />
        );
      case 'votacao':
        return (
          <VotingSection
            selectedTorcida={selectedTorcida}
            torcidas={torcidas}
          />
        );
      case 'caravanas':
        return (
          <CaravansSection
            selectedTorcida={selectedTorcida}
            torcidas={torcidas}
          />
        );
      case 'eventos':
        return <EventsSection />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TradingHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <NavigationTabs
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
        {!isConnected ? (
          <div className="mb-6 flex items-center justify-center">
            <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-6 py-4 rounded-xl shadow text-center flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2.25m0 2.25h.008v.008H12v-.008zm.75-8.25a.75.75 0 00-1.5 0v.75a.75.75 0 001.5 0v-.75zm-6 6a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zm12 0a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zm-9.53 4.28a.75.75 0 00-1.06 1.06l.53.53a.75.75 0 001.06-1.06l-.53-.53zm10.06 0a.75.75 0 00-1.06 1.06l.53.53a.75.75 0 001.06-1.06l-.53-.53zM12 19.5a.75.75 0 00.75-.75v-.75a.75.75 0 00-1.5 0v.75a.75.75 0 00.75.75z" />
              </svg>
              <span className="font-medium">Conecte sua carteira para acessar esta seção.</span>
            </div>
          </div>
        ) : (
          renderContent()
        )}
      </div>
    </div>
  );
}