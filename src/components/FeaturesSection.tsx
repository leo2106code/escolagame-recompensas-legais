
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Coins, Gift, ShoppingCart, School } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      title: "Moeda Virtual Educativa",
      description: "Alunos ganham moedas virtuais ao completar tarefas, participar de aulas e atingir objetivos acadêmicos.",
      icon: Coins
    },
    {
      title: "Loja de Recompensas",
      description: "Produtos reais como material escolar, lanches, uniformes e vale-compras podem ser adquiridos com as moedas conquistadas.",
      icon: ShoppingCart
    },
    {
      title: "Acesso a Recursos Escolares",
      description: "Desbloqueia privilégios como uso da sala de informática, empréstimo de equipamentos esportivos e muito mais.",
      icon: School
    },
    {
      title: "Patrocínios e Parcerias",
      description: "Empresas locais podem oferecer produtos e serviços, expandindo as opções de recompensa e reduzindo custos.",
      icon: Gift
    }
  ];

  return (
    <section id="como-funciona" className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-brand-blue/10 px-3 py-1 text-sm text-brand-blue">
              Como Funciona
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Gamificação que gera resultados reais
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nossa plataforma transforma o engajamento escolar em uma experiência motivadora e recompensadora para todos os envolvidos.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-10">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover border-2 border-muted">
              <CardHeader className="pb-2">
                <div className="mb-4 rounded-lg bg-brand-blue/10 p-2 w-12 h-12 flex items-center justify-center">
                  <feature.icon className="h-7 w-7 text-brand-blue" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-500">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
