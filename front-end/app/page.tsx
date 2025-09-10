'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import HowItWorks from '@/components/HowItWorks';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Coins, Users, ExternalLink } from 'lucide-react';
import deployedContracts from '@/lib/deployedContracts';

export default function Home() {

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <HowItWorks />
      
      {/* Smart Contracts Section */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Contratos Inteligentes SPFC
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Interaja diretamente com os contratos deployados na Chiliz Testnet
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <Coins className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <CardTitle>SPFC Token</CardTitle>
                    <CardDescription>
                      Token ERC20 para torcidas organizadas
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Rede:</span>
                    <Badge variant="secondary">Chiliz Testnet</Badge>
                  </div>
                  <p className="text-sm text-gray-500">
                    Transfira, aprove e faça mint de tokens SPFC
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle>Torcida Organizada</CardTitle>
                    <CardDescription>
                      Gerencie torcidas, eventos e votações
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Rede:</span>
                    <Badge variant="secondary">Chiliz Testnet</Badge>
                  </div>
                  <p className="text-sm text-gray-500">
                    Crie torcidas, organize eventos e gerencie votações
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/contracts">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                <ExternalLink className="mr-2 h-5 w-5" />
                Interagir com Contratos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
    </main>
  );
}