
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 bg-itus-blue">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Transforme a experiência dos seus alunos com gamificação educacional
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl/relaxed">
                A Itus conecta diversão, aprendizado e resultados. Leve inovação para sua escola com nossa plataforma gamificada.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-itus-green hover:bg-itus-green/90 text-white">
                Quero conhecer a solução
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="relative w-40 h-40 md:w-64 md:h-64 animate-float">
                  <div className="absolute inset-0 rounded-full bg-itus-green opacity-20 animate-pulse-gentle"></div>
                  <div className="absolute inset-4 rounded-full bg-itus-green/80 flex items-center justify-center">
                    <span className="text-4xl md:text-6xl font-bold text-white">🪙</span>
                  </div>
                </div>
                <div className="absolute top-10 right-0 w-20 h-20 md:w-32 md:h-32 animate-float" style={{ animationDelay: "0.5s" }}>
                  <div className="absolute inset-0 rounded-full bg-white opacity-20 animate-pulse-gentle"></div>
                  <div className="absolute inset-2 rounded-full bg-white/80 flex items-center justify-center">
                    <span className="text-2xl md:text-4xl font-bold text-itus-blue">📚</span>
                  </div>
                </div>
                <div className="absolute bottom-10 left-0 w-24 h-24 md:w-36 md:h-36 animate-float" style={{ animationDelay: "1s" }}>
                  <div className="absolute inset-0 rounded-full bg-itus-blue opacity-20 animate-pulse-gentle"></div>
                  <div className="absolute inset-3 rounded-full bg-itus-blue/80 flex items-center justify-center">
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
