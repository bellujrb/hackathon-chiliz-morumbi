'use client';

import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, Twitter } from 'lucide-react';

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqItems = [
    {
      id: 1,
      question: "O que é o staking de Fan Tokens para torcidas?",
      answer:
        "É uma forma de apoiar financeiramente sua torcida organizada fazendo staking de Fan Tokens. Parte do valor staked vai diretamente para financiar eventos, materiais e atividades da torcida, enquanto você ganha benefícios exclusivos baseados no seu nível de engajamento.",
    },
    {
      id: 2,
      question: "Como funciona o financiamento da torcida?",
      answer:
        "Quando você faz staking de Fan Tokens, uma porcentagem do valor é automaticamente direcionada para a torcida organizada. Você pode acompanhar em tempo real como seu dinheiro está sendo usado para financiar eventos, materiais e atividades da comunidade.",
    },
    {
      id: 3,
      question: "Quais benefícios posso ganhar com o staking?",
      answer:
        "Os benefícios incluem: chat exclusivo com membros da torcida, descontos em produtos oficiais, acesso a caravanas para jogos, direito de voto em enquetes internas, entrada em eventos exclusivos, badges e status VIP baseados no seu nível de staking.",
    },
    {
      id: 4,
      question: "Preciso entender blockchain para usar?",
      answer:
        "Não! O sistema foi projetado para ser simples. Você pode conectar sua carteira MetaMask, Trust Wallet ou até mesmo sua conta Socios.com. Toda a tecnologia blockchain funciona nos bastidores - você só precisa escolher sua torcida e fazer staking.",
    },
    {
      id: 5,
      question: "Como funciona o sistema de badges e ranking?",
      answer:
        "Seu nível de staking determina seu status na torcida. Quanto mais você staka e por mais tempo, maior seu ranking e mais benefícios exclusivos você ganha. O sistema reconhece e recompensa o engajamento contínuo com a comunidade.",
    },
    {
      id: 6,
      question: "Posso retirar meus tokens a qualquer momento?",
      answer:
        "Sim, você tem controle total sobre seus tokens. Você pode fazer unstaking a qualquer momento, mas lembre-se que isso pode afetar seu status e benefícios na torcida. O staking de longo prazo oferece mais vantagens.",
    },
    {
      id: 7,
      question: "É seguro fazer staking?",
      answer:
        "Sim! Utilizamos contratos inteligentes auditados na Chiliz Chain, a mesma blockchain que suporta o Socios.com. Seus tokens ficam seguros e você mantém controle total sobre eles. A transparência é total - você pode ver exatamente como seu dinheiro está sendo usado.",
    },
    {
      id: 8,
      question: "Quais torcidas posso apoiar?",
      answer:
        "Você pode apoiar qualquer torcida organizada que esteja cadastrada na plataforma. Estamos constantemente expandindo para incluir mais torcidas de diferentes esportes e regiões. Cada torcida tem seus próprios benefícios e eventos exclusivos.",
    },
    {
      id: 9,
      question: "Como posso acompanhar o uso do meu financiamento?",
      answer:
        "A plataforma oferece transparência total. Você pode ver em tempo real como seu dinheiro está sendo usado, quais eventos foram financiados, e o impacto do seu apoio na comunidade. Relatórios detalhados são disponibilizados regularmente.",
    },
    {
      id: 10,
      question: "Como posso obter suporte?",
      answer:
        "Nossa equipe está disponível 24/7 através do Discord, chat ao vivo e Centro de Ajuda. Também fornecemos guias passo a passo e tutoriais para ajudá-lo a configurar, fazer staking e começar a apoiar sua torcida.",
    },
  ];  

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-brand-50 border border-brand-200 rounded-full mb-8">
            <HelpCircle className="w-4 h-4 mr-2 text-brand-600" />
            <span className="text-brand-600 text-sm font-semibold">SUPPORT</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-6">
            Perguntas <span className="text-brand-500">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tudo que você precisa saber sobre o staking de Fan Tokens para torcidas organizadas 
            e como estamos revolucionando o apoio às comunidades esportivas
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full text-left p-6 rounded-2xl flex justify-between items-center transition-colors group"
              >
                <h3 className="text-lg font-bold text-gray-900 pr-4 group-hover:text-brand-600 transition-colors">
                  {item.question}
                </h3>
                <div className={`flex-shrink-0 w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center transition-transform duration-300 ${
                  openItem === item.id ? 'rotate-45' : ''
                }`}>
                  {openItem === item.id ? (
                    <Minus className="w-4 h-4 text-white" />
                  ) : (
                    <Plus className="w-4 h-4 text-white" />
                  )}
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openItem === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <div className="w-full h-px bg-gray-200 mb-4"></div>
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
            <h3 className="text-2xl font-black text-gray-900 mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe está aqui para ajudá-lo a começar a apoiar sua torcida
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-brand-500 text-white rounded-2xl font-bold hover:bg-brand-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Falar com Suporte
              </button>
              <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-2xl font-bold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300">
                Ver Documentação
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;