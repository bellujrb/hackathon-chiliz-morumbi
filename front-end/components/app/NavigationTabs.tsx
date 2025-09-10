'use client';

import React from 'react';
import { 
  Users,
  Vote,
  Bus,
  Calendar
} from 'lucide-react';

interface NavigationTabsProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

const NavigationTabs: React.FC<NavigationTabsProps> = ({
  activeSection,
  onSectionChange
}) => {
  const navigationSections = [
    {
      id: 'geral',
      label: 'Geral',
      icon: Users,
      color: 'text-brand-600',
    },
    {
      id: 'votacao',
      label: 'Votação',
      icon: Vote,
      color: 'text-purple-600',
    },
    {
      id: 'caravanas',
      label: 'Caravanas',
      icon: Bus,
      color: 'text-blue-600',
    },
    {
      id: 'eventos',
      label: 'Eventos',
      icon: Calendar,
      color: 'text-green-600',
    },
  ];

  return (
    <div className="mb-8">
      <div className="flex items-center space-x-1 bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
        {navigationSections.map((section) => {
          const IconComponent = section.icon;
          return (
            <button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 flex-1 justify-center ${
                activeSection === section.id
                  ? 'bg-brand-500 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-brand-600'
              }`}
            >
              <IconComponent className="w-5 h-5" />
              <span className="font-semibold text-sm">{section.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default NavigationTabs;