'use client';

import React from 'react';
import { Instagram, Twitter, Youtube, Globe, Mail, MapPin } from 'lucide-react';
import ChilizLogo from './ChilizLogo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <span className="text-3xl font-black text-white">
                SPFC Fanify
              </span>
              <div className="text-sm text-gray-400 font-medium ml-2">
                by Chiliz
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              A primeira plataforma de stake de tokens SPFC para torcida organizada. 
              Conecte-se com outros tricolores, faça stake dos seus tokens e ganhe 
              recompensas exclusivas baseadas no desempenho do time.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-brand-500 hover:text-white transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-brand-500 hover:text-white transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-brand-500 hover:text-white transition-all duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-brand-500 hover:text-white transition-all duration-300"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* SPFC Features */}
          <div>
            <h3 className="font-bold text-white mb-6">SPFC Features</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-red-400 transition-colors duration-200">
                  Stake SPFC Tokens
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-red-400 transition-colors duration-200">
                  Torcida Organizada
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-red-400 transition-colors duration-200">
                  Predições de Jogos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-red-400 transition-colors duration-200">
                  Recompensas Exclusivas
                </a>
              </li>
            </ul>
          </div>

          {/* SPFC Community */}
          <div>
            <h3 className="font-bold text-white mb-6">Comunidade SPFC</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-red-400 transition-colors duration-200">
                  Sobre o Projeto
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-red-400 transition-colors duration-200">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-red-400 transition-colors duration-200">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-red-400 transition-colors duration-200">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* SPFC Stats Section */}
        <div className="border-t border-gray-800 mt-12 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-black text-white mb-2">20M+</div>
              <div className="text-gray-400">Tricolores no Brasil</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-white mb-2">85%</div>
              <div className="text-gray-400">Torcedores Ativos Online</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-white mb-2">R$ 50M+</div>
              <div className="text-gray-400">Mercado de Tokens SPFC</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-white mb-2">100+</div>
              <div className="text-gray-400">Torcidas Organizadas</div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 SPFC Fanify. Todos os direitos reservados.
            </div>
            
            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm text-gray-400 mb-4 md:mb-0">
              <a href="#" className="hover:text-red-400 transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-red-400 transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-red-400 transition-colors">Política de Cookies</a>
            </div>
            
            {/* Powered by Chiliz */}
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Powered by</span>
              <ChilizLogo size="sm" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;