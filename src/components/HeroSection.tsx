
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 hero-gradient">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Transforme Aprendizado em Recompensas Reais
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Engaje seus alunos com um sistema de gamificação que premia esforço acadêmico com benefícios tangíveis, criando uma cultura de motivação e resultados.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white">
                Comece Agora
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-blue">
                Agende uma Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="relative w-40 h-40 md:w-64 md:h-64 animate-float">
                  <div className="absolute inset-0 rounded-full bg-brand-yellow opacity-20 animate-pulse-gentle"></div>
                  <div className="absolute inset-4 rounded-full bg-brand-yellow/80 flex items-center justify-center">
                    <span className="text-4xl md:text-6xl font-bold text-white">🪙</span>
                  </div>
                </div>
                <div className="absolute top-10 right-0 w-20 h-20 md:w-32 md:h-32 animate-float" style={{ animationDelay: "0.5s" }}>
                  <div className="absolute inset-0 rounded-full bg-brand-green opacity-20 animate-pulse-gentle"></div>
                  <div className="absolute inset-2 rounded-full bg-brand-green/80 flex items-center justify-center">
                    <span className="text-2xl md:text-4xl font-bold text-white">📚</span>
                  </div>
                </div>
                <div className="absolute bottom-10 left-0 w-24 h-24 md:w-36 md:h-36 animate-float" style={{ animationDelay: "1s" }}>
                  <div className="absolute inset-0 rounded-full bg-brand-blue opacity-20 animate-pulse-gentle"></div>
                  <div className="absolute inset-3 rounded-full bg-brand-blue/80 flex items-center justify-center">
                    <span className="text-3xl md:text-5xl font-bold text-white">🎮</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
