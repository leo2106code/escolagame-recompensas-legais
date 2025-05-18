
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, BookOpen, GraduationCap, LineChart, Users, Gamepad, Computer, Basketball } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Engajamento dos alunos",
      description: "Sistema de moedas digitais que motiva participação e incentiva o aprendizado ativo dos estudantes, reduzindo a evasão escolar.",
      icon: <BookOpen className="h-7 w-7 text-itus-green" />
    },
    {
      title: "Recursos da escola gamificados",
      description: "Transforme quadras, laboratórios de informática e outros espaços em recompensas, incentivando o bom desempenho acadêmico.",
      icon: <Basketball className="h-7 w-7 text-itus-green" />
    },
    {
      title: "Recompensas pedagógicas",
      description: "Produtos, experiências e benefícios educacionais que reforçam comportamentos positivos e aumentam a renovação de matrículas.",
      icon: <GraduationCap className="h-7 w-7 text-itus-green" />
    },
    {
      title: "Dados e relatórios",
      description: "Painel completo com métricas de desempenho e engajamento para gestores escolares acompanharem o progresso dos alunos.",
      icon: <BarChart3 className="h-7 w-7 text-itus-green" />
    },
    {
      title: "Cashback educacional",
      description: "Modelo sustentável que gera retorno financeiro para a escola através de parcerias com empresas locais.",
      icon: <LineChart className="h-7 w-7 text-itus-green" />
    },
    {
      title: "Benefícios para os pais",
      description: "Maior engajamento dos filhos com os estudos e acompanhamento do desempenho escolar de forma transparente.",
      icon: <Users className="h-7 w-7 text-itus-green" />
    }
  ];

  return (
    <section id="beneficios" className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-itus-green/10 px-3 py-1 text-sm text-itus-green">
              Benefícios
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-itus-blue">
              Por que escolher a Itus?
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nossa plataforma oferece benefícios comprovados para toda a comunidade escolar: instituição, professores, alunos e pais
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card key={index} className="card-hover border-2 border-muted">
              <CardHeader className="pb-2">
                <div className="mb-4 rounded-lg bg-itus-green/10 p-2 w-12 h-12 flex items-center justify-center">
                  {benefit.icon}
                </div>
                <CardTitle className="text-xl text-itus-blue">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
