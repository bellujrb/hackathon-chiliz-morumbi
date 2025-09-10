'use client';

import React from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { Button } from '@/components/ui/button';
import { Wallet, LogOut } from 'lucide-react';

const TradingHeader: React.FC = () => {
  const { isConnected, address } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-gray-900">
              <span className="text-brand-500">Fanify</span> - Torcidas SPFC
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            {isConnected ? (
              <div className="flex items-center space-x-3">
                <div className="text-sm text-gray-600">
                  {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Conectado'}
                </div>
                <Button
                  onClick={() => disconnect()}
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-2"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Desconectar</span>
                </Button>
              </div>
            ) : (
              <Button
                onClick={() => connect({ connector: connectors[0] })}
                className="flex items-center space-x-2 bg-brand-500 hover:bg-brand-600"
              >
                <Wallet className="w-4 h-4" />
                <span>Conectar Carteira</span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingHeader;
