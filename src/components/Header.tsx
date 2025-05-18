
import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-itus-blue/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/776fd82f-fe96-4179-b5be-c0553eb882be.png" 
            alt="Itus Logo" 
            className="h-10 w-auto"
          />
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#beneficios" className="text-sm font-medium text-white hover:text-opacity-80 transition-colors">Benefícios</a>
          <a href="#como-funciona" className="text-sm font-medium text-white hover:text-opacity-80 transition-colors">Como Funciona</a>
          <a href="#depoimentos" className="text-sm font-medium text-white hover:text-opacity-80 transition-colors">Depoimentos</a>
          <a href="#faq" className="text-sm font-medium text-white hover:text-opacity-80 transition-colors">Dúvidas</a>
        </nav>
        <div className="flex items-center gap-4">
          <Button className="bg-itus-green hover:bg-itus-green/90 text-white">Quero conhecer a solução</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
