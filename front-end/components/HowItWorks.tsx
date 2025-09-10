'use client';

import React, { useState } from 'react';
import { 
  Twitter, 
  Brain, 
  Zap, 
  Trophy, 
  Coins, 
  TrendingUp, 
  ArrowRight, 
  ArrowLeft, 
  BarChart3, 
  Target, 
  Award, 
  Timer, 
  Users, 
  Star,
  Wallet,
  ArrowUpDown,
  DollarSign,
  Play,
  CheckCircle,
  Gift,
  MessageCircle,
  ShoppingBag,
  Bus,
  Vote,
  Calendar,
  Camera,
  RefreshCw,
  Heart
} from 'lucide-react';

const HowItWorks = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: "Conecte sua Carteira",
      subtitle: "Conecte sua carteira Web3 e escolha sua torcida organizada",
      icon: Wallet,
      content: {
        features: [
          {
            icon: Wallet,
            title: "Conecte sua Carteira",
            description: "Use MetaMask, Trust Wallet ou Socios.com para conectar"
          },
          {
            icon: Users,
            title: "Escolha sua Torcida",
            description: "Selecione a torcida organizada que você quer apoiar"
          }
        ],
        visual: "activation"
      }
    },
    {
      id: 2,
      title: "Faça Staking dos Tokens",
      subtitle: "Stake seus Fan Tokens para apoiar financeiramente sua torcida",
      icon: Coins,
      content: {
        features: [
          {
            icon: Coins,
            title: "Stake Fan Tokens",
            description: "Faça staking de CHZ ou Fan Tokens oficiais da sua torcida"
          },
          {
            icon: DollarSign,
            title: "Financiamento Automático",
            description: "Parte do valor staked vai diretamente para a torcida organizada"
          },
          {
            icon: BarChart3,
            title: "Transparência Total",
            description: "Acompanhe em tempo real como seu dinheiro está sendo usado"
          }
        ],
        visual: "sentiment"
      }
    },
    {
      id: 3,
      title: "Ganhe Badges e Status",
      subtitle: "Seu nível de staking determina seu status na torcida",
      icon: Award,
      content: {
        features: [
          {
            icon: Award,
            title: "Sistema de Badges",
            description: "Ganhe badges exclusivos baseados no valor e tempo de staking"
          },
          {
            icon: Star,
            title: "Ranking da Torcida",
            description: "Suba no ranking e ganhe visibilidade na comunidade"
          },
          {
            icon: Target,
            title: "Status VIP",
            description: "Acesse benefícios exclusivos conforme seu nível de engajamento"
          }
        ],
        visual: "hype"
      }
    },
    {
      id: 4,
      title: "Acesse Benefícios Exclusivos",
      subtitle: "Desfrute de vantagens únicas baseadas no seu nível de staking",
      icon: Gift,
      content: {
        features: [
          {
            icon: MessageCircle,
            title: "Chat Exclusivo",
            description: "Acesso a chat privado com membros da torcida organizada"
          },
          {
            icon: ShoppingBag,
            title: "Descontos em Produtos",
            description: "Descontos especiais em produtos oficiais da torcida"
          },
          {
            icon: Bus,
            title: "Caravanas para Jogos",
            description: "Acesso prioritário a caravanas organizadas para jogos"
          },
          {
            icon: Vote,
            title: "Direito de Voto",
            description: "Participe de enquetes e decisões internas da torcida"
          }
        ],
        visual: "management"
      }
    },
    {
      id: 5,
      title: "Eventos Exclusivos",
      subtitle: "Acesse eventos especiais e experiências únicas da torcida",
      icon: Calendar,
      content: {
        features: [
          {
            icon: Calendar,
            title: "Eventos da Torcida",
            description: "Acesso a eventos exclusivos organizados pela torcida"
          },
          {
            icon: Camera,
            title: "Experiências VIP",
            description: "Encontros com jogadores, visitas ao estádio e muito mais"
          },
          {
            icon: Users,
            title: "Comunidade Ativa",
            description: "Faça parte de uma comunidade engajada e apaixonada"
          }
        ],
        visual: "economics"
      }
    },
    {
      id: 6,
      title: "Ecossistema Sustentável",
      subtitle: "Crie um ciclo virtuoso de apoio e recompensas para a torcida",
      icon: RefreshCw,
      content: {
        features: [
          {
            icon: DollarSign,
            title: "Financiamento Transparente",
            description: "A torcida recebe financiamento transparente e recorrente"
          },
          {
            icon: Heart,
            title: "Engajamento Recompensado",
            description: "O torcedor se sente mais engajado e próximo da comunidade"
          },
          {
            icon: Zap,
            title: "Fan Token com Utilidade",
            description: "O Fan Token ganha utilidade prática além da especulação"
          }
        ],
        visual: "ranking"
      }
    }
  ];

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const goToStep = (index: number) => {
    setCurrentStep(index);
  };

  const renderVisual = (visual: string) => {
    switch (visual) {
      case "activation":
        return (
          <div className="space-y-6">
            {/* Wallet Connection Card */}
            <div className="bg-gradient-to-br from-brand-500 to-brand-600 rounded-3xl p-8 text-white shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
                    <Wallet className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold">Carteira Conectada</div>
                    <div className="text-sm opacity-90">MetaMask • Trust Wallet</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm opacity-90">Status</div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs bg-brand-600/30 rounded-full px-2 py-1">Conectado</span>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-brand-50 to-red-50 rounded-xl border-l-4 border-brand-500">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-brand-500 to-brand-600 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-brand-600">Torcida Escolhida</div>
                      <div className="text-sm text-gray-600">TUSP</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-brand-600">✓</div>
                    <div className="text-sm text-gray-600">Selecionada</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold">R$ 1.250</div>
                    <div className="text-sm opacity-90">Saldo CHZ</div>
                    <span className="text-brand-400">Pronto para staking</span>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold">0</div>
                    <div className="text-sm opacity-90">Valor Staked</div>
                    <span className="text-brand-400">Comece agora</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "sentiment":
        return (
          <div className="space-y-6">
            {/* Staking Dashboard */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-bold text-gray-900">Staking Ativo</h4>
                <Coins className="w-6 h-6 mr-2 text-brand-600" />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-brand-50 to-red-50 rounded-xl border border-brand-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Valor Staked</div>
                      <div className="text-sm text-gray-600">TUSP</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-brand-600">R$ 500</div>
                    <div className="text-sm text-gray-600">CHZ Tokens</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Financiamento para Torcida</span>
                    <span className="font-bold">R$ 425</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-brand-500 to-brand-600 h-3 rounded-full" style={{width: '85%'}}></div>
                  </div>
                  <div className="text-xs text-gray-500">85% vai para a torcida</div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Taxa da Plataforma</span>
                    <span className="font-bold">R$ 75</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-gray-400 to-gray-500 h-3 rounded-full" style={{width: '15%'}}></div>
                  </div>
                  <div className="text-xs text-gray-500">15% taxa operacional</div>
                </div>
              </div>
            </div>

            {/* Transparency Feed */}
            <div className="bg-gray-900 rounded-2xl p-4 text-green-400 font-mono text-xs">
              <div className="space-y-1">
                <div><span className="text-brand-400">"torcida"</span>: <span className="text-green-400">"TUSP"</span>,</div>
                <div><span className="text-brand-400">"staking"</span>: {`{`}</div>
                <div className="ml-4"><span className="text-brand-400">"valor"</span>: <span className="text-yellow-400">500</span>,</div>
                <div className="ml-4"><span className="text-brand-400">"financiamento"</span>: <span className="text-yellow-400">425</span>,</div>
                <div className="ml-4"><span className="text-brand-400">"taxa"</span>: <span className="text-yellow-400">75</span></div>
                <div>{`}`},</div>
                <div><span className="text-brand-400">"status"</span>: <span className="text-blue-400">"ativo"</span></div>
              </div>
            </div>
          </div>
        );

      case "hype":
        return (
          <div className="space-y-6">
            {/* Badge System Display */}
            <div className="bg-gradient-to-r from-brand-50 to-red-50 p-4 rounded-xl border border-brand-200">
              <div className="flex items-center space-x-3 mb-4">
                <Award className="w-6 h-6 text-brand-600" />
                <div>
                  <div className="font-bold text-gray-900">Sistema de Badges</div>
                  <div className="text-sm text-gray-600">Status na torcida</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-brand-600">🥉</div>
                  <div className="text-sm text-gray-600">Bronze</div>
                  <div className="text-xs text-gray-500">100+ SPFC staked</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-600">🥈</div>
                  <div className="text-sm text-gray-600">Prata</div>
                  <div className="text-xs text-gray-500">500+ SPFC staked</div>
                </div>
              </div>
            </div>

            {/* Ranking Display */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-4">Seu Status na Torcida</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-brand-50 to-red-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-brand-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      🥈
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Nível Prata</div>
                      <div className="text-sm text-gray-600">TUSP</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-brand-600">#47</div>
                    <div className="text-xs text-gray-500">ranking</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progresso para Ouro</span>
                    <span className="font-bold">60%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
                  <div className="text-xs text-gray-500">200 SPFC para próximo nível</div>
                </div>
              </div>
            </div>
          </div>
        );

      case "management":
        return (
          <div className="space-y-6">
            {/* Benefits Dashboard */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-3 mb-4">
                <Gift className="w-6 h-6 text-brand-600" />
                <div>
                  <div className="font-bold text-gray-900">Seus Benefícios</div>
                  <div className="text-sm text-gray-600">Nível Prata - TUSP</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-medium">Chat Exclusivo</span>
                  </div>
                  <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">Ativo</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <ShoppingBag className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-medium">Descontos 15%</span>
                  </div>
                  <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">Ativo</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Bus className="w-5 h-5 text-yellow-600" />
                    <span className="text-sm font-medium">Caravanas VIP</span>
                  </div>
                  <span className="text-xs bg-yellow-100 text-yellow-600 px-2 py-1 rounded">Próximo nível</span>
                </div>
              </div>
            </div>

            {/* Voting Rights */}
            <div className="bg-gradient-to-r from-brand-50 to-red-50 p-4 rounded-xl border border-brand-200">
              <h4 className="font-bold text-gray-900 mb-4">Direitos de Voto</h4>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-bold text-gray-900">Próximo Evento</div>
                      <div className="text-sm text-gray-600">Escolha do local da festa</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-brand-600">2 dias</div>
                      <div className="text-xs text-gray-600">para votar</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "economics":
        return (
          <div className="space-y-6">
            {/* Events Calendar */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-4">Próximos Eventos</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900">Festa da Torcida</div>
                    <div className="text-xs text-gray-600">15/12 - Morumbi</div>
                  </div>
                  <div className="text-xs mt-1 bg-green-100 text-green-600 px-2 py-1 rounded">Confirmado</div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900">Encontro com Jogadores</div>
                    <div className="text-xs text-gray-600">20/12 - CT do São Paulo</div>
                  </div>
                  <div className="text-xs mt-1 bg-blue-100 text-blue-600 px-2 py-1 rounded">VIP Only</div>
                </div>
              </div>
            </div>

            {/* Community Impact */}
            <div className="bg-brand-50 p-4 rounded-xl text-center border border-brand-200">
              <div className="w-12 h-12 bg-brand-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="font-bold text-brand-600">Comunidade Ativa</div>
              <div className="text-sm text-gray-600 mb-2">1.247 membros engajados</div>
              <div className="text-xs bg-brand-100 text-brand-600 px-2 py-1 rounded">Crescendo 15% ao mês</div>
            </div>
          </div>
        );

      case "ranking":
        return (
          <div className="space-y-6">
            {/* Ecosystem Benefits */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-4">Ecossistema Sustentável</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-brand-50 rounded-xl border border-green-100">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    💰
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900">Financiamento Transparente</div>
                    <div className="text-sm text-gray-600">R$ 2.5M+ arrecadados para torcidas</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-brand-50 rounded-xl border border-blue-100">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    ❤️
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900">Engajamento Recompensado</div>
                    <div className="text-sm text-gray-600">15K+ torcedores ativos e engajados</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-50 to-brand-50 rounded-xl border border-purple-100">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    ⚡
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900">Fan Token com Utilidade</div>
                    <div className="text-sm text-gray-600">Além da especulação, utilidade real</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="bg-gradient-to-r from-brand-600 to-brand-600 p-4 rounded-2xl text-white">
              <h5 className="font-bold mb-3 flex items-center">
                <Heart className="w-5 h-5 mr-2" />
                Impacto Real
              </h5>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Eventos Financiados:</span>
                    <span className="font-bold">47</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Materiais Produzidos:</span>
                    <span className="font-bold">156</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Caravanas Organizadas:</span>
                    <span className="font-bold">23</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Comunidades Ativas:</span>
                    <span className="font-bold">12</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 bg-white/20 rounded-lg p-3 text-center">
                <div className="text-sm font-medium">Crescimento Mensal</div>
                <div className="text-2xl font-bold">+25% novos stakers</div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-brand-50 border border-brand-200 rounded-full mb-8">
            <TrendingUp className="w-4 h-4 mr-2 text-brand-600" />
            <span className="text-brand-600 text-sm font-semibold">HOW IT WORKS</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Como Funciona o <span className="text-brand-500">Staking de Torcidas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Descubra como transformar seu apoio em financiamento real para sua torcida organizada 
            através do staking de Fan Tokens e benefícios exclusivos
          </p>
        </div>

        {/* Step Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-2 bg-white rounded-2xl p-2 shadow-lg border border-gray-100 overflow-x-auto">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <button
                  key={step.id}
                  onClick={() => goToStep(index)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 whitespace-nowrap ${
                    currentStep === index
                      ? 'bg-brand-500 text-white shadow-lg'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-brand-600'
                  }`}
                >
                  <StepIcon className="w-4 h-4" />
                  <span className="font-semibold hidden sm:block text-sm">{step.id}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevStep}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-brand-50 hover:text-brand-600 transition-all duration-200 hover:scale-110"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextStep}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-20 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-brand-50 hover:text-brand-600 transition-all duration-200 hover:scale-110"
          >
            <ArrowRight className="w-6 h-6" />
          </button>

          {/* Step Content */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0 min-h-[600px]">
              {/* Left Side - Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-8">
                  {/* Step Header */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-brand-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                        {React.createElement(steps[currentStep].icon, { className: "w-8 h-8" })}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-brand-600 mb-1">
                          STEP {steps[currentStep].id}
                        </div>
                        <h3 className="text-3xl font-black text-gray-900">
                          {steps[currentStep].title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600">
                      {steps[currentStep].subtitle}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-6">
                    {steps[currentStep].content.features.map((feature, index) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center mt-1 flex-shrink-0">
                            <FeatureIcon className="w-5 h-5 text-brand-600" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                            <p className="text-gray-600">{feature.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Side - Visual */}
              <div className="bg-gray-50 p-8 lg:p-12 flex items-center justify-center">
                <div className="w-full max-w-md">
                  {renderVisual(steps[currentStep].content.visual)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentStep === index ? 'bg-brand-500 w-8' : 'bg-gray-300 w-2'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;