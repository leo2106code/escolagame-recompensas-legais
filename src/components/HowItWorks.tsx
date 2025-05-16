
import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Conquiste Moedas",
      description: "Alunos ganham moedas por participação em aulas, entrega de trabalhos, bom desempenho e comportamento exemplar."
    },
    {
      number: "02",
      title: "Acesse a Loja Virtual",
      description: "Com as moedas acumuladas, os estudantes podem acessar uma loja exclusiva com produtos e benefícios."
    },
    {
      number: "03",
      title: "Escolha Recompensas",
      description: "Desde lanches e material escolar até privilégios especiais como acesso à recursos exclusivos da escola."
    },
    {
      number: "04",
      title: "Retire na Escola",
      description: "As recompensas físicas são entregues na própria instituição, e as experiências são agendadas conforme disponibilidade."
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-brand-green/10 px-3 py-1 text-sm text-brand-green">
              Passo a Passo
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Jornada do Aluno no Sistema
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Como os estudantes conquistam e utilizam as recompensas em nossa plataforma
            </p>
          </div>
        </div>
        
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue text-white">
                {step.number}
              </div>
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-6 hidden h-0.5 w-full bg-gradient-to-r from-brand-blue to-transparent md:block"></div>
              )}
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="mt-2 text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
