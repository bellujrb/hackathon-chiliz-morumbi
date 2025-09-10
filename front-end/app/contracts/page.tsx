'use client';

import { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { SPFCTokenCard } from '@/components/contracts/SPFCTokenCard';
import { TorcidaCard } from '@/components/contracts/TorcidaCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Wallet, Coins, Users, AlertCircle, Loader2 } from 'lucide-react';

export default function ContractsPage() {
  const { address, isConnected } = useAccount();
  const [activeTab, setActiveTab] = useState('token');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-white flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <div className="flex items-center justify-center gap-2">
              <Loader2 className="h-6 w-6 animate-spin" />
              <p className="text-sm text-gray-600">Carregando...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-white flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <Wallet className="h-6 w-6 text-red-600" />
            </div>
            <CardTitle className="text-xl">Carteira Não Conectada</CardTitle>
            <CardDescription>
              Conecte sua carteira para interagir com os contratos SPFC
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-yellow-600" />
                <p className="text-sm text-yellow-800">
                  Você precisa conectar sua carteira para usar esta funcionalidade
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            Contratos SPFC
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Interaja com os contratos inteligentes do São Paulo Futebol Clube
          </p>
          <div className="flex justify-center gap-2">
            <Badge variant="outline" className="text-sm">
              Rede: Chiliz Testnet
            </Badge>
            <Badge variant="outline" className="text-sm">
              Endereço: {address?.slice(0, 6)}...{address?.slice(-4)}
            </Badge>
          </div>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="token" className="flex items-center gap-2">
              <Coins className="h-4 w-4" />
              SPFC Token
            </TabsTrigger>
            <TabsTrigger value="torcida" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Torcida Organizada
            </TabsTrigger>
          </TabsList>

          <TabsContent value="token" className="mt-6">
            <div className="flex justify-center">
              <SPFCTokenCard />
            </div>
          </TabsContent>

          <TabsContent value="torcida" className="mt-6">
            <div className="flex justify-center">
              <div className="w-full max-w-4xl">
                <TorcidaCard />
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Contract Info */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Informações dos Contratos</CardTitle>
            <CardDescription>
              Detalhes sobre os contratos deployados na Chiliz Testnet
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">SPFC Token</h3>
                <p className="text-sm text-gray-600">
                  Token ERC20 para torcidas organizadas do SPFC
                </p>
                <div className="space-y-1">
                  <p className="text-xs font-mono bg-gray-100 p-2 rounded">
                    Endereço: 0x1f7178b26a7bb14d4d15866d910fd0d1870acd78
                  </p>
                  <p className="text-xs text-gray-500">
                    Chain ID: 88882 (Chiliz Testnet)
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Torcida Organizada</h3>
                <p className="text-sm text-gray-600">
                  Contrato para gerenciar torcidas, eventos e votações
                </p>
                <div className="space-y-1">
                  <p className="text-xs font-mono bg-gray-100 p-2 rounded">
                    Endereço: 0xf9b689498a3ea34a2c9f9fda7a664a9e3017742a
                  </p>
                  <p className="text-xs text-gray-500">
                    Chain ID: 88882 (Chiliz Testnet)
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
