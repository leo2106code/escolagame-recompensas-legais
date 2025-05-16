
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, BadgeDollarSign, Sponsor } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = {
    schools: [
      "Aumento da frequência e participação nas aulas",
      "Melhoria do desempenho acadêmico geral",
      "Redução de problemas disciplinares",
      "Fortalecimento da comunidade escolar",
      "Dados valiosos sobre engajamento de alunos"
    ],
    students: [
      "Motivação tangível para se dedicar aos estudos",
      "Recompensas reais pelo esforço acadêmico",
      "Desenvolvimento de responsabilidade financeira",
      "Experiência prática com economia e escolhas",
      "Maior senso de pertencimento à escola"
    ],
    sponsors: [
      "Acesso direto a estudantes e famílias locais",
      "Associação da marca com educação e valores positivos",
      "Fidelização de clientes desde jovens",
      "Marketing direcionado e mensurável",
      "Responsabilidade social corporativa"
    ]
  };

  return (
    <section id="beneficios" className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-brand-yellow/10 px-3 py-1 text-sm text-brand-yellow">
              Benefícios
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Vantagens Para Todos
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nossa plataforma cria um ecossistema onde todos os envolvidos saem ganhando
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Card className="card-hover border-2 border-muted">
            <CardHeader className="pb-2">
              <div className="mb-4 rounded-lg bg-brand-blue/10 p-2 w-12 h-12 flex items-center justify-center">
                <School className="h-7 w-7 text-brand-blue" />
              </div>
              <CardTitle className="text-xl">Para as Escolas</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {benefits.schools.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2 text-brand-blue">✓</span>
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="card-hover border-2 border-muted">
            <CardHeader className="pb-2">
              <div className="mb-4 rounded-lg bg-brand-green/10 p-2 w-12 h-12 flex items-center justify-center">
                <Award className="h-7 w-7 text-brand-green" />
              </div>
              <CardTitle className="text-xl">Para os Alunos</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {benefits.students.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2 text-brand-green">✓</span>
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="card-hover border-2 border-muted">
            <CardHeader className="pb-2">
              <div className="mb-4 rounded-lg bg-brand-yellow/10 p-2 w-12 h-12 flex items-center justify-center">
                <Sponsor className="h-7 w-7 text-brand-yellow" />
              </div>
              <CardTitle className="text-xl">Para Patrocinadores</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {benefits.sponsors.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2 text-brand-yellow">✓</span>
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
