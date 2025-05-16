
import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-brand-blue">EduCoins</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#como-funciona" className="text-sm font-medium text-gray-700 hover:text-brand-blue transition-colors">Como Funciona</a>
          <a href="#beneficios" className="text-sm font-medium text-gray-700 hover:text-brand-blue transition-colors">Benefícios</a>
          <a href="#patrocinadores" className="text-sm font-medium text-gray-700 hover:text-brand-blue transition-colors">Patrocinadores</a>
          <a href="#depoimentos" className="text-sm font-medium text-gray-700 hover:text-brand-blue transition-colors">Depoimentos</a>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:inline-flex">Entrar</Button>
          <Button className="bg-brand-blue hover:bg-brand-blue/90">Agendar Demo</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
